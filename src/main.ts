import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() { 
  const app = await NestFactory.create(AppModule);

  const apiprefix = 'api';

 app.setGlobalPrefix(apiprefix);
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap()
  .then(() => {
    console.log(`Server is running on port ${process.env.PORT ?? 3000}`);
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
