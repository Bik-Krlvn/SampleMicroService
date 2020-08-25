import { Injectable, Logger, Inject, OnModuleInit } from '@nestjs/common';
import { CreateUserDto, CreateUserResponse, FindCurrentUserRequest, GetUserResponse } from '@service/proto-schema';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';


interface IUserService{
  createUser(data:CreateUserDto):Observable<CreateUserResponse>
  getUser(data:FindCurrentUserRequest):Observable<GetUserResponse>
}
@Injectable()
/**
 * User service
 */
export class UserService implements OnModuleInit {
  logger = new Logger(this.constructor.name);
  /**
   * Creates an instance of user service.
   * @param userRpcClient
   */
  constructor(@Inject('USER_CLIENT') private readonly userRpcClient: ClientGrpc) { }
  private  userService:IUserService

  onModuleInit():void {
    this.userService = this.userRpcClient.getService<IUserService>('UserService')
  }
  /**
   * Creates user
   * @param input
   * @returns user
   */
  async createUser(
    input: CreateUserDto,
  ): Promise<CreateUserResponse> {
    try {
      const response = await this.userService.createUser(input).toPromise()
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
      const response = await this.userService.getUser(input).toPromise();
      return response;
    } catch (err) {
      this.logger.log(err);
      throw new Error(err.message);
    }
  }
}
