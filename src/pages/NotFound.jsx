import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Home } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="text-center max-w-md w-full">
        <div className="mb-6">
          <h1 className="text-4xl sm:text-6xl font-bold text-light mb-4">404</h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-dark mb-2">Página não encontrada</h2>
          <p className="text-sm sm:text-base text-dark/70">
            Ops! A página que você está procurando não existe ou foi movida.
          </p>
        </div>
        
        <Link to="/dashboard">
          <Button className="flex items-center gap-2 mx-auto">
            <Home size={18} className="sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">Voltar ao Início</span>
          </Button>
        </Link>
      </Card>
    </div>
  );
};