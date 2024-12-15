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
var _a;
import * as bcrypt from 'bcryptjs';
import { User } from '../entities/User.ts';
import { createToken } from '../utils/jwt'; // a utility file
const userRepository = AppDataSource.getRepository(User);
let AuthController = class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
};
AuthController = __decorate([
    injectable(),
    __param(0, inject(AuthService)),
    __metadata("design:paramtypes", [typeof (_a = typeof AuthService !== "undefined" && AuthService) === "function" ? _a : Object])
], AuthController);
export { AuthController };
{
    try {
        const { fullName, email, password } = req.body;
        //
        const existingUser = await userRepository.findOneBy({ email });
        if (existingUser) {
            return res.status(409).json({ message: 'User already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        // Create and save the new user
        const newUser = userRepository.create({
            fullName,
            email,
            password: hashedPassword,
        });
        await userRepository.save(newUser);
        return res.status(201).send(SuccessResponse('User created successfully'));
    }
    catch (error) {
        console.error('Error during user registration:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
;
// Login a user
async;
login(req, Request, res, Response);
{
    const { email, password } = req.body;
    try {
        // Find user by email
        const existingUser = await userRepository.findOneBy({ email });
        if (!existingUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        // Compare the password
        const isValidPassword = await bcrypt.compare(password, existingUser.password);
        if (!isValidPassword) {
            return res.status(401).json({ message: 'Invalid password' });
        }
        // Generate JWT token
        const token = createToken(existingUser.id);
        res.status(200).json({ token });
    }
    catch (error) {
        console.error('Error during user login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
;
// Get user by ID
async;
getUser(req, Request, res, Response);
{
    const { id } = req.params;
    try {
        // Find user by ID
        const user = await userRepository.findOneBy({ id: parseInt(id) });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    }
    catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
;
//# sourceMappingURL=auth.controllers.js.map