# PLANO DE TRABALHO DOCENTE 

## MODELO PEDAGÓGICO SENAC 

**Curso:** Desenvolvedor Full Stack  
**Carga Horária Total:** 108h  
**Carga Horária da UC:** 108h  

**Docente:** Jeremias O Nunes 

---

## PLANO DE AULA – Componentes Visuais: Ícones, Menus e Cards

📌 **Disciplina:** Construir aplicações front-end  
👨🏫 **Mentor(a):** Jeremias O Nunes  
📆 **Data:** Aula 3 - Parte 1  
⏰ **Duração:** 4 horas  

---

## 📖 Planejamento

### 📌 Conteúdo Formativo

- Design de ícones SVG para sistemas de saúde digital
- Criação de sistemas de navegação: menus e barras de navegação
- Design de cards com glassmorphism para dados médicos
- Prototipagem de formulários de agendamento e cadastro
- Criação de tabelas para visualização de sessões e relatórios
- Estabelecimento de design system com componentes reutilizáveis

### 🎯 Objetivo Geral

Projetar e especificar componentes visuais reutilizáveis seguindo padrões modernos de interface para sistemas de saúde, criando uma biblioteca de componentes do Sistema Lunysse que seja consistente, acessível e alinhada com as melhores práticas de UX/UI.

### 💡 Habilidades e Competências

✅ **Organizar conteúdo visual e textual para web** - Estruturar componentes de forma lógica  
✅ **Manipular framework** - Criar sistema de componentes reutilizáveis  
✅ **Utilizar editor de código** - Preparar especificações técnicas para implementação  
✅ **Colaboração em equipe** - Trabalhar em grupos para criar soluções integradas  

### 📌 Materiais Necessários

📌 Computadores com Figma ou Adobe XD  
📌 Biblioteca de ícones médicos (Feather, Lucide, Medical Icons)  
📌 Framework visual criado na Aula 2 (cores, tipografia, grid)  
📌 Exemplos de componentes de sistemas de saúde  
📌 Templates de wireframes para diferentes componentes  
📌 Ferramentas de prototipagem interativa  
📌 Checklist de acessibilidade para componentes  

---

## 🎓 Estratégias de Ensino e Aprendizagem

### Introdução e Contextualização (25 min)

**Metodologia Ativa - Análise Comparativa:**
Apresentação de componentes de 3 sistemas diferentes:
- **Sistema A:** Componentes inconsistentes, sem padrão
- **Sistema B:** Design system bem estruturado (ex: Material Design)
- **Sistema C:** Componentes específicos para saúde (ex: Epic MyChart)

**Questões Problematizadoras:**
- "Por que um botão 'Agendar Consulta' deve ser diferente de um botão 'Cancelar'?"
- "Como um ícone pode comunicar função sem texto?"
- "Qual a diferença entre um card de paciente e um card de sessão?"

**Contextualização do Lunysse:**
Apresentar o desafio: criar componentes que funcionem tanto para psicólogos (profissionais) quanto para pacientes (leigos), mantendo consistência visual.

---

### **Tópico 1: Sistema de Ícones SVG (55 min)**

#### 📌 Demonstração Prática:
**Metodologia Ativa - Design Thinking:**
- Mapear todas as funcionalidades do Sistema Lunysse que precisam de ícones:
  - **Navegação:** Dashboard, Pacientes, Agendamento, Relatórios, Chat IA
  - **Ações:** Adicionar, Editar, Excluir, Visualizar, Filtrar
  - **Status:** Agendado, Concluído, Cancelado, Em andamento
  - **Comunicação:** Notificações, Mensagens, Alertas
- Demonstrar criação de ícone SVG do zero no Figma
- Mostrar otimização e exportação para web

#### 📌 Atividade Prática 1:
🎯 **Objetivo:** Criar biblioteca completa de ícones para o Sistema Lunysse  
📝 **Tarefa:**
- **Metodologia Ativa - Workshop Colaborativo:**
- **Fase 1 - Mapeamento (15 min):**
  - Grupos de 3-4 alunos mapeiam ícones necessários por categoria
  - **Grupo 1:** Navegação e menu principal
  - **Grupo 2:** Ações de usuário (CRUD)
  - **Grupo 3:** Status e estados do sistema
  - **Grupo 4:** Comunicação e notificações
- **Fase 2 - Criação (25 min):**
  - Cada grupo cria seus ícones seguindo guidelines:
    - Tamanho: 24x24px base
    - Estilo: outline, 2px stroke
    - Cores: usar paleta Lunysse
- **Fase 3 - Validação (15 min):**
  - Testar ícones com usuários de outros grupos
  - Verificar se comunicam função sem texto
  - Ajustar baseado no feedback

**Parte do Projeto Construída:** Biblioteca completa de ícones SVG otimizados para o Sistema Lunysse

---

### **Tópico 2: Navegação e Menus (50 min)**

#### 📌 Demonstração Prática:
**Metodologia Ativa - Prototipagem ao Vivo:**
- Criar sidebar do Sistema Lunysse ao vivo no Figma:
  - Logo no topo
  - Menu principal com ícones criados
  - Seção de usuário logado
  - Estados: ativo, hover, disabled
- Demonstrar versão mobile (menu hambúrguer)
- Mostrar navbar para páginas públicas (Home, Sobre, Login)

#### 📌 Atividade Prática 2:
🎯 **Objetivo:** Criar sistema de navegação completo e responsivo  
📝 **Tarefa:**
- **Metodologia Ativa - Responsive Design Sprint:**
- **Duplas trabalham em diferentes contextos:**
  - **Dupla 1-2:** Sidebar para psicólogos (dashboard, pacientes, relatórios)
  - **Dupla 3-4:** Sidebar para pacientes (dashboard, agendamento, histórico)
  - **Dupla 5-6:** Navbar pública (home, sobre, login, registro)
  - **Dupla 7-8:** Menu mobile responsivo (hambúrguer)
- **Requisitos técnicos:**
  - Usar ícones criados na atividade anterior
  - Aplicar estados visuais (normal, hover, active)
  - Criar versões para 3 breakpoints
  - Considerar acessibilidade (contraste, tamanho de toque)

**Parte do Projeto Construída:** Sistema de navegação completo e responsivo implementado

---

### **Tópico 3: Cards com Glassmorphism (45 min)**

#### 📌 Demonstração Prática:
**Metodologia Ativa - Experimentação Visual:**
- Demonstrar criação de card com efeito glassmorphism:
  - Background: rgba(255, 255, 255, 0.1)
  - Backdrop-filter: blur(10px)
  - Border: 1px solid rgba(255, 255, 255, 0.2)
  - Box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1)
- Mostrar diferentes tipos de cards necessários:
  - Card de paciente (foto, nome, próxima sessão)
  - Card de sessão (data, status, duração)
  - Card de KPI (número, descrição, tendência)

#### 📌 Atividade Prática 3:
🎯 **Objetivo:** Criar biblioteca de cards para diferentes contextos  
📝 **Tarefa:**
- **Metodologia Ativa - Component Library Building:**
- **Grupos especializados por tipo de card:**
  - **Grupo 1:** Cards de pacientes (lista, detalhes, resumo)
  - **Grupo 2:** Cards de sessões (agendadas, concluídas, canceladas)
  - **Grupo 3:** Cards de KPIs e métricas (dashboard)
  - **Grupo 4:** Cards de notificações e alertas
- **Especificações técnicas:**
  - Aplicar glassmorphism consistente
  - Usar tipografia e cores do framework
  - Incluir estados (normal, hover, selected)
  - Considerar diferentes tamanhos de conteúdo
- **Validação:**
  - Testar legibilidade em diferentes backgrounds
  - Verificar acessibilidade de contraste
  - Simular com conteúdo real

**Parte do Projeto Construída:** Biblioteca de cards com glassmorphism para todos os contextos do sistema

---

### **Tópico 4: Formulários e Tabelas (40 min)**

#### 📌 Demonstração Prática:
**Metodologia Ativa - UX Research Aplicado:**
- Analisar formulários problemáticos vs bem projetados
- Demonstrar criação de formulário de agendamento:
  - Campos obrigatórios vs opcionais
  - Validação visual em tempo real
  - Estados de erro e sucesso
  - Acessibilidade (labels, placeholders, ARIA)
- Mostrar tabela de sessões com:
  - Cabeçalhos claros
  - Ordenação visual
  - Ações por linha
  - Responsividade (stack em mobile)

#### 📌 Atividade Prática 4:
🎯 **Objetivo:** Criar formulários e tabelas otimizados para UX  
📝 **Tarefa:**
- **Metodologia Ativa - User Journey Mapping:**
- **Cenários específicos por grupo:**
  - **Grupo 1:** Formulário de cadastro de paciente
  - **Grupo 2:** Formulário de agendamento de consulta
  - **Grupo 3:** Tabela de histórico de sessões
  - **Grupo 4:** Formulário de login e recuperação de senha
- **Processo de design:**
  1. Mapear jornada do usuário (5 min)
  2. Identificar pontos de fricção (5 min)
  3. Projetar solução otimizada (20 min)
  4. Testar com outros grupos (10 min)
- **Critérios de qualidade:**
  - Mínimo de campos necessários
  - Feedback visual claro
  - Acessibilidade completa
  - Responsividade mobile

**Parte do Projeto Construída:** Formulários e tabelas otimizados para principais fluxos do sistema

---

### Encerramento e Reflexão (25 min)

#### 📌 Apresentação dos Componentes:
**Metodologia Ativa - Component Showcase:**
- Cada grupo apresenta seus componentes em 3 minutos
- Demonstrar funcionamento e justificar decisões de design
- Outros grupos avaliam usando critérios:
  - **Consistência:** Segue o framework visual?
  - **Usabilidade:** É intuitivo de usar?
  - **Acessibilidade:** Atende padrões WCAG?
  - **Escalabilidade:** Funciona em diferentes contextos?

#### 📌 Discussão em grupo:
**Metodologia Ativa - Design Critique:**
- "Quais componentes são mais críticos para a experiência do usuário?"
- "Como garantir consistência quando diferentes pessoas implementam os componentes?"
- "Que ajustes são necessários para melhorar a acessibilidade?"

#### 📌 Desafio para a próxima aula:
**Metodologia Ativa - Benchmark Research:**
- Pesquisar técnicas avançadas de tratamento de imagem em sistemas web
- Encontrar 3 exemplos de otimização de imagens em aplicações de saúde
- Preparar lista de imagens que o Sistema Lunysse precisará:
  - Fotos de perfil de usuários
  - Ícones de status e notificações
  - Imagens para estados vazios (empty states)
  - Ilustrações para onboarding

---

### 📌 Objetos de Aprendizagem

📝 **Materiais Didáticos Utilizados:**
- Biblioteca de ícones médicos para referência
- Templates de componentes em diferentes estados
- Checklist de acessibilidade para componentes web
- Exemplos de design systems consolidados (Material, Ant Design)
- Wireframes interativos para teste de usabilidade
- Guia de glassmorphism com especificações CSS
- Framework visual completo das aulas anteriores

---

## 🎯 Avaliação

### **Avaliação Formativa (Durante a aula):**
✅ **Qualidade dos ícones criados** - Clareza comunicativa e otimização técnica  
✅ **Consistência do sistema de navegação** - Coerência visual e funcional  
✅ **Aplicação correta do glassmorphism** - Técnica e estética adequadas  
✅ **Usabilidade dos formulários** - Facilidade de uso e acessibilidade  

### **Avaliação Somativa (Entregáveis):**
✅ **Component Library completa** - Todos os componentes especificados e documentados  
✅ **Protótipos interativos** - Demonstração de funcionamento dos componentes  
✅ **Documentação técnica** - Especificações para implementação  

### **Critérios de Qualidade:**
- **Excelente (9-10):** Componentes consistentes, acessíveis e tecnicamente viáveis
- **Bom (7-8):** Boa qualidade com pequenos ajustes de consistência necessários
- **Satisfatório (6-7):** Componentes funcionais mas com oportunidades de melhoria
- **Insatisfatório (<6):** Componentes inconsistentes ou com problemas de usabilidade

---

## 🎓 Conclusão

### **Aprendizado Esperado:**

Ao final desta aula, os alunos serão capazes de:

🎯 **Conhecimento Técnico:**
- Criar ícones SVG otimizados e semanticamente corretos
- Projetar sistemas de navegação responsivos e acessíveis
- Aplicar técnicas modernas como glassmorphism de forma apropriada
- Desenvolver formulários e tabelas com foco em usabilidade

🎯 **Aplicação Prática:**
- Construir component library completa para o Sistema Lunysse
- Especificar componentes com detalhes técnicos para implementação
- Criar protótipos interativos que demonstrem funcionamento
- Documentar decisões de design com justificativas técnicas

🎯 **Competências Profissionais:**
- Trabalhar com metodologias de design system
- Colaborar efetivamente em equipes de design
- Considerar acessibilidade desde o início do processo
- Criar soluções escaláveis e reutilizáveis

### **Conexão com o Projeto:**
Esta aula cria a biblioteca de componentes que será a base de toda a interface do Sistema Lunysse. Os componentes desenvolvidos hoje serão refinados e implementados nas próximas aulas, garantindo consistência visual em todo o projeto.

### **Preparação para Próxima Aula:**
Os componentes criados hoje serão otimizados na Aula 4 através de técnicas avançadas de tratamento de imagem, preparando todos os assets visuais para implementação técnica nas aulas subsequentes.