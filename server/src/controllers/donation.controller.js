import Donation from "../models/donation.model.js";
import Inventory from "../models/inventory.model.js";

import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

import { donationSchema } from "../validations/donation.validation.js";
import { USER_ROLES, DONATION_COOLDOWN_DAYS } from "../constants/index.js";

const createDonation = asyncHandler(async (req, res) => {
  const validationResult = donationSchema.safeParse(req.body);

  if (!validationResult.success) {
    throw new ApiError(400, "Validation Failed", validationResult.error.issues);
  }

  const { bloodGroup, quantity } = validationResult.data;

  const user = req.user;

  if (user.role !== USER_ROLES.DONOR && user.role !== USER_ROLES.HOSPITAL) {
    throw new ApiError(403, "Only donors and hospitals can donate blood");
  }

  const donationQuantity = user.role === USER_ROLES.DONOR ? 1 : quantity;

  if (user.role === USER_ROLES.DONOR && user.lastDonationDate) {

    const nextDonationDate = new Date(user.lastDonationDate);
    nextDonationDate.setDate(
      nextDonationDate.getDate() + DONATION_COOLDOWN_DAYS,
    );

    if (new Date() < nextDonationDate) {
      throw new ApiError(
        400,
        `You can donate again after ${nextDonationDate.toDateString()}`,
      );
    }
  }

  if (user.bloodGroup !== bloodGroup) {
    throw new ApiError(
      400,
      "Donation blood group must match your registered blood group",
    );
  }

  const donation = await Donation.create({
    donor: user._id,
    donorType: user.role,
    bloodGroup,
    quantity: donationQuantity,
  });

  await Inventory.findOneAndUpdate(
    {
      bloodGroup,
    },
    {
      $inc: { quantity: donationQuantity },
    },
  );

  if (user.role === USER_ROLES.DONOR) {
    user.lastDonationDate = new Date();

    await user.save({
      validateBeforeSave: false,
    });
  }

  return res
    .status(201)
    .json(new ApiResponse(201, donation, "Donation recorded successfully"));
});

const getDonationHistory = asyncHandler(async (req, res) => {
  const donations = await Donation.find()
    .lean()
    .populate("donor", "fullName email bloodGroup role city")
    .sort({
      createdAt: -1,
    });

  return res
    .status(200)
    .json(
      new ApiResponse(200, donations, "Donation history fetched successfully"),
    );
});

export { createDonation, getDonationHistory };
