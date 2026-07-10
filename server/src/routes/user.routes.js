import { Router } from "express";

import {
  getCurrentUser,
  updateProfile,
  getAllUsers,
  getPendingUsers,
  approveUser,
  rejectUser,
} from "../controllers/user.controller.js";
import { verifyJWT, authorizeRoles } from "../middleware/auth.middleware.js";
import { USER_ROLES } from "../constants/index.js";

const router = Router();

router.use(verifyJWT);

router.get("/me", getCurrentUser);

router.patch("/profile", updateProfile);

router.get("/", authorizeRoles(USER_ROLES.ADMIN), getAllUsers);

router.get("/pending", authorizeRoles(USER_ROLES.ADMIN), getPendingUsers);

router.patch("/:id/approve", authorizeRoles(USER_ROLES.ADMIN), approveUser);

router.patch("/:id/reject", authorizeRoles(USER_ROLES.ADMIN), rejectUser);

export default router;
