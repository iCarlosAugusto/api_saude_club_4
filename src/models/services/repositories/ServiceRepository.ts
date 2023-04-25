import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/models/users/services/prima.service';
import { CreateServiceInput } from '../dto/create-service.input';
import { FindAllServicesInput } from '../dto/find-all-services.input';

@Injectable()
class ServiceRepository {

  constructor(private prisma: PrismaService) {};

  async create(data: CreateServiceInput) {
    const service = await this.prisma.service.create({
      data: {
        name: data.name,
        description: data.description,
        price: data.price,
        partnerId: data.partnerId
      }
    });
    return service;
  }

  async findAll({ skip }: FindAllServicesInput) {
    const services = await this.prisma.service.findMany({
      skip: skip == null ? 0 : skip,
      take: 10
  });
  return services;
  }
}

export { ServiceRepository };