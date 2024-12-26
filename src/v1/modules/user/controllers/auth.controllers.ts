import { Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import { SuccessResponse, ErrorResponse } from '../../../../shared/utils/response.utils.js';
import { AuthService } from '../services/auth.service.js';
import logger from '../../../../shared/utils/logger/logger.js';
import AppError from '../../../../shared/error/app.error.js';

@injectable()
export class AuthController {
  constructor(@inject(AuthService) private authService: AuthService) {}

  async register(req: Request, res: Response): Promise<any> {
    try {
      const { first_name, last_name, email, password } = req.body;
      const user = await this.authService.registerUser({ first_name, last_name, email, password });
      return res.status(201).send(SuccessResponse('User created successfully', user));
    } catch (error) {
      if (error instanceof AppError) {
        logger.error(error.message);
        return res.status(error.statusCode).send(ErrorResponse(error.message, undefined, error.errorCode));
      }
    }
  }

  // Login a user
  async login(req: Request, res: Response): Promise<any> {
    const { email, password } = req.body;

    try {
      // Find user by email
      const existingUser = await this.authService.findUserByEmail(email); // Ensure this method exists in AuthService
      if (!existingUser) {
        return res.status(404).send(ErrorResponse('User not found'));
      }

      // Compare the password
      const isValidPassword = await bcrypt.compare(password, existingUser.password);
      if (!isValidPassword) {
        return res.status(401).send(ErrorResponse('Invalid password'));
      }

      // Generate JWT token
      const token = createToken(existingUser.id);

      return res.status(200).send(SuccessResponse('Login successful', { token }));
    } catch (error) {
      logger.error('Error during user login:', error);
      return res.status(500).send(ErrorResponse('Internal server error'));
    }
  }

  // Get user by ID
  async getUser(req: Request, res: Response): Promise<any> {
    const { id } = req.params;

    try {
      // Find user by ID
      const user = await this.authService.findUserById(parseInt(id)); // Ensure this method exists in AuthService
      if (!user) {
        return res.status(404).send(ErrorResponse('User not found'));
      }

      return res.status(200).send(SuccessResponse('User fetched successfully', user));
    } catch (error) {
      logger.error('Error fetching user:', error);
      return res.status(500).send(ErrorResponse('Internal server error'));
    }
  }
}
