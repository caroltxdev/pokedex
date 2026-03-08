'use client';
// Aqui criei o contexto para gerenciar os pokemons, com as funções de CRUD e o estado de loading. Ele é utilizado no dashboard para exibir a lista de pokemons e nos modais para criar/editar pokemons.
import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { Pokemon } from '../types/pokemon';
import { useAuth } from './AuthContext';
import { io } from 'socket.io-client';

interface PokemonContextType {
  pokemons: Pokemon[];
  loading: boolean;
  fetchPokemons: () => Promise<void>;
  createPokemon: (data: Omit<Pokemon, 'id' | 'createdAt' | 'userId' | 'user'>) => Promise<void>;
  updatePokemon: (id: string, data: Partial<Pokemon>) => Promise<void>;
  deletePokemon: (id: string) => Promise<void>;
}

const PokemonContext = createContext<PokemonContextType>({} as PokemonContextType);

export function PokemonProvider({ children }: { children: React.ReactNode }) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);
  const { token } = useAuth();

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };

  const fetchPokemons = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pokemon`, { headers });
      const data = await res.json();
      setPokemons(data);
    } finally {
      setLoading(false);
    }
  }, [token]);

  // Conecta ao WebSocket e escuta eventos de atualização em tempo real
  // Quando qualquer usuário cria/edita/deleta um pokemon, a lista atualiza automaticamente
  useEffect(() => {
    if (!token) return;

    const socket = io(`${process.env.NEXT_PUBLIC_API_URL}`);

    socket.on('pokemon-updated', () => {
      fetchPokemons();
    });

    // Desconecta quando o componente desmonta
    return () => {
      socket.disconnect();
    };
  }, [token, fetchPokemons]);

  const createPokemon = async (data: Omit<Pokemon, 'id' | 'createdAt' | 'userId' | 'user'>) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pokemon`, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Erro ao criar pokemon');
    await fetchPokemons();
  };

  const updatePokemon = async (id: string, data: Partial<Pokemon>) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pokemon/${id}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Erro ao atualizar pokemon');
    await fetchPokemons();
  };

  const deletePokemon = async (id: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pokemon/${id}`, {
      method: 'DELETE',
      headers,
    });
    if (!res.ok) throw new Error('Erro ao deletar pokemon');
    await fetchPokemons();
  };

  return (
    <PokemonContext.Provider value={{ pokemons, loading, fetchPokemons, createPokemon, updatePokemon, deletePokemon }}>
      {children}
    </PokemonContext.Provider>
  );
}

export const usePokemon = () => useContext(PokemonContext);