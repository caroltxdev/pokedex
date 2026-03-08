import { Test, TestingModule } from '@nestjs/testing';
import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';

// Criei um mock do PokemonService para ser usado nos testes do PokemonController. O teste verifica se o controller é definido corretamente. O teste é configurado usando o módulo de teste do NestJS, que permite criar um ambiente de teste isolado para o controller. O teste em si é simples, apenas verificando se a instância do controller foi criada com sucesso.
const mockPokemonService = {
  findAll: jest.fn(),
  findOne: jest.fn(),
  create: jest.fn(),
  update: jest.fn(),
  remove: jest.fn(),
};

describe('PokemonController', () => {
  let controller: PokemonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokemonController],
      providers: [
        { provide: PokemonService, useValue: mockPokemonService },
      ],
    }).compile();

    controller = module.get<PokemonController>(PokemonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});