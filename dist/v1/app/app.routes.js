"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRoutes = void 0;
const express_1 = require("express");
const app_controller_1 = require("./app.controller");
const router = (0, express_1.Router)();
exports.appRoutes = router;
router.get('/info', app_controller_1.getAppInfo);
