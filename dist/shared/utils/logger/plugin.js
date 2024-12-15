import logger from './logger';
// Plugin to log request details in Express
export const requestLogger = (req, res, next) => {
    logger.info(`Incoming request: ${req.method} ${req.url}`);
    next();
};
// Example of logging errors
export const logError = (message) => {
    logger.error(message);
};
// Export other log types if needed
export const logInfo = (message) => {
    logger.info(message);
};
//# sourceMappingURL=plugin.js.map