import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { CompanyEntity } from './entities/company.entity';
import { CompanyService } from './company.service';
import { CreateCompanyInput } from './dtos/create-company.input';

@Resolver(() => CompanyEntity)
export class CompanyResolver {
  constructor(private readonly companyService: CompanyService) {}

  @Mutation(() => CompanyEntity)
  createCompany(
    @Args('createCompanyInput') createCompanyInput: CreateCompanyInput,
  ) {
    return this.companyService.create(createCompanyInput);
  }

  @Query(() => [CompanyEntity])
  findAllCompanies() {
    return this.companyService.findAll();
  }
}
