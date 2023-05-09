import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field(() => String, {nullable: true})
  id?: string;

  @IsEmail({}, { message: 'Email inválido' })
  @Field(() => String)
  email: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  identification: string;

  @IsNotEmpty({ message: 'A senha é obrigatório' })
  @Field(() => String)
  password: string;

  @IsNotEmpty({ message: 'O nome é obrigatória' })
  @Field(() => String)
  name: string;

  @IsNotEmpty({ message: 'O número para contato é obrigatória' })
  @Field(() => String)
  phoneNumber: string;
}
