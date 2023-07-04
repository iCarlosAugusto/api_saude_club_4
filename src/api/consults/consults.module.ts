import { Module } from '@nestjs/common';
import { ConsultsService } from './consults.service';
import { ConsultsResolver } from './consults.resolver';
import { PrismaService } from '../users/services/prima.service';
import { ConsultRepository } from './repository/consult.repository';
import { EmailService } from 'src/utils/email.service';

@Module({
  providers: [ConsultsResolver, ConsultsService,  PrismaService, ConsultRepository, EmailService]
})
export class ConsultsModule {}

