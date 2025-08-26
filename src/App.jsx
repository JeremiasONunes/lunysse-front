// Importa o componente Toaster da biblioteca react-hot-toast
// Ele é responsável por exibir notificações (toasts) no app
import { Toaster } from 'react-hot-toast';

// Importa o AuthProvider (contexto global de autenticação)
// Esse provider disponibiliza informações e funções de login/logout para toda a aplicação
import { AuthProvider } from './context/AuthContext';

// Importa as rotas principais da aplicação
// Esse componente organiza as páginas (públicas e privadas)
import { AppRoutes } from './routes/AppRoutes';

function App() {
  return (
    // Envolve toda a aplicação com o AuthProvider
    // Assim, qualquer componente dentro do app pode acessar o contexto de autenticação
    <AuthProvider>
      
      {/* Gerencia as rotas da aplicação (login, dashboard, etc.) */}
      <AppRoutes />

      {/* Componente responsável por exibir os toasts (notificações) */}
      <Toaster 
        position="top-right" // Define onde o toast aparece na tela (canto superior direito)
        toastOptions={{
          duration: 4000, // Tempo em milissegundos que o toast permanece visível
          style: { // Estilização customizada dos toasts
            background: 'rgba(255, 255, 255, 0.95)', // Fundo semi-transparente
            color: '#010440', // Cor do texto
            backdropFilter: 'blur(16px)', // Efeito de desfoque (glassmorphism)
            border: '1px solid rgba(255, 255, 255, 0.2)', // Borda sutil
            borderRadius: '12px', // Bordas arredondadas
          },
        }}
      />
    </AuthProvider>
  );
}

// Exporta o componente principal para ser renderizado no index.js
export default App;
