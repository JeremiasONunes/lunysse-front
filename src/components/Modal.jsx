// Componente Modal reutilizável
import { useEffect } from 'react';
import { X } from 'lucide-react';
import { Card } from './Card';

export const Modal = ({ 
  isOpen, // Controla se o modal está aberto
  onClose, // Função para fechar o modal
  title, // Título opcional do modal
  children, // Conteúdo do modal
  size = 'md', // Tamanho do modal (sm, md, lg, xl)
  className = '' // Classes adicionais personalizadas
}) => {
  // Hook que adiciona listener para a tecla Escape e controla overflow do body
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose(); // Fecha modal ao pressionar Escape
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape); // Adiciona listener quando modal abre
      document.body.style.overflow = 'hidden'; // Evita scroll no background
    }

    return () => {
      document.removeEventListener('keydown', handleEscape); // Remove listener ao fechar
      document.body.style.overflow = 'unset'; // Restaura scroll
    };
  }, [isOpen, onClose]);

  // Se modal não estiver aberto, não renderiza nada
  if (!isOpen) return null;

  // Define classes de largura de acordo com o tamanho
  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl'
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4"> {/* Container centralizado */}
      {/* Backdrop semi-transparente */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose} // Fecha modal ao clicar no backdrop
        aria-hidden="true"
      />
      
      {/* Conteúdo do Modal dentro do Card */}
      <Card className={`relative w-full ${sizes[size]} ${className}`}>
        {/* Header do Modal com título e botão de fechar */}
        {title && (
          <div className="flex justify-between items-center mb-4 pb-4 border-b border-white/20">
            <h2 className="text-xl font-semibold text-dark">{title}</h2>
            <button
              onClick={onClose}
              className="text-dark/60 hover:text-dark transition-colors"
              aria-label="Fechar modal"
            >
              <X size={24} /> {/* Ícone de fechar */}
            </button>
          </div>
        )}
        
        {/* Conteúdo do modal */}
        <div>{children}</div>
      </Card>
    </div>
  );
};
