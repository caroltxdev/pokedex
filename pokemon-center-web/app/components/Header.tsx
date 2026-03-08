'use client';

import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';

// Header do admin, mostrando o nome do usuário logado e um botão de logout
export default function Header() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <header className="flex items-center justify-between px-6 py-4" style={{ borderBottom: '1px solid var(--glass-border)' }}>
      {/* Logo */}

      <div className="flex items-center gap-3">
      <img
        src="/Pokeball.png"
        alt="pokébola"
        className="w-8 h-8 animate-spin"
      />
      <span className="text-white font-bold text-lg">PokéCenter Admin</span>
    </div>

      {/* User info */}
      <div className="flex items-center gap-4">
        <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm" style={{ background: 'var(--mint-primary)', color: '#0D1F1A' }}>
          {user?.nome?.charAt(0).toUpperCase()}
        </div>
        <span className="text-white font-medium">{user?.nome}</span>
        <button
          onClick={handleLogout}
          className="hover-lift"
          style={{ color: 'var(--text-secondary)' }}
          title="Sair"
        >
          <LogOut size={18} color="#FF6B6B" />
        </button>
      </div>
    </header>
  );
}