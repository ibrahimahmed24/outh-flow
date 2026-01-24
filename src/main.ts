import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import * as bodyParser from 'body-parser';

const apiprefix = 'api';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    rawBody: true,
  });

  app.use(bodyParser.raw({ type: 'application/json' }));

  app.setGlobalPrefix(apiprefix);

  app.enableVersioning({
    type: VersioningType.URI,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  app.setBaseViewsDir('src/templates');
  app.setViewEngine('hbs');

  const config = new DocumentBuilder()
    .setTitle(' auth flow')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag(' auth')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'jwt',
        description: 'Enter your JWT token in the format' + ' "Bearer <token>"',
        in: 'header',
      },
      'token',
    )
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(`${apiprefix}/docs`, app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap()
  .then(() => {
    console.log(
      `Server is running at ://http/localhost:${process.env.PORT ?? 3000}`,
    );

    console.log(
      `Swagger is running at://http/localhost:${process.env.PORT ?? 3000}/${apiprefix}/docs`,
    );
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
