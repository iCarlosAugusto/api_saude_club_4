import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class UpdatePartnerInput {
  
  @IsNotEmpty({ message: "Id é obrigatório"})
  @IsString({message: "O Id precisa ser uma string"})
  @Field(() => String)
  id: string;

  @IsEmail({}, { message: 'Email inválido' })
  @Field(() => String)
  email: string;

  @IsNotEmpty({ message: 'A senha é obrigatório' })
  @Field(() => String)
  password: string;

  @IsNotEmpty({ message: 'O nome é obrigatória' })
  @Field(() => String)
  name: string;

  @IsNotEmpty({ message: 'O número é obrigatória' })
  @Field(() => String)
  phoneNumber: string;
  
  @IsNotEmpty({ message: 'A specialties é obrigatória' })
  @Field(() => String)
  specialties: string;

  @IsNotEmpty({ message: 'A specialties é obrigatória' })
  @Field(() => String)
  address: string;

  @IsNotEmpty({ message: 'A specialties é obrigatória' })
  @Field(() => String)
  servicePrice: string;

  @IsNotEmpty({ message: 'A specialties é obrigatória' })
  @Field(() => String)
  jobDescription: string;
}
