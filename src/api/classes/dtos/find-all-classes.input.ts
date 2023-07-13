import { InputType, Field } from '@nestjs/graphql';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class FindAllClassesInput {
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  companyId: string;
  
  @IsOptional()
  @IsBoolean()
  @Field(() => Boolean, { defaultValue: false })
  bookedClasses: false;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  date?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  clientIdentification?: string;
}
