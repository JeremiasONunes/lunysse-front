# 👨‍🏫 Guia do Instrutor - Curso Lunysse Full Stack

## 📋 Visão Geral do Curso

Este guia fornece orientações detalhadas para ministrar o curso de desenvolvimento full stack usando o Sistema Lunysse como projeto prático. O curso está estruturado em 27 aulas (108h totais) divididas em 3 partes progressivas.

---

## 🎯 Metodologia de Ensino

### **Abordagem Pedagógica**
- **Aprendizado baseado em projeto**: Construção incremental do Sistema Lunysse
- **Teoria + Prática**: 30% teoria, 70% hands-on
- **Peer learning**: Trabalho em pares e grupos
- **Feedback contínuo**: Avaliações formativas regulares

### **Estrutura das Aulas**
```
Cada aula de 4h segue o padrão:
├── Revisão anterior (15 min)
├── Conteúdo teórico (45 min)
├── Break (15 min)
├── Atividade prática (2h)
├── Break (15 min)
├── Revisão e Q&A (30 min)
└── Preview próxima aula (20 min)
```

---

## 📚 PARTE 1 - FUNDAMENTOS VISUAIS (Aulas 1-5)

### **Objetivos da Parte 1**
- Estabelecer base sólida em design visual
- Introduzir conceitos de UX/UI
- Preparar assets para o projeto
- Criar protótipos de alta fidelidade

### **Aula 1 - Imagem Digital**

#### **Preparação do Instrutor**
```
Materiais necessários:
- Exemplos de imagens em diferentes formatos
- Ferramentas: Photoshop/GIMP, Figma
- Assets do projeto Lunysse para análise
- Calculadora de compressão online
```

#### **Roteiro Detalhado**
1. **Abertura (15 min)**
   - Apresentação do curso e projeto
   - Expectativas e objetivos
   - Overview do Sistema Lunysse

2. **Teoria (45 min)**
   - Diferenças vetor vs bitmap (exemplos práticos)
   - Formatos: PNG (transparência), JPEG (fotos), SVG (ícones), GIF (animações)
   - Demonstração: mesmo ícone em diferentes formatos
   - Unidades: pixels, DPI, viewport units

3. **Prática (2h)**
   - Análise do logo atual do Lunysse
   - Otimização de imagens existentes
   - Criação de favicons em múltiplas resoluções
   - Preparação de ícones SVG para sidebar

#### **Avaliação**
- Checklist de otimização de imagens
- Qualidade dos assets preparados
- Compreensão dos conceitos (quiz rápido)

#### **Recursos para Alunos**
- [TinyPNG](https://tinypng.com/) - Compressão de imagens
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - Otimização SVG
- [Favicon Generator](https://favicon.io/) - Geração de favicons

---

### **Aula 2 - Comunicação Visual**

#### **Preparação do Instrutor**
```
Materiais:
- Paleta de cores do Lunysse impressa
- Exemplos de hierarquia tipográfica
- Grid templates
- Casos de estudo de interfaces médicas
```

#### **Atividades Práticas**
1. **Exercício de Paleta (30 min)**
   - Aplicar cores do Lunysse em diferentes contextos
   - Testar contraste e acessibilidade
   - Criar variações para estados (hover, active, disabled)

2. **Tipografia Hands-on (45 min)**
   - Configurar fontes Inter e Nunito
   - Criar escala tipográfica
   - Testar legibilidade em diferentes tamanhos

3. **Grid System (45 min)**
   - Desenhar wireframes usando grid de 12 colunas
   - Aplicar princípios Gestalt
   - Criar layout responsivo básico

#### **Entregável**
- Protótipo de tela de login com paleta e tipografia aplicadas
- Documentação do design system básico

---

### **Aula 3 - Componentes Visuais**

#### **Foco Principal**
Mapear e projetar todos os componentes reutilizáveis do sistema.

#### **Workshop de Componentes (2h)**
```
Componentes a serem projetados:
1. Button (primary, secondary, danger)
2. Card (glassmorphism effect)
3. Input (com validação visual)
4. Modal (overlay e conteúdo)
5. Sidebar (navegação principal)
6. Navbar (páginas públicas)
```

#### **Metodologia**
- Trabalho em grupos de 3-4 alunos
- Cada grupo responsável por 1-2 componentes
- Apresentação de 5 min por grupo
- Feedback coletivo e refinamento

---

### **Aula 4 - Tratamento de Imagens**

#### **Laboratório Prático**
- **Ferramenta principal**: Figma + plugins de otimização
- **Exercícios progressivos**:
  1. Recorte e ajuste básico
  2. Aplicação de filtros
  3. Criação de sprites
  4. Exportação otimizada

#### **Projeto da Aula**
Criar biblioteca completa de assets otimizados para o Lunysse:
- Logo em 5 tamanhos diferentes
- Ícones da sidebar em SVG
- Imagens de placeholder para perfis
- Sprites organizados

---

### **Aula 5 - Design Responsivo**

#### **Demonstração ao Vivo**
- Mostrar o mesmo layout em mobile, tablet e desktop
- Explicar breakpoints do Tailwind CSS
- Demonstrar sidebar colapsável

#### **Atividade Principal**
Criar protótipos responsivos das principais telas:
1. Login (mobile e desktop)
2. Dashboard psicólogo (3 breakpoints)
3. Lista de pacientes (grid adaptativo)
4. Formulário de agendamento (mobile-first)

#### **Ferramentas**
- Figma com Auto Layout
- Responsively App para testes
- Chrome DevTools para simulação

---

## 💻 PARTE 2 - LINGUAGENS WEB BÁSICAS (Aulas 6-11)

### **Transição Importante**
A partir da Aula 6, começamos a implementar código real. Os protótipos da Parte 1 servem como referência visual.

### **Aula 6 - HTML Semântico**

#### **Setup do Ambiente**
```bash
# Configuração inicial do projeto
npm create vite@latest lunysse-curso -- --template react
cd lunysse-curso
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

#### **Estrutura de Pastas**
```
src/
├── components/
├── pages/
├── assets/
├── styles/
└── utils/
```

#### **Primeira Implementação**
- Página de login com HTML semântico
- Estrutura básica da aplicação
- Navegação acessível

#### **Checklist de Qualidade**
- [ ] Validação W3C
- [ ] Teste com screen reader
- [ ] Navegação por teclado
- [ ] Estrutura lógica

---

### **Aula 7 - CSS e Tailwind**

#### **Configuração do Tailwind**
```javascript
// tailwind.config.js personalizado para Lunysse
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark': '#010440',
        'medium': '#024873',
        'light': '#2493BF',
        'accent': '#26B0BF',
        'background': '#F2EFE9'
      },
      fontFamily: {
        'primary': ['Inter', 'sans-serif'],
        'secondary': ['Nunito', 'sans-serif']
      },
      backdropBlur: {
        'xs': '2px',
      }
    }
  },
  plugins: []
}
```

#### **Componentes da Aula**
1. **Button Component**
   ```jsx
   // Implementação progressiva com variantes
   export const Button = ({ variant, size, children, ...props }) => {
     // Lógica de classes condicionais
   };
   ```

2. **Card Component**
   ```jsx
   // Glassmorphism effect
   export const Card = ({ children, className }) => {
     return (
       <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg">
         {children}
       </div>
     );
   };
   ```

#### **Exercício Prático**
Estilizar completamente a página de login usando apenas Tailwind CSS.

---

### **Aula 8 - Layout Responsivo**

#### **Conceitos Chave**
- Mobile-first approach
- Flexbox vs Grid (quando usar cada um)
- Breakpoints estratégicos

#### **Implementação da Sidebar**
```jsx
// Sidebar responsiva completa
export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 lg:hidden z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 
        transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0 transition-transform duration-300
        bg-white/10 backdrop-blur-md
      `}>
        {/* Conteúdo da sidebar */}
      </aside>
    </>
  );
};
```

#### **Testes Obrigatórios**
- Chrome DevTools (diferentes dispositivos)
- Teste em dispositivo real
- Orientação portrait/landscape

---

### **Aula 9 - JavaScript Básico**

#### **Progressão Didática**
1. **Sintaxe básica** (30 min)
2. **Estruturas de controle** (45 min)
3. **Funções** (45 min)
4. **Aplicação prática** (90 min)

#### **Projeto da Aula: Sistema de Validação**
```javascript
// Validador de formulário progressivo
class FormValidator {
  constructor(form) {
    this.form = form;
    this.rules = {};
    this.errors = {};
  }
  
  addRule(field, validator, message) {
    if (!this.rules[field]) {
      this.rules[field] = [];
    }
    this.rules[field].push({ validator, message });
  }
  
  validate() {
    this.errors = {};
    
    for (const [field, rules] of Object.entries(this.rules)) {
      const value = this.form.querySelector(`[name="${field}"]`).value;
      
      for (const rule of rules) {
        if (!rule.validator(value)) {
          if (!this.errors[field]) {
            this.errors[field] = [];
          }
          this.errors[field].push(rule.message);
        }
      }
    }
    
    return Object.keys(this.errors).length === 0;
  }
}

// Uso prático
const loginForm = document.getElementById('login-form');
const validator = new FormValidator(loginForm);

validator.addRule('email', 
  value => value.includes('@'), 
  'Email deve conter @'
);

validator.addRule('password', 
  value => value.length >= 6, 
  'Senha deve ter pelo menos 6 caracteres'
);
```

---

### **Aula 10 - Eventos e DOM**

#### **Demonstração Interativa**
Criar um mini-sistema de notificações do zero:

```javascript
// Sistema de notificações toast
class ToastSystem {
  constructor() {
    this.container = this.createContainer();
    this.toasts = [];
  }
  
  createContainer() {
    const container = document.createElement('div');
    container.className = 'fixed top-4 right-4 z-50 space-y-2';
    document.body.appendChild(container);
    return container;
  }
  
  show(message, type = 'info', duration = 5000) {
    const toast = this.createToast(message, type);
    this.container.appendChild(toast);
    
    // Animação de entrada
    setTimeout(() => toast.classList.add('opacity-100', 'translate-x-0'), 100);
    
    // Auto-remove
    setTimeout(() => this.remove(toast), duration);
  }
  
  createToast(message, type) {
    const toast = document.createElement('div');
    toast.className = `
      transform translate-x-full opacity-0 transition-all duration-300
      bg-white/90 backdrop-blur-sm border border-white/20 rounded-lg p-4
      shadow-lg max-w-sm
    `;
    
    toast.innerHTML = `
      <div class="flex items-center justify-between">
        <span class="text-dark">${message}</span>
        <button class="ml-4 text-dark/60 hover:text-dark">×</button>
      </div>
    `;
    
    // Event listener para fechar
    toast.querySelector('button').addEventListener('click', () => {
      this.remove(toast);
    });
    
    return toast;
  }
  
  remove(toast) {
    toast.classList.add('translate-x-full', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }
}

// Instância global
window.toast = new ToastSystem();
```

#### **Exercícios Práticos**
1. Implementar toggle da sidebar mobile
2. Criar modal de confirmação
3. Adicionar feedback visual em botões
4. Sistema de abas simples

---

### **Aula 11 - Testes e Compatibilidade**

#### **Laboratório de Testes**
- **Ferramentas**: BrowserStack, Chrome DevTools, Lighthouse
- **Checklist sistemático**:
  - [ ] Chrome (últimas 2 versões)
  - [ ] Firefox (últimas 2 versões)
  - [ ] Safari (última versão)
  - [ ] Edge (última versão)
  - [ ] Mobile: iOS Safari, Chrome Android

#### **Métricas de Performance**
```javascript
// Monitoramento básico de performance
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(`${entry.name}: ${entry.duration.toFixed(2)}ms`);
  });
});

observer.observe({ entryTypes: ['measure', 'navigation'] });

// Marcar início de operação
performance.mark('login-start');

// ... código da operação ...

// Marcar fim e medir
performance.mark('login-end');
performance.measure('login-duration', 'login-start', 'login-end');
```

#### **Relatório de Qualidade**
Template para os alunos documentarem:
- Bugs encontrados e corrigidos
- Métricas de performance
- Scores de acessibilidade
- Plano de melhorias

---

## 🚀 PARTE 3 - PROGRAMAÇÃO AVANÇADA (Aulas 12-27)

### **Mudança de Paradigma**
A partir da Aula 12, migramos para React e desenvolvimento moderno. É importante fazer essa transição gradualmente.

### **Aula 12 - Migração para React**

#### **Setup do Projeto React**
```bash
# Novo projeto com Vite
npm create vite@latest lunysse-react -- --template react
cd lunysse-react

# Dependências do projeto
npm install react-router-dom framer-motion lucide-react recharts
npm install react-hot-toast @huggingface/inference
npm install -D tailwindcss postcss autoprefixer
```

#### **Estrutura de Migração**
1. **Componentes básicos** (Button, Card, Input)
2. **Layout components** (Sidebar, Navbar)
3. **Páginas principais** (Login, Dashboard)
4. **Roteamento** (React Router)

#### **Primeiro Componente React**
```jsx
// Migração do Button para React
import { forwardRef } from 'react';

export const Button = forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  loading = false, 
  className = '', 
  ...props 
}, ref) => {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-light text-white hover:bg-accent focus:ring-light',
    secondary: 'bg-transparent border border-light text-light hover:bg-accent hover:border-accent focus:ring-light',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500'
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button
      ref={ref}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className} ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <div className="flex items-center">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
          Carregando...
        </div>
      ) : children}
    </button>
  );
});

Button.displayName = 'Button';
```

---

### **Aulas 13-15 - Componentes Avançados**

#### **Aula 13 - Sistema de Animações**
```jsx
// Card com animações Framer Motion
import { motion } from 'framer-motion';

export const AnimatedCard = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ scale: 1.02 }}
      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6"
    >
      {children}
    </motion.div>
  );
};
```

#### **Aula 14 - Formulários Avançados**
```jsx
// Hook customizado para formulários
import { useState, useCallback } from 'react';

export const useForm = (initialValues, validationRules) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const setValue = useCallback((name, value) => {
    setValues(prev => ({ ...prev, [name]: value }));
    
    // Validação em tempo real
    if (touched[name] && validationRules[name]) {
      const error = validationRules[name](value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  }, [touched, validationRules]);

  const setTouched = useCallback((name) => {
    setTouched(prev => ({ ...prev, [name]: true }));
  }, []);

  const validate = useCallback(() => {
    const newErrors = {};
    
    Object.keys(validationRules).forEach(field => {
      const error = validationRules[field](values[field]);
      if (error) newErrors[field] = error;
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [values, validationRules]);

  return {
    values,
    errors,
    touched,
    setValue,
    setTouched,
    validate,
    isValid: Object.keys(errors).length === 0
  };
};
```

#### **Aula 15 - Roteamento e Navegação**
```jsx
// Sistema de rotas protegidas
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const ProtectedRoute = ({ children, requiredRole }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requiredRole && user.type !== requiredRole) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};
```

---

### **Aulas 16-20 - Funcionalidades Core**

#### **Aula 16 - Context API e Estado Global**
```jsx
// AuthContext completo
import { createContext, useContext, useReducer, useEffect } from 'react';

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return { ...state, loading: true, error: null };
    case 'LOGIN_SUCCESS':
      return { ...state, loading: false, user: action.payload, error: null };
    case 'LOGIN_ERROR':
      return { ...state, loading: false, error: action.payload };
    case 'LOGOUT':
      return { ...state, user: null, error: null };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    // Verificar se há usuário logado no localStorage
    const savedUser = localStorage.getItem('lunysse_user');
    if (savedUser) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: JSON.parse(savedUser) });
    } else {
      dispatch({ type: 'LOGIN_ERROR', payload: null });
    }
  }, []);

  const login = async (email, password) => {
    dispatch({ type: 'LOGIN_START' });
    
    try {
      // Simular API call
      const response = await mockApi.login(email, password);
      localStorage.setItem('lunysse_user', JSON.stringify(response.user));
      dispatch({ type: 'LOGIN_SUCCESS', payload: response.user });
      return response;
    } catch (error) {
      dispatch({ type: 'LOGIN_ERROR', payload: error.message });
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('lunysse_user');
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{
      ...state,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
```

#### **Aula 17-18 - Mock API e Integração**
```javascript
// Mock API completa
class MockAPI {
  constructor() {
    this.initializeData();
  }

  initializeData() {
    // Inicializar dados se não existirem
    if (!localStorage.getItem('lunysse_users')) {
      localStorage.setItem('lunysse_users', JSON.stringify(this.defaultUsers));
    }
    // ... outros dados
  }

  async login(email, password) {
    // Simular delay de rede
    await this.delay(1000);
    
    const users = JSON.parse(localStorage.getItem('lunysse_users'));
    const user = users.find(u => u.email === email && u.password === password);
    
    if (!user) {
      throw new Error('Credenciais inválidas');
    }
    
    return { user: { ...user, password: undefined } };
  }

  async getPatients(psychologistId) {
    await this.delay(500);
    
    const patients = JSON.parse(localStorage.getItem('lunysse_patients'));
    return patients.filter(p => p.psychologistId === psychologistId);
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

export const mockApi = new MockAPI();
```

#### **Aula 19-20 - Chat com IA**
```jsx
// Implementação do Chat com IA
import { useState, useRef, useEffect } from 'react';
import { enviarParaIA } from '../services/aiService';
import { MarkdownRenderer } from '../components/MarkdownRenderer';

export const ChatIA = () => {
  const [mensagens, setMensagens] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [mensagens]);

  const enviarMensagem = async () => {
    if (!inputValue.trim() || loading) return;

    const novaMensagem = {
      id: Date.now(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMensagens(prev => [...prev, novaMensagem]);
    setInputValue('');
    setLoading(true);

    try {
      const resposta = await enviarParaIA(inputValue, mensagens);
      
      const respostaIA = {
        id: Date.now() + 1,
        type: 'bot',
        content: resposta,
        timestamp: new Date()
      };

      setMensagens(prev => [...prev, respostaIA]);
    } catch (error) {
      const errorMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: `Erro: ${error.message}`,
        timestamp: new Date()
      };
      
      setMensagens(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-md border-b border-white/20 p-4">
        <h1 className="text-2xl font-bold text-dark">Chat com IA Especializada</h1>
        <p className="text-dark/70">Assistente em psicologia clínica</p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {mensagens.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-3xl p-4 rounded-lg ${
                msg.type === 'user'
                  ? 'bg-light text-white'
                  : 'bg-white/10 backdrop-blur-md border border-white/20'
              }`}
            >
              {msg.type === 'bot' ? (
                <MarkdownRenderer content={msg.content} />
              ) : (
                <p className="whitespace-pre-wrap">{msg.content}</p>
              )}
            </div>
          </div>
        ))}
        
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4">
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-light"></div>
                <span className="text-dark/70">IA está pensando...</span>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="bg-white/10 backdrop-blur-md border-t border-white/20 p-4">
        <div className="flex space-x-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && enviarMensagem()}
            placeholder="Digite sua pergunta sobre psicologia..."
            className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-dark placeholder-dark/60 focus:outline-none focus:ring-2 focus:ring-light"
            disabled={loading}
          />
          <Button
            onClick={enviarMensagem}
            disabled={loading || !inputValue.trim()}
            loading={loading}
          >
            Enviar
          </Button>
        </div>
      </div>
    </div>
  );
};
```

---

### **Aulas 21-25 - Desenvolvimento Final**

#### **Cronograma das Aulas Finais**

**Aula 21 - Dashboards e KPIs**
- Implementar dashboard do psicólogo
- Gráficos com Recharts
- KPIs dinâmicos
- Dashboard do paciente

**Aula 22 - Sistema de Agendamento**
- Calendário interativo
- Seleção de horários
- Validação de conflitos
- Confirmação de agendamento

**Aula 23 - Gestão de Pacientes**
- Lista de pacientes
- Detalhes do paciente
- Histórico de sessões
- Edição de informações

**Aula 24 - Relatórios e Analytics**
- Gráficos de frequência
- Análise de status
- Alertas de risco
- Exportação de dados

**Aula 25 - Polimento Final**
- Testes de integração
- Correção de bugs
- Otimizações de performance
- Preparação para deploy

---

### **Aula 26 - Documentação**

#### **Template de Documentação**
```markdown
# Sistema Lunysse - Documentação

## Instalação
1. Clone o repositório
2. Execute `npm install`
3. Configure as variáveis de ambiente
4. Execute `npm run dev`

## Estrutura do Projeto
- `/src/components` - Componentes reutilizáveis
- `/src/pages` - Páginas da aplicação
- `/src/context` - Contextos React
- `/src/services` - Serviços e APIs

## Componentes Principais
### Button
Botão reutilizável com variantes e estados.

**Props:**
- `variant`: 'primary' | 'secondary' | 'danger'
- `size`: 'sm' | 'md' | 'lg'
- `loading`: boolean

**Exemplo:**
```jsx
<Button variant="primary" size="lg" loading={isLoading}>
  Confirmar
</Button>
```

## Fluxos de Usuário
### Login
1. Usuário acessa `/login`
2. Insere credenciais
3. Sistema valida e redireciona

### Agendamento
1. Paciente acessa `/agendamento`
2. Seleciona psicólogo
3. Escolhe data e horário
4. Confirma agendamento
```

---

### **Aula 27 - Deploy e Apresentação**

#### **Processo de Deploy**
```bash
# Build de produção
npm run build

# Deploy no Vercel
npx vercel --prod

# Configurar domínio customizado
vercel domains add lunysse-sistema.com
```

#### **Estrutura da Apresentação**
```
1. Introdução (2 min)
   - Problema que o sistema resolve
   - Público-alvo

2. Demonstração (10 min)
   - Login e navegação
   - Funcionalidades principais
   - Responsividade

3. Tecnologias (3 min)
   - Stack utilizada
   - Decisões arquiteturais

4. Desafios e Soluções (3 min)
   - Principais dificuldades
   - Como foram resolvidas

5. Próximos Passos (2 min)
   - Melhorias futuras
   - Escalabilidade
```

---

## 📊 Sistema de Avaliação Detalhado

### **Rubrica de Avaliação**

#### **Excelente (90-100 pontos)**
- Todas as funcionalidades implementadas
- Código limpo e bem documentado
- Design system consistente
- Performance otimizada
- Testes implementados
- Deploy funcional

#### **Bom (80-89 pontos)**
- Maioria das funcionalidades implementadas
- Código organizado
- Design consistente
- Performance adequada
- Documentação básica

#### **Satisfatório (70-79 pontos)**
- Funcionalidades básicas implementadas
- Código funcional
- Design aceitável
- Funciona localmente

#### **Insatisfatório (<70 pontos)**
- Funcionalidades incompletas
- Código desorganizado
- Problemas de funcionamento

### **Critérios Específicos**

#### **Código (25 pontos)**
- [ ] Estrutura organizada (5 pts)
- [ ] Componentes reutilizáveis (5 pts)
- [ ] Boas práticas React (5 pts)
- [ ] Tratamento de erros (5 pts)
- [ ] Comentários e documentação (5 pts)

#### **Funcionalidades (25 pontos)**
- [ ] Sistema de login (5 pts)
- [ ] Dashboards funcionais (5 pts)
- [ ] Agendamento completo (5 pts)
- [ ] Gestão de pacientes (5 pts)
- [ ] Chat com IA (5 pts)

#### **Design/UX (25 pontos)**
- [ ] Design system consistente (5 pts)
- [ ] Responsividade (5 pts)
- [ ] Acessibilidade (5 pts)
- [ ] Usabilidade (5 pts)
- [ ] Animações e feedback (5 pts)

#### **Qualidade Técnica (25 pontos)**
- [ ] Performance (5 pts)
- [ ] Compatibilidade (5 pts)
- [ ] Testes (5 pts)
- [ ] Deploy funcional (5 pts)
- [ ] Documentação (5 pts)

---

## 🛠 Recursos para o Instrutor

### **Checklist de Preparação**

#### **Antes de Cada Aula**
- [ ] Revisar conteúdo e slides
- [ ] Testar código de exemplo
- [ ] Preparar ambiente de desenvolvimento
- [ ] Verificar ferramentas e recursos
- [ ] Preparar exercícios práticos

#### **Durante a Aula**
- [ ] Fazer backup do código
- [ ] Compartilhar tela adequadamente
- [ ] Pausar para perguntas
- [ ] Circular pela sala (presencial)
- [ ] Documentar dúvidas frequentes

#### **Após a Aula**
- [ ] Disponibilizar código da aula
- [ ] Responder dúvidas no fórum
- [ ] Revisar exercícios entregues
- [ ] Preparar feedback individual
- [ ] Atualizar material se necessário

### **Recursos Digitais**

#### **Repositório do Curso**
```
lunysse-curso/
├── aulas/
│   ├── aula-01/
│   │   ├── slides.pdf
│   │   ├── exercicios/
│   │   └── solucoes/
│   └── ...
├── recursos/
│   ├── assets/
│   ├── templates/
│   └── checklists/
└── projeto-final/
    ├── codigo-base/
    └── exemplos/
```

#### **Ferramentas Recomendadas**
- **Apresentação**: Figma + Slides
- **Código ao vivo**: VS Code + Live Share
- **Comunicação**: Discord/Slack
- **Versionamento**: GitHub Classroom
- **Deploy**: Vercel/Netlify

### **Dicas Pedagógicas**

#### **Gestão de Tempo**
- Use timer para atividades
- Reserve 20% do tempo para dúvidas
- Tenha exercícios extras para alunos rápidos
- Prepare resumos para alunos atrasados

#### **Engajamento**
- Faça perguntas frequentes
- Use exemplos do dia a dia
- Incentive trabalho em pares
- Celebre pequenas conquistas

#### **Suporte Individual**
- Identifique alunos com dificuldades cedo
- Ofereça horários de atendimento
- Crie grupos de estudo
- Tenha material de apoio extra

---

## 📞 Suporte e Recursos Adicionais

### **Comunidade de Aprendizado**
- **Fórum de dúvidas** com categorias por aula
- **Grupo de estudos** para trabalho colaborativo
- **Mentoria peer-to-peer** entre alunos
- **Office hours** semanais com instrutor

### **Recursos Externos**
- **Documentação oficial** das tecnologias
- **Tutoriais complementares** em vídeo
- **Artigos técnicos** selecionados
- **Projetos de inspiração** similares

### **Avaliação Contínua**
- **Feedback semanal** dos alunos
- **Ajustes no cronograma** conforme necessário
- **Métricas de engajamento** e progresso
- **Avaliação final** do curso

---

<div align="center">
  <h2>🎯 Sucesso do Curso</h2>
  <p>O sucesso é medido pelo aprendizado efetivo e pela capacidade dos alunos de aplicar os conhecimentos em projetos reais.</p>
  <p><strong>Boa sorte na jornada educacional!</strong></p>
</div>