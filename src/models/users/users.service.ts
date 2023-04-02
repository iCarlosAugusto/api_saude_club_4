import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { PrismaService } from './services/prima.service';
import { User } from './entities/user.entity';
import { UserRepository } from './repositories/UserRepository';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService, 
    private userRepository: UserRepository 
  ) {}

  async create(data: CreateUserInput): Promise<User> {
    const user = await this.userRepository.create(data);
    return user;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  addConsult() {
    const user = this.prisma.user.update({
      where: {
        id: '123',
      },
      data: {
        consults: {
          create: {
            id: '321',
            doctorName: 'Dr. Jorge',
          },
        },
      },
    });
    return user;
  }

  //update(id: number, updateUserInput: UpdateUserInput) {
  //  return `This action updates a #${id} user`;
  //}

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
