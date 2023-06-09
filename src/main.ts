import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { MessagesModule } from './messages/messages.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);

  // ! HERE WE USE VALIDATION-PIPE AT APP LEVEL, WHICH 
  // ! MEANS WE ARE VALIDATING EVERY INCOMING REQUESTS
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
