# PLANO DE TRABALHO DOCENTE 

## MODELO PEDAGÓGICO SENAC 

**Curso:** Desenvolvedor Full Stack  
**Carga Horária Total:** 108h  
**Carga Horária da UC:** 108h  

**Docente:** Jeremias O Nunes 

---

## PLANO DE AULA – Eventos, Funções e DOM

📌 **Disciplina:** Construir aplicações front-end  
👨🏫 **Mentor(a):** Jeremias O Nunes  
📆 **Data:** Aula 10 - Parte 2  
⏰ **Duração:** 4 horas  

---

## 📖 Planejamento

### 📌 Conteúdo Formativo

- Definição e chamada de funções: declarações, expressões e arrow functions
- Parâmetros, argumentos e valores de retorno
- Tipos de eventos do navegador e suas aplicações
- Event listeners e handlers para interatividade
- Document Object Model: objetos, propriedades e eventos
- Seleção e manipulação de elementos DOM
- Eventos do DOM: click, submit, input, change
- Sistema de notificações toast para feedback
- Toggle de sidebar mobile e modais interativos

### 🎯 Objetivo Geral

Implementar interatividade web através de eventos, funções e manipulação do DOM seguindo padrões ECMAScript, conectando a lógica JavaScript da aula anterior com a interface do Sistema Lunysse para criar experiências dinâmicas e responsivas.

### 💡 Habilidades e Competências

✅ **Utilizar editor de código para aplicações web** - Implementar JavaScript interativo  
✅ **Efetuar correções na aplicação web** - Debuggar eventos e interações  
✅ **Manipular DOM dinamicamente** - Criar interfaces responsivas a ações do usuário  
✅ **Implementar feedback visual** - Melhorar UX com interações apropriadas  

### 📌 Materiais Necessários

📌 Projeto com JavaScript básico da aula anterior  
📌 Navegadores com DevTools (Event Listeners tab)  
📌 Dispositivos móveis para teste de touch events  
📌 Exemplos de sistemas interativos de saúde  
📌 Biblioteca de ícones para feedback visual  
📌 Templates de componentes interativos  
📌 Ferramentas de debugging de eventos  

---

## 🎓 Estratégias de Ensino e Aprendizagem

### Introdução e Contextualização (25 min)

**Metodologia Ativa - Experiência Comparativa:**
Demonstrar duas versões do mesmo formulário:
- **Versão 1:** Formulário estático (sem JavaScript)
- **Versão 2:** Formulário interativo (com validação em tempo real, feedback visual)

**Questões Problematizadoras:**
- "Como um paciente sabe se preencheu o formulário corretamente?"
- "Por que sistemas médicos precisam de feedback imediato?"
- "Qual a diferença entre validação no envio vs validação em tempo real?"

**Contextualização do Lunysse:**
Apresentar interações que implementaremos:
- Validação em tempo real nos formulários
- Toggle da sidebar mobile
- Modais de confirmação para ações críticas
- Sistema de notificações para feedback
- Filtros dinâmicos em listas

---

### **Tópico 1: Funções Avançadas e Parâmetros (50 min)**

#### 📌 Demonstração Prática:
**Metodologia Ativa - Function Evolution:**
- Mostrar evolução de uma função simples para complexa:
```javascript
// Função básica
function validarEmail(email) {
  return email.includes('@');
}

// Função com múltiplos parâmetros
function validarCampo(valor, tipo, obrigatorio = true) {
  if (obrigatorio && !valor) {
    return { valido: false, erro: 'Campo obrigatório' };
  }
  
  switch (tipo) {
    case 'email':
      return validarEmail(valor);
    case 'telefone':
      return validarTelefone(valor);
    default:
      return { valido: true };
  }
}

// Arrow function para callbacks
const aplicarValidacao = (campo, validador) => {
  const resultado = validador(campo.value);
  mostrarFeedback(campo, resultado);
};

// Função de alta ordem
function criarValidador(regras) {
  return function(valor) {
    return regras.every(regra => regra(valor));
  };
}
```

#### 📌 Atividade Prática 1:
🎯 **Objetivo:** Criar biblioteca de funções reutilizáveis para o Sistema Lunysse  
📝 **Tarefa:**
- **Metodologia Ativa - Function Library Building:**
- **Duplas criam funções especializadas:**
  - **Dupla 1-2:** Funções de validação (email, telefone, CPF, data)
  - **Dupla 3-4:** Funções de formatação (telefone, data, nome)
  - **Dupla 5-6:** Funções de cálculo (idade, duração sessão, horários)
  - **Dupla 7-8:** Funções de utilidade (debounce, throttle, storage)
- **Especificações técnicas:**
  - Usar arrow functions quando apropriado
  - Implementar parâmetros padrão
  - Retornar objetos estruturados
  - Adicionar JSDoc completo
- **Testes:** Cada função deve ter pelo menos 3 casos de teste

**Parte do Projeto Construída:** Biblioteca de funções utilitárias do Sistema Lunysse

---

### **Tópico 2: Eventos e Event Listeners (55 min)**

#### 📌 Demonstração Prática:
**Metodologia Ativa - Event Showcase:**
- Demonstrar diferentes tipos de eventos ao vivo:
```javascript
// Event listeners básicos
document.getElementById('btn-login').addEventListener('click', function(event) {
  event.preventDefault();
  console.log('Botão clicado!');
});

// Eventos de formulário
const formLogin = document.getElementById('form-login');
formLogin.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const dados = new FormData(this);
  const email = dados.get('email');
  const senha = dados.get('senha');
  
  if (validarLogin(email, senha)) {
    realizarLogin(email, senha);
  }
});

// Eventos de input em tempo real
document.getElementById('email').addEventListener('input', function(event) {
  const email = event.target.value;
  const valido = validarEmail(email);
  
  mostrarFeedbackEmail(this, valido);
});

// Eventos de teclado
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    fecharModal();
  }
});
```

#### 📌 Atividade Prática 2:
🎯 **Objetivo:** Implementar sistema completo de eventos para interatividade  
📝 **Tarefa:**
- **Metodologia Ativa - Event System Implementation:**
- **Grupos implementam eventos específicos:**
  - **Grupo 1:** Eventos de formulário (submit, input, change)
  - **Grupo 2:** Eventos de navegação (click, hover, focus)
  - **Grupo 3:** Eventos de teclado (keydown, keyup, shortcuts)
  - **Grupo 4:** Eventos mobile (touch, swipe, orientação)
- **Implementação estruturada:**
  1. Identificar elementos que precisam de eventos (10 min)
  2. Definir tipos de eventos necessários (10 min)
  3. Implementar event listeners (25 min)
  4. Testar em diferentes cenários (10 min)
- **Requisitos técnicos:**
  - Usar addEventListener (não onclick)
  - Implementar preventDefault quando necessário
  - Adicionar feedback visual para todas as ações
  - Considerar acessibilidade (foco, teclado)

**Parte do Projeto Construída:** Sistema de eventos completo e funcional

---

### **Tópico 3: Manipulação DOM Dinâmica (60 min)**

#### 📌 Demonstração Prática:
**Metodologia Ativa - DOM Manipulation Live:**
- Criar sistema de notificações toast ao vivo:
```javascript
class SistemaNotificacoes {
  constructor() {
    this.container = this.criarContainer();
    this.notificacoes = [];
  }
  
  criarContainer() {
    const container = document.createElement('div');
    container.className = 'fixed top-4 right-4 z-50 space-y-2';
    container.id = 'notificacoes-container';
    document.body.appendChild(container);
    return container;
  }
  
  mostrar(mensagem, tipo = 'info', duracao = 5000) {
    const notificacao = this.criarNotificacao(mensagem, tipo);
    this.container.appendChild(notificacao);
    
    // Animação de entrada
    setTimeout(() => {
      notificacao.classList.add('opacity-100', 'translate-x-0');
    }, 100);
    
    // Auto-remoção
    setTimeout(() => {
      this.remover(notificacao);
    }, duracao);
    
    return notificacao;
  }
  
  criarNotificacao(mensagem, tipo) {
    const notificacao = document.createElement('div');
    notificacao.className = `
      transform translate-x-full opacity-0 transition-all duration-300
      bg-white/90 backdrop-blur-sm border border-white/20 rounded-lg p-4
      shadow-lg max-w-sm ${this.obterClassesTipo(tipo)}
    `;
    
    notificacao.innerHTML = `
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          ${this.obterIcone(tipo)}
          <span class="ml-2 text-dark">${mensagem}</span>
        </div>
        <button class="ml-4 text-dark/60 hover:text-dark transition-colors">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"/>
          </svg>
        </button>
      </div>
    `;
    
    // Event listener para fechar
    notificacao.querySelector('button').addEventListener('click', () => {
      this.remover(notificacao);
    });
    
    return notificacao;
  }
  
  remover(notificacao) {
    notificacao.classList.add('translate-x-full', 'opacity-0');
    setTimeout(() => {
      if (notificacao.parentNode) {
        notificacao.parentNode.removeChild(notificacao);
      }
    }, 300);
  }
}

// Instância global
window.notificacoes = new SistemaNotificacoes();
```

#### 📌 Atividade Prática 3:
🎯 **Objetivo:** Implementar componentes interativos dinâmicos  
📝 **Tarefa:**
- **Metodologia Ativa - Interactive Components Lab:**
- **Componentes por dupla:**
  - **Dupla 1-2:** Sistema de modais (abrir, fechar, overlay)
  - **Dupla 3-4:** Toggle sidebar mobile (hambúrguer menu)
  - **Dupla 5-6:** Filtros dinâmicos para listas
  - **Dupla 7-8:** Accordion/collapse para FAQ
- **Requisitos de implementação:**
  - Criar elementos dinamicamente
  - Manipular classes CSS para animações
  - Implementar estados (aberto/fechado, ativo/inativo)
  - Adicionar acessibilidade (ARIA attributes)
  - Testar em dispositivos móveis
- **Critérios de qualidade:**
  - Animações suaves (CSS transitions)
  - Feedback visual claro
  - Funciona com teclado
  - Performance otimizada

**Parte do Projeto Construída:** Componentes interativos completos e acessíveis

---

### **Tópico 4: Integração e Feedback Visual (45 min)**

#### 📌 Demonstração Prática:
**Metodologia Ativa - UX Enhancement:**
- Integrar todos os componentes em um fluxo completo:
```javascript
// Sistema integrado de feedback
class FeedbackSistema {
  static mostrarCarregando(elemento, mensagem = 'Carregando...') {
    elemento.disabled = true;
    elemento.innerHTML = `
      <div class="flex items-center">
        <div class="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
        ${mensagem}
      </div>
    `;
  }
  
  static mostrarSucesso(elemento, mensagem = 'Sucesso!') {
    elemento.classList.add('bg-green-500');
    elemento.innerHTML = `
      <div class="flex items-center">
        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
        </svg>
        ${mensagem}
      </div>
    `;
    
    setTimeout(() => {
      elemento.classList.remove('bg-green-500');
      elemento.disabled = false;
    }, 2000);
  }
  
  static mostrarErro(elemento, mensagem = 'Erro!') {
    elemento.classList.add('bg-red-500', 'animate-pulse');
    elemento.innerHTML = mensagem;
    
    setTimeout(() => {
      elemento.classList.remove('bg-red-500', 'animate-pulse');
      elemento.disabled = false;
    }, 3000);
  }
}
```

#### 📌 Atividade Prática 4:
🎯 **Objetivo:** Integrar todos os componentes em fluxos completos do usuário  
📝 **Tarefa:**
- **Metodologia Ativa - User Flow Integration:**
- **Fluxos completos por grupo:**
  - **Grupo 1:** Fluxo de login (validação → feedback → redirecionamento)
  - **Grupo 2:** Fluxo de cadastro (validação → confirmação → sucesso)
  - **Grupo 3:** Fluxo de agendamento (seleção → validação → confirmação)
  - **Grupo 4:** Fluxo de navegação (menu → páginas → feedback)
- **Integração completa:**
  1. Conectar validações da aula anterior (15 min)
  2. Adicionar eventos e manipulação DOM (15 min)
  3. Implementar feedback visual (10 min)
  4. Testar fluxo completo (5 min)
- **Testes de usabilidade:**
  - Testar com dados válidos e inválidos
  - Verificar feedback em todas as ações
  - Testar acessibilidade (teclado, screen reader)
  - Validar em dispositivos móveis

**Parte do Projeto Construída:** Fluxos de usuário completos e funcionais

---

### Encerramento e Reflexão (45 min)

#### 📌 Demonstração dos Fluxos Completos:
**Metodologia Ativa - User Journey Demo:**
- Cada grupo demonstra seu fluxo completo
- Simular uso real com dados de teste
- Mostrar tratamento de erros e casos extremos
- Outros grupos testam e dão feedback

#### 📌 Teste de Usabilidade Cruzado:
**Metodologia Ativa - Cross-testing:**
- Grupos testam os fluxos uns dos outros
- Usar checklist de usabilidade:
  - Feedback visual claro?
  - Erros bem comunicados?
  - Navegação intuitiva?
  - Funciona em mobile?
- Documentar problemas e sugestões

#### 📌 Discussão técnica:
**Metodologia Ativa - Technical Review:**
- "Como os eventos melhoraram a experiência do usuário?"
- "Quais foram os desafios na manipulação DOM?"
- "Como garantir performance com muitos event listeners?"
- "Que padrões de código emergiram durante o desenvolvimento?"

#### 📌 Desafio para a próxima aula:
**Metodologia Ativa - Advanced Preparation:**
- Pesquisar técnicas avançadas de manipulação DOM
- Analisar padrões de performance em JavaScript
- Estudar conceitos de:
  - Event delegation
  - Debouncing e throttling
  - Memory leaks em event listeners
  - Custom events
- Preparar lista de otimizações para implementar

---

### 📌 Objetos de Aprendizagem

📝 **Materiais Didáticos Utilizados:**
- Biblioteca de funções utilitárias implementadas
- Sistema de notificações toast funcional
- Templates de event listeners para diferentes contextos
- Checklist de acessibilidade para componentes interativos
- Guia de debugging de eventos com DevTools
- Exemplos de feedback visual e micro-interações
- Fluxos de usuário documentados e testados

---

## 🎯 Avaliação

### **Avaliação Formativa (Durante a aula):**
✅ **Implementação correta de eventos** - Event listeners funcionando adequadamente  
✅ **Manipulação DOM eficiente** - Criação e modificação dinâmica de elementos  
✅ **Feedback visual apropriado** - UX melhorada com interações claras  
✅ **Integração de funcionalidades** - Fluxos completos funcionando  

### **Avaliação Somativa (Entregáveis):**
✅ **Sistema de eventos completo** - Todas as interações implementadas  
✅ **Componentes interativos** - Modais, notificações, navegação funcionais  
✅ **Fluxos de usuário integrados** - Experiências completas testadas  

### **Critérios de Qualidade:**
- **Excelente (9-10):** Interatividade perfeita, feedback excelente, código otimizado
- **Bom (7-8):** Boa funcionalidade com pequenos ajustes de UX necessários
- **Satisfatório (6-7):** Funcionalidade básica mas com oportunidades de melhoria
- **Insatisfatório (<6):** Problemas significativos de funcionalidade ou usabilidade

---

## 🎓 Conclusão

### **Aprendizado Esperado:**

Ao final desta aula, os alunos serão capazes de:

🎯 **Conhecimento Técnico:**
- Implementar eventos e manipulação DOM seguindo boas práticas
- Criar funções reutilizáveis com parâmetros e retornos apropriados
- Desenvolver componentes interativos acessíveis e performáticos
- Integrar JavaScript com HTML/CSS para experiências dinâmicas

🎯 **Aplicação Prática:**
- Transformar o Sistema Lunysse em aplicação totalmente interativa
- Implementar feedback visual que melhora significativamente a UX
- Criar fluxos de usuário completos e funcionais
- Desenvolver componentes reutilizáveis e bem estruturados

🎯 **Competências Profissionais:**
- Trabalhar com padrões modernos de desenvolvimento JavaScript
- Considerar acessibilidade e usabilidade em todas as interações
- Debuggar e otimizar código JavaScript complexo
- Integrar múltiplas tecnologias para criar soluções completas

### **Conexão com o Projeto:**
Esta aula transforma o Sistema Lunysse de páginas estáticas em uma aplicação web totalmente funcional e interativa. As interações implementadas hoje serão refinadas na próxima aula com técnicas avançadas de manipulação DOM.

### **Preparação para Próxima Aula:**
O sistema interativo criado hoje será otimizado na Aula 11 com técnicas avançadas de manipulação DOM, event delegation e otimizações de performance, completando a base técnica sólida do Sistema Lunysse.