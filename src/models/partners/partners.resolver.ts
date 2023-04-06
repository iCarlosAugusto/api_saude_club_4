import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PartnersService } from './partners.service';
import { Partner } from './entities/partner.entity';
import { CreatePartnerInput } from './dto/create-partner.input';
import { UpdatePartnerInput } from './dto/update-partner.input';

@Resolver(() => Partner)
export class PartnersResolver {
  constructor(private readonly partnersService: PartnersService) {}

  @Mutation(() => Partner)
  createPartner(@Args('createPartnerInput') createPartnerInput: CreatePartnerInput) {
    return this.partnersService.create(createPartnerInput);
  }

  @Mutation(() => String)
  createConsult() {
    return this.partnersService.createConsult();
  }

  //@Query(() => [Partner], { name: 'partners' })
  //findAll() {
  //  return this.partnersService.findAll();
  //}
//
  //@Query(() => Partner, { name: 'partner' })
  //findOne(@Args('id', { type: () => Int }) id: number) {
  //  return this.partnersService.findOne(id);
  //}
//
  //@Mutation(() => Partner)
  //updatePartner(@Args('updatePartnerInput') updatePartnerInput: UpdatePartnerInput) {
  //  return this.partnersService.update(updatePartnerInput.id, updatePartnerInput);
  //}
//
  //@Mutation(() => Partner)
  //removePartner(@Args('id', { type: () => Int }) id: number) {
  //  return this.partnersService.remove(id);
  //}
}
