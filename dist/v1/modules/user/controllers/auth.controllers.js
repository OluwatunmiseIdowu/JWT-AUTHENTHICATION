"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const tsyringe_1 = require("tsyringe");
const response_utils_js_1 = require("../../../../shared/utils/response.utils.js");
const auth_service_js_1 = require("../services/auth.service.js");
const logger_js_1 = __importDefault(require("../../../../shared/utils/logger/logger.js"));
const app_error_js_1 = __importDefault(require("../../../../shared/error/app.error.js"));
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async register(req, res) {
        try {
            const { first_name, last_name, email, password } = req.body;
            const user = await this.authService.registerUser({ first_name, last_name, email, password });
            return res.status(201).send((0, response_utils_js_1.SuccessResponse)('User created successfully', user));
        }
        catch (error) {
            if (error instanceof app_error_js_1.default) {
                logger_js_1.default.error(error.message);
                return res.status(error.statusCode).send((0, response_utils_js_1.ErrorResponse)(error.message, undefined, error.errorCode));
            }
        }
    }
};
exports.AuthController = AuthController;
exports.AuthController = AuthController = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)(auth_service_js_1.AuthService)),
    __metadata("design:paramtypes", [auth_service_js_1.AuthService])
], AuthController);
