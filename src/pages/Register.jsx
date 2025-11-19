import { useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Card } from '../components/Card';
import toast from 'react-hot-toast';

export const Register = () => {
  const [userType, setUserType] = useState('paciente');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    crm: '',
    specialty: '',
    phone: '',
    birthDate: ''
  });
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = useCallback((field) => (e) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error('Senhas não coincidem');
      return;
    }

    setLoading(true);

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        type: userType === 'psicologo' ? 'psicologo' : 'paciente',
        phone: formData.phone || null,
        ...(userType === 'psicologo' && {
          specialty: formData.specialty,
          crp: formData.crm
        }),
        ...(userType === 'paciente' && {
          birth_date: formData.birthDate
        })
      };
      
      console.log('Payload enviado:', payload);
      await register(payload);
      toast.success('Conta criada com sucesso!');
      navigate('/dashboard');
    } catch (error) {
      console.error('Erro no registro:', error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-dark mb-2">{"Criar Conta"}</h1>
          <p className="text-dark/70">Cadastre-se na lunysse</p>
        </div>

        {/* User Type Selector */}
        <div className="flex mb-6 gap-1">
          <Button
            type="button"
            variant={userType === 'paciente' ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setUserType('paciente')}
            className="flex-1"
          >
            {"Paciente"}
          </Button>
          <Button
            type="button"
            variant={userType === 'psicologo' ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setUserType('psicologo')}
            className="flex-1"
          >
            {"Psicólogo"}
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Nome completo"
            value={formData.name}
            onChange={handleInputChange('name')}
            placeholder="Seu nome completo"
            required
          />

          <Input
            label="E-mail"
            type="email"
            value={formData.email}
            onChange={handleInputChange('email')}
            placeholder="seu@email.com"
            required
          />

          <Input
            label="Senha"
            type="password"
            value={formData.password}
            onChange={handleInputChange('password')}
            placeholder="Sua senha"
            required
          />

          <Input
            label="Confirmar senha"
            type="password"
            value={formData.confirmPassword}
            onChange={handleInputChange('confirmPassword')}
            placeholder="Confirme sua senha"
            required
          />

          {/* Campos específicos para psicólogo */}
          {userType === 'psicologo' && (
            <>
              <Input
                label="CRM"
                value={formData.crm}
                onChange={handleInputChange('crm')}
                placeholder="Ex: CRP 12/34567"
                required
              />

              <Input
                label="Especialidade"
                value={formData.specialty}
                onChange={handleInputChange('specialty')}
                placeholder="Ex: Psicologia Clínica, Terapia Cognitiva"
                required
              />

              <Input
                label="Telefone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange('phone')}
                placeholder="(11) 99999-9999"
                required
              />
            </>
          )}

          {/* Campos específicos para paciente */}
          {userType === 'paciente' && (
            <>
              <Input
                label="Telefone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange('phone')}
                placeholder="(11) 99999-9999"
                required
              />

              <Input
                label="Data de nascimento"
                type="date"
                value={formData.birthDate}
                onChange={handleInputChange('birthDate')}
                required
              />
            </>
          )}

          <Button
            type="submit"
            loading={loading}
            className="w-full"
          >
            Cadastrar
          </Button>
        </form>

        <div className="mt-6 text-center space-y-2">
          <p className="text-dark/70">
            {"Já tem uma conta?"}{' '}
            <Link to="/login" className="text-light hover:text-accent font-medium">
              {"Fazer login"}
            </Link>
          </p>
          <p className="text-dark/70">
            <Link to="/" className="text-light hover:text-accent font-medium">
              {"← Voltar ao início"}
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
};