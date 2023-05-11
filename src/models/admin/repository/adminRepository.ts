import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/models/users/services/prima.service";
import { Admin, Partner } from "@prisma/client";
import { CreateAdminInput } from "../dto/create-admin.input";

@Injectable()
export class AdminRepository {

    constructor(private prisma: PrismaService){}

    async create(data: CreateAdminInput): Promise<Admin> {
        const admin = await this.prisma.admin.create({
            data: {
                identification: data.identification,
                email: data.email,
                name: data.name,
                password: data.password,
                phoneNumber: data.phoneNumber,
                photo: data.phoneNumber
            }
        })
        return admin;
    }
}