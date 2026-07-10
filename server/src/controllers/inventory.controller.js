import Inventory from "../models/inventory.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

const getInventory = asyncHandler(async (req, res) => {
  const inventory = await Inventory.find().lean().sort({
    bloodGroup: 1,
  });

  return res
    .status(200)
    .json(new ApiResponse(200, inventory, "Inventory fetched successfully"));
});

const getBloodGroupInventory = asyncHandler(async (req, res) => {
  const { bloodGroup } = req.params;

  const inventory = await Inventory.findOne({
    bloodGroup,
  });

  if (!inventory) {
    throw new ApiError(404, "Blood group not found");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(200, inventory, "Blood inventory fetched successfully"),
    );
});

export { getInventory, getBloodGroupInventory };
