import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  // Busca usuário por email - usado no login para verificar se existe
  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  // Cria um novo usuário - usado no registro
  async create(data: { email: string; nome: string; senha: string }) {
    return this.prisma.user.create({
      data,
    });
  }
}
