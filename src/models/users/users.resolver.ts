import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UpdatePasswordClientInput } from './dto/update-password-client.input';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  createClient(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @Query(() => User)
  findOneClient(@Args('id', { type: () => String }) id: string) {
    return this.usersService.findOne(id);
  }

  @Query(() => [User])
  findAllClient() {
    return this.usersService.findAll();
  }

  @Mutation(() => User)
  updateClient(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput);
  }

  @Mutation(() => User)
  updatePasswordClient(@Args('updatePasswordInput') updatePasswordInput: UpdatePasswordClientInput) {
    return this.usersService.updatePassword(updatePasswordInput)
  }
}
