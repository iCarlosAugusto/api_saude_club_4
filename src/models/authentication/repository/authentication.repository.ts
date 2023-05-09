import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/models/users/services/prima.service';
import { AuthenticationInput } from '../dto/authentication.input';
import { Partner } from '@prisma/client';
import { User } from 'src/models/users/entities/user.entity';
import { PartnerEntity } from 'src/models/partners/entities/partner.entity';

@Injectable()
export class AuthenticationRepository {
  constructor(private prisma: PrismaService) {}

  async authenticate({ identification, password }: AuthenticationInput) {
    const user = await this.prisma.user.findFirst({
      where: { 
        identification,
        password
      }
    });
  
    if(user != null) {
      return { user };
    }else{
      const partner = await this.prisma.partner.findFirst({
        where: { 
          identification,
          password
        }
      })
      return { partner };
    }
  }
}
