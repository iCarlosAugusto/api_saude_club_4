import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/models/users/services/prima.service';
import { AuthenticationInput } from '../dto/authentication.input';

@Injectable()
export class AuthenticationRepository {
  constructor(private prisma: PrismaService) {}

  async authenticate({ id }: AuthenticationInput) {
    const user = await this.prisma.user.findFirst({
      where: { id }
    });

    if(user != null) return user;

    const partner = await this.prisma.partner.findFirst({
      where: { id }
    })

    if(partner != null) return partner;

    
  }
}
