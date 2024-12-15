"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppError extends Error {
    constructor(statusCode, message, cause, errorCode, isOperational = true) {
        super(message);
        this.statusCode = statusCode;
        this.cause = cause;
        this.errorCode = errorCode;
        this.isOperational = isOperational;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.default = AppError;
