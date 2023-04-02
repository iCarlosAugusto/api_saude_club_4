import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { PrismaService } from './services/prima.service';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateUserInput): Promise<User> {
    const user = this.prisma.user.create({ data });
    return user;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  //update(id: number, updateUserInput: UpdateUserInput) {
  //  return `This action updates a #${id} user`;
  //}

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
