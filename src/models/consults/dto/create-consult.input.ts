import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateConsultInput {

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  clientId: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  partnerId: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  serviceId: string;

}
