import { Injectable } from '@nestjs/common';
import { PartnerRepository } from './repository/PartnerRepository';
import { CreatePartnerInput } from './dto/create-partner.input';
import { UpdatePartnerInput } from './dto/update-partner.input';
import { PartnerEntity } from './entities/partner.entity';

@Injectable()
export class PartnersService {

  constructor(
    private partnerRepository: PartnerRepository 
  ){}

  async create(data: CreatePartnerInput) {
    const partner = await this.partnerRepository.create(data); 
    return partner;
  }

  async update(data: UpdatePartnerInput): Promise<PartnerEntity> {
    const partnerUpdated = await this.partnerRepository.update(data);
    return partnerUpdated
  }

  async createConsult() {
    return await this.partnerRepository.createConsult();
  }
}
