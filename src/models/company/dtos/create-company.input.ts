import { InputType, Field } from '@nestjs/graphql';
import { IsDate, IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateCompanyInput {

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  name: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  availableDay: string;

}
