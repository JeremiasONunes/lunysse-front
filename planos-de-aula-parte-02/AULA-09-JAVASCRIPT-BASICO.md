# PLANO DE TRABALHO DOCENTE 

## MODELO PEDAGÓGICO SENAC 

**Curso:** Desenvolvedor Full Stack  
**Carga Horária Total:** 108h  
**Carga Horária da UC:** 108h  

**Docente:** Jeremias O Nunes 

---

## PLANO DE AULA – Linguagem de Scripts: Sintaxe ECMAScript

📌 **Disciplina:** Construir aplicações front-end  
👨🏫 **Mentor(a):** Jeremias O Nunes  
📆 **Data:** Aula 9 - Parte 2  
⏰ **Duração:** 4 horas  

---

## 📖 Planejamento

### 📌 Conteúdo Formativo

- Sintaxe ECMAScript: operadores, palavras reservadas, identificadores
- Delimitadores, comentários e boas práticas de documentação
- Variáveis: let, const, var - diferenças e quando usar
- Tipos de dados primitivos e objetos
- Estruturas de controle: condicionais e laços de repetição
- Funções: declaração, expressões e arrow functions
- Escopo e hoisting em JavaScript
- Sistema de validação para formulários do Lunysse
- Tratamento de erros e debugging básico

### 🎯 Objetivo Geral

Dominar a sintaxe fundamental do JavaScript seguindo padrões ECMAScript para desenvolvimento web moderno, implementando a primeira camada de interatividade no Sistema Lunysse através de validações e lógica básica de funcionamento.

### 💡 Habilidades e Competências

✅ **Utilizar editor de código para aplicações web** - Desenvolver JavaScript com ferramentas modernas  
✅ **Efetuar correções na aplicação web** - Debuggar e resolver problemas de código  
✅ **Seguir padrões ECMAScript** - Escrever código JavaScript moderno e compatível  
✅ **Implementar lógica de negócio** - Criar funcionalidades específicas do sistema  

### 📌 Materiais Necessários

📌 Projeto HTML/CSS das aulas anteriores  
📌 VS Code com extensões JavaScript  
📌 Navegadores com DevTools (Console, Debugger)  
📌 Node.js para testes locais  
📌 Documentação ECMAScript ES6+ impressa  
📌 Exemplos de validação de sistemas médicos  
📌 Ferramentas de debugging e profiling  

---

## 🎓 Estratégias de Ensino e Aprendizagem

### Introdução e Contextualização (20 min)

**Metodologia Ativa - Demonstração Interativa:**
Mostrar a diferença entre páginas estáticas e dinâmicas:
- **Página estática:** Formulário que não valida nem responde
- **Página dinâmica:** Formulário com validação em tempo real
- **Sistema real:** Como validações impactam a experiência médica

**Questões Problematizadoras:**
- "Por que um sistema médico precisa validar dados em tempo real?"
- "Como JavaScript pode melhorar a segurança de dados de pacientes?"
- "Qual a diferença entre validação client-side e server-side?"

**Contextualização do Lunysse:**
Apresentar funcionalidades que implementaremos:
- Validação de formulários de cadastro
- Feedback visual para ações do usuário
- Lógica de autenticação básica
- Interações dinâmicas da interface

---

### **Tópico 1: Sintaxe ECMAScript e Fundamentos (50 min)**

#### 📌 Demonstração Prática:
**Metodologia Ativa - Live Coding Explicativo:**
- Demonstrar sintaxe básica no console do navegador:
```javascript
// Operadores e identificadores
const sistemaLunysse = {
  nome: 'Sistema de Agendamento',
  versao: '1.0.0',
  ativo: true
};

// Palavras reservadas e delimitadores
let pacienteAtivo = true;
const IDADE_MINIMA = 18;
var dadosTemporarios; // Evitar var em código moderno

// Comentários e documentação
/**
 * Valida idade mínima para cadastro
 * @param {number} idade - Idade do paciente
 * @returns {boolean} - True se idade válida
 */
function validarIdade(idade) {
  return idade >= IDADE_MINIMA;
}
```

#### 📌 Atividade Prática 1:
🎯 **Objetivo:** Dominar sintaxe básica e boas práticas ECMAScript  
📝 **Tarefa:**
- **Metodologia Ativa - Syntax Workshop:**
- **Exercícios progressivos em duplas:**
  1. **Nível 1:** Declarar variáveis para dados do Lunysse (10 min)
  2. **Nível 2:** Criar objetos representando paciente e psicólogo (15 min)
  3. **Nível 3:** Implementar funções básicas de validação (15 min)
  4. **Nível 4:** Adicionar comentários JSDoc profissionais (10 min)
- **Validação:** Executar código no console sem erros
- **Peer Review:** Duplas revisam código umas das outras

**Parte do Projeto Construída:** Base de código JavaScript com sintaxe correta e documentada

---

### **Tópico 2: Variáveis e Tipos de Dados (45 min)**

#### 📌 Demonstração Prática:
**Metodologia Ativa - Comparação Prática:**
- Demonstrar diferenças entre let, const, var:
```javascript
// Demonstração de escopo e hoisting
function exemploEscopo() {
  console.log(varVariable); // undefined (hoisting)
  // console.log(letVariable); // ReferenceError
  
  var varVariable = 'var funciona';
  let letVariable = 'let é melhor';
  const constVariable = 'const é imutável';
  
  if (true) {
    var varNoBloco = 'var vaza do bloco';
    let letNoBloco = 'let fica no bloco';
    const constNoBloco = 'const também fica';
  }
  
  console.log(varNoBloco); // 'var vaza do bloco'
  // console.log(letNoBloco); // ReferenceError
}
```

#### 📌 Atividade Prática 2:
🎯 **Objetivo:** Implementar sistema de dados para o Sistema Lunysse  
📝 **Tarefa:**
- **Metodologia Ativa - Data Modeling:**
- **Grupos modelam diferentes entidades:**
  - **Grupo 1:** Dados de usuário (paciente/psicólogo)
  - **Grupo 2:** Dados de agendamento
  - **Grupo 3:** Dados de sessão
  - **Grupo 4:** Dados de configuração do sistema
- **Estrutura de implementação:**
```javascript
// Exemplo para Grupo 1
const tiposUsuario = {
  PACIENTE: 'paciente',
  PSICOLOGO: 'psicologo'
};

let usuarioAtual = {
  id: null,
  nome: '',
  email: '',
  tipo: tiposUsuario.PACIENTE,
  ativo: false
};

const configuracaoSistema = {
  IDADE_MINIMA: 16,
  SESSAO_DURACAO: 50, // minutos
  HORARIO_INICIO: '08:00',
  HORARIO_FIM: '18:00'
};
```

**Parte do Projeto Construída:** Modelo de dados completo do Sistema Lunysse

---

### **Tópico 3: Estruturas de Controle (55 min)**

#### 📌 Demonstração Prática:
**Metodologia Ativa - Problem Solving:**
- Implementar lógica de validação de agendamento:
```javascript
function validarAgendamento(dados) {
  // Estruturas condicionais
  if (!dados.pacienteId) {
    return { valido: false, erro: 'Paciente obrigatório' };
  }
  
  if (!dados.psicologoId) {
    return { valido: false, erro: 'Psicólogo obrigatório' };
  }
  
  // Validação de horário
  const horario = new Date(dados.dataHora);
  const agora = new Date();
  
  if (horario <= agora) {
    return { valido: false, erro: 'Data deve ser futura' };
  }
  
  // Validação de horário comercial
  const hora = horario.getHours();
  if (hora < 8 || hora > 18) {
    return { valido: false, erro: 'Horário deve ser entre 8h e 18h' };
  }
  
  return { valido: true, erro: null };
}
```

#### 📌 Atividade Prática 3:
🎯 **Objetivo:** Implementar lógicas de negócio do Sistema Lunysse  
📝 **Tarefa:**
- **Metodologia Ativa - Business Logic Implementation:**
- **Cenários específicos por dupla:**
  - **Dupla 1-2:** Validação de cadastro de usuário
  - **Dupla 3-4:** Lógica de disponibilidade de horários
  - **Dupla 5-6:** Sistema de cálculo de idade e validações
  - **Dupla 7-8:** Lógica de status de sessões
- **Implementação estruturada:**
  1. Analisar regras de negócio (10 min)
  2. Escrever pseudocódigo (10 min)
  3. Implementar com estruturas de controle (25 min)
  4. Testar com diferentes cenários (10 min)
- **Casos de teste obrigatórios:**
  - Dados válidos (sucesso)
  - Dados inválidos (erro específico)
  - Casos extremos (limites)

**Parte do Projeto Construída:** Lógicas de negócio implementadas e testadas

---

### **Tópico 4: Sistema de Validação Completo (50 min)**

#### 📌 Demonstração Prática:
**Metodologia Ativa - Real-world Implementation:**
- Criar sistema de validação completo para formulário de login:
```javascript
class ValidadorFormulario {
  constructor(formulario) {
    this.formulario = formulario;
    this.regras = new Map();
    this.erros = new Map();
  }
  
  adicionarRegra(campo, validador, mensagem) {
    if (!this.regras.has(campo)) {
      this.regras.set(campo, []);
    }
    this.regras.get(campo).push({ validador, mensagem });
  }
  
  validar() {
    this.erros.clear();
    
    for (const [campo, regras] of this.regras) {
      const elemento = this.formulario.querySelector(`[name="${campo}"]`);
      const valor = elemento ? elemento.value : '';
      
      for (const regra of regras) {
        if (!regra.validador(valor)) {
          if (!this.erros.has(campo)) {
            this.erros.set(campo, []);
          }
          this.erros.get(campo).push(regra.mensagem);
          break; // Para no primeiro erro
        }
      }
    }
    
    return this.erros.size === 0;
  }
  
  obterErros() {
    return Object.fromEntries(this.erros);
  }
}

// Uso prático
const validador = new ValidadorFormulario(document.getElementById('form-login'));

validador.adicionarRegra('email', 
  valor => valor.includes('@') && valor.includes('.'),
  'Email deve ter formato válido'
);

validador.adicionarRegra('senha',
  valor => valor.length >= 6,
  'Senha deve ter pelo menos 6 caracteres'
);
```

#### 📌 Atividade Prática 4:
🎯 **Objetivo:** Implementar validação completa dos formulários do Lunysse  
📝 **Tarefa:**
- **Metodologia Ativa - Validation System Build:**
- **Grupos implementam validações específicas:**
  - **Grupo 1:** Formulário de login
  - **Grupo 2:** Formulário de cadastro de paciente
  - **Grupo 3:** Formulário de agendamento
  - **Grupo 4:** Formulário de cadastro de psicólogo
- **Requisitos técnicos:**
  - Usar classe ValidadorFormulario como base
  - Implementar pelo menos 5 regras de validação
  - Mostrar erros em tempo real
  - Feedback visual (cores, ícones)
  - Acessibilidade (ARIA live regions)
- **Testes obrigatórios:**
  - Campos vazios
  - Formatos inválidos
  - Dados válidos
  - Casos extremos

**Parte do Projeto Construída:** Sistema de validação completo e funcional

---

### Encerramento e Reflexão (40 min)

#### 📌 Demonstração dos Sistemas:
**Metodologia Ativa - Validation Showcase:**
- Cada grupo demonstra seu sistema de validação
- Testar com dados reais e inválidos
- Mostrar feedback visual e mensagens de erro
- Outros grupos testam e dão feedback

#### 📌 Debugging Session:
**Metodologia Ativa - Collaborative Debugging:**
- Identificar e corrigir bugs encontrados
- Usar DevTools para debugging
- Implementar melhorias sugeridas
- Documentar soluções encontradas

#### 📌 Discussão técnica:
**Metodologia Ativa - Code Review:**
- "Quais foram os maiores desafios na implementação?"
- "Como o JavaScript melhora a experiência do usuário?"
- "Que boas práticas aprendemos sobre validação?"
- "Como garantir que o código seja manutenível?"

#### 📌 Desafio para a próxima aula:
**Metodologia Ativa - DOM Preparation:**
- Pesquisar métodos de manipulação DOM
- Analisar eventos necessários no Sistema Lunysse:
  - Click em botões
  - Submit de formulários
  - Mudanças em inputs
  - Hover em elementos
- Preparar lista de interações para implementar

---

### 📌 Objetos de Aprendizagem

📝 **Materiais Didáticos Utilizados:**
- Guia de sintaxe ECMAScript ES6+ com exemplos
- Biblioteca de funções de validação reutilizáveis
- Templates de classes JavaScript para o projeto
- Checklist de boas práticas de código
- Exemplos de debugging com DevTools
- Documentação JSDoc para funções do sistema
- Casos de teste para validações implementadas

---

## 🎯 Avaliação

### **Avaliação Formativa (Durante a aula):**
✅ **Sintaxe ECMAScript correta** - Código seguindo padrões modernos  
✅ **Lógica de programação** - Estruturas de controle bem implementadas  
✅ **Sistema de validação funcional** - Validações eficazes e user-friendly  
✅ **Qualidade do código** - Organização, comentários e boas práticas  

### **Avaliação Somativa (Entregáveis):**
✅ **Modelo de dados implementado** - Estruturas JavaScript para o sistema  
✅ **Validações funcionais** - Sistema completo de validação de formulários  
✅ **Código documentado** - JSDoc e comentários adequados  

### **Critérios de Qualidade:**
- **Excelente (9-10):** Código ECMAScript perfeito, validações robustas, documentação completa
- **Bom (7-8):** Boa implementação com pequenos ajustes de sintaxe ou lógica
- **Satisfatório (6-7):** Funcionalidade adequada mas com oportunidades de melhoria
- **Insatisfatório (<6):** Problemas significativos de sintaxe ou lógica

---

## 🎓 Conclusão

### **Aprendizado Esperado:**

Ao final desta aula, os alunos serão capazes de:

🎯 **Conhecimento Técnico:**
- Escrever JavaScript seguindo padrões ECMAScript modernos
- Implementar estruturas de controle e lógica de negócio
- Criar sistemas de validação robustos e reutilizáveis
- Debuggar código JavaScript usando ferramentas apropriadas

🎯 **Aplicação Prática:**
- Adicionar primeira camada de interatividade ao Sistema Lunysse
- Implementar validações que melhoram a experiência do usuário
- Criar código JavaScript organizado e manutenível
- Integrar lógica de negócio específica do domínio médico

🎯 **Competências Profissionais:**
- Seguir padrões da indústria para desenvolvimento JavaScript
- Implementar validações que consideram segurança e usabilidade
- Escrever código limpo e bem documentado
- Trabalhar com debugging e resolução de problemas

### **Conexão com o Projeto:**
Esta aula adiciona a primeira camada de funcionalidade ao Sistema Lunysse. As validações e lógicas implementadas hoje serão expandidas na próxima aula com manipulação DOM e eventos, criando interações mais ricas e dinâmicas.

### **Preparação para Próxima Aula:**
O JavaScript básico implementado hoje será conectado à interface na Aula 10 através de eventos e manipulação DOM, permitindo que os usuários interajam dinamicamente com o Sistema Lunysse.