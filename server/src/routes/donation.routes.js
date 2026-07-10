import { Router } from "express";

import { createDonation, getDonationHistory } from "../controllers/donation.controller.js";
import { authorizeRoles, verifyJWT } from "../middleware/auth.middleware.js";
import { USER_ROLES } from "../constants/index.js";

const router = Router();

router.use(verifyJWT);

router.get("/", authorizeRoles(USER_ROLES.ADMIN), getDonationHistory);

router.post("/", createDonation);

export default router;
