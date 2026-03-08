import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { ConflictException, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

// Mocks para simular o comportamento dos serviços sem acessar o banco de dados ou gerar tokens reais

// Mock do UsersService - simula o banco sem conectar de verdade
const mockUsersService = {
  findByEmail: jest.fn(),
  create: jest.fn(),
};

// Mock do JwtService - simula a geração de token
const mockJwtService = {
  sign: jest.fn().mockReturnValue('fake-token'),
};

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UsersService, useValue: mockUsersService },
        { provide: JwtService, useValue: mockJwtService },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);

    // Limpa os mocks antes de cada teste
    jest.clearAllMocks();
  });

  describe('register', () => {
    it('deve lançar ConflictException se email já existe', async () => {
      // Simula que o usuário já existe no banco
      mockUsersService.findByEmail.mockResolvedValue({ id: '1', email: 'test@test.com' });

      await expect(
        service.register('test@test.com', 'Test', '123456')
      ).rejects.toThrow(ConflictException);
    });

    it('deve criar usuário e retornar token se email não existe', async () => {
      // Simula que o usuário não existe
      mockUsersService.findByEmail.mockResolvedValue(null);
      mockUsersService.create.mockResolvedValue({ id: '1', email: 'test@test.com' });

      const result = await service.register('test@test.com', 'Test', '123456');

      expect(result).toHaveProperty('token');
      expect(mockUsersService.create).toHaveBeenCalled();
    });
  });

  describe('login', () => {
    it('deve lançar UnauthorizedException se usuário não existe', async () => {
      mockUsersService.findByEmail.mockResolvedValue(null);

      await expect(
        service.login('test@test.com', '123456')
      ).rejects.toThrow(UnauthorizedException);
    });

    it('deve lançar UnauthorizedException se senha incorreta', async () => {
      // Simula usuário existente com senha hasheada
      mockUsersService.findByEmail.mockResolvedValue({
        id: '1',
        email: 'test@test.com',
        senha: await bcrypt.hash('senha-correta', 10),
      });

      await expect(
        service.login('test@test.com', 'senha-errada')
      ).rejects.toThrow(UnauthorizedException);
    });

    it('deve retornar token se credenciais corretas', async () => {
      const senhaHash = await bcrypt.hash('123456', 10);
      mockUsersService.findByEmail.mockResolvedValue({
        id: '1',
        email: 'test@test.com',
        senha: senhaHash,
      });

      const result = await service.login('test@test.com', '123456');

      expect(result).toHaveProperty('token');
    });
  });
});
