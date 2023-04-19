import { Injectable } from '@nestjs/common';
import { CreateConsultInput } from '../dto/create-consult.input';
import { PrismaService } from 'src/models/users/services/prima.service';
import { FindAllClientConsultsInput } from '../dto/find-all-clients-consults.input';

@Injectable()
export class ConsultRepository {
  constructor(private prisma: PrismaService) {}

  async create({ clientId, partnerId }: CreateConsultInput) {
    const consult = await this.prisma.consult.create({
      data: {
        clientId,
        partnerId,
      },
    });
    return consult;
  }

  async findAllClientConsults({
    clientId,
    isFinished,
    skip,
    startDateTimestamp,
    limitDateTimestamp
  }: FindAllClientConsultsInput) {
    const consults = await this.prisma.consult.findMany({
      where: {
        clientId: clientId,
        isFinished,
        createdAt: {
          gte: new Date(startDateTimestamp).toISOString(),
          lte: new Date(limitDateTimestamp).toISOString()
        }
      },
      skip,
      take: 10,
    });

    return consults;
  }
}
