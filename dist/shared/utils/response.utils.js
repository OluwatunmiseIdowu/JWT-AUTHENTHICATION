"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorResponse = exports.SuccessResponse = void 0;
const SuccessResponse = (message, data, meta) => {
    return {
        status: true,
        message,
        data,
        meta,
    };
};
exports.SuccessResponse = SuccessResponse;
const ErrorResponse = (message, errors, errorCode) => {
    return {
        status: false,
        message,
        errorCode,
        errors,
    };
};
exports.ErrorResponse = ErrorResponse;
