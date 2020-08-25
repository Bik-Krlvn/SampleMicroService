import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [GraphQLModule.forRoot({
    autoSchemaFile: join(__dirname, './graphql/schema/generated.gql')
  }), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
