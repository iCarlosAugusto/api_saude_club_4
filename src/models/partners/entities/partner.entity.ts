import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class PartnerEntity {
  @Field(() => String)
  id: string;

  @Field(() => String)
  createdAt: Date;

  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;
}
