# PLANO DE TRABALHO DOCENTE

## MODELO PEDAGÓGICO SENAC

**Curso:** Desenvolvedor Full Stack  
**Carga Horária Total:** 108h  
**Carga Horária da UC:** 108h  
**Docente:** Jeremias O Nunes

---

# PLANO DE AULA – Programação Orientada a Objetos

📌 **Disciplina:** Desenvolvimento Front-end Avançado  
👨🏫 **Mentor(a):** Jeremias O Nunes  
📆 **Data:** Aula 17 - Parte 3  
⏰ **Duração:** 4 horas

---

## 📖 Planejamento

### 📌 Conteúdo Formativo

• Workshop intensivo de classes ES6+ e princípios de encapsulamento  
• Criação de modelos de dados robustos: User, Patient, Appointment, Session  
• Implementação de herança avançada: PsychologistUser extends User  
• Laboratório de polimorfismo e métodos especializados para contexto médico  
• Desenvolvimento de sistema de sessões com classes e gerenciamento de estado  
• Criação de arquitetura orientada a objetos completa para o Sistema Lunysse  
• Implementação de padrões de design (Factory, Observer, Strategy)

### 🎯 Objetivo Geral

Implementar programação orientada a objetos em JavaScript ES6+ para criar uma arquitetura robusta, escalável e reutilizável no Sistema Lunysse, aplicando princípios fundamentais de OOP como encapsulamento, herança, polimorfismo e abstração em um contexto real de aplicação médica.

### 💡 Habilidades e Competências

✅ **Classes e Objetos:** Dominar criação e manipulação de classes ES6+ com propriedades e métodos  
✅ **Herança:** Implementar hierarquias de classes com extends e super  
✅ **Encapsulamento:** Aplicar modificadores de acesso e getters/setters  
✅ **Polimorfismo:** Criar métodos especializados e sobrescrita de comportamentos  
✅ **Padrões de Design:** Implementar Factory, Observer e Strategy patterns  
✅ **Arquitetura OOP:** Estruturar aplicações complexas usando princípios orientados a objetos

### 📌 Materiais Necessários

📌 Sistema Lunysse com estrutura base implementada  
📌 Editor de código com suporte completo a ES6+ (VS Code)  
📌 Node.js para execução de scripts de teste  
📌 Diagramas UML para modelagem de classes  
📌 Ferramentas de debugging para análise de objetos  
📌 Documentação de padrões de design  
📌 Templates de classes para contexto médico

---

## 🎓 Estratégias de Ensino e Aprendizagem

### Introdução e Contextualização (35 min)

**Reflexão inicial:** "Por que a programação orientada a objetos é fundamental para sistemas complexos como aplicações de saúde?"

Discussão aprofundada sobre como a OOP facilita a manutenção, escalabilidade e reutilização de código em sistemas críticos. Análise de casos reais onde a falta de estruturação orientada a objetos causou problemas em aplicações médicas.

**Contextualização profissional:** Apresentação de arquiteturas OOP utilizadas por empresas líderes em healthtech (Epic Systems, Cerner, Teladoc) e como a estruturação adequada de classes facilita a integração com sistemas hospitalares e regulamentações de saúde.

**Demonstração de problema:** Análise do código atual do Sistema Lunysse identificando oportunidades de refatoração para OOP e os benefícios que serão obtidos.

---

### Tópico 1: Classes ES6+ e Encapsulamento Avançado (75 min)

#### 📌 Demonstração Prática:
O mentor demonstrará implementação completa de classes ES6+:
- **Class syntax:** Declaração, constructor, métodos de instância e estáticos
- **Private fields:** Uso de # para propriedades privadas
- **Getters e Setters:** Controle de acesso a propriedades
- **Static methods:** Métodos utilitários da classe
- **Validation:** Validação de dados no constructor e setters
- **Error handling:** Tratamento de erros específicos para cada classe

```javascript
// Exemplo demonstrado pelo mentor
class User {
  #id;
  #email;
  #password;
  #createdAt;

  constructor(userData) {
    this.#validateUserData(userData);
    this.#id = userData.id || Date.now();
    this.#email = userData.email;
    this.#password = this.#hashPassword(userData.password);
    this.#createdAt = new Date();
  }

  get email() { return this.#email; }
  get id() { return this.#id; }
  get createdAt() { return this.#createdAt; }

  #validateUserData(data) {
    if (!data.email || !data.password) {
      throw new Error('Email and password are required');
    }
  }

  #hashPassword(password) {
    // Implementação de hash
    return btoa(password); // Simplificado para demonstração
  }

  static validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
```

#### 📌 Atividade Prática 1:
🎯 **Objetivo:** Criar classes fundamentais para o Sistema Lunysse com encapsulamento completo  
📝 **Tarefa:**
- Implementar classe User com propriedades privadas e validação
- Criar classe Patient com informações médicas encapsuladas
- Desenvolver classe Appointment com regras de negócio específicas
- Implementar classe Session com controle de estado e duração
- Adicionar validações específicas para cada classe (CPF, CRM, datas)
- Criar métodos utilitários estáticos para cada classe
- Implementar sistema de logging para auditoria de ações
- Testar todas as classes com dados reais do sistema
- Documentar API de cada classe com JSDoc

---

### Tópico 2: Herança e Hierarquia de Classes (65 min)

#### 📌 Demonstração Prática:
Implementação de herança complexa para especialização de usuários:
- **Extends keyword:** Criação de subclasses especializadas
- **Super calls:** Chamada de constructors e métodos da classe pai
- **Method overriding:** Sobrescrita de métodos para comportamentos específicos
- **Abstract methods:** Simulação de métodos abstratos em JavaScript
- **Mixin patterns:** Composição de funcionalidades

```javascript
// Exemplo demonstrado pelo mentor
class PsychologistUser extends User {
  #crp;
  #specialty;
  #patients;
  #schedule;

  constructor(userData) {
    super(userData); // Chama constructor da classe pai
    this.#validatePsychologistData(userData);
    this.#crp = userData.crp;
    this.#specialty = userData.specialty;
    this.#patients = new Map();
    this.#schedule = new Schedule();
  }

  get crp() { return this.#crp; }
  get specialty() { return this.#specialty; }
  get patientCount() { return this.#patients.size; }

  addPatient(patient) {
    if (!(patient instanceof Patient)) {
      throw new Error('Invalid patient object');
    }
    this.#patients.set(patient.id, patient);
    return this;
  }

  // Sobrescrita de método da classe pai
  getProfile() {
    const baseProfile = super.getProfile();
    return {
      ...baseProfile,
      crp: this.#crp,
      specialty: this.#specialty,
      patientCount: this.patientCount
    };
  }

  #validatePsychologistData(data) {
    if (!data.crp || !data.specialty) {
      throw new Error('CRP and specialty are required for psychologists');
    }
  }
}
```

#### 📌 Atividade Prática 2:
🎯 **Objetivo:** Implementar hierarquia completa de classes especializadas  
📝 **Tarefa:**
- Criar classe PsychologistUser estendendo User
- Implementar classe PatientUser estendendo User
- Desenvolver classe AdminUser com permissões especiais
- Criar especializações de Appointment (ConsultationAppointment, TherapyAppointment)
- Implementar diferentes tipos de Session (IndividualSession, GroupSession)
- Sobrescrever métodos para comportamentos específicos de cada tipo
- Criar sistema de permissões baseado no tipo de usuário
- Implementar factory methods para criação de objetos especializados
- Testar polimorfismo com arrays de objetos de diferentes tipos

---

### Pausa (15 min)

---

### Tópico 3: Polimorfismo e Métodos Especializados (70 min)

#### 📌 Demonstração Prática:
Implementação de polimorfismo para diferentes contextos médicos:
- **Method overriding:** Métodos especializados para cada tipo de usuário
- **Interface simulation:** Contratos de métodos usando documentação
- **Dynamic dispatch:** Chamada de métodos baseada no tipo do objeto
- **Strategy pattern:** Diferentes algoritmos para diferentes contextos
- **Template method:** Estrutura comum com implementações específicas

```javascript
// Exemplo demonstrado pelo mentor
class AppointmentProcessor {
  processAppointment(appointment) {
    // Template method - estrutura comum
    this.validateAppointment(appointment);
    this.prepareSession(appointment);
    this.executeSession(appointment);
    this.finalizeSession(appointment);
  }

  // Métodos que serão sobrescritos pelas subclasses
  validateAppointment(appointment) {
    throw new Error('validateAppointment must be implemented');
  }

  prepareSession(appointment) {
    throw new Error('prepareSession must be implemented');
  }
}

class IndividualTherapyProcessor extends AppointmentProcessor {
  validateAppointment(appointment) {
    if (appointment.participants.length !== 1) {
      throw new Error('Individual therapy requires exactly one participant');
    }
  }

  prepareSession(appointment) {
    // Preparação específica para terapia individual
    console.log('Preparing individual therapy session');
  }
}

class GroupTherapyProcessor extends AppointmentProcessor {
  validateAppointment(appointment) {
    if (appointment.participants.length < 2) {
      throw new Error('Group therapy requires at least 2 participants');
    }
  }

  prepareSession(appointment) {
    // Preparação específica para terapia em grupo
    console.log('Preparing group therapy session');
  }
}
```

#### 📌 Atividade Prática 3:
🎯 **Objetivo:** Implementar polimorfismo completo no Sistema Lunysse  
📝 **Tarefa:**
- Criar interface comum para diferentes tipos de processamento de sessões
- Implementar classes especializadas para cada tipo de terapia
- Desenvolver sistema de notificações polimórfico (email, SMS, push)
- Criar diferentes estratégias de cálculo de honorários
- Implementar sistema de relatórios com diferentes formatos
- Desenvolver factory para criação de objetos baseado em configuração
- Criar sistema de plugins usando polimorfismo
- Testar comportamento polimórfico com diferentes tipos de objetos
- Implementar observer pattern para eventos do sistema

---

### Tópico 4: Arquitetura OOP e Padrões de Design (55 min)

#### 📌 Demonstração Prática:
Implementação de arquitetura completa com padrões de design:
- **Factory Pattern:** Criação de objetos complexos
- **Observer Pattern:** Sistema de eventos e notificações
- **Strategy Pattern:** Algoritmos intercambiáveis
- **Singleton Pattern:** Gerenciamento de estado global
- **Command Pattern:** Encapsulamento de operações

```javascript
// Exemplo demonstrado pelo mentor
class UserFactory {
  static createUser(userData) {
    switch (userData.type) {
      case 'psychologist':
        return new PsychologistUser(userData);
      case 'patient':
        return new PatientUser(userData);
      case 'admin':
        return new AdminUser(userData);
      default:
        throw new Error(`Unknown user type: ${userData.type}`);
    }
  }
}

class EventManager {
  #observers = new Map();

  subscribe(event, callback) {
    if (!this.#observers.has(event)) {
      this.#observers.set(event, []);
    }
    this.#observers.get(event).push(callback);
  }

  notify(event, data) {
    if (this.#observers.has(event)) {
      this.#observers.get(event).forEach(callback => callback(data));
    }
  }
}

// Singleton para gerenciamento global
class SystemManager {
  static #instance;
  #eventManager;
  #userFactory;

  constructor() {
    if (SystemManager.#instance) {
      return SystemManager.#instance;
    }
    this.#eventManager = new EventManager();
    this.#userFactory = UserFactory;
    SystemManager.#instance = this;
  }

  static getInstance() {
    if (!SystemManager.#instance) {
      SystemManager.#instance = new SystemManager();
    }
    return SystemManager.#instance;
  }
}
```

#### 📌 Atividade Prática 4:
🎯 **Objetivo:** Criar arquitetura OOP completa para o Sistema Lunysse  
📝 **Tarefa:**
- Implementar UserFactory para criação de diferentes tipos de usuários
- Criar AppointmentFactory para diferentes tipos de consultas
- Desenvolver EventManager usando Observer pattern
- Implementar SystemManager como Singleton para estado global
- Criar Command classes para operações do sistema (CreateAppointment, CancelAppointment)
- Desenvolver Strategy classes para diferentes algoritmos de agendamento
- Implementar Repository pattern para acesso a dados
- Criar Service classes para lógica de negócio
- Integrar todos os padrões em uma arquitetura coesa
- Documentar arquitetura com diagramas UML

---

### Encerramento e Reflexão (35 min)

#### 📌 Discussão em grupo:
**Tema:** "Como a programação orientada a objetos melhora a manutenibilidade e escalabilidade de sistemas de saúde?"

Reflexão aprofundada sobre:
- **Benefícios da OOP:** Reutilização, manutenibilidade, escalabilidade
- **Desafios de implementação:** Complexidade inicial vs benefícios a longo prazo
- **Padrões de design:** Quando e como aplicar diferentes padrões
- **Arquitetura de software:** Importância da estruturação adequada
- **Evolução do sistema:** Como OOP facilita adição de novas funcionalidades
- **Trabalho em equipe:** Como OOP facilita desenvolvimento colaborativo

#### 📌 Desafio para a próxima aula:
Refatorar uma funcionalidade existente do Sistema Lunysse aplicando OOP:
- Escolher uma funcionalidade complexa (ex: sistema de agendamento)
- Identificar oportunidades de aplicação de classes e herança
- Implementar refatoração mantendo funcionalidade original
- Documentar melhorias obtidas com a refatoração
- Preparar apresentação das mudanças para a turma

---

## 📌 Objetos de Aprendizagem

📝 **Biblioteca de Classes:** Conjunto completo de classes para o Sistema Lunysse  
📝 **Diagramas UML:** Documentação visual da arquitetura implementada  
📝 **Guia de Padrões:** Manual de implementação de design patterns  
📝 **API Documentation:** Documentação completa das classes e métodos  
📝 **Arquitetura Guide:** Guia de estruturação OOP para aplicações médicas  
📝 **Code Examples:** Exemplos práticos de implementação de cada conceito  
📝 **Testing Suite:** Conjunto de testes para validação das classes

---

## 🎯 Avaliação

### Critérios de Avaliação:

✅ **Implementação de Classes (25%):** Qualidade da estruturação e encapsulamento  
✅ **Herança e Polimorfismo (25%):** Uso adequado de herança e métodos especializados  
✅ **Padrões de Design (25%):** Implementação correta de design patterns  
✅ **Arquitetura Geral (25%):** Coesão e organização da arquitetura OOP

### Instrumentos de Avaliação:

- **Code Review:** Análise detalhada do código implementado
- **Apresentação técnica:** Explicação da arquitetura desenvolvida
- **Testes práticos:** Validação do funcionamento das classes
- **Documentação:** Qualidade da documentação técnica produzida
- **Peer evaluation:** Avaliação cruzada entre alunos

---

## 🎓 Conclusão

Ao final desta aula, os alunos serão capazes de:

- **Dominar classes ES6+** com encapsulamento, herança e polimorfismo
- **Implementar hierarquias complexas** de classes especializadas
- **Aplicar padrões de design** adequados para diferentes situações
- **Estruturar arquiteturas OOP** robustas e escaláveis
- **Refatorar código procedural** para orientado a objetos
- **Documentar e testar** sistemas orientados a objetos

Esta competência é fundamental para desenvolvedores que trabalham com sistemas complexos, estabelecendo uma base sólida para desenvolvimento de aplicações enterprise e facilitando manutenção, escalabilidade e trabalho colaborativo em equipes de desenvolvimento.

---

**Indicador de Competência Trabalhado:**  
✔️ **Indicador 6** - Utiliza linguagem de programação com foco em desenvolvimento orientado a objetos para a construção de classes, sessões e herança

**Metodologia Ativa Aplicada:**  
- **Problem-Based Learning:** Resolução de problemas reais usando OOP
- **Learning by Refactoring:** Melhoria incremental do código existente  
- **Collaborative Design:** Desenvolvimento em equipe de arquiteturas complexas  
- **Peer Programming:** Programação em pares para implementação de padrões