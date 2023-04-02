import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { PrismaService } from './services/prima.service';
import { UserRepository } from './repositories/UserRepository';

@Module({
  providers: [UsersResolver, UsersService, PrismaService, UserRepository],
})
export class UsersModule {}
