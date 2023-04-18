import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/models/users/services/prima.service";
import { CreatePartnerInput } from "../dto/create-partner.input";
import { Partner } from "@prisma/client";
import { UpdatePartnerInput } from "../dto/update-partner.input";
import { FindOneParnetInput } from "../dto/find-one-partner.input";
import { FindAllParnerstInput } from "../dto/find-all-partners.input";
import { UpdatePasswordPartnerInput } from "../dto/update-password-partner.input";

@Injectable()
export class PartnerRepository {

    constructor(private prisma: PrismaService){}

    async create(data: CreatePartnerInput): Promise<Partner> {
        const partner = await this.prisma.partner.create({
            data: {
                password: data.password,
                email: data.email,
                name: data.name,
                phoneNumber: data.phoneNumber,
                address: data.address,
                jobDescription: data.jobDescription,
                servicePrice: data.servicePrice,
                specialties: data.specialties,
                
            }
        })
        return partner;
    }

    async update(data: UpdatePartnerInput): Promise<Partner> {
        const partnerUpdated = await this.prisma.partner.update({
            where: { id: data.id },
            data: {
                address: data.address,
                jobDescription: data.jobDescription,
                servicePrice: data.servicePrice,
                specialties: data.specialties,
                email: data.email,
                name: data.name,
                phoneNumber: data.phoneNumber,
                photo: data.photo
            }
        })
        return partnerUpdated;
    }

    async updatePassword({ id, currentPassword, newPassword }: UpdatePasswordPartnerInput): Promise<Partner> {
        const partner = await this.prisma.partner.findUnique({
          where: {
            id: id
          }
        })
        if(partner.password !== currentPassword) throw new Error("Senha atual incorreta"); 
        const updatedPasswordPartner = await this.prisma.partner.update({
          where: {
            id: id,
          },
          data: {
            password: newPassword
          }
        })
    
        return updatedPasswordPartner;
      }

    async findOne({ id }: FindOneParnetInput): Promise<Partner> {
        const partner = await this.prisma.partner.findUnique({
            where: {
                id
            }
        })
        return partner;
    }

    async findAll({ skip }: FindAllParnerstInput): Promise<Partner[]> {
        const partners = await this.prisma.partner.findMany({
            skip: skip == null ? 0 : skip,
            take: 10
        });
        return partners;
    }
}