import { Test, TestingModule } from '@nestjs/testing';
import { PokemonService } from './pokemon.service';
import { PrismaService } from '../prisma/prisma.service';
import { PokemonGateway } from './pokemon.gateway';
import { NotFoundException, ForbiddenException } from '@nestjs/common';

// Este arquivo é um teste unitário para o PokemonService. Ele utiliza mocks para o PrismaService e PokemonGateway, permitindo testar a lógica do serviço sem depender de implementações reais desses serviços. O teste cobre os métodos findOne, update e remove, verificando se as exceções corretas são lançadas quando as condições de erro são atendidas.

const mockPrismaService = {
  pokemon: {
    findMany: jest.fn(),
    findUnique: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
};

const mockPokemonGateway = {
  notifyPokemonUpdated: jest.fn(),
};

describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PokemonService,
        { provide: PrismaService, useValue: mockPrismaService },
        { provide: PokemonGateway, useValue: mockPokemonGateway },
      ],
    }).compile();

    service = module.get<PokemonService>(PokemonService);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findOne', () => {
    it('deve lançar NotFoundException se pokemon não existe', async () => {
      mockPrismaService.pokemon.findUnique.mockResolvedValue(null);

      await expect(service.findOne('id-inexistente')).rejects.toThrow(NotFoundException);
    });

    it('deve retornar pokemon se existe', async () => {
      const pokemon = { id: '1', nome: 'Pikachu', userId: 'user-1' };
      mockPrismaService.pokemon.findUnique.mockResolvedValue(pokemon);

      const result = await service.findOne('1');
      expect(result).toEqual(pokemon);
    });
  });

  describe('update', () => {
    it('deve lançar ForbiddenException se usuário não é o dono', async () => {
      mockPrismaService.pokemon.findUnique.mockResolvedValue({
        id: '1',
        nome: 'Pikachu',
        userId: 'dono-id',
      });

      await expect(
        service.update('1', 'outro-usuario-id', { nome: 'Raichu' })
      ).rejects.toThrow(ForbiddenException);
    });
  });

  describe('remove', () => {
    it('deve lançar ForbiddenException se usuário não é o dono', async () => {
      mockPrismaService.pokemon.findUnique.mockResolvedValue({
        id: '1',
        nome: 'Pikachu',
        userId: 'dono-id',
      });

      await expect(
        service.remove('1', 'outro-usuario-id')
      ).rejects.toThrow(ForbiddenException);
    });
  });
});
