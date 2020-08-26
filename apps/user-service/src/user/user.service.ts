import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { RegisterUserCommand } from './command/impl/register-user.command';
import {
  CreateUserResponse,
  GetUserResponse,
} from './interface/user.interface';
import { GetUserQuery } from './queries/impl/get-user.query';
import { LoginUserCommand } from './command/impl/login-user.command';
import { LoginResponse, LoginRequest } from '@service/proto-schema';

@Injectable()
export class UserService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) { }

  async createUser(data: CreateUserDto): Promise<CreateUserResponse> {
    return await this.commandBus.execute(new RegisterUserCommand(data));
  }

  async getUser(data: string): Promise<GetUserResponse> {
    return await this.queryBus.execute(new GetUserQuery(data));
  }

  async loginUser(data: LoginRequest): Promise<LoginResponse> {
    return await this.commandBus.execute(new LoginUserCommand(data))
  }
}
