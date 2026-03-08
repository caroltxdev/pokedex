'use client';

import { Pokemon } from '../types/pokemon';
import { usePokemon } from '../context/PokemonContext';
import { useState } from 'react';

// Props para o DeleteModal
interface Props {
  pokemon: Pokemon;
  onClose: () => void;
}

// Componente de modal para confirmar a exclusão de um Pokémon
export default function DeleteModal({ pokemon, onClose }: Props) {
  const { deletePokemon } = usePokemon();
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    try {
      await deletePokemon(pokemon.id);
      onClose();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4" style={{ background: 'rgba(0,0,0,0.9)' }}>
      <div className="glass-card rounded-2xl p-6 w-full max-w-sm text-center">
        
        {/* Sprite */}
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.numeroPokedex}.png`}
          alt={pokemon.nome}
          className="w-24 h-24 object-contain mx-auto mb-4"
        />

        <h2 className="text-white font-bold text-xl mb-2">Remover Pokémon</h2>
        <p style={{ color: 'var(--text-secondary)' }} className="mb-6">
          Tem certeza que quer remover <strong className="text-white">{pokemon.nome}</strong>? Essa ação não pode ser desfeita.
        </p>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-xl font-medium hover-lift"
            style={{ border: '1px solid var(--glass-border)', color: 'var(--text-secondary)' }}
          >
            CANCELAR
          </button>
          <button
            onClick={handleDelete}
            disabled={loading}
            className="flex-1 py-3 rounded-xl font-bold hover-lift"
            style={{ background: '#FF6B6B33', border: '1px solid #FF6B6B', color: '#FF6B6B' }}
          >
            {loading ? 'REMOVENDO...' : 'REMOVER'}
          </button>
        </div>
      </div>
    </div>
  );
}