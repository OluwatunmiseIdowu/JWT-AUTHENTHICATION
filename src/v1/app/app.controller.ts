import { Request, Response } from 'express';
import logger from '../../shared/utils/logger/logger';

export const getAppInfo = (req: Request, res: Response) => {
  logger.info('Fetching app info');

  res.status(200).json({
    message: 'App is running fine!',
    version: '1.0.0',
  });
};