import { Injectable } from '@nestjs/common';
import { PartnerRepository } from './repository/PartnerRepository';
import { CreatePartnerInput } from './dto/create-partner.input';
import { UpdatePartnerInput } from './dto/update-partner.input';
import { FindOneParnetInput } from './dto/find-one-partner.input';
import { Partner, Client } from '@prisma/client';
import { FindAllParnerstInput } from './dto/find-all-partners.input';
import { UpdatePasswordPartnerInput } from './dto/update-password-partner.input';

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

  async findAll(data: FindAllParnerstInput){
    const partner = await this.partnerRepository.findAll(data);
    return partner;
  }

  async update(data: UpdatePartnerInput): Promise<Partner> {
    const partnerExists = await this.findOne({id: data.id});
    if(!partnerExists) throw new Error("Parceiro não encontrado");
    const partnerUpdated = await this.partnerRepository.update(data);
    return partnerUpdated
  }

  async updatePassword({ id, currentPassword, newPassword }: UpdatePasswordPartnerInput): Promise<Partner> {
    const partnerExists = await this.partnerRepository.findOne({id});
    if(!partnerExists) throw new Error("Parceiro não encontrado");
    const updatedPartnerPassword = await this.partnerRepository.updatePassword({id, currentPassword, newPassword});
    return updatedPartnerPassword;
  }
}
