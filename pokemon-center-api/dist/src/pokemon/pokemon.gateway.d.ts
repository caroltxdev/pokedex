import { Server } from 'socket.io';
export declare class PokemonGateway {
    server: Server;
    notifyPokemonUpdated(): void;
}
