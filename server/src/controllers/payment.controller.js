import crypto from "crypto";
import Request from "../models/request.model.js";
import Inventory from "../models/inventory.model.js";
import User from "../models/user.model.js";

import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import sendEmail from "../utils/sendEmail.js";
import razorpay from "../utils/razorpay.js";

import { REQUEST_STATUS } from "../constants/index.js";
import { paymentSuccessEmail } from "../templates/emailTemplate.js";

const createOrder = asyncHandler(async (req, res) => {
  const request = await Request.findById(req.params.id);

  if (!request) {
    throw new ApiError(404, "Blood request not found");
  }

  if (request.status !== REQUEST_STATUS.PAYMENT_PENDING) {
    throw new ApiError(400, "Only approved requests can proceed to payment");
  }

  const options = {
    amount: request.processingFee * 100,
    currency: "INR",
    receipt: `request_${request._id}`,
  };

  const order = await razorpay.orders.create(options);

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        order,
        key: process.env.RAZORPAY_KEY_ID,
      },
      "Payment order created successfully",
    ),
  );
});

const verifyPayment = asyncHandler(async (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    requestId,
  } = req.body;

  if (
    !razorpay_order_id ||
    !razorpay_payment_id ||
    !razorpay_signature ||
    !requestId
  ) {
    throw new ApiError(400, "Payment details are required");
  }

  // Generate signature
  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest("hex");

  // Verify signature
  if (expectedSignature !== razorpay_signature) {
    throw new ApiError(400, "Invalid payment signature");
  }

  const request = await Request.findById(requestId);

  if (!request) {
    throw new ApiError(404, "Blood request not found");
  }

  if (request.status !== REQUEST_STATUS.PAYMENT_PENDING) {
    throw new ApiError(400, "This request is not waiting for payment");
  }

  const inventory = await Inventory.findOne({
    bloodGroup: request.bloodGroup,
  });

  if (!inventory) {
    throw new ApiError(404, "Inventory not found");
  }

  if (inventory.quantity < request.quantity) {
    throw new ApiError(400, "Insufficient blood inventory");
  }

  inventory.quantity -= request.quantity;

  request.paymentStatus = true;
  request.razorpayOrderId = razorpay_order_id;
  request.razorpayPaymentId = razorpay_payment_id;
  request.status = REQUEST_STATUS.COMPLETED;

  await Promise.all([inventory.save(), request.save()]);

  const user = await User.findById(request.requester).select("fullName email");

  await sendEmail({
    to: user.email,
    subject: "Blood Request Completed",
    html: paymentSuccessEmail(
      user.fullName,
      request.bloodGroup,
      request.quantity,
    ),
  });

  return res
    .status(200)
    .json(new ApiResponse(200, request, "Payment verified successfully"));
});

export { createOrder, verifyPayment };
