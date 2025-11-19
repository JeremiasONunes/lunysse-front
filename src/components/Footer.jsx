export const Footer = () => {
  return (
    <footer className="bg-white/95 backdrop-blur-md border-t border-white/20 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo e nome */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img 
                src="/logo.png" 
                alt="Lunysse" 
                className="w-8 h-8 rounded-lg shadow-md" 
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-light to-accent rounded-lg blur opacity-20"></div>
            </div>
            <span className="text-lg font-bold text-dark">Lunysse</span>
          </div>
          
          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-dark/70 text-sm">
              © 2025 Todos os direitos reservados a{' '}
              <span className="text-light font-medium">Jeremias O Nunes</span>
            </p>
            <p className="text-dark/60 text-xs mt-1">
              Desenvolvedor Full Stack
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};