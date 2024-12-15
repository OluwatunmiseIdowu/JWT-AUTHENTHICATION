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
      const { fullName, email, password } = req.body;
      const user = await this.authService.registerUser({ fullName, email, password });
      return res.status(201).send(SuccessResponse('User created successfully', user));
    } catch (error) {
      if (error instanceof AppError) {
        logger.error('Error during user registration:', error);
        return res.status(500).send(ErrorResponse('Internal server error'));
      }
    }
  }

  // // Login a user
  // async login (req: Request, res: Response) => {
  //   const { email, password } = req.body;

  //   try {
  //     // Find user by email
  //     const existingUser = await userRepository.findOneBy({ email });
  //     if (!existingUser) {
  //       return res.status(404).json({ message: 'User not found' });
  //     }

  //     // Compare the password
  //     const isValidPassword = await bcrypt.compare(password, existingUser.password);
  //     if (!isValidPassword) {
  //       return res.status(401).json({ message: 'Invalid password' });
  //     }

  //     // Generate JWT token
  //     const token = createToken(existingUser.id);

  //     res.status(200).json({ token });
  //   } catch (error) {
  //     console.error('Error during user login:', error);
  //     res.status(500).json({ message: 'Internal server error' });
  //   }
  // };

  // // Get user by ID
  // async getUser (req: Request, res: Response) => {
  //   const { id } = req.params;

  //   try {
  //     // Find user by ID
  //     const user = await userRepository.findOneBy({ id: parseInt(id) });
  //     if (!user) {
  //       return res.status(404).json({ message: 'User not found' });
  //     }

  //     res.status(200).json(user);
  //   } catch (error) {
  //     console.error('Error fetching user:', error);
  //     res.status(500).json({ message: 'Internal server error' });
  //   }
  // }
}
