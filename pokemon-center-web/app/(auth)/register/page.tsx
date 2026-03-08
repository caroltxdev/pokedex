'use client';
// Aqui eu criei a página de registro, que é bem similar à de login, mas com campos adicionais para nome e confirmação de senha. Ela utiliza a função de registro do AuthContext e tem validações básicas para garantir que as senhas coincidam e tenham um comprimento mínimo. Após o registro bem-sucedido, o usuário é redirecionado para o dashboard.
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import Link from 'next/link';

export default function RegisterPage() {
  const [showSenha, setShowSenha] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (senha !== confirmarSenha) {
      setError('As senhas não coincidem');
      return;
    }

    if (senha.length < 6) {
      setError('Senha deve ter no mínimo 6 caracteres');
      return;
    }

    setLoading(true);
    try {
      await register(email, nome, senha);
      router.push('/dashboard');
    } catch {
      setError('Erro ao criar conta. Tente outro email.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="glass-card-purple rounded-2xl p-8 w-full max-w-md">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png"
            alt="Mewtwo"
            className="w-24 h-24 animate-float"
          />
          <h1 className="text-3xl font-bold text-white mt-2">Criar Conta</h1>
          <span className="font-pixel text-xs mt-1" style={{ color: 'var(--purple-secondary)' }}>
            NOVO TRAINER
          </span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="font-pixel text-xs mb-2 block" style={{ color: 'var(--purple-secondary)' }}>
              USERNAME
            </label>
            <input
              type="text"
              placeholder="Escolha seu username"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="glass-input rounded-xl px-4 py-3 outline-none w-full"
              required
            />
          </div>

          <div>
            <label className="font-pixel text-xs mb-2 block" style={{ color: 'var(--purple-secondary)' }}>
              EMAIL
            </label>
            <input
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="glass-input rounded-xl px-4 py-3 outline-none w-full"
              required
            />
          </div>

          <div className="relative"> {/*Campo que mostra ou esconde a senha*/}
            <label className="font-pixel text-xs mb-2 block" style={{ color: 'var(--purple-secondary)' }}>
              SENHA
            </label>
            <input
              type={showSenha ? 'text' : 'password'}
              placeholder="Mínimo 6 caracteres"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="glass-input rounded-xl px-4 py-3 outline-none w-full"
              required
            />

            <button
          type="button"
          onClick={() => setShowSenha(!showSenha)}
          className="absolute right-3 top-2/3 -translate-y-1/2"
          style={{ color: 'var(--text-secondary)' }}
            >
          {showSenha ? '🙈' : '👁️'}
        </button>

          </div>

          <div className="relative"> {/*Campo que mostra ou esconde a senha de confirmação*/}

            <label className="font-pixel text-xs mb-2 block" style={{ color: 'var(--purple-secondary)' }}>
              CONFIRMAR SENHA
            </label>
            <input
              type={showSenha ? 'text' : 'password'}
              placeholder="Digite a senha novamente"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              className="glass-input rounded-xl px-4 py-3 outline-none w-full"
              required
            />

          <button
          type="button"
          onClick={() => setShowSenha(!showSenha)}
          className="absolute right-3 top-2/3 -translate-y-1/2"
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
            className="font-pixel text-sm py-4 rounded-xl font-bold glow-purple transition-all hover-lift"
            style={{ background: 'var(--purple-secondary)', color: 'white' }}
          >
            {loading ? 'CRIANDO...' : '👤 CRIAR CONTA'}
          </button>
        </form>

        <p className="text-center mt-6" style={{ color: 'var(--text-secondary)' }}>
          Já tem uma conta?{' '}
          <Link href="/login" style={{ color: 'var(--purple-secondary)' }} className="hover:underline">
            Fazer login
          </Link>
        </p>
      </div>
    </div>
  );
}