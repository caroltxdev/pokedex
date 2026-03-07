import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtGuard } from '../auth/jwt.guard';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  // GET /users/me - retorna os dados do usuário logado
  @Get('me')
  @UseGuards(JwtGuard)
  me(@Request() req: any) {
    // req.user.id vem do JwtStrategy.validate()
    return this.usersService.findById(req.user.id);
  }
}