import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Permite requisições do frontend
app.enableCors({
  origin: [
    'http://localhost:3000',
    'https://pokedex-9t5b.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
});

  app.use(require('express').json());

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();