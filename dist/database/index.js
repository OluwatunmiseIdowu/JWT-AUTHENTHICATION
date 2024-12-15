"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const path_1 = __importDefault(require("path"));
const typeorm_1 = require("typeorm");
const User_1 = require("./entities/User");
const app_config_1 = __importDefault(require("../config/app.config"));
const AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: app_config_1.default.db.host || 'localhost',
    port: parseInt(app_config_1.default.db.port, 10) || 5432,
    username: app_config_1.default.db.username || 'postgres',
    password: app_config_1.default.db.password || 'password',
    database: app_config_1.default.db.name || 'mydatabase',
    synchronize: false,
    logging: true,
    entities: [User_1.User],
    migrations: [path_1.default.join(__dirname, '../database/migrations/*.ts')],
    subscribers: [],
});
exports.default = AppDataSource;
