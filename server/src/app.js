import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import healthRoutes from "./routes/health.routes.js";
import errorHandler from "./middleware/error.middleware.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import inventoryRouter from "./routes/inventory.routes.js";
import donationRouter from "./routes/donation.routes.js";
import requestRouter from "./routes/request.routes.js";
import paymentRouter from "./routes/payment.routes.js";
import testRouter from "./routes/test.routes.js";
import analyticsRouter from "./routes/analytics.routes.js";

const app = express();

// Enable CORS for frontend
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);

// Parse JSON requests
app.use(express.json({ limit: "16kb" }));

// Parse URL encoded data
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Read cookies
app.use(cookieParser());

app.use("/api/v1/health", healthRoutes);

app.use("/api/v1/auth", authRouter);

app.use("/api/v1/users", userRouter);

app.use("/api/v1/inventory", inventoryRouter);

app.use("/api/v1/donations", donationRouter);

app.use("/api/v1/requests", requestRouter);

app.use("/api/v1/payments", paymentRouter);

app.use("/api/v1/test", testRouter);

app.use("/api/v1/analytics", analyticsRouter);

app.use(errorHandler);

export default app;
