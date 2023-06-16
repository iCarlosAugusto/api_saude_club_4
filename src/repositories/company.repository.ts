import { Injectable } from '@nestjs/common';
import { BookClassInput } from 'src/models/company/dtos/book-class.input';
import { CancelClientClassInput } from 'src/models/company/dtos/cancel-client-class.input';
import { CreateClassInput } from 'src/models/company/dtos/create-class.input';
import { CreateCompanyInput } from 'src/models/company/dtos/create-company.input';
import { FindAllClassesInput } from 'src/models/company/dtos/find-classes.input';
import { FindCompaniesByDateInput } from 'src/models/company/dtos/find-companies-by-date.input';
import { FindCompanyByPartnerIdInput } from 'src/models/company/dtos/find-company-by-id.input';
import { FindNextClientClassInput } from 'src/models/company/dtos/find-next-client-class.input';
import { PrismaService } from 'src/models/users/services/prima.service';

@Injectable()
export class CompanyRepository {
  constructor(private prisma: PrismaService) {}

  async create({ name, availableDay, bannerImage, partnerId }: CreateCompanyInput) {
    return await this.prisma.company.create({
      data: {
        name,
        availableDay,
        bannerImage,
        partnerId 
      }
    })
  }

  async findAll() {
    return await this.prisma.company.findMany();
  }

  async findByPartnerId({ partnerId }: FindCompanyByPartnerIdInput) {
    return await this.prisma.company.findMany({
      where: {
        partnerId
      }
    })
  }

  async findByDate({ date, partnerId }: FindCompaniesByDateInput) {
    return this.prisma.company.findMany({
      where: {
        availableDay: {
          has: date
        },
        partnerId
      }
    })
  }

  async findOneById(id: string){
    return await this.prisma.company.findUnique({
      where: {
        id
      }
    });
  }

  // ### CLASSES ####

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
