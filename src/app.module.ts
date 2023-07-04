import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PartnersModule } from './api/partners/partners.module';
import { ConsultsModule } from './api/consults/consults.module';
import { ServicesModule } from './api/services/services.module';
import { AuthenticationModule } from './api/authentication/authentication.module';
import { AdminModule } from './api/admin/admin.module';
import { CompanyModule } from './api/company/company.module';
import { ClientsModule } from './api/users/client.module';
import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { NewsModule } from './api/news/news.module';
import { ApiModule } from './api/api.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      formatError: (error: GraphQLError) => {
        const graphQLFormattedError: GraphQLFormattedError = {
          message: error?.message,
        };
        return graphQLFormattedError;
      },
    }),
    ApiModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
