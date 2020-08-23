import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './repository/user.repository';
import { JwtModule } from '@nestjs/jwt';
import { CqrsModule } from '@nestjs/cqrs';
import { UserSagas } from './sagas/user.sagas';
import { CommandHandlers } from './command/handler';
import { EventHandlers } from './event/handler';
import { ProfileRepository } from './repository/profile.repository';
import { QueryHandlers } from './queries/handler';

@Module({
  imports: [
    CqrsModule,

    TypeOrmModule.forFeature([UserRepository, ProfileRepository]),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRE },
    }),
  ],
  providers: [
    UserService,
    UserSagas,
    ...CommandHandlers,
    ...EventHandlers,
    ...QueryHandlers,
  ],
  controllers: [UserController],
})
export class UserModule {}
