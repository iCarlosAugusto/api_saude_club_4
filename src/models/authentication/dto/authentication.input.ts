import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class AuthenticationInput {
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  id: string;
}
