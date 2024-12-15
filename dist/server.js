"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const logger_1 = __importDefault(require("./shared/utils/logger/logger"));
require("reflect-metadata");
const bootstrap_1 = __importDefault(require("./bootstrap"));
const app_config_1 = __importDefault(require("./config/app.config"));
const PORT = app_config_1.default.server.port || 3000;
(0, bootstrap_1.default)().then(() => {
    app_1.default.listen(PORT, () => {
        logger_1.default.info(`Server running on port ${PORT}`);
    });
});
