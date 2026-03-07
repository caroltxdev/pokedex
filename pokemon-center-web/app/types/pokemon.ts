export interface Pokemon {
  id: string;
  nome: string;
  tipo: string;
  nivel: number;
  hp: number;
  numeroPokedex: number;
  userId: string;
  createdAt: string;
  user?: {
    id: string;
    nome: string;
  };
}

export interface User {
  id: string;
  email: string;
  nome: string;
}

export interface AuthResponse {
  token: string;
}