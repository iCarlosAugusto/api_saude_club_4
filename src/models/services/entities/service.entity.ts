import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Service {

  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  price: string;

  @Field(() => String)
  partnerId: string;
}
