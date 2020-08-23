import { CommandHandler, ICommandHandler, EventBus } from '@nestjs/cqrs';
import { RegisterUserCommand } from '../impl/register-user.command';
import { Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { RpcException } from '@nestjs/microservices';
import { UserRepository } from '../../repository/user.repository';
import { CreateUserResponse } from '../../interface/user.interface';
import { UserEntity } from '../../entity/user.entity';
import { UserRegisteredEvent } from '../../event/impl/user-registered.event';
import { generateVerificationCode } from '@service/common/utils/verification-code-generator';

@CommandHandler(RegisterUserCommand)
export class RegisterUserHandler
  implements ICommandHandler<RegisterUserCommand> {
  logger = new Logger(this.constructor.name);
  constructor(
    private readonly eventBus: EventBus,
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async execute(command: RegisterUserCommand): Promise<CreateUserResponse> {
    try {
      this.logger.log(
        `async ${this.constructor.name}...`,
        `${command.constructor.name}`,
      );
      const { createUserDto } = command;
      const { username, name, email, password } = createUserDto;
      const userExist = await this.userRepository.exist(email);

      if (userExist) {
        throw new RpcException('Email already exist, try another email');
      }

      const userEntity: UserEntity = new UserEntity();
      const pinCode = generateVerificationCode(6, { type: 'string' });

      userEntity.name = name;
      userEntity.password = password;
      userEntity.username = username;
      userEntity.email = email;
      userEntity.verified = false;
      userEntity.verificationCode = pinCode.toString();

      const result = await this.userRepository.createUser(userEntity);
      this.logger.log(result.username, 'register-user');
      const payload = { email, pinCode };
      const accessToken = this.jwtService.sign(payload, {
        expiresIn: process.env.JWT_EXPIRE || '1hr',
      });

      this.eventBus.publish(new UserRegisteredEvent(result));

      return { accessToken };
    } catch (err) {
      this.logger.error(err);
      throw new RpcException(err);
    }
  }
}
