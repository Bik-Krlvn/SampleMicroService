import { GrpcOptions, Transport } from '@nestjs/microservices';

export const GrpcMicroserviceOptions: GrpcOptions = {
  transport: Transport.GRPC,
  options: {
    url: '0.0.0.0:5667',
    package: '',
    protoPath: '',
  },
};
