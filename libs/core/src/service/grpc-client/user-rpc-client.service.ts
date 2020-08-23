import { Injectable } from '@nestjs/common';
import { ClientGrpc, Client } from '@nestjs/microservices';
import { generateGrpcOptions } from './grpc-client.options';
import { UserServiceClient } from '@service/proto-schema';

@Injectable()
export class UserRpcClientService {
  @Client(
    generateGrpcOptions({
      url: '0.0.0.0:5051',
      packageName: 'service.srv.user',
      protoFileName: 'user.proto',
    }),
  )
  private readonly client: ClientGrpc;
  public svc: UserServiceClient<any>
}
