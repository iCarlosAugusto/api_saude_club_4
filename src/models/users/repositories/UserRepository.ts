import { User } from '@prisma/client';
import { IUserRepository } from './IUserRepository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prima.service';
import { CreateUserInput } from '../dto/create-user.input';

@Injectable()
class UserRepository implements IUserRepository {

  constructor(private prisma: PrismaService) {};

  async create(data: CreateUserInput): Promise<User> {
    const user = await this.prisma.user.create({ data });
    return user;
  }
  getAll(): Promise<User[]> {
    throw new Error('Method not implemented.');
  }
  getOne(): Promise<User> {
    throw new Error('Method not implemented.');
  }
}

export { UserRepository };