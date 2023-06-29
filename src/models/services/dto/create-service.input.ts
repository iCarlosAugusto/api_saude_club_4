import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

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

  @IsString()
  @IsNotEmpty({ message: "O banner da imagem é obrigatório"})
  @Field(() => String)
  bannerImage: string;

  @IsString()
  @IsNotEmpty({ message: "O nome do parceiro responsável é obrigatório"})
  @Field(() => String)
  partnerName: string;

  @IsString()
  @IsNotEmpty({ message: "A foto do parceiro responsável é obrigatório"})
  @Field(() => String)
  partnerPhoto: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  partnerEmail: string;

  @IsString()
  @IsNotEmpty({ message: "O endereço do parceiro responsável é obrigatório"})
  @Field(() => String)
  address: string;

  @IsString()
  @IsNotEmpty({ message: "O endereço do parceiro responsável é obrigatório"})
  @Field(() => String)
  specialitie: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  startAt: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  endAt: string;
}