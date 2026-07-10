import { Router } from "express";

import {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  forgotPassword,
  resetPassword,
} from "../controllers/auth.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

// Protected
router.post("/logout", verifyJWT, logoutUser);

router.post("/refresh-token", refreshAccessToken);

router.post("/forgot-password", forgotPassword);

router.post("/reset-password", resetPassword);

export default router;
