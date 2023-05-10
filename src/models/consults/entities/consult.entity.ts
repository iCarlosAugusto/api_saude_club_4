import { ObjectType, Field } from '@nestjs/graphql';
import { PartnerEntity } from 'src/models/partners/entities/partner.entity';
import { ServiceEntity } from 'src/models/services/entities/service.entity';

@ObjectType()
export class ConsultEntity {
  @Field(() => String)
  partnerId: string;

  @Field(() => PartnerEntity, { nullable: true })
  partner: PartnerEntity;

  @Field(() => ServiceEntity, { nullable: true })
  service: PartnerEntity;

  @Field(() => String)
  clientId: string;

  @Field(() => Boolean)
  isFinished: boolean;
}
