import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateUserInput {
  @Field(() => String)
  id?: string;

  @IsEmail({}, { message: 'Email inválido' })
  @Field(() => String)
  email: string;
  
  @IsNotEmpty({ message: 'O nome é obrigatória' })
  @Field(() => String)
  name: string;
}
