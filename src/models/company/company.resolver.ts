import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { CompanyEntity } from './entities/company.entity';
import { CompanyService } from './company.service';
import { CreateCompanyInput } from './dtos/create-company.input';
import { FindCompaniesByDateInput } from './dtos/find-companies-by-date.input';
import { CreateClassInput } from './dtos/create-class.input';
import { ClassEntity } from './entities/class.entity';
import { FindAllClassesInput } from './dtos/find-classes.input';

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

  @Query(() => [CompanyEntity])
  findCompaniesByDate(
    @Args('findCompaniesByDate') findCompaniesByDate: FindCompaniesByDateInput,
  ) {
    return this.companyService.findByDate(findCompaniesByDate);
  }

  @Mutation(() => ClassEntity)
  createClass(
    @Args('createClass') createClass: CreateClassInput,
  ){
    return this.companyService.createClass(createClass);
  }

  @Query(() => [ ClassEntity ])
  findAllClasses(
    @Args('findAllClasses') findAllClasses: FindAllClassesInput
  ){
    return this.companyService.findAllClasses(findAllClasses)
  }
}
