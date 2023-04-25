import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateServiceInput {

  @IsNotEmpty({ message: 'O nome é obrigatório' })
  @Field(() => String)
  name: string;

  @IsNotEmpty({ message: 'A descrição é obrigatório' })
  @Field(() => String)
  description: string;

  @IsNotEmpty({ message: 'O preço é obrigatório' })
  @Field(() => String)
  price: string;

  @IsNotEmpty({ message: 'O partner id é obrigatório' })
  @Field(() => String)
  partnerId: string;

}
