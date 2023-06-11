import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule,DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe(
      {
        transformOptions: {
          enableImplicitConversion: true,
        }
      }
    )
  );
  const config = new DocumentBuilder()
    .setTitle('Kuya Yana API')
    .setDescription('API of Kuya Yana proyect')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(AppModule.port);
}
bootstrap();
