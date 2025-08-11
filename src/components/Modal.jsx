import { useEffect } from 'react';
import { X } from 'lucide-react';
import { Card } from './Card';

export const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  size = 'md',
  className = '' 
}) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl'
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal Content */}
      <Card className={`relative w-full ${sizes[size]} ${className}`}>
        {/* Header */}
        {title && (
          <div className="flex justify-between items-center mb-4 pb-4 border-b border-white/20">
            <h2 className="text-xl font-semibold text-dark">{title}</h2>
            <button
              onClick={onClose}
              className="text-dark/60 hover:text-dark transition-colors"
              aria-label="Fechar modal"
            >
              <X size={24} />
            </button>
          </div>
        )}
        
        {/* Content */}
        <div>{children}</div>
      </Card>
    </div>
  );
};