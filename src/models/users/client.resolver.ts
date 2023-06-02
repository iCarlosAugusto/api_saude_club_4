import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UpdatePasswordClientInput } from './dto/update-password-client.input';
import { Client } from './entities/client.entity';
import { CreateClientInput } from './dto/create-client.input';
import { UpdateClientInput } from './dto/update-client.input';
import { ClientService } from './client.service';

@Resolver(() => Client)
export class ClientResolver {
  constructor(private readonly clientsService: ClientService) {}

  @Mutation(() => Client)
  createClient(@Args('createClientInput') createClientInput: CreateClientInput) {
    return this.clientsService.create(createClientInput);
  }

  @Query(() => Client)
  findOneClient(@Args('id', { type: () => String }) id: string) {
    return this.clientsService.findOne(id);
  }

  @Query(() => [Client])
  findAllClient() {
    return this.clientsService.findAll();
  }

  @Mutation(() => Client)
  updateClient(@Args('updateClientInput') updateClientInput: UpdateClientInput) {
    return this.clientsService.update(updateClientInput);
  }

  @Mutation(() => Client)
  updatePasswordClient(@Args('updatePasswordInput') updatePasswordInput: UpdatePasswordClientInput) {
    return this.clientsService.updatePassword(updatePasswordInput)
  }
}
