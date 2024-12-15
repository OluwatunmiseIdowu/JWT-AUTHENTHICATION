"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkHealth = void 0;
const checkHealth = () => {
    return {
        status: 'UP',
        uptime: process.uptime(),
    };
};
exports.checkHealth = checkHealth;
