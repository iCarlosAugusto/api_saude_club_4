import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/models/users/services/prima.service";
import { CreatePartnerInput } from "../dto/create-partner.input";
import { Partner } from "@prisma/client";
import { UpdatePartnerInput } from "../dto/update-partner.input";
import { PartnerEntity } from "../entities/partner.entity";
import { FindOneParnetInput } from "../dto/find-one-partner.input";

@Injectable()
export class PartnerRepository {

    constructor(private prisma: PrismaService){}

    async create(data: CreatePartnerInput): Promise<Partner> {
        const partner = await this.prisma.partner.create({
            data: {
                email: data.email,
                name: data.name,
                phoneNumber: data.phoneNumber,
                address: data.address,
                jobDescription: data.jobDescription,
                servicePrice: data.servicePrice,
                specialties: data.specialties
            }
        })
        return partner;
    }

    async update(data: UpdatePartnerInput): Promise<Partner> {
        const partnerUpdated = await this.prisma.partner.update({
            where: { id: data.id },
            data: {
                email: data.email,
                name: data.name,
                phoneNumber: data.phoneNumber
            }
        })
        return partnerUpdated;
    }

    async findOne({ id }: FindOneParnetInput): Promise<Partner> {
        const partner = await this.prisma.partner.findUnique({
            where: {
                id
            }
        })
        return partner;
    }

    async findAll(): Promise<Partner[]> {
        const partners = await this.prisma.partner.findMany();
        return partners;
    }
}