import jwt from "jsonwebtoken";

import User from "../models/user.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";

const verifyJWT = asyncHandler(async (req, res, next) => {
  const token =
    req.cookies?.accessToken ||
    req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    throw new ApiError(401, "Unauthorized request");
  }

  let decodedToken;

  try {
    decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  } catch {
    throw new ApiError(401, "Invalid or expired access token");
  }

  const user = await User.findById(decodedToken._id).select(
    "-password -refreshToken",
  );

  if (!user) {
    throw new ApiError(401, "User not found");
  }

  if (!user.isActive) {
    throw new ApiError(403, "Account is inactive");
  }

  req.user = user;

  next();
});

const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new ApiError(403, "You don't have permission to perform this action");
    }

    next();
  };
};

export { verifyJWT, authorizeRoles };
