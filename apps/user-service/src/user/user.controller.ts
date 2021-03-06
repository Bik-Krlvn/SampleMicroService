import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, FindUserDto } from './dto/user.dto';
import {
  CreateUserResponse,
  GetUserResponse,
} from './interface/user.interface';
import { GrpcMethod } from '@nestjs/microservices';
import { LoginRequest, LoginResponse } from '@service/proto-schema';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @GrpcMethod('UserService', 'createUser')
  async createUser(payload: CreateUserDto): Promise<CreateUserResponse> {
    return this.userService.createUser(payload);
  }

  @GrpcMethod('UserService', 'getUser')
  async getUser(payload: FindUserDto): Promise<GetUserResponse> {
    return this.userService.getUser(payload.userId);
  }

  @GrpcMethod('UserService', 'loginUser')
  async loginUser(payload: LoginRequest): Promise<LoginResponse> {
    return this.userService.loginUser(payload)
  }
}
