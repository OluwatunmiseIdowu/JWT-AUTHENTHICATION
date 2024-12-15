import { injectable, inject } from 'tsyringe';
import AppError from '../../../../shared/error/app.error';
import { bcryptHashString } from '../../../../shared/utils/hash.utils';
import { UserRepository } from '../repositories/user.repository';

@injectable()
export class AuthService {
  constructor(@inject('UserRepository') private userRepository: UserRepository) {}

  async registerUser(userData: { fullName: string; email: string; password: string }): Promise<any> {
    const existingUser = await this.userRepository.findOneByEmail(userData.email);

    if (existingUser) {
      throw new AppError(409, 'User already exists');
    }

    userData.password = await bcryptHashString(userData.password);
    const newUser = await this.userRepository.createUser(userData);

    return newUser;
  }
}
