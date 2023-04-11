import { Injectable } from "@nestjs/common";
import { CreateConsultInput } from "../dto/create-consult.input";
import { PrismaService } from "src/models/users/services/prima.service";

@Injectable()
export class ConsultRepository {

  constructor(private prisma: PrismaService){}

  async create({ clientId, partnerId }: CreateConsultInput) {
    const consult = await this.prisma.consult.create({
      data: {
          clientId,
          partnerId,
      }
    })
    return consult;
  }
}