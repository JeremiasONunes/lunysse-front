// Importações necessárias
import { useState } from 'react'; // Hook para gerenciar estado local
import { Link, useNavigate } from 'react-router-dom'; // Navegação entre páginas
import { useAuth } from '../context/AuthContext'; // Contexto de autenticação
import { mockApi } from '../services/mockApi'; // API simulada para login
import { Button } from '../components/Button'; // Componente de botão reutilizável
import { Input } from '../components/Input'; // Componente de input reutilizável
import { Card } from '../components/Card'; // Componente de card para layout
import toast from 'react-hot-toast'; // Biblioteca para notificações (toasts)

export const Login = () => {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({ email: '', password: '' });
  // Estado para controlar loading do botão
  const [loading, setLoading] = useState(false);
  // Função de login disponibilizada pelo contexto de autenticação
  const { login } = useAuth();
  // Hook para navegação programática
  const navigate = useNavigate();

  // Função que trata o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita recarregar a página
    setLoading(true); // Ativa loading no botão

    try {
      // Chamada à API simulada para autenticação
      const { user, token } = await mockApi.login(formData.email, formData.password);
      // Chama a função de login do contexto, salvando usuário e token
      login(user, token);
      // Mostra toast de sucesso
      toast.success('Login realizado com sucesso!');
      // Redireciona para o dashboard
      navigate('/dashboard');
    } catch (error) {
      // Mostra toast de erro caso o login falhe
      toast.error(error.message);
    } finally {
      setLoading(false); // Desativa loading independentemente do resultado
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center p-4">
      {/* Card centralizando o formulário */}
      <Card className="w-full max-w-md">
        {/* Título e descrição */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-dark mb-2">Entrar</h1>
          <p className="text-dark/70">Acesse sua conta no Lunysse</p>
        </div>

        {/* Formulário de login */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Input de email */}
          <Input
            label="E-mail"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="seu@email.com"
            required
          />

          {/* Input de senha */}
          <Input
            label="Senha"
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            placeholder="Sua senha"
            required
          />

          {/* Botão de envio */}
          <Button
            type="submit"
            loading={loading} // Mostra spinner quando loading = true
            className="w-full"
          >
            Entrar
          </Button>
        </form>

        {/* Links de registro e voltar */}
        <div className="mt-6 text-center space-y-2">
          <p className="text-dark/70">
            Não tem uma conta?{' '}
            <Link to="/register" className="text-light hover:text-accent font-medium">
              Criar conta
            </Link>
          </p>
          <p className="text-dark/70">
            <Link to="/" className="text-light hover:text-accent font-medium">
              ← Voltar ao início
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
};
