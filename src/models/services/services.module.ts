import { Module } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ServicesResolver } from './services.resolver';
import { ServiceRepository } from './repositories/ServiceRepository';
import { PrismaService } from '../users/services/prima.service';

@Module({
  providers: [ServicesResolver, ServicesService, ServiceRepository, PrismaService]
})
export class ServicesModule {}
