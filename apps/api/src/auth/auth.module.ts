import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { ClientProxyFactory, ClientGrpcProxy, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { PROVIDER } from '@service/common/constants';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule.register({
    secret: process.env.JWT_SECRET,
    signOptions: { expiresIn: process.env.JWT_EXPIRE },
  })],
  providers: [AuthService,
    {
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

    }, AuthResolver]
})
export class AuthModule { }
