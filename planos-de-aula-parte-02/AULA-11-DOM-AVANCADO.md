# PLANO DE TRABALHO DOCENTE 

## MODELO PEDAGÓGICO SENAC 

**Curso:** Desenvolvedor Full Stack  
**Carga Horária Total:** 108h  
**Carga Horária da UC:** 108h  

**Docente:** Jeremias O Nunes 

---

## PLANO DE AULA – Manipulação DOM e Estilos Dinâmicos

📌 **Disciplina:** Construir aplicações front-end  
👨🏫 **Mentor(a):** Jeremias O Nunes  
📆 **Data:** Aula 11 - Parte 2  
⏰ **Duração:** 4 horas  

---

## 📖 Planejamento

### 📌 Conteúdo Formativo

- Manipulação avançada DOM: criação e remoção de elementos
- Modificação de atributos e propriedades dinâmicas
- Navegação pela árvore DOM (parent, children, siblings)
- Estilos dinâmicos: modificação de CSS via JavaScript
- Classes dinâmicas e estados visuais
- Animações programáticas e transições
- Event delegation e otimização de performance
- Compatibilidade cross-browser e polyfills
- Debugging avançado de manipulação DOM
- Padrões de performance para aplicações complexas

### 🎯 Objetivo Geral

Avançar na manipulação DOM implementando estilos dinâmicos e garantindo compatibilidade cross-browser, finalizando o Sistema Lunysse com técnicas profissionais de desenvolvimento JavaScript que garantem performance, acessibilidade e manutenibilidade.

### 💡 Habilidades e Competências

✅ **Utilizar editor de código para aplicações web** - Implementar JavaScript avançado  
✅ **Efetuar correções na aplicação web** - Debuggar problemas complexos de DOM  
✅ **Testar compatibilidade em diversos navegadores** - Garantir funcionamento universal  
✅ **Otimizar performance** - Implementar soluções eficientes e escaláveis  

### 📌 Materiais Necessários

📌 Projeto interativo da aula anterior  
📌 Navegadores múltiplos para testes de compatibilidade  
📌 Ferramentas de profiling: Chrome DevTools Performance  
📌 Dispositivos para teste de performance  
📌 Biblioteca de polyfills para compatibilidade  
📌 Ferramentas de monitoramento de memory leaks  
📌 Templates de padrões de performance  

---

## 🎓 Estratégias de Ensino e Aprendizagem

### Introdução e Contextualização (20 min)

**Metodologia Ativa - Performance Analysis:**
Demonstrar impacto de código mal otimizado:
- **Cenário 1:** Sistema com 1000+ event listeners individuais
- **Cenário 2:** Mesmo sistema com event delegation
- **Cenário 3:** Medição de performance e memory usage

**Questões Problematizadoras:**
- "Por que um sistema médico precisa ser rápido mesmo com muitos dados?"
- "Como garantir que o sistema funcione em computadores antigos de clínicas?"
- "Qual o impacto de memory leaks em sistemas que ficam abertos o dia todo?"

**Contextualização do Lunysse:**
Apresentar desafios de performance:
- Listas com centenas de pacientes
- Dashboards com múltiplos gráficos
- Sistema usado por horas sem refresh
- Compatibilidade com equipamentos antigos

---

### **Tópico 1: Manipulação DOM Avançada (55 min)**

#### 📌 Demonstração Prática:
**Metodologia Ativa - DOM Mastery:**
- Demonstrar técnicas avançadas de manipulação:
```javascript
class GerenciadorDOM {
  // Criação eficiente de elementos
  static criarElemento(tag, classes = [], atributos = {}, conteudo = '') {
    const elemento = document.createElement(tag);
    
    // Adicionar classes
    if (classes.length > 0) {
      elemento.classList.add(...classes);
    }
    
    // Adicionar atributos
    Object.entries(atributos).forEach(([key, value]) => {
      elemento.setAttribute(key, value);
    });
    
    // Adicionar conteúdo
    if (conteudo) {
      elemento.innerHTML = conteudo;
    }
    
    return elemento;
  }
  
  // Navegação pela árvore DOM
  static encontrarAncestral(elemento, seletor) {
    let atual = elemento.parentElement;
    while (atual && !atual.matches(seletor)) {
      atual = atual.parentElement;
    }
    return atual;
  }
  
  // Remoção segura de elementos
  static removerElemento(elemento, animacao = true) {
    if (animacao) {
      elemento.style.transition = 'opacity 0.3s ease';
      elemento.style.opacity = '0';
      
      setTimeout(() => {
        if (elemento.parentNode) {
          elemento.parentNode.removeChild(elemento);
        }
      }, 300);
    } else {
      if (elemento.parentNode) {
        elemento.parentNode.removeChild(elemento);
      }
    }
  }
  
  // Clonagem profunda com event listeners
  static clonarComEventos(elemento) {
    const clone = elemento.cloneNode(true);
    
    // Re-adicionar event listeners se necessário
    const eventosOriginais = elemento._eventListeners || {};
    Object.entries(eventosOriginais).forEach(([evento, handler]) => {
      clone.addEventListener(evento, handler);
    });
    
    return clone;
  }
}
```

#### 📌 Atividade Prática 1:
🎯 **Objetivo:** Implementar manipulação DOM avançada para componentes complexos  
📝 **Tarefa:**
- **Metodologia Ativa - Advanced DOM Workshop:**
- **Componentes complexos por dupla:**
  - **Dupla 1-2:** Lista dinâmica de pacientes (adicionar, remover, reordenar)
  - **Dupla 3-4:** Calendário interativo para agendamentos
  - **Dupla 5-6:** Dashboard com widgets movíveis
  - **Dupla 7-8:** Sistema de abas dinâmicas
- **Requisitos técnicos:**
  - Criar elementos dinamicamente
  - Implementar drag & drop (opcional)
  - Navegação eficiente pela árvore DOM
  - Remoção segura com animações
  - Clonagem de elementos quando necessário
- **Critérios de performance:**
  - Mínimo de reflows/repaints
  - Uso eficiente de DocumentFragment
  - Event delegation implementado
  - Memory leaks prevenidos

**Parte do Projeto Construída:** Componentes DOM avançados otimizados

---

### **Tópico 2: Estilos Dinâmicos e Animações (60 min)**

#### 📌 Demonstração Prática:
**Metodologia Ativa - Dynamic Styling Showcase:**
- Implementar sistema de temas dinâmicos:
```javascript
class GerenciadorEstilos {
  constructor() {
    this.temaAtual = 'claro';
    this.estilosCustomizados = new Map();
  }
  
  // Alternar tema
  alternarTema() {
    const novoTema = this.temaAtual === 'claro' ? 'escuro' : 'claro';
    this.aplicarTema(novoTema);
  }
  
  aplicarTema(tema) {
    document.documentElement.setAttribute('data-tema', tema);
    this.temaAtual = tema;
    
    // Animar transição
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    
    // Salvar preferência
    localStorage.setItem('tema-lunysse', tema);
  }
  
  // Modificar estilos dinamicamente
  modificarEstilo(elemento, propriedades) {
    Object.entries(propriedades).forEach(([prop, valor]) => {
      elemento.style[prop] = valor;
    });
  }
  
  // Animações programáticas
  animar(elemento, keyframes, opcoes = {}) {
    const animacao = elemento.animate(keyframes, {
      duration: 300,
      easing: 'ease-out',
      fill: 'forwards',
      ...opcoes
    });
    
    return animacao;
  }
  
  // Estados visuais dinâmicos
  definirEstado(elemento, estado) {
    // Remover estados anteriores
    elemento.classList.remove('loading', 'success', 'error', 'disabled');
    
    // Adicionar novo estado
    elemento.classList.add(estado);
    
    // Aplicar estilos específicos do estado
    switch (estado) {
      case 'loading':
        this.mostrarCarregando(elemento);
        break;
      case 'success':
        this.mostrarSucesso(elemento);
        break;
      case 'error':
        this.mostrarErro(elemento);
        break;
    }
  }
  
  mostrarCarregando(elemento) {
    const spinner = document.createElement('div');
    spinner.className = 'animate-spin rounded-full h-4 w-4 border-b-2 border-current';
    elemento.prepend(spinner);
  }
}
```

#### 📌 Atividade Prática 2:
🎯 **Objetivo:** Implementar sistema completo de estilos dinâmicos  
📝 **Tarefa:**
- **Metodologia Ativa - Dynamic Styling Lab:**
- **Sistemas por grupo:**
  - **Grupo 1:** Sistema de temas (claro/escuro) para todo o Lunysse
  - **Grupo 2:** Estados visuais dinâmicos (loading, success, error)
  - **Grupo 3:** Animações de transição entre páginas
  - **Grupo 4:** Feedback visual para interações (hover, focus, active)
- **Implementação avançada:**
  1. Criar sistema de CSS custom properties (15 min)
  2. Implementar JavaScript para modificação dinâmica (20 min)
  3. Adicionar animações suaves (15 min)
  4. Testar performance das animações (10 min)
- **Otimizações obrigatórias:**
  - Usar transform e opacity para animações
  - Implementar will-change quando apropriado
  - Debounce para mudanças frequentes
  - Fallbacks para navegadores antigos

**Parte do Projeto Construída:** Sistema de estilos dinâmicos completo e otimizado

---

### **Tópico 3: Event Delegation e Performance (50 min)**

#### 📌 Demonstração Prática:
**Metodologia Ativa - Performance Optimization:**
- Comparar abordagens de event handling:
```javascript
// ❌ Abordagem ineficiente
function adicionarEventosIndividuais() {
  const botoes = document.querySelectorAll('.btn-acao');
  botoes.forEach(botao => {
    botao.addEventListener('click', function(e) {
      const acao = this.dataset.acao;
      executarAcao(acao, this);
    });
  });
}

// ✅ Abordagem otimizada com event delegation
class GerenciadorEventos {
  constructor(container) {
    this.container = container;
    this.handlers = new Map();
    this.inicializar();
  }
  
  inicializar() {
    this.container.addEventListener('click', this.handleClick.bind(this));
    this.container.addEventListener('input', this.handleInput.bind(this));
    this.container.addEventListener('change', this.handleChange.bind(this));
  }
  
  handleClick(event) {
    const elemento = event.target.closest('[data-acao]');
    if (!elemento) return;
    
    const acao = elemento.dataset.acao;
    const handler = this.handlers.get(acao);
    
    if (handler) {
      handler(event, elemento);
    }
  }
  
  registrarHandler(acao, callback) {
    this.handlers.set(acao, callback);
  }
  
  // Debouncing para inputs
  handleInput(event) {
    if (event.target.matches('[data-debounce]')) {
      clearTimeout(event.target._debounceTimer);
      event.target._debounceTimer = setTimeout(() => {
        this.processarInput(event.target);
      }, 300);
    }
  }
}

// Uso prático
const gerenciador = new GerenciadorEventos(document.body);

gerenciador.registrarHandler('excluir-paciente', (event, elemento) => {
  const pacienteId = elemento.dataset.pacienteId;
  confirmarExclusao(pacienteId);
});

gerenciador.registrarHandler('editar-paciente', (event, elemento) => {
  const pacienteId = elemento.dataset.pacienteId;
  abrirModalEdicao(pacienteId);
});
```

#### 📌 Atividade Prática 3:
🎯 **Objetivo:** Otimizar performance do sistema com técnicas avançadas  
📝 **Tarefa:**
- **Metodologia Ativa - Performance Optimization Sprint:**
- **Otimizações específicas por dupla:**
  - **Dupla 1-2:** Event delegation para listas grandes
  - **Dupla 3-4:** Debouncing/throttling para inputs
  - **Dupla 5-6:** Lazy loading de componentes
  - **Dupla 7-8:** Virtual scrolling para listas longas
- **Métricas de performance:**
  1. Medir performance antes da otimização (10 min)
  2. Implementar otimizações (25 min)
  3. Medir performance após otimização (10 min)
  4. Documentar melhorias obtidas (5 min)
- **Ferramentas de medição:**
  - Chrome DevTools Performance tab
  - Memory tab para vazamentos
  - Lighthouse para métricas gerais
  - Console.time para medições específicas

**Parte do Projeto Construída:** Sistema otimizado para máxima performance

---

### **Tópico 4: Compatibilidade e Debugging Avançado (45 min)**

#### 📌 Demonstração Prática:
**Metodologia Ativa - Cross-browser Debugging:**
- Implementar sistema de detecção e fallbacks:
```javascript
class CompatibilidadeNavegador {
  constructor() {
    this.recursos = this.detectarRecursos();
    this.implementarFallbacks();
  }
  
  detectarRecursos() {
    return {
      intersectionObserver: 'IntersectionObserver' in window,
      customElements: 'customElements' in window,
      webAnimations: 'animate' in document.createElement('div'),
      backdropFilter: CSS.supports('backdrop-filter', 'blur(10px)'),
      gridLayout: CSS.supports('display', 'grid')
    };
  }
  
  implementarFallbacks() {
    // Fallback para Intersection Observer
    if (!this.recursos.intersectionObserver) {
      this.implementarIntersectionObserverPolyfill();
    }
    
    // Fallback para backdrop-filter
    if (!this.recursos.backdropFilter) {
      document.documentElement.classList.add('no-backdrop-filter');
    }
    
    // Fallback para CSS Grid
    if (!this.recursos.gridLayout) {
      document.documentElement.classList.add('no-grid');
    }
  }
  
  // Sistema de debugging avançado
  static debug = {
    log: (mensagem, dados = null) => {
      if (process.env.NODE_ENV === 'development') {
        console.log(`[Lunysse Debug] ${mensagem}`, dados);
      }
    },
    
    error: (erro, contexto = '') => {
      console.error(`[Lunysse Error] ${contexto}:`, erro);
      
      // Enviar erro para sistema de monitoramento
      if (window.sistemaMonitoramento) {
        window.sistemaMonitoramento.reportarErro(erro, contexto);
      }
    },
    
    performance: (nome, funcao) => {
      const inicio = performance.now();
      const resultado = funcao();
      const fim = performance.now();
      
      console.log(`[Performance] ${nome}: ${fim - inicio}ms`);
      return resultado;
    }
  };
}
```

#### 📌 Atividade Prática 4:
🎯 **Objetivo:** Garantir compatibilidade total e implementar debugging profissional  
📝 **Tarefa:**
- **Metodologia Ativa - Compatibility & Debug Lab:**
- **Testes sistemáticos por grupo:**
  - **Grupo 1:** Internet Explorer 11 e Edge Legacy
  - **Grupo 2:** Safari (macOS e iOS)
  - **Grupo 3:** Firefox (desktop e mobile)
  - **Grupo 4:** Chrome (diferentes versões)
- **Protocolo de teste:**
  1. Testar funcionalidades principais (15 min)
  2. Identificar problemas de compatibilidade (10 min)
  3. Implementar polyfills/fallbacks (15 min)
  4. Adicionar sistema de debugging (5 min)
- **Entregáveis:**
  - Lista de problemas encontrados
  - Soluções implementadas
  - Sistema de debugging configurado
  - Relatório de compatibilidade

**Parte do Projeto Construída:** Sistema compatível e com debugging profissional

---

### Encerramento e Reflexão (50 min)

#### 📌 Auditoria Final de Performance:
**Metodologia Ativa - Performance Audit:**
- Executar auditoria completa do Sistema Lunysse:
  - Lighthouse score em mobile e desktop
  - Memory usage durante uso prolongado
  - Tempo de resposta em diferentes dispositivos
  - Compatibilidade em todos os navegadores testados

#### 📌 Showcase Final da Parte 2:
**Metodologia Ativa - Final Demo:**
- Cada grupo demonstra uma funcionalidade completa:
  - Mostrar evolução desde HTML estático até aplicação dinâmica
  - Destacar otimizações de performance implementadas
  - Demonstrar compatibilidade cross-browser
  - Apresentar métricas de qualidade alcançadas

#### 📌 Retrospectiva da Parte 2:
**Metodologia Ativa - Learning Retrospective:**
- "Qual foi a evolução mais significativa do projeto?"
- "Quais técnicas de otimização tiveram maior impacto?"
- "Como o debugging avançado facilita o desenvolvimento?"
- "Que desafios técnicos foram mais complexos de resolver?"

#### 📌 Preparação para Parte 3:
**Metodologia Ativa - Bridge to Advanced:**
- Apresentar preview da Parte 3: funcionalidades avançadas
- Discutir integração com APIs e banco de dados
- Planejar funcionalidades que serão implementadas:
  - Chat com IA
  - Sistema de relatórios
  - Programação orientada a objetos
  - Deploy e documentação

---

### 📌 Objetos de Aprendizagem

📝 **Materiais Didáticos Utilizados:**
- Biblioteca de classes utilitárias para DOM avançado
- Sistema de estilos dinâmicos implementado
- Ferramentas de debugging e profiling configuradas
- Polyfills e fallbacks para compatibilidade
- Métricas de performance documentadas
- Checklist de compatibilidade cross-browser
- Templates de otimização para projetos futuros

---

## 🎯 Avaliação

### **Avaliação Formativa (Durante a aula):**
✅ **Manipulação DOM avançada** - Técnicas eficientes e bem implementadas  
✅ **Estilos dinâmicos** - Sistema flexível e performático  
✅ **Otimizações de performance** - Melhorias mensuráveis implementadas  
✅ **Compatibilidade cross-browser** - Funcionamento em todos os navegadores  

### **Avaliação Somativa (Entregáveis):**
✅ **Sistema Lunysse otimizado** - Performance e compatibilidade excelentes  
✅ **Código profissional** - Padrões da indústria implementados  
✅ **Debugging implementado** - Sistema de monitoramento funcional  

### **Critérios de Qualidade:**
- **Excelente (9-10):** Sistema otimizado, compatível e com debugging profissional
- **Bom (7-8):** Boa performance com pequenas oportunidades de otimização
- **Satisfatório (6-7):** Funcionalidade adequada mas com espaço para melhorias
- **Insatisfatório (<6):** Problemas significativos de performance ou compatibilidade

---

## 🎓 Conclusão

### **Aprendizado Esperado:**

Ao final desta aula, os alunos serão capazes de:

🎯 **Conhecimento Técnico:**
- Implementar manipulação DOM avançada com técnicas profissionais
- Criar sistemas de estilos dinâmicos otimizados para performance
- Aplicar event delegation e outras otimizações de performance
- Garantir compatibilidade cross-browser com polyfills apropriados

🎯 **Aplicação Prática:**
- Entregar Sistema Lunysse com performance profissional
- Implementar debugging e monitoramento de qualidade
- Criar código JavaScript escalável e manutenível
- Otimizar aplicação para uso em produção

🎯 **Competências Profissionais:**
- Trabalhar com padrões de performance da indústria
- Debuggar e resolver problemas complexos de JavaScript
- Garantir qualidade e compatibilidade em projetos reais
- Implementar soluções escaláveis e bem arquitetadas

### **Conexão com o Projeto:**
Esta aula finaliza a Parte 2 do curso, entregando o Sistema Lunysse como uma aplicação web completa, otimizada e profissional. O sistema está pronto para receber funcionalidades avançadas na Parte 3.

### **Transição para Parte 3:**
O Sistema Lunysse agora possui base técnica sólida (HTML semântico, CSS responsivo, JavaScript otimizado) e está preparado para funcionalidades avançadas como integração com IA, programação orientada a objetos, SQL e deploy profissional que serão implementadas na Parte 3.

### **Impacto no Aprendizado:**
Os alunos completam a Parte 2 com:
- **Aplicação web funcional** e otimizada
- **Competências técnicas** em desenvolvimento front-end
- **Experiência prática** com debugging e otimização
- **Base sólida** para desenvolvimento avançado
- **Portfolio profissional** demonstrável

---

## 🎉 Celebração da Conclusão da Parte 2

### **Marcos Alcançados:**
✅ **HTML semântico** implementado com acessibilidade completa  
✅ **CSS responsivo** funcionando em todos os dispositivos  
✅ **JavaScript interativo** com validações e feedback  
✅ **Performance otimizada** seguindo padrões da indústria  
✅ **Compatibilidade garantida** em todos os navegadores principais  

### **Próximos Passos:**
🚀 **Parte 3** - Funcionalidades avançadas e integração completa  
🚀 **Programação orientada a objetos** para arquitetura robusta  
🚀 **Integração com IA** para chat especializado  
🚀 **Deploy profissional** para uso real  

**Parabéns pela conclusão da Parte 2! O Sistema Lunysse está tecnicamente sólido e pronto para funcionalidades avançadas! 🎊**