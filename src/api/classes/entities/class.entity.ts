import { ObjectType, Field, Int } from '@nestjs/graphql';
import { ClientEntity } from 'src/api/users/entities/client.entity';

@ObjectType()
export class ClassEntity {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => Int)
  lots: number;

  @Field(() => String)
  startAt: string;

  @Field(() => String)
  address: string;

  @Field(() => String)
  place: string;

  @Field(() => String)
  price: string;

  @Field(() => String)
  bannerImage: string;

  @Field(() => String)
  teacherName: string;

  @Field(() => String)
  date: string;

  @Field(() => [ClientEntity], { nullable: true })
  clients: [ClientEntity];
}
