import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule], // Precisa do Prisma para acessar o banco
  providers: [PokemonService],
  controllers: [PokemonController],
})
export class PokemonModule {}
