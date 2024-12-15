"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAppInfo = void 0;
const logger_1 = __importDefault(require("../../shared/utils/logger/logger"));
const getAppInfo = (req, res) => {
    logger_1.default.info('Fetching app info');
    res.status(200).json({
        message: 'App is running fine!',
        version: '1.0.0',
    });
};
exports.getAppInfo = getAppInfo;
