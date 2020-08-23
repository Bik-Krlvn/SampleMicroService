import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/entity/user.entity';
import { TerminusModule } from '@nestjs/terminus';
import { UserModule } from './user/user.module';
import { ProfileEntity } from './user/entity/profile.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      port: Number(process.env.DATABASE_PORT),
      synchronize: true,
      host: process.env.DATABASE_HOST || 'user-service-db',
      dropSchema: true,
      entities: [UserEntity, ProfileEntity],
    }),
    TerminusModule.forRootAsync({
      useFactory: () => ({
        disableDeprecationWarnings: true,
        endpoints: [{ url: '/health', healthIndicators: [] }],
      }),
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
