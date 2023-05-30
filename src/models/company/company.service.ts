import { Injectable } from '@nestjs/common';
import { CreateCompanyInput } from './dtos/create-company.input';
import { PrismaService } from '../users/services/prima.service';
import { FindCompaniesByDateInput } from './dtos/find-companies-by-date.input';
import { CreateClassInput } from './dtos/create-class.input';
import { FindAllClassesInput } from './dtos/find-classes.input';

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService) {}

  async create({ name, availableDay, bannerImage }: CreateCompanyInput) {
    return await this.prisma.company.create({
      data: {
        name,
        availableDay,
        bannerImage
      }
    })
  }

  async findAll() {
    return await this.prisma.company.findMany();
  }

  async findByDate({ date }: FindCompaniesByDateInput) {
    console.log("date: ", date);
    return this.prisma.company.findMany({
      where: {
        availableDay: date
      }
    })
  }

  async createClass({name, lots, startAt, companyId, address, description, place }: CreateClassInput){
    return this.prisma.class.create({
      data: {
        name,
        lots,
        startAt,
        address,
        description,
        place,
        companyId,
      }
    })
  }

  async findAllClasses({ companyId }: FindAllClassesInput){
    return this.prisma.class.findMany({
      where: {
        companyId
      }
    })
  }
}
