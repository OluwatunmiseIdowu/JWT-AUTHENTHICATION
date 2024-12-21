import AppDataSource from './database';
import { initializeCustomValidators } from './config/validator.config';
import logger from './shared/utils/logger/logger';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("./database"));
const validator_config_1 = require("./config/validator.config");
const logger_1 = __importDefault(require("./shared/utils/logger/logger"));
const bootstrap = async () => {
    try {
        await database_1.default.initialize();
        logger_1.default.info('Database connected successfully.');
    }
    catch (error) {
        logger_1.default.error('Error connecting to the database:', error);
        process.exit(1);
    }
};
// Initialize custom validators
const initializeValidators = () => {
    (0, validator_config_1.initializeCustomValidators)();
    logger_1.default.info('Custom validators initialized successfully');
};
exports.default = async () => {
    await bootstrap();
    initializeValidators();
};
