import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { CompanyEntity } from './entities/company.entity';
import { CompanyService } from './company.service';
import { CreateCompanyInput } from './dtos/create-company.input';
import { FindCompaniesByDateInput } from './dtos/find-companies-by-date.input';
import { CreateClassInput } from './dtos/create-class.input';
import { ClassEntity } from './entities/class.entity';
import { BookClassInput } from './dtos/book-class.input';
import { FindCompanyByPartnerIdInput } from './dtos/find-company-by-id.input';
import { FindNextClientClassInput } from './dtos/find-next-client-class.input';
import { CancelClientClassInput } from './dtos/cancel-client-class.input';
import { FindAllClassesByDateInput } from './dtos/find-classes_by_date.input';
import { FindAllClassesInput } from './dtos/find-all-classes.input';

@Resolver(() => CompanyEntity)
export class CompanyResolver {
  constructor(private readonly companyService: CompanyService) {}

  @Mutation(() => CompanyEntity)
  createCompany(
    @Args('createCompanyInput') createCompanyInput: CreateCompanyInput,
  ) {
    return this.companyService.create(createCompanyInput);
  }

  @Query(() => [ CompanyEntity ])
  findCompaniesByPartnerId(
    @Args('findCompanyByPartnerId') findCompanyByPartnerId: FindCompanyByPartnerIdInput
  ) {
    return this.companyService.findByPartnerId(findCompanyByPartnerId);
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

  @Query(() => [ ClassEntity ], { nullable: true })
  findAllClasses(
    @Args('findAllClassesInput') findAllClassesInput: FindAllClassesInput
  ){
    return this.companyService.findAllClassses(findAllClassesInput);
  }

  @Query(() => [ ClassEntity ])
  findAllClassesByDate(
    @Args('findAllClassesByDateInput') findAllClassesByDate: FindAllClassesByDateInput
  ){
    return this.companyService.findAllClassesByDate(findAllClassesByDate)
  }

  @Mutation(() => ClassEntity)
  bookClass(
    @Args('bookClassInput') bookClassInput: BookClassInput
  ){
    return this.companyService.bookClass(bookClassInput);
  }

  @Query(() => ClassEntity, {nullable: true})
  findNextClientClass(
    @Args('findNextClientClassInput') findNextClientClassInput: FindNextClientClassInput
  ) {
    return this.companyService.findNextClientClass(findNextClientClassInput);
  }

  @Mutation(() => String)
  cancelClass(
    @Args('cancelClientClass') cancelClientClass: CancelClientClassInput
  ){
    return this.companyService.cancelClass(cancelClientClass);
  }
}
