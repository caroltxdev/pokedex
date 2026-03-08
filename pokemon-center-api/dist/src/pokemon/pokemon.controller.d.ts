import { PokemonService } from './pokemon.service';
export declare class PokemonController {
    private pokemonService;
    constructor(pokemonService: PokemonService);
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
    create(body: {
        nome: string;
        tipo: string;
        nivel: number;
        hp: number;
        numeroPokedex: number;
    }, req: any): Promise<{
        id: string;
        nome: string;
        createdAt: Date;
        tipo: string;
        nivel: number;
        hp: number;
        numeroPokedex: number;
        userId: string;
    }>;
    update(id: string, body: any, req: any): Promise<{
        id: string;
        nome: string;
        createdAt: Date;
        tipo: string;
        nivel: number;
        hp: number;
        numeroPokedex: number;
        userId: string;
    }>;
    remove(id: string, req: any): Promise<{
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
