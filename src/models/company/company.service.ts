import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCompanyInput } from './dtos/create-company.input';
import { PrismaService } from '../users/services/prima.service';
import { FindCompaniesByDateInput } from './dtos/find-companies-by-date.input';
import { CreateClassInput } from './dtos/create-class.input';
import { FindAllClassesInput } from './dtos/find-classes.input';
import { BookClassInput } from './dtos/book-class.input';
import { FindCompanyByPartnerIdInput } from './dtos/find-company-by-id.input';
import { FindNextClientClassInput } from './dtos/find-next-client-class.input';
import { CancelClientClassInput } from './dtos/cancel-client-class.input';
import { CompanyRepository } from 'src/repositories/company.repository';
import { PartnerRepository } from 'src/repositories/partner.repository';

@Injectable()
export class CompanyService {
  constructor(
    private prisma: PrismaService, 
    private companyRepository: CompanyRepository,
    private partnerRepository: PartnerRepository
  ) {}

  async create({ name, availableDay, bannerImage, partnerId }: CreateCompanyInput) {

    const partner = await this.partnerRepository.findOneById({id: partnerId});

    if(!partner){
      throw new HttpException(
        'Não foi possível criar a companhia pelo id do parceiro fornecido',
        HttpStatus.BAD_REQUEST,
      );
    }
    const company = await this.companyRepository.create({
      name,availableDay, bannerImage, partnerId,
    })

    return company;
  }

  async findAll() {
    const companies = await this.companyRepository.findAll();
    return companies;
  }

  async findByPartnerId({ partnerId }: FindCompanyByPartnerIdInput) {

    const partner = await this.partnerRepository.findOneById({id: partnerId});
    if(!partner){
      throw new HttpException(
        'Não foi possível criar a companhia pelo id do parceiro fornecido',
        HttpStatus.BAD_REQUEST,
      );
    }
    const company = await this.companyRepository.findByPartnerId({partnerId})
    return company;
  }

  async findByDate({ date, partnerId }: FindCompaniesByDateInput) {

    const partner = await this.partnerRepository.findOneById({id: partnerId});
    if(!partner){
      throw new HttpException(
        'Não foi possível criar a companhia pelo id do parceiro fornecido',
        HttpStatus.BAD_REQUEST,
      );
    }

    const company = this.companyRepository.findByDate({
      date, partnerId
    });
    return company;
  }

  ///### CLASSES ###

  async createClass({name, lots, startAt, companyId, address, description, place, bannerImage, price, teacherName, dateTimestamp }: CreateClassInput){
    return this.prisma.class.create({
      data: {
        name,
        lots,
        startAt,
        address,
        description,
        place,
        companyId,
        bannerImage,
        price,
        teacherName,
        dateTimestamp
      }
    })
  }

  async findAllClasses({ companyId }: FindAllClassesInput){
    return this.prisma.class.findMany({
      where: {
        companyId
      },
    })
  }

  async bookClass({ classId, clientId }: BookClassInput) {
    return this.prisma.class.update({
      where: {
        id: classId
      },
      data: {
        lots: {
          decrement: 1
        },
        students: {
          create: [
            {
              client: {
                connect: {
                  id: clientId
                }
              }
            }
          ]
        }
      }
    })
  }

  async findNextClientClass({ clientId }: FindNextClientClassInput){
    console.log(clientId);
    var classes = await this.prisma.clientsOnClasses.findMany({
      where: {
        clientId
      },
      include: {
        class: true
      },
    });

    const nextClass = classes.reduce((menor, atual) => {
      if (parseInt(atual.class.dateTimestamp) < parseInt(menor.class.dateTimestamp)) {
        return atual;
      } else {
        return menor;
      }
    });
    return nextClass.class;
  }

  async cancelClass({classId, clientId }: CancelClientClassInput) {
    await this.prisma.clientsOnClasses.delete({
      where: {
        classId_clientId: {
          classId,
          clientId,
        }
      }
    })
    await this.prisma.class.update({
      where: {
        id: classId
      },
      data: {
        lots: {
          increment: 1
        }
      }
    });
    return 'Aula cancelada com sucesso!';
  }
}
