import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class ConsultEntity {
  @Field(() => String)
  partnerId: string;

  @Field(() => String)
  clientId: string;

  @Field(() => Boolean)
  isFinished: boolean;
}
