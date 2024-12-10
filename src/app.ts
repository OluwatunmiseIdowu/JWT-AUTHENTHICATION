import express from "express";
import cors from "cors";
import helmet from "helmet";
import { healthRoutes } from "./v1/health/health.route"; // Company's health check routes
import { appRoutes } from "./v1/app/app.routes"; // Company's app routes
import { authRouter, userRouter } from "./routes/auth.routes"; // Your JWT authentication routes
import AppDataSource from "./datasource"; // Database configuration
import { initializeCustomValidators } from "./config/validator.config"; // Company's custom validators

const app = express();

// Security and Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Initialize custom validators (Company-specific)
initializeCustomValidators();

// Database connection
AppDataSource.initialize()
  .then(() => {
    console.log("Database connected successfully.");
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });

// Register routes
app.use("/health", healthRoutes); // Company's health check route
app.use("/api", appRoutes); // Company's app routes
app.use("/auth", authRouter); // JWT authentication routes
app.use("/user", userRouter); // User-specific routes

export default app;
