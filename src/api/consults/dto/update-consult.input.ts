import { CreateConsultInput } from './create-consult.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateConsultInput extends PartialType(CreateConsultInput) {
  @Field(() => Int)
  id: number;
}
