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
import { inject, injectable } from 'tsyringe';
import { SuccessResponse, ErrorResponse } from '../../../../shared/utils/response.utils.js';
import { AuthService } from '../services/auth.service.js';
import logger from '../../../../shared/utils/logger/logger.js';
import AppError from '../../../../shared/error/app.error.js';
let AuthController = class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    async register(req, res) {
        try {
            const { fullName, email, password } = req.body;
            const user = await this.authService.registerUser({ fullName, email, password });
            return res.status(201).send(SuccessResponse('User created successfully', user));
        }
        catch (error) {
            if (error instanceof AppError) {
                logger.error('Error during user registration:', error);
                return res.status(500).send(ErrorResponse('Internal server error'));
            }
        }
    }
};
AuthController = __decorate([
    injectable(),
    __param(0, inject(AuthService)),
    __metadata("design:paramtypes", [AuthService])
], AuthController);
export { AuthController };
//# sourceMappingURL=auth.controllers.js.map