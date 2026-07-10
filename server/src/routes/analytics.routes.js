import { Router } from "express";

import { verifyJWT, authorizeRoles } from "../middleware/auth.middleware.js";
import { USER_ROLES } from "../constants/index.js";
import {
  getBloodGroupDistribution,
  getDashboardOverview,
  getDonationStatistics,
  getInventorySummary,
  getLowStockBlood,
  getRequestStatistics,
} from "../controllers/analytics.controller.js";

const router = Router();

router.use(verifyJWT);

router.use(authorizeRoles(USER_ROLES.ADMIN));

router.get("/overview", getDashboardOverview);

router.get("/blood-distribution", getBloodGroupDistribution);

router.get("/low-stock", getLowStockBlood);

router.get("/inventory-summary", getInventorySummary);

router.get("/request-statistics", getRequestStatistics);

router.get("/donation-statistics", getDonationStatistics);

export default router;
