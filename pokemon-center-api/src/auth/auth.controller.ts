import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // POST /auth/register
  @Post('register')
  register(
    @Body() body: { email: string; nome: string; senha: string },
  ) {
    return this.authService.register(body.email, body.nome, body.senha);
  }

  // POST /auth/login
  @Post('login')
  login(@Body() body: { email: string; senha: string }) {
    return this.authService.login(body.email, body.senha);
  }
}
