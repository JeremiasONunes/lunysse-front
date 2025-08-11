# 🏗 Arquitetura do Sistema Lunysse

## Visão Geral da Arquitetura

O Lunysse segue uma arquitetura de **Single Page Application (SPA)** baseada em React, com foco em componentização, reutilização e manutenibilidade.

## Padrões Arquiteturais

### 1. Component-Based Architecture
- Componentes funcionais com hooks
- Separação clara entre UI e lógica de negócio
- Reutilização através de props e composição

### 2. Context Pattern
- Gerenciamento de estado global com React Context
- AuthContext para autenticação e dados do usuário
- Evita prop drilling desnecessário

### 3. Service Layer Pattern
- Camada de serviços isolada (mockApi.js)
- Abstração da fonte de dados
- Facilita migração para API real

### 4. Route-Based Code Splitting
- Páginas organizadas por funcionalidade
- Rotas protegidas com HOC
- Navegação baseada em perfil de usuário

## Estrutura de Camadas

```
┌─────────────────────────────────────┐
│           Presentation Layer        │
│  (Pages, Components, UI Elements)   │
├─────────────────────────────────────┤
│            Business Layer           │
│     (Contexts, Hooks, Utils)        │
├─────────────────────────────────────┤
│            Service Layer            │
│        (API, Data Access)           │
├─────────────────────────────────────┤
│            Data Layer               │
│      (LocalStorage, Mock Data)      │
└─────────────────────────────────────┘
```

## Fluxo de Dados

### Autenticação
```
Login Form → AuthContext → mockApi.login() → localStorage → User State
```

### Agendamento
```
Agendamento Form → mockApi.createAppointment() → localStorage → UI Update
```

### Relatórios
```
Dashboard → mockApi.getReportsData() → Data Processing → Charts Render
```

## Componentes Principais

### Core Components
- **App.jsx**: Componente raiz com providers
- **AppRoutes.jsx**: Configuração de rotas
- **AuthContext.jsx**: Gerenciamento de autenticação

### UI Components
- **Button**: Componente base para ações
- **Card**: Container com glassmorphism
- **Modal**: Overlay para interações
- **Sidebar**: Navegação principal
- **LoadingSpinner**: Estados de carregamento

### Page Components
- **Dashboard**: Visão geral por perfil
- **Agendamento**: Fluxo de agendamento
- **Pacientes**: Gestão de pacientes
- **Relatórios**: Analytics e métricas

## Gerenciamento de Estado

### Local State (useState)
- Estados específicos de componentes
- Formulários e interações temporárias
- Estados de loading e erro

### Context State (useContext)
- Estado global de autenticação
- Dados do usuário logado
- Configurações da aplicação

### Persistent State (localStorage)
- Dados de usuários
- Pacientes e agendamentos
- Configurações do usuário

## Roteamento

### Estrutura de Rotas
```
/
├── public/
│   ├── /
│   ├── /about
│   ├── /login
│   ├── /lunysse
│   └── /register
└── protected/
    ├── /dashboard
    ├── /agendamento (pacientes)
    ├── /pacientes (psicólogos)
    ├── /pacientes/:id
    ├── /sessao/:sessionId
    └── /relatorios (psicólogos)
```

### Guards de Rota
- **PublicRoute**: Redireciona usuários autenticados
- **ProtectedRoute**: Requer autenticação
- **RoleBasedRoute**: Filtra por tipo de usuário

## Persistência de Dados

### LocalStorage Schema
```javascript
// lunysse_users
[{
  id: number,
  name: string,
  email: string,
  type: 'psicologo' | 'paciente',
  specialty?: string,
  crp?: string
}]

// lunysse_patients
[{
  id: number,
  name: string,
  psychologistId: number,
  // ... outros campos
}]

// lunysse_appointments
[{
  id: number,
  patientId: number,
  psychologistId: number,
  date: string,
  status: string,
  // ... outros campos
}]
```

### Data Access Layer
```javascript
const getStorageData = (key, defaultData) => {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultData;
  } catch {
    return defaultData;
  }
};

const setStorageData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
```

## Padrões de Design

### Composition over Inheritance
```jsx
// Ao invés de herança, usa composição
<Card>
  <CardHeader>
    <CardTitle>Título</CardTitle>
  </CardHeader>
  <CardContent>
    Conteúdo
  </CardContent>
</Card>
```

### Render Props Pattern
```jsx
// Para compartilhar lógica entre componentes
<DataProvider>
  {({ data, loading, error }) => (
    loading ? <Spinner /> : <DataDisplay data={data} />
  )}
</DataProvider>
```

### Higher-Order Components (HOC)
```jsx
// Para funcionalidades transversais
const withAuth = (Component) => {
  return (props) => {
    const { user } = useAuth();
    return user ? <Component {...props} /> : <Navigate to="/login" />;
  };
};
```

## Performance

### Otimizações Implementadas
- **Lazy Loading**: Componentes carregados sob demanda
- **Memoization**: React.memo para componentes puros
- **Debouncing**: Para inputs de busca
- **Virtual Scrolling**: Para listas grandes (futuro)

### Bundle Optimization
- **Tree Shaking**: Eliminação de código não usado
- **Code Splitting**: Divisão por rotas
- **Asset Optimization**: Imagens e recursos otimizados

## Segurança

### Client-Side Security
- **Input Validation**: Validação de formulários
- **XSS Prevention**: Sanitização de dados
- **CSRF Protection**: Tokens de segurança (futuro)
- **Secure Storage**: Dados sensíveis criptografados (futuro)

### Authentication Flow
```
1. User Login → Credentials Validation
2. Token Generation → Secure Storage
3. Route Protection → Token Verification
4. Session Management → Auto Logout
```

## Escalabilidade

### Horizontal Scaling
- **Component Library**: Biblioteca de componentes reutilizáveis
- **Micro-frontends**: Divisão por domínios (futuro)
- **CDN Integration**: Distribuição de assets (futuro)

### Vertical Scaling
- **State Management**: Redux/Zustand para estados complexos (futuro)
- **Database Integration**: Migração para banco real (futuro)
- **API Gateway**: Centralização de APIs (futuro)

## Monitoramento e Logs

### Error Handling
```javascript
// Error Boundary para captura de erros
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}
```

### Performance Monitoring
- **React DevTools**: Profiling de componentes
- **Lighthouse**: Métricas de performance
- **Web Vitals**: Core Web Vitals tracking (futuro)

## Testes

### Estratégia de Testes
```
┌─────────────────┐
│   E2E Tests     │  ← Cypress/Playwright
├─────────────────┤
│ Integration     │  ← React Testing Library
├─────────────────┤
│  Unit Tests     │  ← Jest + RTL
└─────────────────┘
```

### Test Structure
```javascript
// Exemplo de teste de componente
describe('Button Component', () => {
  it('should render with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('should handle click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

## Deployment

### Build Process
```bash
1. npm run build     # Vite build
2. Asset optimization # Minification, compression
3. Bundle analysis   # Size analysis
4. Deploy to CDN     # Static hosting
```

### Environment Configuration
```javascript
// vite.config.js
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['framer-motion', 'lucide-react']
        }
      }
    }
  }
});
```

## Migração para Produção

### Backend Integration
1. **API Replacement**: Substituir mockApi por API real
2. **Authentication**: Implementar JWT/OAuth
3. **Database**: Migrar para PostgreSQL/MongoDB
4. **File Upload**: Sistema de upload de arquivos
5. **Email Service**: Notificações por email

### Infrastructure
1. **Containerization**: Docker para deployment
2. **CI/CD Pipeline**: GitHub Actions/GitLab CI
3. **Monitoring**: Sentry para error tracking
4. **Analytics**: Google Analytics/Mixpanel
5. **CDN**: CloudFlare para assets

## Conclusão

A arquitetura do Lunysse foi projetada para ser:
- **Modular**: Componentes independentes e reutilizáveis
- **Escalável**: Preparada para crescimento
- **Manutenível**: Código limpo e bem documentado
- **Performante**: Otimizada para experiência do usuário
- **Segura**: Implementa boas práticas de segurança

Esta base sólida permite evolução contínua e adaptação às necessidades futuras do projeto.