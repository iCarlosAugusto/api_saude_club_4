import { ObjectType, Field } from '@nestjs/graphql';
import { PartnerEntity } from 'src/models/partners/entities/partner.entity';
import { User } from 'src/models/users/entities/client.entity';

@ObjectType()
export class AdminEntity {

  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  identification: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  phoneNumber
}
