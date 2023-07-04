import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateConsultInput {

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  clientId: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  clientEmailMessage: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  clientEmail: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  partnerId: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  partnerEmailMessage: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  partnerEmail: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  serviceId: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  date: string;
}
