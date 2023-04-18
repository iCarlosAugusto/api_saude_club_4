import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateUserInput {
  @Field(() => String)
  id?: string;

  @IsOptional()
  @IsEmail({}, { message: 'Email inválido' })
  @Field(() => String, { nullable: true })
  email: string;
  
  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  name: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  photo: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  phoneNumber: string;
}
