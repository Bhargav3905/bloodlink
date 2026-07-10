import { z } from "zod";
import { GUJARAT_CITIES } from "../constants/index.js";

const userQuerySchema = z.object({
  page: z.coerce.number().min(1).default(1),

  limit: z.coerce.number().min(1).max(50).default(10),

  role: z.string().optional(),

  city: z.enum(GUJARAT_CITIES).optional(),

  search: z.string().trim().optional(),

  sortBy: z
    .enum(["createdAt", "updatedAt", "fullName", "bloodCredits"])
    .default("createdAt"),

  order: z.enum(["asc", "desc"]).default("desc"),
});

export { userQuerySchema };
