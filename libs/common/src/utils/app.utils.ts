import { INestApplication } from '@nestjs/common';

export class AppUtils {
  public static terminateApp(app: INestApplication): void {
    const timeoutInMilliseconds = 5000;
    process.on('SIGINT', async () => {
      setInterval(() => process.exit(1), timeoutInMilliseconds);
      await app.close();
      process.exit(0);
    });

    process.on('SIGTERM', async () => {
      setInterval(() => process.exit(1), timeoutInMilliseconds);
      await app.close();
      process.exit(0);
    });
  }
}
