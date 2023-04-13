import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { PartnersService } from './partners.service';
import { PartnerEntity } from './entities/partner.entity';
import { CreatePartnerInput } from './dto/create-partner.input';
import { UpdatePartnerInput } from './dto/update-partner.input';
import { FindOneParnetInput } from './dto/find-one-partner.input';
import { FindAllParnerstInput } from './dto/find-all-partners.input';

@Resolver(() => PartnerEntity)
export class PartnersResolver {
  constructor(private readonly partnersService: PartnersService) {}

  @Query(() => PartnerEntity, {nullable: true})
  findOnePartner(@Args('findOnePartnerInput') findOnePartnerInput: FindOneParnetInput) {
    return this.partnersService.findOne(findOnePartnerInput);
  }

  @Query(() => [PartnerEntity], {nullable: true})
  findAllPartners(@Args('findAllPartnersInput') findAllParnerstInput: FindAllParnerstInput) {
    return this.partnersService.findAll(findAllParnerstInput);
  }

  @Mutation(() => PartnerEntity)
  createPartner(@Args('createPartnerInput') createPartnerInput: CreatePartnerInput) {
    return this.partnersService.create(createPartnerInput);
  }

  @Mutation(() => PartnerEntity)
  updatePartner(@Args('updatePartnerInput') updatePartnerInput: UpdatePartnerInput) {
    return this.partnersService.update(updatePartnerInput);
  }
}
