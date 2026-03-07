import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(email: string, nome: string, senha: string) {
    // Verifica se já existe um usuário com esse email
    const existingUser = await this.usersService.findByEmail(email);
    if (existingUser) {
      throw new ConflictException('Email já cadastrado');
    }

    // Faz o hash da senha antes de salvar no banco
    const hashedSenha = await bcrypt.hash(senha, 10);

    // Cria o usuário com a senha já hasheada
    const user = await this.usersService.create({
      email,
      nome,
      senha: hashedSenha,
    });

    // Gera o token JWT com o id e email do usuário
    const token = this.jwtService.sign({ sub: user.id, email: user.email });

    return { token };
  }

  async login(email: string, senha: string) {
    // Busca o usuário pelo email
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    // Compara a senha enviada com o hash salvo no banco
    const senhaValida = await bcrypt.compare(senha, user.senha);
    if (!senhaValida) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    // Gera o token JWT
    const token = this.jwtService.sign({ sub: user.id, email: user.email });

    return { token };
  }
}