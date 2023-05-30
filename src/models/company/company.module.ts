import { Module } from '@nestjs/common';
import { PrismaService } from '../users/services/prima.service';
import { CompanyResolver } from './company.resolver';
import { CompanyService } from './company.service';


@Module({
  providers: [CompanyResolver, CompanyService,  PrismaService]
})
export class CompanyModule {}