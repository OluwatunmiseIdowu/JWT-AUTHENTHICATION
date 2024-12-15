"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tsyringe_1 = require("tsyringe");
const auth_controllers_1 = require("../controllers/auth.controllers");
const authController = tsyringe_1.container.resolve(auth_controllers_1.AuthController);
const authRouter = (0, express_1.Router)();
// Authentication routes
authRouter.post('/auth/register', authController.register.bind(authController));
//   .post('/login', authController.login.bind(authController));
exports.default = authRouter;
