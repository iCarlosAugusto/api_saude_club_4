import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

@InputType()
export class FindAllServicesInput {
  
  @IsOptional()
  @IsNumber()
  @Field(() => Int)
  skip: number;
}
