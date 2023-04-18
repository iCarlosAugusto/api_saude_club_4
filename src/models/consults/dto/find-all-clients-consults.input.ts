import { InputType, Int, Field } from '@nestjs/graphql';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

@InputType()
export class FindAllClientConsultsInput {
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  clientId: string;

  @IsOptional()
  @IsBoolean()
  @Field(() => Boolean, { defaultValue: false })
  isFinished?: boolean;

  @IsOptional()
  @IsNumber()
  @Field(() => Number, { defaultValue: 0 })
  skip?: number;
}
