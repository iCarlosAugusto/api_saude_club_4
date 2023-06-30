import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class FindAllServicesInput {
  
  @IsOptional()
  @IsNumber()
  @Field(() => String)
  partnerId: string;

  @IsOptional()
  @IsNumber()
  @Field(() => Int)
  skip: number;
}
