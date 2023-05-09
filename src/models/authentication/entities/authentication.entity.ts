import { ObjectType, Field } from '@nestjs/graphql';
import { PartnerEntity } from 'src/models/partners/entities/partner.entity';
import { User } from 'src/models/users/entities/user.entity';

@ObjectType()
export class AuthenticationEntity {

  @Field(() => PartnerEntity, { nullable: true })
  partner?: PartnerEntity;

  @Field(() => User, { nullable: true})
  user?: User;
}
