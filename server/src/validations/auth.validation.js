import { z } from "zod";
import { BLOOD_GROUPS, GUJARAT_CITIES, USER_ROLES } from "../constants/index.js";

const registerSchema = z.object({
  fullName: z.string().trim().min(3, "Full name must be at least 3 characters"),

  email: z.string().trim().email("Invalid email address").toLowerCase(),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain one uppercase letter")
    .regex(/[a-z]/, "Password must contain one lowercase letter")
    .regex(/[0-9]/, "Password must contain one number")
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain one special character",
    ),

  phone: z.string().regex(/^[6-9]\d{9}$/, "Invalid phone number"),

  city: z.enum(GUJARAT_CITIES),

  bloodGroup: z.enum(BLOOD_GROUPS).optional(),

  role: z.enum(Object.values(USER_ROLES)).optional(),
});

const loginSchema = z.object({
  email: z.string().trim().email(),

  password: z.string().min(1, "Password is required"),
});

const forgotPasswordSchema = z.object({
  email: z.string().trim().email("Invalid email address").toLowerCase(),
});

const resetPasswordSchema = z.object({
  token: z.string().min(1, "Reset token is required"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain one uppercase letter")
    .regex(/[a-z]/, "Password must contain one lowercase letter")
    .regex(/[0-9]/, "Password must contain one number")
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain one special character",
    ),
});

export { registerSchema, loginSchema, forgotPasswordSchema, resetPasswordSchema };
