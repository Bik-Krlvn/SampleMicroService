import { INestApplication, Logger } from '@nestjs/common';
import { join } from 'path';
import { GrpcMicroserviceOptions } from '../config';
import { AppUtils } from '@service/common/utils';
import { appTheme } from '.';

interface MicroServiceSetupOptions {
  app: INestApplication;
  hostname: string;
  protoName: string;
  packageName: string;
  serviceName?: string;
}

export const microServiceSetup = async (
  options: MicroServiceSetupOptions,
): Promise<void> => {
  const { app, serviceName: name, hostname, protoName, packageName } = options;
  AppUtils.terminateApp(app);
  const config = GrpcMicroserviceOptions;
  config.options.package = `service.srv.${packageName}`;
  config.options.url = hostname;
  config.options.protoPath = join(
    process.cwd(),
    `libs/proto-schema/src/proto/${protoName}`,
  );
  app.connectMicroservice(config);
  await app.startAllMicroservicesAsync();
  Logger.log(appTheme(name));
};
