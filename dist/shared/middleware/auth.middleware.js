"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const logger_1 = __importDefault(require("../utils/logger/logger"));
// Middleware stays the same
const authMiddleware = (req, res, next) => {
    var _a;
    const token = (_a = req.header('Authorization')) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    if (!token) {
        logger_1.default.warn('Access denied. No token provided.');
        return res
            .status(401)
            .json({ message: 'Access denied. No token provided.' });
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        logger_1.default.info('User authenticated successfully.');
        next();
    }
    catch (error) {
        logger_1.default.error(`Invalid token: ${error instanceof Error ? error.message : error}`);
        return res.status(400).json({ message: 'Invalid token.' });
    }
};
exports.authMiddleware = authMiddleware;
