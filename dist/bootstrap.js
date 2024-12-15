import AppDataSource from './database';
import { initializeCustomValidators } from './config/validator.config';
import logger from './shared/utils/logger/logger';
const bootstrap = async () => {
    try {
        await AppDataSource.initialize();
        logger.info('Database connected successfully.');
    }
    catch (error) {
        logger.error('Error connecting to the database:', error);
        process.exit(1);
    }
};
// Initialize custom validators
const initializeValidators = () => {
    initializeCustomValidators();
    logger.info('Custom validators initialized successfully');
};
export default async () => {
    await bootstrap();
    initializeValidators();
};
//# sourceMappingURL=bootstrap.js.map