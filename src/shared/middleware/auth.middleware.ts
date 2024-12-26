import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import logger from '../utils/logger/logger';

interface UserPayload {
  id: string; // You can add other properties as needed
}

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    logger.warn('Access denied. No token provided.');
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as UserPayload;

    req.user = decoded; // TypeScript knows that req.user is a UserPayload
    logger.info('User authenticated successfully.');
    next();
  } catch (error) {
    logger.error(`Invalid token: ${error instanceof Error ? error.message : error}`);
    return res.status(400).json({ message: 'Invalid token.' });
  }
};
