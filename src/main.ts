import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const apiprefix = 'api';

  app.setGlobalPrefix(apiprefix);
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    // whitelist: true,
    // forbidNonWhitelisted: true,
  
  }))
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
