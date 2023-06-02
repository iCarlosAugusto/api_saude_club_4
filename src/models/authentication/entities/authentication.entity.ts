import { ObjectType, Field } from '@nestjs/graphql';
import { AdminEntity } from 'src/models/admin/entities/admin.entity';
import { PartnerEntity } from 'src/models/partners/entities/partner.entity';
import { User } from 'src/models/users/entities/client.entity';

@ObjectType()
export class AuthenticationEntity {

  @Field(() => PartnerEntity, { nullable: true })
  partner?: PartnerEntity;

  @Field(() => User, { nullable: true})
  user?: User;

  @Field(() => AdminEntity, { nullable: true})
  admin?: AdminEntity;
}
