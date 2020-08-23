import { config } from 'dotenv';
config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { microServiceSetup } from '@service/core/setup';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await microServiceSetup({
    app,
    protoName: 'user.proto',
    packageName: 'user',
    serviceName: 'User',
    hostname: process.env.USER_SERVICE_GRPC_URL,
  });
  await app.listen(Number(process.env.USER_SERVICE_PORT));
}

(async () => await bootstrap())();
