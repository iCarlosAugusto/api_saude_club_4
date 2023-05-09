import { ObjectType, Field } from '@nestjs/graphql';
import { PartnerEntity } from 'src/models/partners/entities/partner.entity';

@ObjectType()
export class ServiceEntity {

  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => PartnerEntity)
  partner: PartnerEntity;

  @Field(() => String)
  description: string;

  @Field(() => String)
  price: string;

  @Field(() => String)
  partnerId: string;
}
