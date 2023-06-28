import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule,DocumentBuilder } from '@nestjs/swagger';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  
  app.useGlobalPipes(
    new ValidationPipe(
      {
        transformOptions: {
          enableImplicitConversion: true,
        }
      }
    )
  );

  const reflector = app.get(Reflector);
  app.useGlobalInterceptors(new ClassSerializerInterceptor(reflector));
  
  const config = new DocumentBuilder()
  .addBearerAuth()
    .setTitle('Kuya Yana API')
    .setDescription('API of Kuya Yana proyect')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(AppModule.port);
}
bootstrap();
