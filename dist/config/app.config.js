"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const env_config_1 = require("./env.config");
(0, dotenv_1.config)();
const appConfig = {
    app: {
        name: process.env.APP_NAME,
        url: process.env.APP_URL,
        env: (0, env_config_1.getEnv)(),
    },
    server: {
        port: Number(process.env.PORT),
    },
    db: {
        host: process.env.DB_HOST,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        name: process.env.DB_NAME,
        port: process.env.DB_PORT,
    },
};
exports.default = appConfig;
