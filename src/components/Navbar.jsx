import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Menu, X, LogOut } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navLinks = user?.type === 'psicologo' 
    ? [
        { to: '/dashboard', label: 'Dashboard' },
        { to: '/relatorios', label: 'Relatórios' },
        { to: '/historico', label: 'Histórico' }
      ]
    : [
        { to: '/dashboard', label: 'Dashboard' },
        { to: '/agendamento', label: 'Agendar' },
        { to: '/historico', label: 'Histórico' }
      ];

  return (
    <nav className="bg-dark shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="Lunysse" className="w-10 h-10 " />
            <Link to="/dashboard" className="text-xl font-bold text-white">
              Lunysse
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="text-light hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center space-x-4">
              <span className="text-white text-sm">Olá, {user?.name}</span>
              <button
                onClick={handleLogout}
                className="text-light hover:text-accent transition-colors"
                aria-label="Sair"
              >
                <LogOut size={20} />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-light hover:text-accent"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block px-3 py-2 text-light hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={handleLogout}
                className="block w-full text-left px-3 py-2 text-light hover:text-accent transition-colors"
              >
                Sair
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};