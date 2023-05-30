import { Injectable } from '@nestjs/common';
import { CreateCompanyInput } from './dtos/create-company.input';
import { PrismaService } from '../users/services/prima.service';

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService) {}

  async create({ name, availableDay }: CreateCompanyInput) {
    return await this.prisma.company.create({
      data: {
        name,
        availableDay
      }
    })
  }

  async findAll() {
    return await this.prisma.company.findMany();
  }
}
