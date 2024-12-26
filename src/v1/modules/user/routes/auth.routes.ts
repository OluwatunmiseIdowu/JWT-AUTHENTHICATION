import { Router } from 'express';
import { container } from 'tsyringe';
import { AuthController } from '../controllers/auth.controllers';

const authController = container.resolve(AuthController);
const authRouter = Router();

// Authentication routes
authRouter.post('/auth/register', authController.register.bind(authController));
authRouter.post('/auth/login', authController.login.bind(authController)); // Adding login route
authRouter.get('/auth/user/:id', authController.getUser.bind(authController)); // Adding fetch user route

export default authRouter;
