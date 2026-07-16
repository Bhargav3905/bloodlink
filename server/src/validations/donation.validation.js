import { z } from "zod";
import { BLOOD_GROUPS } from "../constants/index.js";

const donationSchema = z.object({
  bloodGroup: z.enum(BLOOD_GROUPS),

  quantity: z.coerce
    .number()
    .min(1, "Minimum quantity is 1")
    .max(10, "Maximum quantity is 10"),
});

export { donationSchema };
