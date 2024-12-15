import { Router } from 'express';
import { register, login, getUser } from '../v1/modules/user/controllers/auth.controller';
const authRouter = Router();
const userRouter = Router();
// Authentication routes
authRouter.post('/register', register);
authRouter.post('/login', login);
// User routes
userRouter.get('/:id', getUser);
export { authRouter, userRouter };
//# sourceMappingURL=auth.routes.js.map