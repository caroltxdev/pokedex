import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Verifica se o usuário demo já existe
  let demo = await prisma.user.findUnique({
    where: { email: 'demo@pokecenter.com' },
  });

  // Cria só se não existir
  if (!demo) {
    const senha = await bcrypt.hash('demo123', 10);
    demo = await prisma.user.create({
      data: {
        email: 'demo@pokecenter.com',
        nome: 'Professor Oak',
        senha,
      },
    });
    console.log('Usuário demo criado!');
  }

  // Verifica se os pokemons demo já existem
  const count = await prisma.pokemon.count({
    where: { userId: demo.id },
  });

  if (count === 0) {
    await prisma.pokemon.createMany({
      data: [
        { nome: 'Pikachu', tipo: 'Electric', nivel: 50, hp: 120, numeroPokedex: 25, userId: demo.id },
        { nome: 'Charizard', tipo: 'Fire, Flying', nivel: 80, hp: 200, numeroPokedex: 6, userId: demo.id },
        { nome: 'Mewtwo', tipo: 'Psychic', nivel: 100, hp: 255, numeroPokedex: 150, userId: demo.id },
        { nome: 'Gengar', tipo: 'Ghost, Poison', nivel: 60, hp: 150, numeroPokedex: 94, userId: demo.id },
        { nome: 'Bulbasaur', tipo: 'Grass, Poison', nivel: 30, hp: 100, numeroPokedex: 1, userId: demo.id },
        { nome: 'Eevee', tipo: 'Normal', nivel: 25, hp: 95, numeroPokedex: 133, userId: demo.id },
      ],
    });
    console.log('Pokémons demo criados!');
  }

  console.log('Seed concluído!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());