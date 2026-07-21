import mongoose from "mongoose";
import User from "../models/user.model.js";

import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import sendEmail from "../utils/sendEmail.js";

import { updateProfileSchema } from "../validations/user.validation.js";
import { userQuerySchema } from "../validations/query.validation.js";
import { USER_ROLES } from "../constants/index.js";
import { approvalEmail, rejectionEmail } from "../templates/emailTemplate.js";

const getCurrentUser = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, req.user, "Current user fetched successfully"));
});

const updateProfile = asyncHandler(async (req, res) => {
  const validationResult = updateProfileSchema.safeParse(req.body);

  if (!validationResult.success) {
    throw new ApiError(400, "Validation Failed", validationResult.error.issues);
  }

  const updates = validationResult.data;

  if (Object.keys(updates).length === 0) {
    throw new ApiError(400, "No fields provided for update");
  }

  if (updates.phone) {
    const existingUser = await User.findOne({
      phone: updates.phone,
      _id: { $ne: req.user._id },
    });

    if (existingUser) {
      throw new ApiError(409, "Phone number already exists");
    }
  }

  const updatedUser = await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: updates,
    },
    {
      returnDocument: "after",
      runValidators: true,
    },
  ).select("-password -refreshToken");

  return res
    .status(200)
    .json(new ApiResponse(200, updatedUser, "Profile updated successfully"));
});

const getAllUsers = asyncHandler(async (req, res) => {
  const validationResult = userQuerySchema.safeParse(req.query);

  if (!validationResult.success) {
    throw new ApiError(
      400,
      "Invalid query parameters",
      validationResult.error.issues,
    );
  }

  const { page, limit, role, city, search, sortBy, order } =
    validationResult.data;

  const filter = {};

  if (role) {
    filter.role = role;
  }

  if (city) {
    filter.city = city;
  }

  if (search) {
    filter.fullName = {
      $regex: search,
      $options: "i",
    };
  }

  const skip = (page - 1) * limit;

  const sort = {};

  sort[sortBy] = order === "asc" ? 1 : -1;

  const users = await User.find(filter)
    .lean()
    .select("-password -refreshToken")
    .sort(sort)
    .skip(skip)
    .limit(limit);

  const totalUsers = await User.countDocuments(filter);

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        users,
        totalUsers,
        currentPage: page,
        totalPages: Math.ceil(totalUsers / limit),
      },
      "Users fetched successfully",
    ),
  );
});

const getPendingUsers = asyncHandler(async (req, res) => {
  const pendingUsers = await User.find({
    role: {
      $in: [USER_ROLES.DONOR, USER_ROLES.HOSPITAL],
    },
    isApproved: false,
    isActive: true,
  })
    .lean()
    .select("-password -refreshToken")
    .sort({
      createdAt: -1,
    });

  return res
    .status(200)
    .json(
      new ApiResponse(200, pendingUsers, "Pending users fetched successfully"),
    );
});

const approveUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    throw new ApiError(400, "Invalid user ID");
  }

  const user = await User.findById(id);

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  if (user.role === USER_ROLES.PATIENT) {
    throw new ApiError(400, "Patients do not require approval");
  }

  if (user.isApproved) {
    throw new ApiError(400, "User is already approved");
  }

  user.isApproved = true;

  await user.save({
    validateBeforeSave: false,
  });

  await sendEmail({
    to: user.email,
    subject: "BloodLink Account Approved",
    html: approvalEmail(user.fullName),
  });

  const approvedUser = await User.findById(id).select(
    "-password -refreshToken",
  );

  return res
    .status(200)
    .json(new ApiResponse(200, approvedUser, "User approved successfully"));
});

const rejectUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    throw new ApiError(400, "Invalid user ID");
  }

  const user = await User.findById(id);

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  if (user.role === USER_ROLES.PATIENT) {
    throw new ApiError(400, "Patients do not require approval");
  }

  if (user.isApproved) {
    throw new ApiError(400, "Approved users cannot be rejected");
  }

  await sendEmail({
    to: user.email,
    subject: "BloodLink Registration Update",
    html: rejectionEmail(user.fullName),
  });

  await User.findByIdAndDelete(user._id);

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "User rejected and removed successfully"));
});

export {
  getCurrentUser,
  updateProfile,
  getAllUsers,
  getPendingUsers,
  approveUser,
  rejectUser,
};
