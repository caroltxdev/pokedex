import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PokemonService {
  constructor(private prisma: PrismaService) {}

  // Lista todos os pokemons - rota pública, qualquer usuário logado pode ver
  async findAll() {
    return this.prisma.pokemon.findMany({
      include: {
        user: {
          select: { id: true, nome: true }, // Mostra só id e nome do dono
        },
      },
    });
  }

  // Busca um pokemon pelo id
  async findOne(id: string) {
    const pokemon = await this.prisma.pokemon.findUnique({
      where: { id },
      include: { user: { select: { id: true, nome: true } } },
    });

    if (!pokemon) throw new NotFoundException('Pokemon não encontrado');
    return pokemon;
  }

  // Cria um pokemon - userId vem do token JWT
  async create(data: {
    nome: string;
    tipo: string;
    nivel: number;
    hp: number;
    numeroPokedex: number;
    userId: string;
  }) {
    return this.prisma.pokemon.create({ data });
  }

  // Atualiza um pokemon - verifica se o usuário é o dono
  async update(id: string, userId: string, data: Partial<{
    nome: string;
    tipo: string;
    nivel: number;
    hp: number;
    numeroPokedex: number;
  }>) {
    const pokemon = await this.findOne(id);

    // Regra de ownership - só o dono pode editar
    if (pokemon.userId !== userId) {
      throw new ForbiddenException('Você não tem permissão para editar este pokemon');
    }

    return this.prisma.pokemon.update({ where: { id }, data });
  }

  // Deleta um pokemon - verifica se o usuário é o dono
  async remove(id: string, userId: string) {
    const pokemon = await this.findOne(id);

    // Regra de ownership - só o dono pode deletar
    if (pokemon.userId !== userId) {
      throw new ForbiddenException('Você não tem permissão para deletar este pokemon');
    }

    return this.prisma.pokemon.delete({ where: { id } });
  }
}