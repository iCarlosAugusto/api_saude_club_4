import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { PartnersService } from './partners.service';
import { PartnerEntity } from './entities/partner.entity';
import { CreatePartnerInput } from './dto/create-partner.input';
import { UpdatePartnerInput } from './dto/update-partner.input';

@Resolver(() => PartnerEntity)
export class PartnersResolver {
  constructor(private readonly partnersService: PartnersService) {}

  @Mutation(() => PartnerEntity)
  createPartner(@Args('createPartnerInput') createPartnerInput: CreatePartnerInput) {
    return this.partnersService.create(createPartnerInput);
  }

  @Mutation(() => PartnerEntity)
  updatePartner(@Args('updatePartnerInput') updatePartnerInput: UpdatePartnerInput) {
    return this.partnersService.update(updatePartnerInput);
  }

  @Mutation(() => String)
  createConsult() {
    return this.partnersService.createConsult();
  }
}
