import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ClassEntity {

  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => Int)
  lots: number;

  @Field(() => String)
  startAt: string;
}
