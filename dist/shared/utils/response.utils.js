export const SuccessResponse = (message, data, meta) => {
    return {
        status: true,
        message,
        data,
        meta,
    };
};
export const ErrorResponse = (message, errors, errorCode) => {
    return {
        status: false,
        message,
        errorCode,
        errors,
    };
};
//# sourceMappingURL=response.utils.js.map