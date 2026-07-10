import Request from "../models/request.model.js";
import Inventory from "../models/inventory.model.js";

import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

import { requestSchema } from "../validations/request.validation.js";
import { REQUEST_STATUS, USER_ROLES } from "../constants/index.js";

const createRequest = asyncHandler(async (req, res) => {
  const validationResult = requestSchema.safeParse(req.body);

  if (!validationResult.success) {
    throw new ApiError(400, "Validation Failed", validationResult.error.issues);
  }

  const { bloodGroup, quantity } = validationResult.data;

  const user = req.user;

  // Only patient & hospital
  if (user.role !== USER_ROLES.PATIENT && user.role !== USER_ROLES.HOSPITAL) {
    throw new ApiError(403, "Only patients and hospitals can request blood");
  }

  // Patient can request only their own blood group
  if (user.role === USER_ROLES.PATIENT && user.bloodGroup !== bloodGroup) {
    throw new ApiError(
      400,
      "Requested blood group must match your registered blood group",
    );
  }

  // Patient quantity restriction
  if (user.role === USER_ROLES.PATIENT && quantity > 2) {
    throw new ApiError(400, "Patients can request a maximum of 2 blood units");
  }

  const inventory = await Inventory.findOne({
    bloodGroup,
  }).select("bloodGroup quantity");

  if (!inventory) {
    throw new ApiError(404, "Blood group inventory not found");
  }

  if (inventory.quantity < quantity) {
    throw new ApiError(400, "Requested quantity is not available");
  }

  const request = await Request.create({
    requester: user._id,
    requesterType: user.role,
    bloodGroup,
    quantity,
  });

  return res
    .status(201)
    .json(new ApiResponse(201, request, "Blood request created successfully"));
});

const getPendingRequests = asyncHandler(async (req, res) => {
  const requests = await Request.find({
    status: REQUEST_STATUS.PENDING,
  })
    .lean()
    .populate("requester", "fullName email bloodGroup role city")
    .sort({ createdAt: -1 });

  return res
    .status(200)
    .json(
      new ApiResponse(200, requests, "Pending requests fetched successfully"),
    );
});

const approveRequest = asyncHandler(async (req, res) => {
  const request = await Request.findById(req.params.id);

  if (!request) {
    throw new ApiError(404, "Request not found");
  }

  if (request.status !== REQUEST_STATUS.PENDING) {
    throw new ApiError(400, "Only pending requests can be approved");
  }

  request.status = REQUEST_STATUS.PAYMENT_PENDING;

  await request.save();

  return res
    .status(200)
    .json(new ApiResponse(200, request, "Request approved successfully"));
});

const rejectRequest = asyncHandler(async (req, res) => {
  const request = await Request.findById(req.params.id);

  if (!request) {
    throw new ApiError(404, "Request not found");
  }

  if (request.status !== REQUEST_STATUS.PENDING) {
    throw new ApiError(400, "Only pending requests can be rejected");
  }

  request.status = REQUEST_STATUS.REJECTED;

  await request.save();

  return res
    .status(200)
    .json(new ApiResponse(200, request, "Request rejected successfully"));
});

const completeRequest = asyncHandler(async (req, res) => {
  const request = await Request.findById(req.params.id);

  if (!request) {
    throw new ApiError(404, "Request not found");
  }

  if (request.status !== REQUEST_STATUS.PAYMENT_PENDING) {
    throw new ApiError(400, "Only payment pending requests can be completed");
  }

  const inventory = await Inventory.findOne({
    bloodGroup: request.bloodGroup,
  }).select("bloodGroup quantity");

  if (!inventory) {
    throw new ApiError(404, "Inventory not found");
  }

  if (inventory.quantity < request.quantity) {
    throw new ApiError(400, "Insufficient blood inventory");
  }

  inventory.quantity -= request.quantity;

  request.paymentStatus = true;
  request.status = REQUEST_STATUS.COMPLETED;
  
  await Promise.all([inventory.save(), request.save()]);

  return res
    .status(200)
    .json(
      new ApiResponse(200, request, "Blood request completed successfully"),
    );
});

export {
  createRequest,
  getPendingRequests,
  approveRequest,
  rejectRequest,
  completeRequest,
};
