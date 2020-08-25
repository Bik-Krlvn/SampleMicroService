import { Transport, GrpcOptions } from '@nestjs/microservices';
import { join } from 'path';

interface Options {
  url: string;
  packageName: string;
  protoFileName: string;
}

export const generateGrpcOptions = (options: Options): GrpcOptions => {
  return {
    transport: Transport.GRPC,
    options: {
      url: options.url,
      package: `service.srv.${options.packageName}`,
      protoPath: join(process.cwd(), `dist/proto/${options.protoFileName}`),
    },
  };
};
