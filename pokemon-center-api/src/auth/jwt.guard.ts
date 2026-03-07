import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// Guard que protege rotas - verifica se o token JWT é válido
@Injectable()
export class JwtGuard extends AuthGuard('jwt') {}