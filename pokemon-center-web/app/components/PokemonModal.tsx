'use client';

import { useState, useEffect } from 'react';
import { Pokemon } from '../types/pokemon';
import { usePokemon } from '../context/PokemonContext';
// Lista de tipos de Pokémon 
const TIPOS = ['Fire', 'Water', 'Electric', 'Grass', 'Psychic', 'Ice', 'Dragon', 'Fairy', 'Dark', 'Normal', 'Fighting', 'Flying', 'Poison', 'Ground', 'Rock', 'Bug', 'Ghost', 'Steel'];

// Cores para cada tipo de Pokémon 
const typeColors: Record<string, string> = {
  Fire: '#FF6B35', Water: '#00D4FF', Electric: '#FFE156', Grass: '#00F5A0',
  Psychic: '#BF5FFF', Ice: '#A8F0FF', Dragon: '#7B2FFF', Fairy: '#FF9FE5',
  Dark: '#4A4A8A', Normal: '#A8A8A8', Fighting: '#FF6B35', Flying: '#A8F0FF',
  Poison: '#BF5FFF', Ground: '#D4A574', Rock: '#8A7A6A', Bug: '#A8D46A',
  Ghost: '#7B2FFF', Steel: '#B8C8D8',
};

// Tipos para exibição 
interface Props {
  pokemon?: Pokemon | null;
  onClose: () => void;
}

// Componente de modal para criar/editar Pokémon
export default function PokemonModal({ pokemon, onClose }: Props) {
  const { createPokemon, updatePokemon } = usePokemon();
  const isEditing = !!pokemon;

  const [numeroPokedex, setNumeroPokedex] = useState(1);
  const [nome, setNome] = useState('');
  const [tiposSelecionados, setTiposSelecionados] = useState<string[]>([]);
  const [hp, setHp] = useState(50);
  const [nivel, setNivel] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Preenche o form se estiver editando
  useEffect(() => {
    if (pokemon) {
      setNumeroPokedex(pokemon.numeroPokedex);
      setNome(pokemon.nome);
      setTiposSelecionados(pokemon.tipo.split(',').map(t => t.trim()));
      setHp(pokemon.hp);
      setNivel(pokemon.nivel);
    }
  }, [pokemon]);

  const toggleTipo = (tipo: string) => {
    if (tiposSelecionados.includes(tipo)) {
      setTiposSelecionados(tiposSelecionados.filter(t => t !== tipo));
    } else if (tiposSelecionados.length < 2) {
      setTiposSelecionados([...tiposSelecionados, tipo]);
    }
  };

  const handleSubmit = async () => {
    if (!nome || tiposSelecionados.length === 0) {
      setError('Preencha nome e pelo menos um tipo');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const data = {
        nome,
        tipo: tiposSelecionados.join(', '),
        hp,
        nivel,
        numeroPokedex,
      };

      if (isEditing && pokemon) {
        await updatePokemon(pokemon.id, data);
      } else {
        await createPokemon(data);
      }
      onClose();
    } catch {
      setError('Erro ao salvar pokemon');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4" style={{ background: 'rgba(0,0,0,0.9)' }}>
      <div className="glass-card rounded-2xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto">

        {/* Sprite preview */}
        <div className="flex justify-center mb-4">
          <div className="w-24 h-24 rounded-full flex items-center justify-center" style={{ border: '2px solid var(--glass-border)' }}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroPokedex}.png`}
              alt="preview"
              className="w-20 h-20 object-contain"
            />
          </div>
        </div>

        {/* Número Pokédex */}
        <div className="mb-4">
          <label className="font-pixel text-xs mb-2 block" style={{ color: 'var(--mint-primary)' }}>
            POKÉDEX #
          </label>
          <input
            type="number"
            min={1}
            max={1010}
            value={numeroPokedex}
            onChange={(e) => setNumeroPokedex(Number(e.target.value))}
            className="glass-input rounded-xl px-4 py-3 outline-none w-full"
          />
        </div>

        {/* Nome */}
        <div className="mb-4">
          <label className="font-pixel text-xs mb-2 block" style={{ color: 'var(--mint-primary)' }}>
            NOME
          </label>
          <input
            type="text"
            placeholder="Ex: Pikachu"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="glass-input rounded-xl px-4 py-3 outline-none w-full"
          />
        </div>

        {/* Tipos */}
        <div className="mb-4">
          <label className="font-pixel text-xs mb-2 block" style={{ color: 'var(--mint-primary)' }}>
            TIPO (máx 2)
          </label>
          <div className="flex flex-wrap gap-2">
            {TIPOS.map(tipo => {
              const selected = tiposSelecionados.includes(tipo);
              return (
                <button
                  key={tipo}
                  type="button"
                  onClick={() => toggleTipo(tipo)}
                  className="px-3 py-1 rounded-full text-xs font-medium transition-all"
                  style={{
                    background: selected ? `${typeColors[tipo]}33` : 'transparent',
                    border: `1px solid ${selected ? typeColors[tipo] : 'var(--glass-border)'}`,
                    color: selected ? typeColors[tipo] : 'var(--text-secondary)',
                  }}
                >
                  {tipo}
                </button>
              );
            })}
          </div>
        </div>

        {/* HP Slider */}
        <div className="mb-4">
          <label className="font-pixel text-xs mb-2 block" style={{ color: 'var(--mint-primary)' }}>
            HP: {hp}
          </label>
          <input
            type="range"
            min={1}
            max={255}
            value={hp}
            onChange={(e) => setHp(Number(e.target.value))}
            className="w-full accent-green-400"
          />
        </div>

        {/* Nível Slider */}
        <div className="mb-6">
          <label className="font-pixel text-xs mb-2 block" style={{ color: 'var(--mint-primary)' }}>
            NÍVEL: {nivel}
          </label>
          <input
            type="range"
            min={1}
            max={100}
            value={nivel}
            onChange={(e) => setNivel(Number(e.target.value))}
            className="w-full accent-purple-400"
          />
        </div>

        {error && <p className="text-red-400 text-sm text-center mb-4">{error}</p>}

        {/* Botões */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-xl font-medium hover-lift"
            style={{ border: '1px solid var(--glass-border)', color: 'var(--text-secondary)' }}
          >
            CANCELAR
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="flex-1 py-3 rounded-xl font-bold hover-lift glow-mint"
            style={{ background: 'var(--mint-primary)', color: '#0D1F1A' }}
          >
            {loading ? 'SALVANDO...' : 'SALVAR'}
          </button>
        </div>
      </div>
    </div>
  );
}