import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './models/users/users.module';
import { PartnersModule } from './models/partners/partners.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    UsersModule,
    PartnersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
