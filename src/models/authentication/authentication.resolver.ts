import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { PartnerEntity } from '../partners/entities/partner.entity';
import { User } from '../users/entities/user.entity';
import { AuthenticationService } from './authentication.service';
import { AuthenticationInput } from './dto/authentication.input';

@Resolver(() => User || PartnerEntity)
export class AuthenticationResolver {
  constructor(private readonly authenticateService: AuthenticationService) {}

  @Mutation(() => User || PartnerEntity)
  authenticate(
    @Args('authenticateInput') authenticateInput: AuthenticationInput,
  ) {
    return this.authenticateService.authenticate(authenticateInput);
  }
}
