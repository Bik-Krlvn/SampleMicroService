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
      package: options.packageName,
      protoPath: join(
        process.cwd(),
        `libs/proto-schema/src/proto/${options.protoFileName}`,
      ),
      loader: { arrays: true },
    },
  };
};
