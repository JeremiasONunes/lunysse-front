// Componente de Card reutilizável
export const Card = ({ children, className = '', ...props }) => {
  return (
    <div 
      // Aplica estilo base (glassmorphism + sombra + padding) e permite sobrescrever/adicionar classes via className
      className={`glassmorphism shadow-lg p-6 ${className}`}
      {...props} // Permite passar atributos extras como id, onClick, etc.
    >
      {/* Renderiza o conteúdo passado como filho do Card */}
      {children}
    </div>
  );
};