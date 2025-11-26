// Importações necessárias
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Card } from '../components/Card';
import toast from 'react-hot-toast';

// Componente funcional Login
export const Login = () => {
  // Estado que guarda os dados do formulário (email e senha)
  const [formData, setFormData] = useState({ email: '', password: '' });
  // Estado que controla o carregamento (loading) ao enviar o formulário
  const [loading, setLoading] = useState(false);
  // Função de login vinda do contexto de autenticação
  const { login } = useAuth();
  // Hook para redirecionar o usuário após o login
  const navigate = useNavigate();

  // Função que trata o envio do formulário de login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await login(formData.email, formData.password);
      toast.success('Login realizado com sucesso!');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center p-2 sm:p-4"> {/* Centraliza o card */}
      {/* Card que contém o formulário de login */}
      <Card className="w-500 max-w-xs sm:max-w-lg">
        {/* Cabeçalho com título e subtítulo */}
        <div className="text-center mb-4 sm:mb-8">
          <h1 className="text-xl sm:text-3xl font-bold text-dark mb-2">Entrar</h1>
          <p className="text-xs sm:text-base text-dark/70">Acesse sua conta no Lunysse</p>
        </div>

        {/* Formulário de login */}
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-6">
          {/* Campo de email */}
          <Input
            label="E-mail"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="seu@email.com"
            required
          />

          {/* Campo de senha */}
          <Input
            label="Senha"
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            placeholder="Sua senha"
            required
          />

          {/* Botão de login */}
          <Button
            type="submit"
            loading={loading} // Mostra spinner quando loading = true
            className="w-full"
          >
            Entrar
          </Button>
        </form>

        {/* Links adicionais: criar conta e voltar ao início */}
        <div className="mt-3 sm:mt-6 text-center space-y-1 sm:space-y-2">
          <p className="text-xs sm:text-base text-dark/70">
            Não tem uma conta?{' '}
            <Link to="/register" className="text-light hover:text-accent font-medium">
              Criar conta
            </Link>
          </p>
          <p className="text-xs sm:text-base text-dark/70">
            <Link to="/" className="text-light hover:text-accent font-medium">
              ← Voltar ao início
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
};
