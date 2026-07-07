import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import healthRoutes from "./routes/health.routes.js";
import errorHandler from "./middleware/error.middleware.js";
import authRouter from "./routes/auth.routes.js";

const app = express();

// Enable CORS for frontend
app.use(
    cors({
        origin: process.env.CLIENT_URL,
        credentials: true,
    })
);

// Parse JSON requests
app.use(express.json({ limit: "16kb" }));

// Parse URL encoded data
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Read cookies
app.use(cookieParser());

app.use("/api/v1/health", healthRoutes);

app.use("/api/v1/auth", authRouter);

app.use(errorHandler);

export default app;