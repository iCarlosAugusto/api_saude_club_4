import { Module } from '@nestjs/common';
import { ConsultsService } from './consults.service';
import { ConsultsResolver } from './consults.resolver';
import { PrismaService } from '../users/services/prima.service';
import { ConsultRepository } from './repository/consult.repository';

@Module({
  providers: [ConsultsResolver, ConsultsService,  PrismaService, ConsultRepository]
})
export class ConsultsModule {}

