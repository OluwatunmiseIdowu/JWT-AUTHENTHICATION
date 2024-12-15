import { Repository } from 'typeorm';
import { injectable, inject } from 'tsyringe';
import { User } from '../../../../database/entities/User';
import AppDataSource from '../../../../database';

@injectable()
export class UserRepository {
  private userRepo: Repository<User>;

  constructor() {
    this.userRepo = AppDataSource.getRepository(User);
  }

  async findOneByEmail(email: string): Promise<User | null> {
    return this.userRepo.findOne({ where: { email } });
  }

  async createUser(userData: {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
  }): Promise<User> {
    const newUser = this.userRepo.create(userData);
    await this.userRepo.save(newUser);

    return newUser;
  }
}
