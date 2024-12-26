import { injectable, inject } from 'tsyringe';
import AppError from '../../../../shared/error/app.error';
import { bcryptHashString, bcryptCompare } from '../../../../shared/utils/hash.utils'; // Ensure you have a compare function
import { UserRepository } from '../repositories/user.repository';
import { createToken } from '../utils/token.utils'; // Import your token creation utility

@injectable()
export class AuthService {
  constructor(@inject(UserRepository) private userRepository: UserRepository) {}

  async registerUser(userData: { first_name: string; last_name: string; email: string; password: string }) {
    const existingUser = await this.userRepository.findOneByEmail(userData.email);

    if (existingUser) {
      throw new AppError(409, 'User already exists');
    }

    userData.password = await bcryptHashString(userData.password);
    const newUser = await this.userRepository.createUser(userData);

    delete (newUser as any).password; // Remove password from the response

    return newUser;
  }

  async loginUser(email: string, password: string) {
    const existingUser = await this.userRepository.findOneByEmail(email);
    if (!existingUser) {
      throw new AppError(404, 'User not found');
    }

    const isValidPassword = await bcryptCompare(password, existingUser.password); // Compare password
    if (!isValidPassword) {
      throw new AppError(401, 'Invalid password');
    }

    const token = createToken(existingUser.id); // Generate JWT token
    return { token }; // Return token
  }

  async findUserById(id: number) {
    const user = await this.userRepository.findOneById(id);
    if (!user) {
      throw new AppError(404, 'User not found');
    }

    delete (user as any).password; // Optionally remove password from user data
    return user;
  }
}
