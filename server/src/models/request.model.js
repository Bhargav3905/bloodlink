import mongoose from "mongoose";
import {
  BLOOD_GROUPS,
  REQUEST_STATUS,
  USER_ROLES,
} from "../constants/index.js";

const requestSchema = new mongoose.Schema(
  {
    requester: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    requesterType: {
      type: String,
      enum: [USER_ROLES.PATIENT, USER_ROLES.HOSPITAL],
      required: true,
    },
    bloodGroup: {
      type: String,
      enum: BLOOD_GROUPS,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
    processingFee: {
      type: Number,
      default: () => Number(process.env.PROCESSING_FEE),
    },
    paymentStatus: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: Object.values(REQUEST_STATUS),
      default: REQUEST_STATUS.PENDING,
    },
    razorpayOrderId: {
      type: String,
    },
    razorpayPaymentId: {
      type: String,
    },
  },
  { timestamps: true },
);

requestSchema.index({ status: 1 });
requestSchema.index({ bloodGroup: 1 });
requestSchema.index({ requester: 1 });

export default mongoose.model("Request", requestSchema);
