import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PokemonGateway } from './pokemon.gateway';

@Injectable()
export class PokemonService {
  constructor(
    private prisma: PrismaService,
    private gateway: PokemonGateway,
  ) {}

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
    const pokemon = await this.prisma.pokemon.create({ data });
    this.gateway.notifyPokemonUpdated(); // notifica todos após criar
    return pokemon;
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

    const updated = await this.prisma.pokemon.update({ where: { id }, data });
    this.gateway.notifyPokemonUpdated(); // notifica todos após atualizar
    return updated;
  }

  // Deleta um pokemon - verifica se o usuário é o dono
  async remove(id: string, userId: string) {
    const pokemon = await this.findOne(id);

    // Regra de ownership - só o dono pode deletar
    if (pokemon.userId !== userId) {
      throw new ForbiddenException('Você não tem permissão para deletar este pokemon');
    }

    const deleted = await this.prisma.pokemon.delete({ where: { id } });
    this.gateway.notifyPokemonUpdated(); // notifica todos após deletar
    return deleted;
  }
}