import { Router } from 'express';
import { container } from 'tsyringe';
import { AuthController } from '../controllers/auth.controllers';
const authController = container.resolve(AuthController);
const authRouter = Router();
// Authentication routes
authRouter.post('/auth/register', authController.register.bind(authController));
//   .post('/login', authController.login.bind(authController));
export default authRouter;
//# sourceMappingURL=auth.routes.js.map