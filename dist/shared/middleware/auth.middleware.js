import jwt from 'jsonwebtoken';
import logger from '../utils/logger/logger';
// Middleware stays the same
export const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) {
        logger.warn('Access denied. No token provided.');
        return res
            .status(401)
            .json({ message: 'Access denied. No token provided.' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        logger.info('User authenticated successfully.');
        next();
    }
    catch (error) {
        logger.error(`Invalid token: ${error instanceof Error ? error.message : error}`);
        return res.status(400).json({ message: 'Invalid token.' });
    }
};
//# sourceMappingURL=auth.middleware.js.map