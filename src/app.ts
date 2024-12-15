import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import RouteVersion from './config/route.config';
import 'reflect-metadata';
import { healthRoutes } from './v1/health/health.route'; // Company's health check routes
import { appRoutes } from './v1/app/app.routes'; // Company's app routes
import authRouter from './v1/modules/user/routes/auth.routes';

const app = express();

// Security and Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Register routes
app.use('/health', healthRoutes); // Company's health check route
app.use(`/api/${RouteVersion.v1}`, appRoutes); // Company's app routes
app.use(`/api/${RouteVersion.v1}`, authRouter); // JWT authentication routes
// app.use('/user', userRouter); // User-specific routes

export default app;
