import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/models/users/services/prima.service";
import { CreatePartnerInput } from "../dto/create-partner.input";
import { Partner } from "@prisma/client";

@Injectable()
export class PartnerRepository {

    constructor(private prisma: PrismaService){}

    async create(data: CreatePartnerInput): Promise<Partner> {
        const partner = await this.prisma.partner.create({
            data: {
                email: data.email,
                name: data.name,
                phoneNumber: data.phoneNumber,
                
            }
        })

        return partner;
    }

    async createConsult() {
        await this.prisma.consult.create({
            data: {
                clientId: "123",
                partnerId: "f7e7d14a-6c5d-478c-947e-7396123af48b"
            }
        })

        return "Deu certo!";
    }
}