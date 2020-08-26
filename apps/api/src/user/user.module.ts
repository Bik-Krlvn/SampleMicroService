import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRpcClientService } from '@service/core/service/grpc-client/user-rpc-client.service';
import { UserResolver } from './user.resolver';
import { ClientProxyFactory, Transport, ClientGrpcProxy } from '@nestjs/microservices';
import { join } from 'path';
import { PROVIDER } from '@service/common/constants';

@Module({
  providers: [UserService, {
    provide: PROVIDER.USER_CLIENT,
    useFactory: (): ClientGrpcProxy => {
      return ClientProxyFactory.create({
        transport: Transport.GRPC,
        options: {
          url: process.env.USER_SERVICE_GRPC_URL,
          package: 'service.srv.user',
          protoPath: join(process.cwd(), 'dist/proto/user.proto')
        }
      })
    }
  }, UserRpcClientService, UserResolver],
  exports: [PROVIDER.USER_CLIENT]
})
export class UserModule { }
