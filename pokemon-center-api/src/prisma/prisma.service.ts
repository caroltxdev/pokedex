import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    // Conecta ao banco quando o módulo é iniciado
    // O Prisma lê o DATABASE_URL do .env automaticamente
    await this.$connect();
  }
}