import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ConsultsService } from './consults.service';
import { ConsultEntity } from './entities/consult.entity';
import { CreateConsultInput } from './dto/create-consult.input';
import { UpdateConsultInput } from './dto/update-consult.input';
import { FindAllClientConsultsInput } from './dto/find-all-clients-consults.input';
import { FindOneConsultInput } from './dto/find-one-consult.input';
import { FindAllParnerstInput } from '../partners/dto/find-all-partners.input';
import { FindAllPartnerConsultsInput } from './dto/find-all-partner-consults.input';


@Resolver(() => ConsultEntity)
export class ConsultsResolver {
  constructor(private readonly consultsService: ConsultsService) {}

  @Mutation(() => ConsultEntity)
  createConsult(
    @Args('createConsultInput') createConsultInput: CreateConsultInput,
  ) {
    return this.consultsService.create(createConsultInput);
  }

  @Query(() => [ConsultEntity])
  findAllClientsConsults(
    @Args('findAllClientConsults')
    findAllClientConsults: FindAllClientConsultsInput,
  ) {
    return this.consultsService.findAllClientConsults(findAllClientConsults);
  }

  @Query(() => [ConsultEntity])
  findAllPartnerConsults(
    @Args('findAllPartnerConsultsInput')
    findAllPartnerConsults: FindAllPartnerConsultsInput,
  ) {
    return this.consultsService.findAllPartnerConsults(findAllPartnerConsults);
  }

  @Query(() => ConsultEntity)
  findOneConsult(@Args('findOneConsultInput') findOneConsultInput: FindOneConsultInput) {
    return this.consultsService.findOne(findOneConsultInput);
  }

  @Mutation(() => ConsultEntity)
  updateConsult(
    @Args('updateConsultInput') updateConsultInput: UpdateConsultInput,
  ) {
    return this.consultsService.update(
      updateConsultInput.id,
      updateConsultInput,
    );
  }

  @Mutation(() => ConsultEntity)
  removeConsult(@Args('id', { type: () => Int }) id: number) {
    return this.consultsService.remove(id);
  }
}
