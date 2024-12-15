"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleServiceError = void 0;
const logger_1 = __importDefault(require("../utils/logger/logger"));
/**
 * Service error is a wrapper around axios error for HTTP requests
 */
const handleServiceError = (err, message) => {
    const error = err;
    if (error.response) {
        const cause = {
            code: error.response.status,
            details: error.response.data,
        };
        logger_1.default.info(message);
    }
};
exports.handleServiceError = handleServiceError;
