import User from "../models/user.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { registerSchema } from "../validations/auth.validation.js";

const registerUser = asyncHandler(async (req, res) => {
  // Validate request body
  const validationResult = registerSchema.safeParse(req.body);

  if (!validationResult.success) {
    throw new ApiError(400, "Validation Failed", validationResult.error.issues);
  }

  const validatedData = validationResult.data;

  const { email, phone } = validatedData;

  // Check existing email or phone
  const existingUser = await User.findOne({
    $or: [{ email }, { phone }],
  });

  if (existingUser) {
    throw new ApiError(
      409,
      "User already exists with this email or phone number",
    );
  }

  const user = await User.create(validatedData);

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken",
  );

  return res
    .status(201)
    .json(new ApiResponse(201, createdUser, "User registered successfully"));
});

export { registerUser };
