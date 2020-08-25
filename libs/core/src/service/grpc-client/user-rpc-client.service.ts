import { Injectable } from '@nestjs/common';
import { ClientGrpc, Client } from '@nestjs/microservices';
import { generateGrpcOptions } from './grpc-client.options';
import { UserServiceClient } from '@service/proto-schema';

@Injectable()
export class UserRpcClientService {
  @Client(
    generateGrpcOptions({
      url: process.env.USER_SERVICE_GRPC_URL,
      packageName: 'user',
      protoFileName: 'user.proto',
    }),
  )
  public  client: ClientGrpc;
  public svc: UserServiceClient<any>
}
