# 🎓 Curso Full Stack - Sistema Lunysse
## Unidade Curricular 1: Construir aplicações front-end
**Carga horária:** 108 horas | **27 aulas de 4h cada**

### 📚 Sobre Esta Unidade Curricular

Esta unidade curricular desenvolve competências para construir aplicações front-end através da construção do **Sistema Lunysse**, uma aplicação real de agendamento psicológico. O projeto será construído progressivamente ao longo de 27 aulas, alinhado com os indicadores de competência estabelecidos.

### 🎯 Indicadores de Competência

**Indicador 1:** Cria imagens, layouts e animações otimizadas para website, de acordo com os princípios de comunicação visual, padrões e tendências de mercado.

**Indicador 2:** Utiliza linguagem de marcação e estilo, de acordo com os padrões do W3C para o desenvolvimento de layout responsivo e com padrões da web semântica.

**Indicador 3:** Utiliza linguagem de programação de script, de acordo com os padrões do ECMAScript.

**Indicador 4:** Utiliza linguagem de programação SQL para tratamento de dados.

**Indicador 5:** Analisa desempenho e inconsistências no funcionamento do website, de acordo com os padrões W3C.

**Indicador 6:** Utiliza linguagem de programação com foco em desenvolvimento orientado a objetos para a construção de classes, sessões e herança.

---

## 📋 Estrutura do Curso

### **Parte 1 - Fundamentos Visuais para Web** (5 aulas, 20h)
### **Parte 2 - Linguagens de Marcação, Estilo e Script Básico** (6 aulas, 24h)  
### **Parte 3 - Programação Avançada, Integração Visual e Projeto Final** (16 aulas, 64h)

---

## 🎨 PARTE 1 - FUNDAMENTOS VISUAIS PARA WEB

### **Aula 1 - Imagem Digital: Conceitos Básicos e Formatos**
*Duração: 4h*

#### 🎯 **Indicador Trabalhado:** Indicador 1
#### 📚 **Conhecimentos Abordados:**
- Imagem digital: conceitos de vetor e bitmap, formatos e aplicações
- Unidades de medida, densidade de pixels, taxa de bits

#### 🛠 **Habilidades Desenvolvidas:**
- Manipular imagens no padrão RGB
- Organizar conteúdo visual para web
- Interpretar requisitos de projetos

#### 📖 Conteúdo Teórico
- **Conceitos de vetor vs bitmap**
  - Diferenças fundamentais e aplicações
  - Vantagens e desvantagens técnicas
  - Critérios de escolha para projetos web

- **Formatos de imagem para web**
  - PNG: transparência e qualidade
  - JPEG: fotografias e compressão
  - SVG: ícones e gráficos vetoriais
  - GIF: animações simples

- **Unidades de medida e densidade**
  - Pixels absolutos vs relativos
  - DPI e densidade de pixels
  - Taxa de bits e impacto na performance

#### 🛠 Atividade Prática
```
Projeto Lunysse - Preparação de Assets:
1. Analisar o logo atual (public/logo.png)
2. Criar versões otimizadas em diferentes formatos
3. Preparar ícones SVG para a sidebar
4. Otimizar imagens para diferentes densidades de tela
```

#### 📁 Entregáveis
- Pasta `assets/optimized/` com imagens otimizadas
- Relatório de análise de formatos e tamanhos
- Ícones SVG para componentes do sistema

---

### **Aula 2 - Comunicação Visual: Framework e Gestalt**
*Duração: 4h*

#### 🎯 **Indicador Trabalhado:** Indicador 1
#### 📚 **Conhecimentos Abordados:**
- Comunicação visual: framework (tipografia, teoria e modos de cor, grid e alinhamento)
- Gestalt (conceito e aplicabilidade)

#### 🛠 **Habilidades Desenvolvidas:**
- Organizar conteúdo visual e textual para web
- Manipular framework
- Interpretar requisitos de projetos

#### 📖 Conteúdo Teórico
- **Framework de comunicação visual**
  - Tipografia: hierarquia e legibilidade
  - Teoria das cores: modos RGB e HEX
  - Grid e alinhamento: sistemas de 12 colunas
  - Paleta do Lunysse aplicada

- **Princípios Gestalt**
  - Proximidade: agrupamento de elementos
  - Similaridade: consistência visual
  - Continuidade: fluxo de navegação
  - Aplicabilidade em interfaces web

#### 🛠 Atividade Prática
```css
/* Implementar variáveis CSS para o design system */
:root {
  --color-dark: #010440;
  --color-medium: #024873;
  --color-light: #2493BF;
  --color-accent: #26B0BF;
  --color-background: #F2EFE9;
  
  --font-primary: 'Inter', sans-serif;
  --font-secondary: 'Nunito', sans-serif;
}
```

#### 📁 Entregáveis
- Protótipo de tela de login com paleta aplicada
- Guia de estilo tipográfico
- Grid system documentado

---

### **Aula 3 - Componentes Visuais: Ícones, Menus e Cards**
*Duração: 4h*

#### 🎯 **Indicador Trabalhado:** Indicador 1
#### 📚 **Conhecimentos Abordados:**
- Comunicação visual: ícones, menus, barra de navegação, cards, formulários e tabelas

#### 🛠 **Habilidades Desenvolvidas:**
- Organizar conteúdo visual e textual para web
- Manipular framework
- Utilizar editor de código para aplicações web

#### 📖 Conteúdo Teórico
- **Componentes de interface**
  - Ícones: SVG e otimização
  - Menus e barra de navegação
  - Cards: estrutura e hierarquia
  - Formulários e tabelas: organização

- **Padrões e tendências**
  - Design system moderno
  - Componentes reutilizáveis
  - Estados e variações visuais

#### 🛠 Atividade Prática
```
Wireframes dos componentes principais:
1. Sidebar do sistema
2. Cards de pacientes
3. Formulários de agendamento
4. Dashboard com KPIs
```

#### 📁 Entregáveis
- Wireframes de baixa fidelidade
- Especificações de componentes
- Protótipo navegável básico

---

### **Aula 4 - Tratamento de Imagem Avançado**
*Duração: 4h*

#### 🎯 **Indicador Trabalhado:** Indicador 1
#### 📚 **Conhecimentos Abordados:**
- Tratamento de imagem: seleção e recorte, camadas e máscaras, ferramentas de pintura e retoque
- Seletor de cores, galeria de filtros, ajustes de imagens, estilos, ações, exportação

#### 🛠 **Habilidades Desenvolvidas:**
- Manipular imagens no padrão RGB
- Organizar conteúdo visual para web

#### 📖 Conteúdo Teórico
- **Técnicas de tratamento**
  - Seleção e recorte avançado
  - Camadas e máscaras
  - Ferramentas de pintura e retoque
  - Seletor de cores e paletas

- **Otimização e exportação**
  - Galeria de filtros
  - Ajustes: níveis, brilho, contraste
  - Estilos e ações automatizadas
  - Exportação otimizada para web

#### 🛠 Atividade Prática
```
Otimização de assets do Lunysse:
1. Redimensionar logo para diferentes tamanhos
2. Criar favicons em múltiplas resoluções
3. Otimizar imagens de perfil de usuários
4. Preparar assets para modo escuro (futuro)
```

#### 📁 Entregáveis
- Assets otimizados em múltiplos formatos
- Guia de otimização de imagens
- Sprites de ícones organizados

---

### **Aula 5 - Design Responsivo e Animações Web**
*Duração: 4h*

#### 🎯 **Indicador Trabalhado:** Indicador 1
#### 📚 **Conhecimentos Abordados:**
- Design responsivo: conceitos e aplicações
- Imagem digital: animações web

#### 🛠 **Habilidades Desenvolvidas:**
- Organizar conteúdo visual e textual para web
- Manipular framework

#### 📖 Conteúdo Teórico
- **Design responsivo**
  - Conceitos fundamentais
  - Mobile-first approach
  - Breakpoints estratégicos
  - Aplicações práticas

- **Animações web**
  - Princípios de animação
  - CSS transitions e keyframes
  - Performance e otimização
  - Tendências de mercado

#### 🛠 Atividade Prática
```
Protótipos responsivos:
1. Dashboard mobile vs desktop
2. Sidebar colapsável
3. Cards de pacientes em grid responsivo
4. Formulários adaptáveis
```

#### 📁 Entregáveis
- Protótipos em 3 breakpoints (mobile, tablet, desktop)
- Especificações de comportamento responsivo
- Testes de usabilidade mobile

---

## 💻 PARTE 2 - LINGUAGENS DE MARCAÇÃO, ESTILO E SCRIPT BÁSICO

### **Aula 6 - Estrutura Semântica e Linguagem de Marcação**
*Duração: 4h*

#### 🎯 **Indicador Trabalhado:** Indicador 2
#### 📚 **Conhecimentos Abordados:**
- Estrutura semântica: conceitos, linguagem de marcação de conteúdo
- Web standards: boas práticas e recomendações do W3C (acessibilidade e usabilidade)

#### 🛠 **Habilidades Desenvolvidas:**
- Utilizar editor de código para aplicações web
- Integrar linguagens de estilo e marcação de conteúdo
- Comprometimento com padrões de usabilidade e acessibilidade

#### 📖 Conteúdo Teórico
- **Estrutura semântica HTML5**
  - Conceitos de semântica web
  - Tags estruturais: header, nav, main, section, article, footer
  - Linguagem de marcação de conteúdo

- **Web Standards W3C**
  - Boas práticas de marcação
  - Recomendações de acessibilidade
  - Padrões de usabilidade
  - Validação W3C

#### 🛠 Atividade Prática
```html
<!-- Estrutura base da página de login -->
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lunysse - Login</title>
</head>
<body>
  <header role="banner">
    <nav aria-label="Navegação principal">
      <!-- Navegação pública -->
    </nav>
  </header>
  
  <main role="main">
    <section aria-labelledby="login-title">
      <h1 id="login-title">Acesso ao Sistema</h1>
      <!-- Formulário de login -->
    </section>
  </main>
  
  <footer role="contentinfo">
    <!-- Informações do sistema -->
  </footer>
</body>
</html>
```

#### 📁 Entregáveis
- Estruturas HTML das páginas principais
- Checklist de acessibilidade
- Validação W3C das páginas

---

### **Aula 7 - Estilização de Páginas e Integração**
*Duração: 4h*

#### 🎯 **Indicador Trabalhado:** Indicador 2
#### 📚 **Conhecimentos Abordados:**
- Estilização de páginas: definições de estilos e integração com estrutura de conteúdo

#### 🛠 **Habilidades Desenvolvidas:**
- Integrar linguagens de estilo e marcação de conteúdo
- Utilizar editor de código para aplicações web
- Manipular framework

#### 📖 Conteúdo Teórico
- **Definições de estilos CSS**
  - Seletores e especificidade
  - Box model e positioning
  - Cascata e herança

- **Integração com HTML**
  - Métodos de aplicação de estilos
  - Organização de arquivos CSS
  - Framework Tailwind CSS
  - Customização e temas

#### 🛠 Atividade Prática
```css
/* Configuração do Tailwind para o Lunysse */
module.exports = {
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
      }
    }
  }
}
```

#### 📁 Entregáveis
- Configuração personalizada do Tailwind
- Componentes básicos estilizados
- Guia de classes utilitárias

---

### **Aula 8 - Layout Responsivo com Padrões W3C**
*Duração: 4h*

#### 🎯 **Indicador Trabalhado:** Indicador 2
#### 📚 **Conhecimentos Abordados:**
- Linguagem de marcação e estilo para desenvolvimento de layout responsivo
- Web standards: padrões W3C

#### 🛠 **Habilidades Desenvolvidas:**
- Integrar linguagens de estilo e marcação de conteúdo
- Testar compatibilidade em diversos navegadores
- Comprometimento com padrões de usabilidade e acessibilidade

#### 📖 Conteúdo Teórico
- **Layout responsivo**
  - Flexbox e CSS Grid
  - Media queries e breakpoints
  - Mobile-first approach
  - Padrões W3C para responsividade

- **Compatibilidade e padrões**
  - Cross-browser compatibility
  - Progressive enhancement
  - Graceful degradation

#### 🛠 Atividade Prática
```jsx
// Componente Sidebar responsivo
export const Sidebar = () => {
  return (
    <aside className="
      fixed inset-y-0 left-0 z-50 w-64 
      transform -translate-x-full lg:translate-x-0 
      transition-transform duration-300 ease-in-out
      bg-white/10 backdrop-blur-md
    ">
      {/* Conteúdo da sidebar */}
    </aside>
  );
};
```

#### 📁 Entregáveis
- Sidebar responsiva funcional
- Dashboard adaptativo
- Testes em múltiplos dispositivos

---

### **Aula 9 - Linguagem de Scripts: Sintaxe ECMAScript**
*Duração: 4h*

#### 🎯 **Indicador Trabalhado:** Indicador 3
#### 📚 **Conhecimentos Abordados:**
- Linguagem de scripts: sintaxe - operadores, palavras reservadas, identificadores, delimitadores e comentários
- Variáveis e tipos de dados, estruturas de controle, condicional e laços de repetição

#### 🛠 **Habilidades Desenvolvidas:**
- Utilizar editor de código para aplicações web
- Efetuar correções na aplicação web

#### 📖 Conteúdo Teórico
- **Sintaxe ECMAScript**
  - Operadores e expressões
  - Palavras reservadas
  - Identificadores e delimitadores
  - Comentários e documentação

- **Estruturas fundamentais**
  - Variáveis: let, const, var
  - Tipos de dados primitivos
  - Estruturas condicionais
  - Laços de repetição

#### 🛠 Atividade Prática
```javascript
// Validação básica de formulário
function validarLogin(email, senha) {
  const erros = [];
  
  if (!email || !email.includes('@')) {
    erros.push('Email inválido');
  }
  
  if (!senha || senha.length < 6) {
    erros.push('Senha deve ter pelo menos 6 caracteres');
  }
  
  return {
    valido: erros.length === 0,
    erros
  };
}
```

#### 📁 Entregáveis
- Funções de validação
- Lógica básica de autenticação
- Testes unitários simples

---

### **Aula 10 - Eventos, Funções e DOM**
*Duração: 4h*

#### 🎯 **Indicador Trabalhado:** Indicador 3
#### 📚 **Conhecimentos Abordados:**
- Eventos e funções: parâmetros, retornos e tipos de eventos
- Document Object Model (DOM): objetos, propriedades e eventos

#### 🛠 **Habilidades Desenvolvidas:**
- Utilizar editor de código para aplicações web
- Efetuar correções na aplicação web

#### 📖 Conteúdo Teórico
- **Eventos e funções**
  - Definição e chamada de funções
  - Parâmetros e valores de retorno
  - Tipos de eventos do navegador
  - Event listeners e handlers

- **Document Object Model**
  - Objetos e propriedades DOM
  - Seleção de elementos
  - Eventos do DOM
  - Manipulação dinâmica

#### 🛠 Atividade Prática
```javascript
// Interatividade básica
document.addEventListener('DOMContentLoaded', () => {
  // Toggle sidebar mobile
  const menuButton = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  
  menuButton.addEventListener('click', () => {
    sidebar.classList.toggle('-translate-x-full');
  });
  
  // Modal de confirmação
  const deleteButtons = document.querySelectorAll('.delete-btn');
  deleteButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (!confirm('Tem certeza que deseja excluir?')) {
        e.preventDefault();
      }
    });
  });
});
```

#### 📁 Entregáveis
- Interações básicas implementadas
- Sistema de modais simples
- Feedback visual para ações

---

### **Aula 11 - Manipulação DOM e Estilos Dinâmicos**
*Duração: 4h*

#### 🎯 **Indicador Trabalhado:** Indicador 3
#### 📚 **Conhecimentos Abordados:**
- DOM: manipulação de elementos, atribuição de eventos e estilos dinâmicos

#### 🛠 **Habilidades Desenvolvidas:**
- Utilizar editor de código para aplicações web
- Efetuar correções na aplicação web
- Testar compatibilidade em diversos navegadores

#### 📖 Conteúdo Teórico
- **Manipulação avançada DOM**
  - Criação e remoção de elementos
  - Modificação de atributos
  - Navegação pela árvore DOM

- **Estilos dinâmicos**
  - Modificação de CSS via JavaScript
  - Classes dinâmicas
  - Animações programáticas
  - Compatibilidade cross-browser

#### 🛠 Atividade Prática
```
Checklist de testes:
1. Testar em Chrome, Firefox, Safari, Edge
2. Validar responsividade em dispositivos reais
3. Verificar acessibilidade com screen readers
4. Medir performance com Lighthouse
5. Corrigir bugs encontrados
```

#### 📁 Entregáveis
- Relatório de compatibilidade
- Métricas de performance
- Lista de correções implementadas

---

## 🚀 PARTE 3 - PROGRAMAÇÃO AVANÇADA, INTEGRAÇÃO VISUAL E PROJETO FINAL

### **Aula 12 - Análise de Desempenho e Ferramentas**
*Duração: 4h*

#### 🎯 **Indicador Trabalhado:** Indicador 5
#### 📚 **Conhecimentos Abordados:**
- Ferramentas para análise de desempenho

#### 🛠 **Habilidades Desenvolvidas:**
- Testar compatibilidade em diversos navegadores
- Efetuar correções na aplicação web

#### 📖 Conteúdo Teórico
- **Ferramentas de análise**
  - Chrome DevTools
  - Lighthouse e PageSpeed
  - Web Vitals e métricas
  - Profiling de performance

- **Otimização de desempenho**
  - Identificação de gargalos
  - Otimização de recursos
  - Lazy loading e code splitting
  - Métricas W3C

#### 🛠 Atividade Prática
```jsx
// Animações com Framer Motion
import { motion } from 'framer-motion';

export const Card = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white/10 backdrop-blur-md rounded-lg p-6"
    >
      {children}
    </motion.div>
  );
};
```

#### 📁 Entregáveis
- Componentes animados
- Sistema de loading states
- Otimização de imagens avançada

---

### **Aula 13 - Comunicação Visual Avançada**
*Duração: 4h*

#### 📖 Conteúdo Teórico
- **Hierarquia visual**
  - Contraste e ênfase
  - Espaçamento e ritmo
  - Direcionamento do olhar

- **Tipografia avançada**
  - Variable fonts
  - Micro-tipografia
  - Legibilidade em diferentes contextos

#### 🛠 Atividade Prática
```css
/* Sistema tipográfico avançado */
.text-display {
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.text-body {
  font-size: clamp(1rem, 2.5vw, 1.125rem);
  line-height: 1.6;
  font-weight: 400;
}
```

#### 📁 Entregáveis
- Sistema tipográfico refinado
- Dashboards com hierarquia clara
- Guia de comunicação visual

---

### **Aula 14 - Tratamento Avançado de Imagens e Efeitos**
*Duração: 4h*

#### 📖 Conteúdo Teórico
- **Efeitos visuais modernos**
  - Glassmorphism
  - Neumorphism
  - Sombras e profundidade

- **Técnicas avançadas**
  - Máscaras CSS
  - Filtros e blend modes
  - Gradientes complexos

#### 🛠 Atividade Prática
```css
/* Glassmorphism effect */
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

/* Gradient overlay */
.gradient-overlay {
  background: linear-gradient(
    135deg,
    rgba(36, 147, 191, 0.8) 0%,
    rgba(38, 176, 191, 0.6) 100%
  );
}
```

#### 📁 Entregáveis
- Cards com glassmorphism
- Efeitos visuais implementados
- Biblioteca de componentes visuais

---

### **Aula 15 - Design Responsivo Avançado e Frameworks**
*Duração: 4h*

#### 📖 Conteúdo Teórico
- **Tailwind CSS avançado**
  - Customização completa
  - Plugins e extensões
  - Otimização de bundle

- **Padrões responsivos**
  - Container queries
  - Aspect ratio
  - Clamp e fluid typography

#### 🛠 Atividade Prática
```jsx
// Grid responsivo avançado
export const PatientGrid = ({ patients }) => {
  return (
    <div className="
      grid gap-6
      grid-cols-1 
      sm:grid-cols-2 
      lg:grid-cols-3 
      xl:grid-cols-4
      auto-rows-fr
    ">
      {patients.map(patient => (
        <PatientCard key={patient.id} patient={patient} />
      ))}
    </div>
  );
};
```

#### 📁 Entregáveis
- Layout completamente responsivo
- Componentes adaptáveis
- Testes em dispositivos variados

---

### **Aula 16 - Estrutura Semântica Avançada e SEO**
*Duração: 4h*

#### 📖 Conteúdo Teórico
- **Semântica avançada**
  - Microdata e Schema.org
  - ARIA patterns complexos
  - Landmarks e navegação

- **SEO para SPAs**
  - Meta tags dinâmicas
  - Structured data
  - Performance e Core Web Vitals

#### 🛠 Atividade Prática
```jsx
// SEO component
export const SEOHead = ({ title, description, type = 'website' }) => {
  return (
    <Helmet>
      <title>{title} | Lunysse</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};
```

#### 📁 Entregáveis
- Páginas otimizadas para SEO
- Estrutura semântica completa
- Relatório de acessibilidade

---

### **Aula 17 - Programação Orientada a Objetos**
*Duração: 4h*

#### 🎯 **Indicador Trabalhado:** Indicador 6
#### 📚 **Conhecimentos Abordados:**
- Linguagem de programação com foco em desenvolvimento orientado a objetos
- Construção de classes, sessões e herança

#### 🛠 **Habilidades Desenvolvidas:**
- Utilizar editor de código para aplicações web
- Colaboração no desenvolvimento do trabalho em equipe

#### 📖 Conteúdo Teórico
- **Orientação a objetos**
  - Classes e objetos
  - Encapsulamento de dados
  - Métodos e propriedades

- **Herança e polimorfismo**
  - Herança de classes
  - Sobrescrita de métodos
  - Polimorfismo em JavaScript
  - Sessões e contextos

#### 🛠 Atividade Prática
```javascript
// Modelo de dados orientado a objetos
class User {
  constructor(id, name, email, type) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.type = type;
  }
  
  isDoctor() {
    return this.type === 'psicologo';
  }
  
  getDisplayName() {
    return this.isDoctor() ? `Dr(a). ${this.name}` : this.name;
  }
}

class Patient extends User {
  constructor(id, name, email, birthDate, psychologistId) {
    super(id, name, email, 'paciente');
    this.birthDate = birthDate;
    this.psychologistId = psychologistId;
  }
  
  getAge() {
    return new Date().getFullYear() - new Date(this.birthDate).getFullYear();
  }
}
```

#### 📁 Entregáveis
- Modelos de dados em classes
- Sistema de herança implementado
- Testes unitários das classes

---

### **Aula 18 - Manipulação Avançada do DOM e Eventos Complexos**
*Duração: 4h*

#### 📖 Conteúdo Teórico
- **Eventos avançados**
  - Custom events
  - Event delegation
  - Intersection Observer

- **Performance DOM**
  - Virtual DOM concepts
  - Debouncing e throttling
  - Memory leaks prevention

#### 🛠 Atividade Prática
```javascript
// Sistema de notificações customizado
class NotificationSystem {
  constructor() {
    this.container = this.createContainer();
    this.notifications = new Map();
  }
  
  show(message, type = 'info', duration = 5000) {
    const id = Date.now();
    const notification = this.createNotification(id, message, type);
    
    this.container.appendChild(notification);
    this.notifications.set(id, notification);
    
    setTimeout(() => this.remove(id), duration);
    
    return id;
  }
  
  remove(id) {
    const notification = this.notifications.get(id);
    if (notification) {
      notification.remove();
      this.notifications.delete(id);
    }
  }
}
```

#### 📁 Entregáveis
- Sistema de notificações
- Filtros dinâmicos
- Interações complexas implementadas

---

### **Aula 19 - Debugging, Profiling e Otimização**
*Duração: 4h*

#### 📖 Conteúdo Teórico
- **DevTools avançado**
  - Performance profiling
  - Memory analysis
  - Network optimization

- **Otimização de código**
  - Code splitting
  - Lazy loading
  - Bundle analysis

#### 🛠 Atividade Prática
```javascript
// Lazy loading de componentes
const LazyDashboard = lazy(() => import('./pages/DashboardPsicologo'));
const LazyReports = lazy(() => import('./pages/Relatorios'));

// Performance monitoring
const performanceObserver = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(`${entry.name}: ${entry.duration}ms`);
  });
});

performanceObserver.observe({ entryTypes: ['measure', 'navigation'] });
```

#### 📁 Entregáveis
- Aplicação otimizada
- Relatório de performance
- Métricas de carregamento

---

### **Aula 20 - Linguagem SQL para Tratamento de Dados**
*Duração: 4h*

#### 🎯 **Indicador Trabalhado:** Indicador 4
#### 📚 **Conhecimentos Abordados:**
- Linguagem de programação SQL para tratamento de dados

#### 🛠 **Habilidades Desenvolvidas:**
- Utilizar editor de código para aplicações web
- Interpretar requisitos de projetos

#### 📖 Conteúdo Teórico
- **Fundamentos SQL**
  - Sintaxe básica: SELECT, INSERT, UPDATE, DELETE
  - Estrutura de tabelas e relacionamentos
  - Joins e consultas complexas

- **Tratamento de dados**
  - Filtragem e ordenação
  - Agregações e funções
  - Índices e otimização
  - Integração com aplicações web

#### 🛠 Atividade Prática
```javascript
// API service layer
class ApiService {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }
  
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    };
    
    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API Request failed:', error);
      throw error;
    }
  }
  
  // CRUD methods
  async get(endpoint) {
    return this.request(endpoint);
  }
  
  async post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }
}
```

#### 📁 Entregáveis
- Mock API funcional
- Camada de serviços
- Tratamento de erros robusto

---

### **Aula 21 - Análise de Inconsistências e Padrões W3C**
*Duração: 4h*

#### 🎯 **Indicador Trabalhado:** Indicador 5
#### 📚 **Conhecimentos Abordados:**
- Análise de desempenho e inconsistências no funcionamento do website
- Padrões W3C para validação

#### 🛠 **Habilidades Desenvolvidas:**
- Efetuar correções na aplicação web
- Testar compatibilidade em diversos navegadores
- Comprometimento com padrões de usabilidade e acessibilidade

#### 📖 Conteúdo Teórico
- **Análise de inconsistências**
  - Identificação de problemas
  - Debugging sistemático
  - Validação W3C
  - Correção de erros

- **Padrões de qualidade**
  - Guidelines W3C
  - Acessibilidade WCAG
  - Performance benchmarks
  - Testes automatizados

#### 🛠 Atividade Prática
```javascript
// Testes automatizados de acessibilidade
describe('Accessibility Tests', () => {
  test('should have proper ARIA labels', () => {
    render(<LoginForm />);
    
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Senha')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Entrar' })).toBeInTheDocument();
  });
  
  test('should support keyboard navigation', () => {
    render(<Sidebar />);
    
    const firstLink = screen.getByRole('link', { name: 'Dashboard' });
    firstLink.focus();
    
    fireEvent.keyDown(firstLink, { key: 'Tab' });
    
    expect(screen.getByRole('link', { name: 'Pacientes' })).toHaveFocus();
  });
});
```

#### 📁 Entregáveis
- Relatório de usabilidade
- Correções de acessibilidade
- Testes automatizados

---

### **Aula 22 - Colaboração e Versionamento (Git)**
*Duração: 4h*

#### 📖 Conteúdo Teórico
- **Git workflows**
  - Feature branches
  - Pull requests
  - Code review

- **Colaboração em equipe**
  - Conventional commits
  - Semantic versioning
  - Documentation

#### 🛠 Atividade Prática
```bash
# Workflow de desenvolvimento
git checkout -b feature/chat-ia
git add .
git commit -m "feat: implement AI chat functionality"
git push origin feature/chat-ia

# Create pull request
# Code review process
# Merge to main branch

# Release process
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0
```

#### 📁 Entregáveis
- Repositório organizado
- Documentação de contribuição
- Processo de release definido

---

### **Aulas 23-25 - Desenvolvimento Final do Front-end Lunysse**
*Duração: 12h (4h cada)*

#### 🎯 Objetivos
- Integração completa de todas as funcionalidades
- Refinamento da experiência do usuário
- Testes finais e correções

#### 🛠 Atividades por Aula

**Aula 23 - Integração de Componentes**
```
- Finalizar todos os componentes React
- Implementar roteamento completo
- Integrar sistema de autenticação
- Testes de integração
```

**Aula 24 - Funcionalidades Avançadas**
```
- Chat com IA funcional
- Sistema de relatórios
- Notificações em tempo real
- Otimizações de performance
```

**Aula 25 - Polimento e Refinamento**
```
- Ajustes de UX/UI
- Correção de bugs
- Testes finais
- Preparação para deploy
```

#### 📁 Entregáveis
- Aplicação completamente funcional
- Todos os componentes integrados
- Testes passando
- Documentação atualizada

---

### **Aula 26 - Documentação Técnica e Manual do Usuário**
*Duração: 4h*

#### 📖 Conteúdo
- **Documentação técnica**
  - README detalhado
  - API documentation
  - Component library
  - Deployment guide

- **Manual do usuário**
  - Guias de uso
  - Screenshots
  - Troubleshooting
  - FAQ

#### 🛠 Atividade Prática
```markdown
# Manual do Usuário - Sistema Lunysse

## Para Psicólogos

### 1. Fazendo Login
1. Acesse a página de login
2. Digite seu email e senha
3. Clique em "Entrar"

### 2. Gerenciando Pacientes
1. No menu lateral, clique em "Pacientes"
2. Visualize a lista de seus pacientes
3. Clique em um paciente para ver detalhes

### 3. Agendando Sessões
1. No dashboard, clique em "Nova Sessão"
2. Selecione o paciente
3. Escolha data e horário
4. Confirme o agendamento
```

#### 📁 Entregáveis
- Documentação técnica completa
- Manual do usuário ilustrado
- Guias de instalação e deploy
- Vídeos tutoriais (opcional)

---

### **Aula 27 - Apresentação Final, Deploy e Avaliação**
*Duração: 4h*

#### 📖 Conteúdo
- **Preparação da apresentação**
  - Estrutura da apresentação
  - Demonstração ao vivo
  - Q&A preparation

- **Deploy da aplicação**
  - Build de produção
  - Hospedagem (Vercel/Netlify)
  - Configuração de domínio

#### 🛠 Atividade Prática
```bash
# Build de produção
npm run build

# Deploy no Vercel
npx vercel --prod

# Configuração de ambiente
# - Variáveis de ambiente
# - Custom domain
# - Analytics setup
```

#### 🎯 Apresentação Final
```
Estrutura da apresentação (20 min):
1. Introdução ao projeto (2 min)
2. Demonstração das funcionalidades (10 min)
3. Tecnologias utilizadas (3 min)
4. Desafios e soluções (3 min)
5. Próximos passos (2 min)
```

#### 📁 Entregáveis
- Aplicação deployada e funcional
- Apresentação profissional
- Código fonte organizado
- Documentação completa

---

## 📊 Sistema de Avaliação

### **Critérios de Avaliação**

#### **Técnico (40%)**
- Qualidade do código
- Uso correto das tecnologias
- Performance da aplicação
- Responsividade

#### **Visual/UX (30%)**
- Design system consistente
- Usabilidade
- Acessibilidade
- Responsividade

#### **Funcional (20%)**
- Funcionalidades implementadas
- Integração entre componentes
- Tratamento de erros
- Fluxos de usuário

#### **Documentação (10%)**
- README completo
- Comentários no código
- Manual do usuário
- Apresentação final

### **Entregáveis por Parte**

#### **Parte 1 (20 pontos)**
- [ ] Assets otimizados
- [ ] Protótipos de alta fidelidade
- [ ] Design system documentado
- [ ] Testes de responsividade

#### **Parte 2 (30 pontos)**
- [ ] Estrutura HTML semântica
- [ ] Estilos CSS/Tailwind
- [ ] JavaScript funcional
- [ ] Interatividade básica

#### **Parte 3 (50 pontos)**
- [ ] Aplicação React completa
- [ ] Todas as funcionalidades
- [ ] Testes e otimizações
- [ ] Deploy e apresentação

---

## 🛠 Ferramentas e Recursos

### **Desenvolvimento**
- **Editor**: VS Code com extensões React
- **Browser**: Chrome DevTools
- **Design**: Figma (protótipos)
- **Versionamento**: Git + GitHub

### **Tecnologias Principais**
- **Frontend**: React 19, Vite 7, Tailwind CSS 4
- **Animações**: Framer Motion
- **Ícones**: Lucide React
- **Gráficos**: Recharts
- **IA**: Hugging Face Inference

### **Recursos de Aprendizado**
- **Documentação oficial** das tecnologias
- **MDN Web Docs** para referências
- **React DevTools** para debugging
- **Lighthouse** para performance

---

## 🎯 Objetivos de Aprendizado

### **Ao final do curso, o aluno será capaz de:**

1. **Criar aplicações web modernas** usando React e tecnologias atuais
2. **Aplicar princípios de design** e UX/UI em projetos reais
3. **Implementar responsividade** e acessibilidade
4. **Integrar APIs** e gerenciar estado da aplicação
5. **Otimizar performance** e fazer deploy profissional
6. **Trabalhar em equipe** usando Git e boas práticas
7. **Documentar projetos** de forma clara e profissional

### **Competências Desenvolvidas**
- Programação front-end avançada
- Design thinking e UX/UI
- Metodologias ágeis
- Versionamento e colaboração
- Testes e qualidade de software
- Deploy e DevOps básico

---

## 📞 Suporte e Recursos

### **Durante o Curso**
- **Fórum de dúvidas** para discussões
- **Office hours** semanais com instrutor
- **Peer review** entre alunos
- **Mentoria** para projetos individuais

### **Recursos Adicionais**
- **Biblioteca de componentes** para referência
- **Templates** e boilerplates
- **Checklist** de qualidade
- **Guias de boas práticas**

---

<div align="center">
  <h2>🎓 Boa sorte em sua jornada de aprendizado!</h2>
  <p>Construa o futuro da tecnologia, uma linha de código por vez.</p>
  <p><strong>Sistema Lunysse - Curso Full Stack</strong></p>
</div>