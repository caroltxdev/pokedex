'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types/pokemon';

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, senha: string) => Promise<void>;
  register: (email: string, nome: string, senha: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Recupera token e usuário do localStorage ao carregar
  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');
    
    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
    }
    
    setIsLoading(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const login = async (email: string, senha: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, senha }),
    });

    if (!res.ok) throw new Error('Credenciais inválidas');

    const data = await res.json();
    
    // Busca dados do usuário logado
    const userRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/me`, {
      headers: { Authorization: `Bearer ${data.token}` },
    });
    const userData = await userRes.json();

    // Salva no localStorage para persistir o login
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(userData));
    setToken(data.token);
    setUser(userData);
  };

  const register = async (email: string, nome: string, senha: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, nome, senha }),
    });

    if (!res.ok) throw new Error('Erro ao criar conta');

    const data = await res.json();

    // Busca dados do usuário recém criado
    const userRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/me`, {
      headers: { Authorization: `Bearer ${data.token}` },
    });
    const userData = await userRes.json();

    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(userData));
    setToken(data.token);
    setUser(userData);
  };

  const logout = () => {
    // Limpa tudo do localStorage e reseta o estado
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook customizado para usar o contexto facilmente
export const useAuth = () => useContext(AuthContext);