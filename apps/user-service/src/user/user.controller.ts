import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';
import {
  CreateUserResponse,
  GetUserResponse,
} from './interface/user.interface';
import { GrpcMethod } from '@nestjs/microservices';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @GrpcMethod('UserService')
  async createUser(payload: CreateUserDto): Promise<CreateUserResponse> {
    return this.userService.createUser(payload);
  }

  @GrpcMethod('UserService')
  async getUser(userId: string): Promise<GetUserResponse> {
    return this.userService.getUser(userId);
  }
}
