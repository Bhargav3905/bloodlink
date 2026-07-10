import User from "../models/user.model.js";
import Request from "../models/request.model.js";
import Inventory from "../models/inventory.model.js";
import Donation from "../models/donation.model.js";

import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

import { USER_ROLES, REQUEST_STATUS } from "../constants/index.js";

const getDashboardOverview = asyncHandler(async (req, res) => {
  const [
    totalUsers,
    totalDonors,
    totalPatients,
    totalHospitals,
    pendingApprovals,
    completedRequests,
  ] = await Promise.all([
    User.countDocuments(),

    User.countDocuments({
      role: USER_ROLES.DONOR,
    }),

    User.countDocuments({
      role: USER_ROLES.PATIENT,
    }),

    User.countDocuments({
      role: USER_ROLES.HOSPITAL,
    }),

    User.countDocuments({
      isApproved: false,
      isActive: true,
      role: {
        $in: [USER_ROLES.DONOR, USER_ROLES.HOSPITAL],
      },
    }),

    Request.countDocuments({
      status: REQUEST_STATUS.COMPLETED,
    }),
  ]);

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        totalUsers,
        totalDonors,
        totalPatients,
        totalHospitals,
        pendingApprovals,
        completedRequests,
      },
      "Dashboard overview fetched successfully",
    ),
  );
});

const getBloodGroupDistribution = asyncHandler(async (req, res) => {
  const distribution = await Inventory.aggregate([
    {
      $project: {
        _id: 0,
        bloodGroup: 1,
        quantity: 1,
      },
    },
    {
      $sort: { bloodGroup: 1 },
    },
  ]);

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        distribution,
        "Blood group distribution fetched successfully",
      ),
    );
});

const getLowStockBlood = asyncHandler(async (req, res) => {
  const lowStock = await Inventory.find({
    quantity: {
      $lte: Number(process.env.LOW_STOCK_THRESHOLD),
    },
  })
    .lean()
    .select("-__v")
    .sort({
      quantity: 1,
    });

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        lowStock,
        "Low stock blood groups fetched successfully",
      ),
    );
});

const getInventorySummary = asyncHandler(async (req, res) => {
  const result = await Inventory.aggregate([
    {
      $group: {
        _id: null,
        totalUnits: {
          $sum: "$quantity",
        },
      },
    },
  ]);

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { totalUnits: result[0]?.totalUnits || 0 },
        "Inventory summary fetched successfully",
      ),
    );
});

const getRequestStatistics = asyncHandler(async (req, res) => {
  const stats = await Request.aggregate([
    {
      $group: {
        _id: "$status",
        total: {
          $sum: 1,
        },
      },
    },
  ]);

  const requestStatistics = {
    pending: 0,
    paymentPending: 0,
    completed: 0,
    rejected: 0,
    expired: 0,
  };

  stats.forEach((item) => {
    requestStatistics[item._id] = item.total;
  });

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        requestStatistics,
        "Request statistics fetched successfully",
      ),
    );
});

const getDonationStatistics = asyncHandler(async (req, res) => {
  const totalDonations = await Donation.countDocuments();

  const recentDonations = await Donation.find()
    .lean()
    .populate("donor", "fullName bloodGroup")
    .sort({
      createdAt: -1,
    })
    .limit(5);

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { totalDonations, recentDonations },
        "Donation statistics fetched successfully",
      ),
    );
});

export {
  getDashboardOverview,
  getBloodGroupDistribution,
  getLowStockBlood,
  getInventorySummary,
  getRequestStatistics,
  getDonationStatistics,
};
