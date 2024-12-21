import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import RouteVersion from './config/route.config';
import 'reflect-metadata';
import { healthRoutes } from './v1/health/health.route'; // Company's health check routes
import { appRoutes } from './v1/app/app.routes'; // Company's app routes
import authRouter from './v1/modules/user/routes/auth.routes';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const route_config_1 = __importDefault(require("./config/route.config"));
require("reflect-metadata");
const health_route_1 = require("./v1/health/health.route"); // Company's health check routes
const app_routes_1 = require("./v1/app/app.routes"); // Company's app routes
const auth_routes_1 = __importDefault(require("./v1/modules/user/routes/auth.routes"));
const app = (0, express_1.default)();
// Security and Middleware
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Register routes
app.use('/health', health_route_1.healthRoutes); // Company's health check route
app.use(`/api/${route_config_1.default.v1}`, app_routes_1.appRoutes); // Company's app routes
app.use(`/api/${route_config_1.default.v1}`, auth_routes_1.default); // JWT authentication routes
// app.use('/user', userRouter); // User-specific routes
exports.default = app;
