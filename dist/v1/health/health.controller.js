"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthCheck = void 0;
const healthCheck = (req, res) => {
    res.status(200).json({
        status: 'UP',
        timestamp: new Date(),
    });
};
exports.healthCheck = healthCheck;
