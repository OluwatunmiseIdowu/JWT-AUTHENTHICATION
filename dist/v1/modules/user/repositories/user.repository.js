var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { injectable } from 'tsyringe';
import { User } from '../../../../database/entities/User';
import AppDataSource from '../../../../database';
let UserRepository = class UserRepository {
    userRepo;
    constructor() {
        this.userRepo = AppDataSource.getRepository(User);
    }
    async findOneByEmail(email) {
        return this.userRepo.findOne({ where: { email } });
    }
    async createUser(userData) {
        const newUser = this.userRepo.create(userData);
        await this.userRepo.save(newUser);
        return newUser;
    }
};
UserRepository = __decorate([
    injectable(),
    __metadata("design:paramtypes", [])
], UserRepository);
export { UserRepository };
//# sourceMappingURL=user.repository.js.map