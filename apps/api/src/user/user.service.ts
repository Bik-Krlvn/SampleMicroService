import { Injectable, Logger } from '@nestjs/common';
import { UserRpcClientService } from '@service/core/service/grpc-client/user-rpc-client.service';
import { CreateUserDto, CreateUserResponse, FindCurrentUserRequest, GetUserResponse } from '@service/proto-schema';

@Injectable()
/**
 * User service
 */
export class UserService {
  logger = new Logger(this.constructor.name);
  /**
   * Creates an instance of user service.
   * @param userRpcClient
   */
  constructor(private readonly userRpcClient: UserRpcClientService) { }
  /**
   * Creates user
   * @param input
   * @returns user
   */
  async createUser(
    input: CreateUserDto,
  ): Promise<CreateUserResponse> {
    try {
      const response = await this.userRpcClient.svc.createUser(input).toPromise()
      return response;
    } catch (err) {
      this.logger.log(err);
      throw new Error(err.message);
    }
  }
  /**
   * Get user
   * @param input
   * @returns user
   */
  async getUser(
    input: FindCurrentUserRequest,
  ): Promise<GetUserResponse> {
    try {
      const response = await this.userRpcClient.svc.getUser(input).toPromise();
      return response;
    } catch (err) {
      this.logger.log(err);
      throw new Error(err.message);
    }
  }
}
