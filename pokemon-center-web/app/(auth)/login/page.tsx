'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import Link from 'next/link';
// Essa é a página de login, onde o usuário pode inserir seu email e senha para acessar o dashboard. Ela utiliza o contexto de autenticação para fazer o login e redirecionar para o dashboard. Também tem um link para a página de registro caso o usuário ainda não tenha uma conta.
export default function LoginPage() {
  const [showSenha, setShowSenha] = useState(false);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, senha);
      router.push('/dashboard');
    } catch {
      setError('Email ou senha inválidos');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="glass-card rounded-2xl p-8 w-full max-w-md">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png"
            alt="Gengar"
            className="w-24 h-24 animate-float"
          />
          <h1 className="text-3xl font-bold text-white mt-2">PokéCenter</h1>
          <span className="font-pixel text-xs mt-1" style={{ color: 'var(--mint-primary)' }}>
            ADMIN v2.0
          </span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="glass-input rounded-xl px-4 py-3 outline-none w-full"
            required
          />

          <div className="relative"> {/*Campo que mostra ou esconde a senha*/}

          <input
          type={showSenha ? 'text' : 'password'}
          placeholder="Password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="glass-input rounded-xl px-4 py-3 outline-none w-full pr-12"
          required
        />

        <button
          type="button"
          onClick={() => setShowSenha(!showSenha)}
          className="absolute right-3 top-1/2 -translate-y-1/2"
          style={{ color: 'var(--text-secondary)' }}
        >
          {showSenha ? '🙈' : '👁️'}
        </button>

        </div>

          {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="font-pixel text-sm py-4 rounded-xl font-bold glow-mint transition-all hover-lift"
            style={{ background: 'var(--mint-primary)', color: '#0D1F1A' }}
          >
            {loading ? 'CONECTANDO...' : '→ CONECTAR'}
          </button>
        </form>

        <p className="text-center mt-6" style={{ color: 'var(--text-secondary)' }}>
          Novo por aqui?{' '}
          <Link href="/register" style={{ color: 'var(--mint-primary)' }} className="hover:underline">
            Criar conta
          </Link>
        </p>
      </div>
    </div>
  );
}