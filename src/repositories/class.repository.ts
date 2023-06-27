import { Injectable } from '@nestjs/common';
import { BookClassInput } from 'src/models/company/dtos/book-class.input';
import { CancelClientClassInput } from 'src/models/company/dtos/cancel-client-class.input';
import { CreateClassInput } from 'src/models/company/dtos/create-class.input';
import { FindAllClassesInput } from 'src/models/company/dtos/find-all-classes.input';
import { FindAllClassesByDateInput } from 'src/models/company/dtos/find-classes_by_date.input';
import { FindNextClientClassInput } from 'src/models/company/dtos/find-next-client-class.input';
import { PrismaService } from 'src/models/users/services/prima.service';

@Injectable()
export class ClassRepository {
  constructor(private prisma: PrismaService) {}

  async createClass({name, lots, startAt, companyId, address, description, place, bannerImage, teacherName, dateTimestamp, date }: CreateClassInput){
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
        teacherName,
        dateTimestamp,
        date
      }
    })
  }

  async findClassById(id: string) {
    return await this.prisma.class.findUnique({
      where: {
        id
      }
    })
  }

  async findAllClasses({ companyId } : FindAllClassesInput) {
    return await this.prisma.class.findMany({
      where: {
        companyId
      }
    })
  }

  async findAllClassesByDate({ companyId, date }: FindAllClassesByDateInput){
    return this.prisma.class.findMany({
      where: {
        companyId,
        date
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

