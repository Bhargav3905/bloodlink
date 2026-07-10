import { z } from "zod";
import { BLOOD_GROUPS } from "../constants/index.js";

const donationSchema = z.object({
  bloodGroup: z.enum(BLOOD_GROUPS),

  quantity: z.coerce.number().min(1),
});

export { donationSchema };
