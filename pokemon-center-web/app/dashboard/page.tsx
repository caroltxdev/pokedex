'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import { usePokemon } from '../context/PokemonContext';
import { PokemonProvider } from '../context/PokemonContext';
import Header from '../components/Header';
import PokemonCard from '../components/PokemonCard';
import PokemonModal from '../components/PokemonModal';
import DeleteModal from '../components/DeleteModal';
import { Pokemon } from '../types/pokemon';

// Lista de tipos para o filtro
const TIPOS = ['Todos', 'Fire', 'Water', 'Electric', 'Grass', 'Psychic', 'Ice', 'Dragon', 'Fairy', 'Dark', 'Normal', 'Fighting', 'Flying', 'Poison', 'Ground', 'Rock', 'Bug', 'Ghost', 'Steel'];

function DashboardContent() {
  const { user, isLoading } = useAuth();
  const { pokemons, loading, fetchPokemons } = usePokemon();
  const router = useRouter();

  const [search, setSearch] = useState('');
  const [tipoFiltro, setTipoFiltro] = useState('Todos');
  const [modalOpen, setModalOpen] = useState(false);
  const [editingPokemon, setEditingPokemon] = useState<Pokemon | null>(null);
  const [deletingPokemon, setDeletingPokemon] = useState<Pokemon | null>(null);

  // Redireciona para login se não estiver autenticado
  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login');
    }
  }, [user, isLoading, router]);

  useEffect(() => {
    if (user) fetchPokemons();
  }, [user]);

  const handleEdit = (pokemon: Pokemon) => {
    setEditingPokemon(pokemon);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setEditingPokemon(null);
  };

  // Filtra pokemons por busca e tipo
  const pokemonsFiltrados = pokemons.filter(p => {
    const matchSearch = p.nome.toLowerCase().includes(search.toLowerCase()) ||
      String(p.numeroPokedex).includes(search);
    const matchTipo = tipoFiltro === 'Todos' || p.tipo.toLowerCase().includes(tipoFiltro.toLowerCase());
    return matchSearch && matchTipo;
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="font-pixel text-sm" style={{ color: 'var(--mint-primary)' }}>
          CARREGANDO...
        </span>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 p-6">
        {/* Busca */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Buscar Pokémon..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="glass-input rounded-2xl px-6 py-4 outline-none w-full text-lg"
          />
        </div>

        {/* Filtro por tipo */}
        <div className="flex flex-wrap gap-2 mb-6">
          {TIPOS.map(tipo => (
            <button
              key={tipo}
              onClick={() => setTipoFiltro(tipo)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all hover-lift"
              style={{
                border: `1px solid ${tipoFiltro === tipo ? 'var(--mint-primary)' : 'var(--glass-border)'}`,
                color: tipoFiltro === tipo ? 'var(--mint-primary)' : 'var(--text-secondary)',
                background: tipoFiltro === tipo ? 'rgba(0, 245, 160, 0.1)' : 'transparent',
              }}
            >
              {tipo}
            </button>
          ))}
        </div>

        {/* Grid de pokemons */}
        {loading ? (
          <div className="flex justify-center py-20">
            <span className="font-pixel text-sm" style={{ color: 'var(--mint-primary)' }}>
              CARREGANDO...
            </span>
          </div>
        ) : pokemonsFiltrados.length === 0 ? (
          <div className="flex justify-center py-20">
            <span style={{ color: 'var(--text-secondary)' }}>Nenhum Pokémon encontrado</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {pokemonsFiltrados.map(pokemon => (
              <PokemonCard
                key={pokemon.id}
                pokemon={pokemon}
                onEdit={handleEdit}
                onDelete={setDeletingPokemon}
              />
            ))}
          </div>
        )}
      </main>

      {/* FAB - botão de criar */}
      <button
        onClick={() => setModalOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center text-2xl glow-purple hover-lift"
        style={{ background: 'var(--purple-secondary)' }}
      >
        +
      </button>

      {/* Modais */}
      {modalOpen && (
        <PokemonModal
          pokemon={editingPokemon}
          onClose={handleCloseModal}
        />
      )}
      {deletingPokemon && (
        <DeleteModal
          pokemon={deletingPokemon}
          onClose={() => setDeletingPokemon(null)}
        />
      )}
    </div>
  );
}

export default function DashboardPage() {
  return (
    <PokemonProvider>
      <DashboardContent />
    </PokemonProvider>
  );
}