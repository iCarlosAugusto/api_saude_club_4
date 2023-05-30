import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateClassInput {

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  name: string;

  @IsNumber()
  @IsNotEmpty()
  @Field(() => Number)
  lots: number;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  startAt: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  companyId: string;
}
