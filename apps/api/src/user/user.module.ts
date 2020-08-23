import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRpcClientService } from '@service/core/service/grpc-client/user-rpc-client.service';

@Module({
  providers: [UserService,UserRpcClientService]
})
export class UserModule {}
