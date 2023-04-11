import { Injectable } from '@nestjs/common';
import { CreateConsultInput } from './dto/create-consult.input';
import { UpdateConsultInput } from './dto/update-consult.input';
import { ConsultRepository } from './repository/consult.repository';

@Injectable()
export class ConsultsService {

  constructor(private consultRepository: ConsultRepository){}

  async create(createConsultInput: CreateConsultInput) {
    return await this.consultRepository.create(createConsultInput);
  }

  findAll() {
    return `This action returns all consults`;
  }

  findOne(id: number) {
    return `This action returns a #${id} consult`;
  }

  update(id: number, updateConsultInput: UpdateConsultInput) {
    return `This action updates a #${id} consult`;
  }

  remove(id: number) {
    return `This action removes a #${id} consult`;
  }
}
