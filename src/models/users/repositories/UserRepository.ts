import { User } from '@prisma/client';
import { IUserRepository } from './IUserRepository';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prima.service';
import { CreateUserInput } from '../dto/create-user.input';
import { UpdateUserInput } from '../dto/update-user.input';

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

  async findOne(id: string): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: {
        id: id
      }
    })
    return user;
  }

  async findAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany();
    return users;
  }

  async update(data: UpdateUserInput): Promise<User> {
    const updateUser = await this.prisma.user.update({
      where: {
        id: data.id
      },
      data: {
        name: data.name,
        email: data.email,
      },
    })
    return updateUser;
  }
}

export { UserRepository };