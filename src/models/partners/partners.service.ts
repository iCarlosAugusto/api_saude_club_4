import { Injectable } from '@nestjs/common';
import { PartnerRepository } from './repository/PartnerRepository';
import { CreatePartnerInput } from './dto/create-partner.input';
import { UpdatePartnerInput } from './dto/update-partner.input';
import { PartnerEntity } from './entities/partner.entity';
import { FindOneParnetInput } from './dto/find-one-partner.input';
import { Partner } from '@prisma/client';

@Injectable()
export class PartnersService {

  constructor(private partnerRepository: PartnerRepository){}

  async create(data: CreatePartnerInput) {
    const partner = await this.partnerRepository.create(data); 
    return partner;
  }

  async findOne(data: FindOneParnetInput){
    const partner = await this.partnerRepository.findOne(data);
    return partner;
  }

  async findAll(){
    const partner = await this.partnerRepository.findAll();
    return partner;
  }


  async update(data: UpdatePartnerInput): Promise<Partner> {
    const partnerUpdated = await this.partnerRepository.update(data);
    return partnerUpdated
  }
}
