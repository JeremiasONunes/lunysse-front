import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { mockApi } from '../services/mockApi';
import { Eye, EyeOff, Heart, Shield } from 'lucide-react';
import toast from 'react-hot-toast';

export const LunysseLogin = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: '',
    type: 'paciente',
    crm: '',
    specialty: '',
    phone: ''
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        const { user, token } = await mockApi.login(formData.email, formData.password);
        login(user, token);
        toast.success('Login realizado com sucesso!');
        navigate('/dashboard');
      } else {
        if (formData.password !== formData.confirmPassword) {
          toast.error('Senhas não coincidem');
          return;
        }
        const { user, token } = await mockApi.register({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          type: formData.type,
          ...(formData.type === 'psicologo' && {
            crm: formData.crm,
            specialty: formData.specialty,
            phone: formData.phone
          })
        });
        login(user, token);
        toast.success('Conta criada com sucesso!');
        navigate('/dashboard');
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (isMobile) {
    return (
      <div className="mobile-redirect">
        <div className="max-w-md mx-auto">
          <div className="mb-8">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-accent mb-2">Lunysse</h1>
            <p className="text-white/80">Sistema de Atendimento Psicológico</p>
          </div>
          
          <div className="glassmorphism-light p-6">
            <h2 className="text-xl font-semibold text-white mb-4">
              Acesso via Desktop
            </h2>
            <p className="text-white/80 mb-4">
              Para uma melhor experiência, acesse o Lunysse através de um computador ou tablet.
            </p>
            <p className="text-white/60 text-sm">
              Nossa plataforma foi otimizada para telas maiores, garantindo a melhor usabilidade para profissionais e pacientes.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="bg-decoration bg-decoration-1"></div>
      <div className="bg-decoration bg-decoration-2"></div>
      <div className="bg-decoration bg-decoration-3"></div>

      <div className="min-h-screen flex">
        {/* Seção da Logo - Lado Esquerdo */}
        <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-12">
          <div className="text-center animate-fade-in-left">
            <div className="mb-8">
              <div className="w-32 h-32 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <Heart className="w-16 h-16 text-white" />
              </div>
              <h1 className="text-6xl font-bold text-accent mb-4 drop-shadow-lg">
                Lunysse
              </h1>
              <h2 className="text-2xl font-medium text-white mb-6">
                Sistema de Atendimento Psicológico
              </h2>
              <p className="text-xl text-white/80 max-w-md mx-auto">
                Conectando pessoas ao cuidado mental
              </p>
            </div>
          </div>
        </div>

        {/* Seção do Formulário - Lado Direito */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-md animate-fade-in-up">
            {/* Logo Mobile */}
            <div className="lg:hidden text-center mb-8">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-accent mb-2">Lunysse</h1>
              <p className="text-medium">Sistema de Atendimento Psicológico</p>
            </div>

            {/* Card Principal */}
            <div className="glassmorphism p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-dark mb-2">
                  {isLogin ? 'Entrar' : 'Criar Conta'}
                </h2>
                <p className="text-medium">
                  {isLogin 
                    ? 'Acesse sua conta e continue seu cuidado' 
                    : 'Junte-se à nossa comunidade de cuidado'
                  }
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {!isLogin && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-medium mb-2 uppercase tracking-wide">
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 input-field rounded-xl text-dark placeholder-dark/60 focus:outline-none"
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-medium mb-2 uppercase tracking-wide">
                        Tipo de Conta
                      </label>
                      <div className="flex bg-white/10 rounded-xl p-1">
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, type: 'paciente' })}
                          className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                            formData.type === 'paciente'
                              ? 'bg-light text-white'
                              : 'text-medium hover:text-light'
                          }`}
                        >
                          Paciente
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, type: 'psicologo' })}
                          className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                            formData.type === 'psicologo'
                              ? 'bg-light text-white'
                              : 'text-medium hover:text-light'
                          }`}
                        >
                          Psicólogo
                        </button>
                      </div>
                    </div>
                  </>
                )}

                <div>
                  <label className="block text-sm font-medium text-medium mb-2 uppercase tracking-wide">
                    E-mail
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 input-field rounded-xl text-dark placeholder-dark/60 focus:outline-none"
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-medium mb-2 uppercase tracking-wide">
                    Senha
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full px-4 py-3 pr-12 input-field rounded-xl text-dark placeholder-dark/60 focus:outline-none"
                      placeholder="Sua senha"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-medium hover:text-light transition-colors"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                {!isLogin && (
                  <div>
                    <label className="block text-sm font-medium text-medium mb-2 uppercase tracking-wide">
                      Confirmar Senha
                    </label>
                    <input
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className="w-full px-4 py-3 input-field rounded-xl text-dark placeholder-dark/60 focus:outline-none"
                      placeholder="Confirme sua senha"
                      required
                    />
                  </div>
                )}

                {/* Campos específicos para psicólogo */}
                {!isLogin && formData.type === 'psicologo' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-medium mb-2 uppercase tracking-wide">
                        CRM/CRP
                      </label>
                      <input
                        type="text"
                        value={formData.crm}
                        onChange={(e) => setFormData({ ...formData, crm: e.target.value })}
                        className="w-full px-4 py-3 input-field rounded-xl text-dark placeholder-dark/60 focus:outline-none"
                        placeholder="Ex: CRP 12/34567"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-medium mb-2 uppercase tracking-wide">
                        Especialidade
                      </label>
                      <input
                        type="text"
                        value={formData.specialty}
                        onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                        className="w-full px-4 py-3 input-field rounded-xl text-dark placeholder-dark/60 focus:outline-none"
                        placeholder="Ex: Psicologia Clínica"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-medium mb-2 uppercase tracking-wide">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 input-field rounded-xl text-dark placeholder-dark/60 focus:outline-none"
                        placeholder="(11) 99999-9999"
                        required
                      />
                    </div>
                  </>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-6 btn-primary rounded-xl font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Carregando...' : (isLogin ? 'Entrar' : 'Criar Conta')}
                </button>
              </form>

              <div className="mt-6 text-center">
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="btn-ghost font-medium"
                >
                  {isLogin 
                    ? 'Não tem uma conta? Criar conta' 
                    : 'Já tem uma conta? Fazer login'
                  }
                </button>
              </div>
            </div>

            {/* Card de Demonstração */}
            <div className="glassmorphism mt-6 p-6">
              <div className="flex items-center mb-3">
                <Shield className="w-5 h-5 text-medium mr-2" />
                <h3 className="font-semibold text-medium">Contas de Demonstração</h3>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-dark/70">
                  <strong>Psicólogo:</strong> psicologo@test.com
                </p>
                <p className="text-dark/70">
                  <strong>Paciente:</strong> paciente@test.com
                </p>
                <p className="text-dark/70">
                  <strong>Senha:</strong> 123456
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};