'use client';

import { Pokemon } from '../types/pokemon';
import { useAuth } from '../context/AuthContext';
// Cores para cada tipo de Pokémon (pode ser expandido conforme necessário)
const typeColors: Record<string, string> = {
  fire: '#FF6B35',
  water: '#00D4FF',
  electric: '#FFE156',
  grass: '#00F5A0',
  psychic: '#BF5FFF',
  ice: '#A8F0FF',
  dragon: '#7B2FFF',
  fairy: '#FF9FE5',
  dark: '#4A4A8A',
  normal: '#A8A8A8',
  fighting: '#FF6B35',
  flying: '#A8F0FF',
  poison: '#BF5FFF',
  ground: '#D4A574',
  rock: '#8A7A6A',
  bug: '#A8D46A',
  ghost: '#7B2FFF',
  steel: '#B8C8D8',
};
// Mapa de tipos para exibição (pode ser expandido conforme necessário)
interface Props {
  pokemon: Pokemon;
  onEdit: (pokemon: Pokemon) => void;
  onDelete: (pokemon: Pokemon) => void;
}
// Componente de cartão de Pokémon
export default function PokemonCard({ pokemon, onEdit, onDelete }: Props) {
  const { user } = useAuth();
  const isOwner = user?.id === pokemon.userId;
  const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.numeroPokedex}.png`;

  const tipos = pokemon.tipo.split(',').map(t => t.trim());

  return (
    <div className="glass-card rounded-2xl p-4 hover-lift flex flex-col gap-3">
      {/* Header do card */}
      <div className="flex justify-between items-start">
        <span className="font-pixel text-xs" style={{ color: 'var(--text-secondary)' }}>
          #{String(pokemon.numeroPokedex).padStart(3, '0')}
        </span>
        {isOwner && (
          <span className="font-pixel text-xs px-2 py-1 rounded-full" style={{ background: 'var(--mint-primary)', color: '#0D1F1A' }}>
            MEU
          </span>
        )}
      </div>

      {/* Sprite */}
      <div className="flex justify-center">
        <img
          src={spriteUrl}
          alt={pokemon.nome}
          className="w-24 h-24 object-contain animate-float"
          onError={(e) => (e.currentTarget.src = '/pokeball.png')}
        />
      </div>

      {/* Nome */}
      <h3 className="text-white font-bold text-center text-lg">{pokemon.nome}</h3>

      {/* Tipos */}
      <div className="flex gap-2 justify-center flex-wrap">
        {tipos.map(tipo => (
          <span
            key={tipo}
            className="px-3 py-1 rounded-full text-xs font-medium"
            style={{
              background: `${typeColors[tipo.toLowerCase()] || '#A8A8A8'}33`,
              border: `1px solid ${typeColors[tipo.toLowerCase()] || '#A8A8A8'}`,
              color: typeColors[tipo.toLowerCase()] || '#A8A8A8',
            }}
          >
            {tipo}
          </span>
        ))}
      </div>

      {/* HP e Nível */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-xs" style={{ color: 'var(--text-secondary)' }}>
          <span className="font-pixel">HP</span>
          <span>{pokemon.hp}</span>
        </div>
        <div className="w-full rounded-full h-2" style={{ background: 'var(--glass-border)' }}>
          <div
            className="h-2 rounded-full"
            style={{
              width: `${Math.min((pokemon.hp / 255) * 100, 100)}%`,
              background: 'linear-gradient(90deg, var(--mint-primary), var(--yellow-accent))',
            }}
          />
        </div>

        <div className="flex justify-between text-xs" style={{ color: 'var(--text-secondary)' }}>
          <span className="font-pixel">NÍVEL</span>
          <span>{pokemon.nivel}</span>
        </div>
        <div className="w-full rounded-full h-2" style={{ background: 'var(--glass-border)' }}>
          <div
            className="h-2 rounded-full"
            style={{
              width: `${Math.min((pokemon.nivel / 100) * 100, 100)}%`,
              background: 'var(--purple-secondary)',
            }}
          />
        </div>
      </div>

      {/* Botões - só aparecem para o dono */}
      {isOwner && (
        <div className="flex gap-2 mt-2">
          <button
            onClick={() => onEdit(pokemon)}
            className="flex-1 py-2 rounded-xl text-sm font-medium hover-lift"
            style={{ border: '1px solid var(--mint-primary)', color: 'var(--mint-primary)' }}
          >
            ✏️ Editar
          </button>
          <button
            onClick={() => onDelete(pokemon)}
            className="flex-1 py-2 rounded-xl text-sm font-medium hover-lift"
            style={{ border: '1px solid #FF6B6B', color: '#FF6B6B' }}
          >
            🗑️ Remover
          </button>
        </div>
      )}
    </div>
  );
}