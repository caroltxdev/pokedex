import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { PokemonGateway } from './pokemon.gateway';

// Módulo que agrupa o serviço, controlador e gateway relacionados aos pokémons
@Module({
  imports: [PrismaModule],
  providers: [PokemonService, PokemonGateway],
  controllers: [PokemonController],
})
export class PokemonModule {}