import { Router } from "express";

import {
  getCurrentUser,
  updateProfile,
  getAllUsers,
} from "../controllers/user.controller.js";
import { verifyJWT, authorizeRoles } from "../middleware/auth.middleware.js";
import { USER_ROLES } from "../constants/index.js"

const router = Router();

router.use(verifyJWT);

router.get("/me", getCurrentUser);

router.patch("/profile", updateProfile);

router.get("/", verifyJWT, authorizeRoles(USER_ROLES.ADMIN), getAllUsers);

export default router;
