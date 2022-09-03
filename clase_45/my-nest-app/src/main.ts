import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  const options = new DocumentBuilder()
    .setTitle('Swagger Order Example')
    .setDescription('Order API description')
    .setVersion('1.0')
    .addTag('Order')
    .build();

  const document = SwaggerModule.createDocument(app, options)

  SwaggerModule.setup('api-docs', app, document);

  
  await app.listen(3000);
}
bootstrap();
