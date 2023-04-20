import { Injectable } from '@nestjs/common';
import { CreateConsultInput } from './dto/create-consult.input';
import { UpdateConsultInput } from './dto/update-consult.input';
import { ConsultRepository } from './repository/consult.repository';
import { FindAllClientConsultsInput } from './dto/find-all-clients-consults.input';
import { FindOneConsultInput } from './dto/find-one-consult.input';

@Injectable()
export class ConsultsService {
  constructor(private consultRepository: ConsultRepository) {}

  async create(createConsultInput: CreateConsultInput) {
    return await this.consultRepository.create(createConsultInput);
  }

  async findAllClientConsults(findAllClientConsults: FindAllClientConsultsInput) {
    return await this.consultRepository.findAllClientConsults(
      findAllClientConsults,
    );
  }

  async findOne(findOneConultInput: FindOneConsultInput) {
    return await this.consultRepository.findOneConsult(findOneConultInput);
  }

  update(id: number, updateConsultInput: UpdateConsultInput) {
    return `This action updates a #${id} consult`;
  }

  remove(id: number) {
    return `This action removes a #${id} consult`;
  }
}
