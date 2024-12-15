import logger from '../utils/logger/logger';
/**
 * Service error is a wrapper around axios error for HTTP requests
 */
export const handleServiceError = (err, message) => {
    const error = err;
    if (error.response) {
        const cause = {
            code: error.response.status,
            details: error.response.data,
        };
        logger.info(message);
    }
};
//# sourceMappingURL=error.utils.js.map