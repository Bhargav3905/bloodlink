import User from "../models/user.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

import { updateProfileSchema } from "../validations/user.validation.js";
import { userQuerySchema } from "../validations/query.validation.js";

// Get logged-in user
const getCurrentUser = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, req.user, "Current user fetched successfully"));
});

// Update profile
const updateProfile = asyncHandler(async (req, res) => {
  const validationResult = updateProfileSchema.safeParse(req.body);

  if (!validationResult.success) {
    throw new ApiError(400, "Validation Failed", validationResult.error.issues);
  }

  const updates = validationResult.data;

  // Prevent empty update request
  if (Object.keys(updates).length === 0) {
    throw new ApiError(400, "No fields provided for update");
  }

  // Prevent duplicate phone numbers
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

  const { page, limit, role, city, search, sortBy, order } = validationResult.data;

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

export { getCurrentUser, updateProfile, getAllUsers };
