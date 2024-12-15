export default class AppError extends Error {
    statusCode;
    errorCode;
    isOperational;
    cause;
    constructor(statusCode, message, cause, errorCode, isOperational = true) {
        super(message);
        this.statusCode = statusCode;
        this.cause = cause;
        this.errorCode = errorCode;
        this.isOperational = isOperational;
        Error.captureStackTrace(this, this.constructor);
    }
}
//# sourceMappingURL=app.error.js.map