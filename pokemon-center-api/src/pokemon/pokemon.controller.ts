import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, Request } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { JwtGuard } from '../auth/jwt.guard';

// Todas as rotas desse controller exigem autenticação, ou seja, o cliente deve enviar um token JWT válido no header Authorization para acessar qualquer endpoint relacionado a Pokémon.
@Controller('pokemon')
@UseGuards(JwtGuard) // Todas as rotas desse controller exigem autenticação
export class PokemonController {
  constructor(private pokemonService: PokemonService) {}

  // GET /pokemon - lista todos
  @Get()
  findAll() {
    return this.pokemonService.findAll();
  }

  // GET /pokemon/:id - busca um
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pokemonService.findOne(id);
  }

  // POST /pokemon - cria um novo
  @Post()
  create(@Body() body: {
    nome: string;
    tipo: string;
    nivel: number;
    hp: number;
    numeroPokedex: number;
  }, @Request() req: any) {
    // req.user vem do JwtStrategy.validate()
    return this.pokemonService.create({ ...body, userId: req.user.id });
  }

  // PUT /pokemon/:id - atualiza
  @Put(':id')
  update(@Param('id') id: string, @Body() body: any, @Request() req: any) {
    return this.pokemonService.update(id, req.user.id, body);
  }

  // DELETE /pokemon/:id - deleta
  @Delete(':id')
  remove(@Param('id') id: string, @Request() req: any) {
    return this.pokemonService.remove(id, req.user.id);
  }
}
