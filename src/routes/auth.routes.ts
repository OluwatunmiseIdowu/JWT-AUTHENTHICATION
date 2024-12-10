import { Router } from "express";
import { register, login, getUser } from "../controllers/auth.controller";

const authRouter = Router();
const userRouter = Router();

// Authentication routes
authRouter.post("/register", register);
authRouter.post("/login", login);

// User routes
userRouter.get("/:id", getUser);

export { authRouter, userRouter };
