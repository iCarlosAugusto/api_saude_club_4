import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Partner {
  @Field(() => String)
  id: string;

  @Field(() => String)
  createdAt: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;
}
