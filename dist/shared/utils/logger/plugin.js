"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logInfo = exports.logError = exports.requestLogger = void 0;
const logger_1 = __importDefault(require("./logger"));
// Plugin to log request details in Express
const requestLogger = (req, res, next) => {
    logger_1.default.info(`Incoming request: ${req.method} ${req.url}`);
    next();
};
exports.requestLogger = requestLogger;
// Example of logging errors
const logError = (message) => {
    logger_1.default.error(message);
};
exports.logError = logError;
// Export other log types if needed
const logInfo = (message) => {
    logger_1.default.info(message);
};
exports.logInfo = logInfo;
