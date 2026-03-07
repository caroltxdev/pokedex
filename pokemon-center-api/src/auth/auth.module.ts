import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      // Define o algoritmo e a chave secreta para assinar os tokens
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '7d' }, // Token expira em 7 dias
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [JwtModule], // Exporta para outros módulos poderem validar tokens
})
export class AuthModule {}