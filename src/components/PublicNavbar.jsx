// Importa hooks e componentes necessários
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Link para navegação e useLocation para saber a rota atual
import { Menu, X } from 'lucide-react'; // Ícones de menu (hambúrguer e fechar)

// Componente da Navbar pública
export const PublicNavbar = () => {
  // Estado para controlar se o menu mobile está aberto ou fechado
  const [isOpen, setIsOpen] = useState(false);

  // Hook para acessar a rota atual (ex.: "/", "/login", etc.)
  const location = useLocation();

  // Links de navegação
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'Sobre' },
    { to: '/login', label: 'Login' }
  ];

  // Função que retorna true se o link passado for o ativo (rota atual)
  const isActive = (path) => location.pathname === path;

  return (
    // Navbar fixa no topo, com fundo semi-transparente e efeito blur
    <nav className="bg-white/95 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo + Nome do sistema */}
          <div className="flex items-center space-x-3 md:space-x-4">
            <div className="relative">
              {/* Logo */}
              <img 
                src="/logo.png" 
                alt="Lunysse" 
                className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl shadow-lg" 
              />
              {/* Efeito de brilho atrás do logo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-light to-accent rounded-lg md:rounded-xl blur opacity-30"></div>
            </div>
            {/* Nome e descrição */}
            <div>
              <span className="text-xl md:text-2xl font-bold text-dark">
                Lunysse
              </span>
              <p className="text-xs text-dark/60 font-medium hidden sm:block">
                Sistema Psicológico
              </p>
            </div>
          </div>
          
          {/* Links para desktop */}
          <div className="flex items-center space-x-3 md:space-x-6">
            {navLinks.slice(0, -1).map(link => ( // Mostra todos os links, menos o último (login)
              <Link
                key={link.to}
                to={link.to}
                className={`hidden sm:block font-medium transition-colors text-sm md:text-base ${
                  isActive(link.to)
                    ? 'text-light' // Se for a rota atual, destaca
                    : 'text-dark/70 hover:text-light' // Caso contrário, fica cinza e muda no hover
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Botão de Login (diferente dos outros links) */}
            <Link to="/login">
              <button className="bg-gradient-to-r from-light to-accent text-white px-3 md:px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 text-sm md:text-base">
                <span className="hidden sm:inline">Entrar</span>
                <span className="sm:hidden">Login</span>
              </button>
            </Link>
          </div>

          {/* Botão de abrir/fechar menu mobile */}
          <div className="md:hidden flex items-center ml-2">
            <button
              onClick={() => setIsOpen(!isOpen)} // Alterna estado
              className="text-dark/70 hover:text-light"
              aria-label="Menu"
            >
              {/* Ícone muda conforme o estado */}
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menu Mobile (aparece só quando isOpen = true) */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/80 backdrop-blur-md rounded-lg">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block px-3 py-2 rounded-lg transition-colors ${
                    isActive(link.to)
                      ? 'text-light bg-light/10 font-medium' // Link ativo
                      : 'text-dark/70 hover:text-light hover:bg-light/5' // Link normal
                  }`}
                  onClick={() => setIsOpen(false)} // Fecha o menu ao clicar
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
