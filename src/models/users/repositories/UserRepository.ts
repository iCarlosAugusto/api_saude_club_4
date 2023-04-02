import { User } from '@prisma/client';
import { IUserRepository } from './IUserRepository';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prima.service';
import { CreateUserInput } from '../dto/create-user.input';

@Injectable()
class UserRepository implements IUserRepository {

  constructor(private prisma: PrismaService) {};

  async create(data: CreateUserInput): Promise<User> {
    const isUserRepeted = await this.prisma.user.findUnique({
      where: {
        email: data.email
      }
    });
    if(!!isUserRepeted){
      throw new HttpException(
        'Esse email já é usado por outro usuário. Por favor, tente outro.',
         HttpStatus.BAD_REQUEST
      );
    }

    const user: User = await this.prisma.user.create({ data });
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