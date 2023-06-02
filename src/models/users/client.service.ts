import { Injectable } from '@nestjs/common';
import { PrismaService } from './services/prima.service';
import { UpdatePasswordClientInput } from './dto/update-password-client.input';
import { ClientRepository } from './repositories/UserRepository';
import { CreateClientInput } from './dto/create-client.input';
import { Client } from '@prisma/client';
import { UpdateClientInput } from './dto/update-client.input';

@Injectable()
export class ClientService {
  constructor(
    private prisma: PrismaService, 
    private clientRepository: ClientRepository 
  ) {}

  async create(data: CreateClientInput): Promise<Client> {
    const client = await this.clientRepository.create(data);
    return client;
  }

  async findOne(id: string): Promise<Client> {
    const client = await this.clientRepository.findOne(id);
    if(!client){
      throw new Error('Cliente não encontrado');
    }
    return client;
  }

  async findAll(): Promise<Client[]> {
    const clients = await this.clientRepository.findAll();
    return clients;
  }

  async update(updateClientInput: UpdateClientInput): Promise<Client> {
    const isClientExists = await this.clientRepository.findOne(updateClientInput.id);
    if(!isClientExists) throw new Error("Cliente não encontrado");
    const updatedClient = await this.clientRepository.update(updateClientInput);
    return updatedClient;
  }

  async updatePassword({ id, currentPassword, newPassword }: UpdatePasswordClientInput): Promise<Client> {
    const isClientExists = await this.clientRepository.findOne(id);
    if(!isClientExists) throw new Error("Cliente não encontrado");
    const updatedClintPassword = await this.clientRepository.updatePassword({id, currentPassword, newPassword});
    return updatedClintPassword;
  }
}
