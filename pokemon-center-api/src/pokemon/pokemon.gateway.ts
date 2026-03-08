import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

// Gateway para comunicação em tempo real com os clientes
@WebSocketGateway({
  cors: {
    origin: 'http://localhost:3000',
  },
})
export class PokemonGateway {
  @WebSocketServer()
  server: Server;

  // Emite evento para todos os clientes conectados
  notifyPokemonUpdated() {
    this.server.emit('pokemon-updated');
  }
}