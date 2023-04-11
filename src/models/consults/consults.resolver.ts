import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ConsultsService } from './consults.service';
import { ConsultEntity } from './entities/consult.entity';
import { CreateConsultInput } from './dto/create-consult.input';
import { UpdateConsultInput } from './dto/update-consult.input';

@Resolver(() => ConsultEntity)
export class ConsultsResolver {
  constructor(private readonly consultsService: ConsultsService) {}

  @Mutation(() => ConsultEntity)
  createConsult(@Args('createConsultInput') createConsultInput: CreateConsultInput) {
    return this.consultsService.create(createConsultInput);
  }

  @Query(() => [ConsultEntity], { name: 'consults' })
  findAll() {
    return this.consultsService.findAll();
  }

  @Query(() => ConsultEntity, { name: 'consult' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.consultsService.findOne(id);
  }

  @Mutation(() => ConsultEntity)
  updateConsult(@Args('updateConsultInput') updateConsultInput: UpdateConsultInput) {
    return this.consultsService.update(updateConsultInput.id, updateConsultInput);
  }

  @Mutation(() => ConsultEntity)
  removeConsult(@Args('id', { type: () => Int }) id: number) {
    return this.consultsService.remove(id);
  }
}
