import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import pinoHttp from 'pino-http';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(pinoHttp());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
