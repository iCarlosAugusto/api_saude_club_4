import { Injectable } from '@nestjs/common';
import { UpdatePartnerInput } from './dto/update-partner.input';
import { PartnerRepository } from './repository/PartnerRepository';
import { CreatePartnerInput } from './dto/create-partner.input';

@Injectable()
export class PartnersService {

  constructor(
    private partnerRepository: PartnerRepository 
  ){}

  async create(data: CreatePartnerInput) {
    const partner = await this.partnerRepository.create(data); 
    return partner;
  }

  async createConsult() {
    return await this.partnerRepository.createConsult();
  }

  findAll() {
    return `This action returns all partners`;
  }

  findOne(id: number) {
    return `This action returns a #${id} partner`;
  }

  update(id: number, updatePartnerInput: UpdatePartnerInput) {
    return `This action updates a #${id} partner`;
  }

  remove(id: number) {
    return `This action removes a #${id} partner`;
  }
}
