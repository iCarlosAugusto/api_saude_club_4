import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { PrismaService } from './services/prima.service';
import { User } from './entities/user.entity';
import { UserRepository } from './repositories/UserRepository';
import { UpdateUserInput } from './dto/update-user.input';

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

  async findOne(id: string): Promise<User> {
    const user = await this.userRepository.findOne(id);
    if(!user){
      throw new Error('Usuário não encontrado');
    }
    return user;
  }

  async update(updateUserInput: UpdateUserInput): Promise<User> {
    const isUserExists = await this.userRepository.findOne(updateUserInput.id);
    if(!isUserExists) throw new Error("Usuário não encontrado");
    const updatedUser = await this.userRepository.update(updateUserInput);
    return updatedUser;
  }

  addConsult() {
    const user = this.prisma.user.update({
      where: {
        id: '17eeecf2-dd47-4e4d-91da-cff58c5a0a72',
      },
      data: {
        consults: {
          create: {
            id: '17eeecf2-dd47-4e4d-91da-cff58c5a0a72',
            doctorName: 'Dr. Mauro',
          },
        },
      },
    });
    return user;
  }
}
