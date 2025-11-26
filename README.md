# 🧠 Lunysse - Sistema de Agendamento Psicológico

Sistema web moderno para gestão de consultas psicológicas com **backend real integrado**, desenvolvido com React 19 + Vite. Plataforma completa para psicólogos e pacientes com IA especializada.

![Lunysse Logo](public/logo.png)

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](CHANGELOG.md)
[![React](https://img.shields.io/badge/React-19.1.1-61dafb.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.0-646cff.svg)](https://vitejs.dev/)
[![Tailwind](https://img.shields.io/badge/Tailwind-4.1.11-38bdf8.svg)](https://tailwindcss.com/)
[![Backend](https://img.shields.io/badge/Backend-Integrado-green.svg)](https://lunysse-backend-fmmc.onrender.com)
[![AI](https://img.shields.io/badge/IA-Hugging%20Face-orange.svg)](https://huggingface.co/)

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Stack Tecnológico](#stack-tecnológico)
- [Instalação](#instalação)
- [Uso](#uso)
- [Integração com Backend](#integração-com-backend)
- [IA Especializada](#ia-especializada-em-psicologia)
- [Funcionalidades Avançadas](#funcionalidades-avançadas)
- [Arquitetura](#arquitetura)
- [Segurança](#segurança)
- [Status do Projeto](#status-do-projeto)

## 🎯 Sobre o Projeto

O **Lunysse** é uma plataforma web completa para gestão de consultas psicológicas com **backend real** e **IA especializada**. Sistema profissional que conecta psicólogos e pacientes através de uma interface moderna e intuitiva.

### 🚀 Características Principais

- **Backend Real Integrado**: API completa hospedada no Render
- **IA Especializada**: Chat com modelo GLM-4.5 focado em psicologia clínica
- **Dashboards Dinâmicos**: KPIs em tempo real para psicólogos e pacientes
- **Sistema de Solicitações**: Fluxo completo de aceite de pacientes
- **Relatórios Avançados**: Analytics com gráficos interativos
- **Arquitetura Moderna**: React 19, Tailwind CSS 4, Vite 7

## ✨ Funcionalidades

### 👨⚕️ Para Psicólogos

- **Dashboard Personalizado**: KPIs em tempo real (pacientes ativos, sessões hoje, concluídas)
- **Gestão de Solicitações**: Sistema completo de aceite/rejeição de pacientes
- **Gestão de Pacientes**: Lista completa com informações detalhadas e histórico
- **Chat com IA**: Assistente especializada em psicologia clínica
- **Relatórios e Analytics**: Gráficos interativos com análise ML de risco
- **Gestão de Sessões**: Controle completo do ciclo de vida das consultas

### 👤 Para Pacientes

- **Dashboard Simples**: Status de solicitações e próximas sessões
- **Sistema de Solicitações**: Solicitar ser aceito como paciente
- **Acompanhamento**: Visualizar status (pendente/aceito/rejeitado)
- **Histórico**: Consultas anteriores e relatórios

### 🔐 Sistema de Autenticação

- **JWT Authentication**: Tokens seguros com backend real
- **Diferenciação de Perfis**: Psicólogo vs Paciente automática
- **Proteção de Rotas**: Middleware de autenticação
- **Persistência Segura**: LocalStorage com contexto global
- **Registro Completo**: Validação de dados no frontend/backend
- **Auto-redirect**: Baseado no status de autenticação

## 🛠 Stack Tecnológico

### Frontend
- **React 19.1.1** - Framework moderno com concurrent features
- **Vite 7.1.0** - Build tool ultra-rápido
- **React Router DOM 7.8.0** - Roteamento SPA avançado
- **Tailwind CSS 4.1.11** - Framework CSS utilitário
- **Framer Motion 12.23.12** - Animações fluidas
- **Lucide React 0.539.0** - Ícones SVG otimizados
- **Recharts 3.1.2** + **Chart.js 4.5.0** - Visualizações interativas
- **React Hot Toast 2.5.2** - Sistema de notificações

### Backend & IA
- **Backend Real**: `https://lunysse-backend-fmmc.onrender.com`
- **Hugging Face Inference 4.6.1** - Integração com IA
- **Modelo IA**: zai-org/GLM-4.5 via Novita
- **JWT Authentication** - Autenticação segura

### Design System
- **Glassmorphism** - Efeitos visuais modernos
- **Mobile-First** - Design responsivo
- **Paleta Consistente** - Sistema de cores profissional

## 🚀 Instalação

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Passos

1. **Clone o repositório**
```bash
git clone https://github.com/JeremiasONunes/vlibras-jeremias.git
cd lunysse-front
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env
# Edite o arquivo .env se necessário
```

4. **Execute o projeto**
```bash
npm run dev
```

5. **Acesse no navegador**
```
http://localhost:5173
```

## 💻 Uso

### 🔑 Contas de Demonstração

> **Importante**: O sistema está integrado com backend real. Crie sua própria conta ou use as contas de demonstração.

#### Para Psicólogos
- Registre-se como psicólogo no sistema
- Acesse dashboard com KPIs em tempo real
- Gerencie solicitações de pacientes
- Use o chat com IA especializada

#### Para Pacientes
- Registre-se como paciente
- Solicite ser aceito por um psicólogo
- Acompanhe status das solicitações
- Visualize histórico de sessões

### Fluxo de Uso

1. **Registro**: Crie conta como psicólogo ou paciente
2. **Login**: Acesse com suas credenciais
3. **Dashboard**: Visualize informações relevantes ao seu perfil
4. **Solicitações** (Pacientes): Solicite ser aceito por um psicólogo
5. **Gestão** (Psicólogos): Aceite/rejeite solicitações e gerencie pacientes

## 🔌 Integração com Backend

### API Real Integrada

**Base URL**: `https://lunysse-backend-fmmc.onrender.com`

O sistema possui integração completa com backend real hospedado no Render:

#### 🔐 Autenticação
- `POST /auth/login` - Login com JWT
- `POST /auth/register` - Registro de usuários
- **Bearer Token** - Autenticação em todas as rotas

#### 👥 Gestão de Usuários
- `GET /psychologists/` - Lista psicólogos
- `GET /patients/` - Lista pacientes do psicólogo
- `GET /patients/{id}` - Detalhes do paciente
- `PUT /patients/{id}` - Atualizar paciente

#### 📅 Agendamentos
- `GET /appointments/` - Lista agendamentos
- `POST /appointments/` - Criar agendamento
- `PUT /appointments/{id}` - Atualizar agendamento
- `DELETE /appointments/{id}` - Cancelar agendamento
- `GET /appointments/available-slots` - Horários disponíveis

#### 📋 Solicitações
- `GET /requests/` - Lista solicitações
- `POST /requests/` - Criar solicitação
- `PUT /requests/{id}` - Atualizar status

#### 📊 Relatórios & ML
- `GET /reports/{psychologist_id}` - Relatórios do psicólogo
- `GET /ml/risk-analysis` - Análise de risco geral
- `GET /ml/risk-analysis/{patient_id}` - Análise específica

### Tratamento de Erros
- **401**: Token expirado (auto-redirect para login)
- **422**: Erros de validação detalhados
- **403**: Permissões insuficientes
- **Network**: Tratamento de falhas de conexão

## 🤖 IA Especializada em Psicologia

### Assistente Inteligente

**Modelo**: `zai-org/GLM-4.5` via Novita (Hugging Face)
**Especialização**: Psicologia clínica e terapêutica

### 🎯 Características Avançadas

- **Contexto Mantido**: Últimas 10 mensagens da conversa
- **Respostas Estruturadas**: Markdown com títulos, listas e formatação
- **Evidências Científicas**: Orientações baseadas em literatura
- **Técnicas Específicas**: Sugestões de abordagens terapêuticas
- **Aspectos Éticos**: Considerações profissionais

### ⚙️ Configuração Técnica

```javascript
// Parâmetros do modelo
max_tokens: 1500
temperature: 0.7
top_p: 0.9
frequency_penalty: 0.1
presence_penalty: 0.1
```

### 💡 Exemplos de Consultas

- **Técnicas Terapêuticas**: "Abordagens para ansiedade generalizada"
- **Casos Específicos**: "Terapia infantil para trauma"
- **Aspectos Éticos**: "Limites na relação terapêutica"
- **Diagnóstico**: "Sinais de alerta em depressão"
- **Intervenções**: "Técnicas de mindfulness para pacientes"

### 🛡️ Tratamento de Erros

- **Token Inválido**: Mensagem específica para configuração
- **Rate Limit**: Orientação sobre limite de requisições
- **Conexão**: Feedback sobre problemas de rede
- **Timeout**: Tratamento de respostas lentas

## 🚀 Funcionalidades Avançadas

### 📊 Dashboard Inteligente

- **KPIs em Tempo Real**: Atualização automática a cada 5 segundos
- **Dados Específicos**: Filtros por psicólogo logado
- **Psicólogos Novos**: Interface especial para primeiros acessos
- **Próximos Agendamentos**: Lista dinâmica com detalhes

### 🔄 Sistema de Solicitações

- **Fluxo Completo**: Paciente → Solicitação → Psicólogo → Aceite
- **Status Dinâmicos**: Pendente, Aceito, Rejeitado
- **Notificações**: Feedback visual para cada etapa
- **Gestão Centralizada**: Dashboard para psicólogos

### 📈 Relatórios & Analytics

- **Gráficos Interativos**: Recharts + Chart.js
- **Análise ML**: Integração com backend para risk analysis
- **Dados Históricos**: Tendências e padrões
- **Exportação**: Relatórios detalhados

### 📱 Design Responsivo

- **Mobile-First**: Otimizado para smartphones
- **Sidebar Adaptativa**: Menu hambúrguer automático
- **Breakpoints**: sm(640px), md(768px), lg(1024px), xl(1280px)
- **Touch-Friendly**: Botões e inputs otimizados para toque

## 🏗️ Arquitetura

### Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Button.jsx      # Botão com variantes e loading
│   ├── Card.jsx        # Container com glassmorphism
│   ├── Input.jsx       # Input com validação e show/hide password
│   ├── LoadingSpinner.jsx # Spinner de carregamento
│   ├── MarkdownRenderer.jsx # Renderizador de markdown para IA
│   ├── Modal.jsx       # Modal responsivo com overlay
│   ├── PublicNavbar.jsx # Navbar para páginas públicas
│   └── Sidebar.jsx     # Sidebar adaptativa para usuários autenticados
├── context/            # Contextos React
│   └── AuthContext.jsx # Contexto de autenticação global
├── pages/              # Páginas da aplicação
│   ├── DashboardPsicologo.jsx # Dashboard para psicólogos
│   ├── DashboardPaciente.jsx # Dashboard para pacientes
│   ├── ChatIA.jsx      # Chat com IA especializada
│   ├── Login.jsx       # Página de login
│   ├── Register.jsx    # Cadastro de usuários
│   └── ...            # Outras páginas
├── routes/             # Configuração de rotas
│   └── AppRoutes.jsx   # Rotas protegidas e públicas
├── services/           # Serviços e APIs
│   ├── api.js          # Cliente HTTP para backend
│   ├── apiService.js   # Camada de serviços organizados
│   └── aiService.js    # Serviço de IA
└── App.jsx             # Componente principal
```

### Padrões Utilizados

- **Context API**: Gerenciamento de estado global
- **Custom Hooks**: Lógica reutilizável
- **Component Composition**: Componentes modulares
- **Service Layer**: Separação de responsabilidades
- **Protected Routes**: Segurança baseada em autenticação

## 🔒 Segurança

### Medidas Implementadas
- **JWT Authentication** com backend seguro
- **Proteção de Rotas** baseada em autenticação
- **Validação de Dados** no frontend e backend
- **HTTPS** em produção
- **Sanitização** de inputs do usuário

### Questões Identificadas
- ⚠️ **LocalStorage**: Dados sensíveis (migrar para httpOnly cookies)
- ⚠️ **Dependencies**: Atualizar Vite e js-yaml
- ⚠️ **CORS**: Configurar políticas adequadas

## 🎯 Status do Projeto

**v1.0.0** - ✅ **PRODUÇÃO**

### ✅ Funcionalidades Implementadas
- [x] Backend real integrado (Render)
- [x] Autenticação JWT completa
- [x] Dashboards dinâmicos para psicólogos/pacientes
- [x] Sistema de solicitações completo
- [x] Chat IA especializada (GLM-4.5)
- [x] Relatórios com gráficos interativos
- [x] Design responsivo moderno
- [x] Gestão completa de agendamentos


## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Lint do código
npm run lint
```

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Desenvolvedor

- **Desenvolvedor Full Stack**: Jeremias O Nunes
- **GitHub**: [JeremiasONunes](https://github.com/JeremiasONunes)
- **Especialização**: React, Node.js, Python, IA

## 📞 Contato & Deploy

- **Frontend**: [Vercel Deploy](https://lunysse-front.vercel.app)
- **Backend**: [Render API](https://lunysse-backend-fmmc.onrender.com)
- **GitHub**: [Repositório](https://github.com/JeremiasONunes/vlibras-jeremias)
- **Desenvolvedor**: Jeremias O Nunes

---

<div align="center">
  <p><strong>🧠 Lunysse - Psicologia Digital Moderna</strong></p>
  <p>Desenvolvido com ❤️ para facilitar o acesso à saúde mental</p>
  <p><em>React 19 • Vite 7 • Tailwind 4 • Backend Real • IA Especializada</em></p>
  
  <br>
  
  <p>⭐ <strong>Sistema Completo em Produção</strong> ⭐</p>
</div>
