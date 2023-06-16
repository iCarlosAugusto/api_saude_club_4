import { Module } from '@nestjs/common';
import { PrismaService } from './services/prima.service';
import { ClientRepository } from '../../repositories/client.repository';
import { ClientService } from './client.service';
import { ClientResolver } from './client.resolver';

@Module({
  providers: [ClientResolver, ClientService, PrismaService, ClientRepository],
})
export class ClientsModule {}
