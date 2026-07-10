import mongoose from "mongoose";
import { BLOOD_GROUPS, USER_ROLES } from "../constants/index.js";

const donationSchema = new mongoose.Schema(
  {
    donor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    donorType: {
      type: String,
      enum: [USER_ROLES.DONOR, USER_ROLES.HOSPITAL],
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
  },
  { timestamps: true },
);

donationSchema.index({ donor: 1 });

export default mongoose.model("Donation", donationSchema);
