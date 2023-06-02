import { User } from '@prisma/client';
import { IUserRepository } from './IUserRepository';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prima.service';
import { CreateUserInput } from '../dto/create-user.input';
import { UpdateUserInput } from '../dto/update-user.input';
import { UpdatePasswordClientInput } from '../dto/update-password-client.input';

@Injectable()
class UserRepository implements IUserRepository {

  constructor(private prisma: PrismaService) {};

  async create(data: CreateUserInput): Promise<User> {
    const isUserRepeted = await this.prisma.client.findUnique({
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

    const user: User = await this.prisma.client.create({ data });
    return user;
  }

  async findOne(id: string): Promise<User> {
    const user = await this.prisma.client.findFirst({
      where: {
        id: id
      }
    })
    return user;
  }

  async findAll(): Promise<User[]> {
    const users = await this.prisma.client.findMany();
    return users;
  }

  async update(data: UpdateUserInput): Promise<User> {
    const updateUser = await this.prisma.client.update({
      where: {
        id: data.id
      },
      data: {
        name: data.name,
        email: data.email,
        photo: data.photo,
        phoneNumber: data.phoneNumber
      },
    })
    return updateUser;
  }
  
  async updatePassword({ id, currentPassword, newPassword }: UpdatePasswordClientInput): Promise<User> {
    const client = await this.prisma.client.findUnique({
      where: {
        id: id
      }
    })
    if(client.password !== currentPassword) throw new Error("Senha atual incorreta"); 
    const updatedPasswordClient = await this.prisma.client.update({
      where: {
        id: id,
      },
      data: {
        password: newPassword
      }
    })

    return updatedPasswordClient;
  }
}

export { UserRepository };