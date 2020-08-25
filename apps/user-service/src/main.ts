import { config } from 'dotenv';
config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { generateGrpcOptions } from '@service/core/service/grpc-client';
import { Logger } from '@nestjs/common';
import { appTheme } from '@service/core/setup';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, generateGrpcOptions({
    url: process.env.USER_SERVICE_GRPC_URL,
    packageName: 'user',
    protoFileName: 'user.proto'
  }));
  const name = 'USER-SERVICE'

  Logger.log(appTheme(name));
  await app.listenAsync()

}

bootstrap()