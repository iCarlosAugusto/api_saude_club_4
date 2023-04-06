import { Module } from '@nestjs/common';
import { PartnersService } from './partners.service';
import { PartnersResolver } from './partners.resolver';
import { PrismaService } from '../users/services/prima.service';
import { PartnerRepository } from './repository/PartnerRepository';

@Module({
  providers: [PartnersResolver, PartnersService, PrismaService, PartnerRepository]
})
export class PartnersModule {}
