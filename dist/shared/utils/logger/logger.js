"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const winston_daily_rotate_file_1 = __importDefault(require("winston-daily-rotate-file")); // Correct import
// Define log format
const { combine, timestamp, printf, colorize } = winston_1.format;
// Custom log format
const logFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}]: ${message}`;
});
// Configure logger
const logger = (0, winston_1.createLogger)({
    format: combine(colorize(), // Colorize logs for development
    timestamp(), // Add timestamps
    logFormat),
    transports: [
        // Log to console
        new winston_1.transports.Console({
            format: combine(colorize(), logFormat),
        }),
        // Log to file (daily rotation)
        new winston_daily_rotate_file_1.default({
            // Use DailyRotateFile directly
            filename: 'logs/application-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d',
            format: logFormat, // Apply custom format to file logs
        }),
    ],
    exitOnError: false, // Do not exit on handled exceptions
});
// Log uncaught exceptions and unhandled rejections
logger.exceptions.handle(new winston_1.transports.File({
    filename: 'logs/exceptions.log',
    format: logFormat, // Apply custom format to exception logs
}));
logger.rejections.handle(new winston_1.transports.File({
    filename: 'logs/rejections.log',
    format: logFormat, // Apply custom format to rejection logs
}));
exports.default = logger;
