import { PrismaService } from '../prisma/prisma.service';
import { PokemonGateway } from './pokemon.gateway';
export declare class PokemonService {
    private prisma;
    private gateway;
    constructor(prisma: PrismaService, gateway: PokemonGateway);
    findAll(): Promise<({
        user: {
            id: string;
            nome: string;
        };
    } & {
        id: string;
        nome: string;
        createdAt: Date;
        tipo: string;
        nivel: number;
        hp: number;
        numeroPokedex: number;
        userId: string;
    })[]>;
    findOne(id: string): Promise<{
        user: {
            id: string;
            nome: string;
        };
    } & {
        id: string;
        nome: string;
        createdAt: Date;
        tipo: string;
        nivel: number;
        hp: number;
        numeroPokedex: number;
        userId: string;
    }>;
    create(data: {
        nome: string;
        tipo: string;
        nivel: number;
        hp: number;
        numeroPokedex: number;
        userId: string;
    }): Promise<{
        id: string;
        nome: string;
        createdAt: Date;
        tipo: string;
        nivel: number;
        hp: number;
        numeroPokedex: number;
        userId: string;
    }>;
    update(id: string, userId: string, data: Partial<{
        nome: string;
        tipo: string;
        nivel: number;
        hp: number;
        numeroPokedex: number;
    }>): Promise<{
        id: string;
        nome: string;
        createdAt: Date;
        tipo: string;
        nivel: number;
        hp: number;
        numeroPokedex: number;
        userId: string;
    }>;
    remove(id: string, userId: string): Promise<{
        id: string;
        nome: string;
        createdAt: Date;
        tipo: string;
        nivel: number;
        hp: number;
        numeroPokedex: number;
        userId: string;
    }>;
}
