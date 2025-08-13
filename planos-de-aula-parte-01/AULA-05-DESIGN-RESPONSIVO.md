# PLANO DE TRABALHO DOCENTE 

## MODELO PEDAGÓGICO SENAC 

**Curso:** Desenvolvedor Full Stack  
**Carga Horária Total:** 108h  
**Carga Horária da UC:** 108h  

**Docente:** Jeremias O Nunes 

---

## PLANO DE AULA – Design Responsivo e Animações Web

📌 **Disciplina:** Construir aplicações front-end  
👨🏫 **Mentor(a):** Jeremias O Nunes  
📆 **Data:** Aula 5 - Parte 1  
⏰ **Duração:** 4 horas  

---

## 📖 Planejamento

### 📌 Conteúdo Formativo

- Conceitos fundamentais de design responsivo e mobile-first
- Aplicações práticas de breakpoints estratégicos
- Criação de animações CSS para transições e micro-interações
- Desenvolvimento de animações web otimizadas para performance
- Implementação de layouts adaptativos para o Sistema Lunysse
- Testes de usabilidade em múltiplos dispositivos
- Análise de tendências de animação em aplicações de saúde
- Otimização de performance para animações web

### 🎯 Objetivo Geral

Implementar conceitos de design responsivo e criar animações web otimizadas seguindo tendências atuais de mercado, finalizando o sistema visual completo do Sistema Lunysse que funcione perfeitamente em todos os dispositivos e ofereça uma experiência de usuário fluida e moderna.

### 💡 Habilidades e Competências

✅ **Organizar conteúdo visual e textual para web** - Adaptar layouts para diferentes contextos  
✅ **Manipular framework** - Implementar sistemas responsivos consistentes  
✅ **Utilizar ferramentas modernas** - Dominar técnicas de animação e responsividade  
✅ **Testar em múltiplos dispositivos** - Validar soluções em contextos reais  

### 📌 Materiais Necessários

📌 Computadores com Figma e navegadores múltiplos  
📌 Dispositivos móveis (smartphones e tablets) para testes  
📌 Todos os assets criados nas aulas anteriores  
📌 Ferramentas de teste responsivo (Responsively App, BrowserStack)  
📌 Biblioteca de animações para referência (Lottie, CSS Animation examples)  
📌 Templates de breakpoints e grid systems  
📌 Ferramentas de performance (Lighthouse, PageSpeed)  

---

## 🎓 Estratégias de Ensino e Aprendizagem

### Introdução e Contextualização (25 min)

**Metodologia Ativa - Experiência Imersiva:**
Demonstração prática com dispositivos reais:
- Mostrar o mesmo sistema de saúde em 4 dispositivos diferentes
- Identificar problemas comuns: texto ilegível, botões pequenos, layout quebrado
- Apresentar estatísticas: 60% dos acessos a sistemas de saúde são mobile

**Questões Problematizadoras:**
- "Como um paciente idoso interage com um sistema em smartphone?"
- "Por que animações podem melhorar ou prejudicar a experiência médica?"
- "Qual o impacto de um sistema não responsivo na adesão ao tratamento?"

**Contextualização do Lunysse:**
Apresentar o desafio final: criar um sistema que funcione perfeitamente para:
- **Pacientes:** Principalmente mobile, diferentes idades e habilidades técnicas
- **Psicólogos:** Desktop durante trabalho, mobile para verificações rápidas
- **Administradores:** Principalmente desktop para relatórios e gestão

---

### **Tópico 1: Fundamentos do Design Responsivo (55 min)**

#### 📌 Demonstração Prática:
**Metodologia Ativa - Construção ao Vivo:**
- Criar layout responsivo do dashboard Lunysse ao vivo:
  - **Desktop (1200px+):** 3 colunas, sidebar fixa, cards grandes
  - **Tablet (768px-1199px):** 2 colunas, sidebar colapsável
  - **Mobile (320px-767px):** 1 coluna, menu hambúrguer
- Demonstrar mobile-first approach:
  - Começar pelo mobile
  - Adicionar complexidade conforme tela cresce
- Mostrar breakpoints estratégicos baseados em conteúdo, não dispositivos

#### 📌 Atividade Prática 1:
🎯 **Objetivo:** Criar layouts responsivos completos para principais telas do Lunysse  
📝 **Tarefa:**
- **Metodologia Ativa - Responsive Design Sprint:**
- **Fase 1 - Mapeamento (15 min):**
  - Grupos analisam diferentes telas:
    - **Grupo 1:** Dashboard do Psicólogo
    - **Grupo 2:** Lista de Pacientes
    - **Grupo 3:** Formulário de Agendamento
    - **Grupo 4:** Chat com IA
  - Identificar elementos críticos para cada breakpoint
- **Fase 2 - Design Mobile-First (25 min):**
  - Começar pela versão mobile (320px)
  - Priorizar conteúdo essencial
  - Otimizar para toque e legibilidade
- **Fase 3 - Expansão para Tablet e Desktop (15 min):**
  - Adicionar elementos secundários
  - Aproveitar espaço extra inteligentemente
  - Manter hierarquia visual

**Parte do Projeto Construída:** Layouts responsivos completos das principais telas do Sistema Lunysse

---

### **Tópico 2: Animações e Micro-interações (60 min)**

#### 📌 Demonstração Prática:
**Metodologia Ativa - Animação Progressiva:**
- Demonstrar criação de animações CSS passo a passo:
  - **Nível 1:** Transições simples (hover, focus)
  - **Nível 2:** Animações de entrada (fade in, slide up)
  - **Nível 3:** Micro-interações (botão loading, toggle states)
  - **Nível 4:** Animações complexas (modal open/close)
- Mostrar princípios de animação para saúde:
  - **Suavidade:** Evitar movimentos bruscos (ansiedade)
  - **Propósito:** Cada animação deve ter função clara
  - **Performance:** 60fps, sem causar lentidão
  - **Acessibilidade:** Respeitar prefers-reduced-motion

#### 📌 Atividade Prática 2:
🎯 **Objetivo:** Criar biblioteca de animações para o Sistema Lunysse  
📝 **Tarefa:**
- **Metodologia Ativa - Animation Workshop:**
- **Duplas especializadas por tipo de animação:**
  - **Dupla 1-2:** Transições de navegação (sidebar, modais)
  - **Dupla 3-4:** Feedback de ações (botões, formulários)
  - **Dupla 5-6:** Loading states (carregamento, processamento)
  - **Dupla 7-8:** Animações de dados (gráficos, contadores)
- **Processo criativo:**
  1. Pesquisar referências em sistemas de saúde (10 min)
  2. Criar protótipo no Figma com Smart Animate (20 min)
  3. Especificar timing e easing functions (10 min)
  4. Testar em dispositivo real (10 min)
  5. Documentar para implementação (10 min)
- **Critérios de qualidade:**
  - Duração apropriada (200-500ms para micro-interações)
  - Easing natural (ease-out para entrada, ease-in para saída)
  - Propósito claro e funcional
  - Acessibilidade considerada

**Parte do Projeto Construída:** Biblioteca completa de animações especificadas e prototipadas

---

### **Tópico 3: Testes Multi-dispositivo (45 min)**

#### 📌 Demonstração Prática:
**Metodologia Ativa - Laboratório de Testes:**
- Demonstrar processo sistemático de testes:
  - **Teste 1:** Navegação com dedos (touch targets mínimos)
  - **Teste 2:** Legibilidade em diferentes iluminações
  - **Teste 3:** Performance em dispositivos mais lentos
  - **Teste 4:** Orientação portrait/landscape
- Usar ferramentas profissionais:
  - Chrome DevTools para simulação
  - Responsively App para múltiplas telas
  - Dispositivos reais para validação final

#### 📌 Atividade Prática 3:
🎯 **Objetivo:** Validar e otimizar layouts em dispositivos reais  
📝 **Tarefa:**
- **Metodologia Ativa - User Testing Lab:**
- **Rotação de estações de teste:**
  - **Estação 1:** iPhone (iOS Safari)
  - **Estação 2:** Android (Chrome Mobile)
  - **Estação 3:** iPad (Safari)
  - **Estação 4:** Desktop (múltiplos navegadores)
- **Protocolo de teste (por estação - 10 min):**
  1. Testar fluxo principal (login → dashboard → ação)
  2. Verificar legibilidade de textos
  3. Testar tamanho de botões e links
  4. Avaliar velocidade de carregamento
  5. Documentar problemas encontrados
- **Consolidação (5 min final):**
  - Compilar lista de problemas por dispositivo
  - Priorizar correções por impacto
  - Definir plano de otimização

**Parte do Projeto Construída:** Relatório completo de testes com plano de otimizações

---

### **Tópico 4: Otimização e Performance (40 min)**

#### 📌 Demonstração Prática:
**Metodologia Ativa - Performance Audit:**
- Usar Lighthouse para auditar performance:
  - Métricas importantes: LCP, FID, CLS
  - Impacto das animações na performance
  - Otimização de imagens para diferentes densidades
- Demonstrar técnicas de otimização:
  - Lazy loading para imagens
  - Prefers-reduced-motion para acessibilidade
  - Hardware acceleration para animações
  - Debouncing para interações

#### 📌 Atividade Prática 4:
🎯 **Objetivo:** Otimizar performance do Sistema Lunysse para todos os dispositivos  
📝 **Tarefa:**
- **Metodologia Ativa - Performance Challenge:**
- **Competição por grupos:**
  - Meta: Alcançar score Lighthouse > 90 em todas as categorias
  - Cada grupo otimiza uma tela diferente
  - **Grupo 1:** Dashboard (muitos dados e gráficos)
  - **Grupo 2:** Lista de pacientes (muitas imagens)
  - **Grupo 3:** Formulários (muitas validações)
  - **Grupo 4:** Chat IA (animações e interações)
- **Técnicas permitidas:**
  - Otimização de imagens
  - Lazy loading
  - Animações eficientes
  - Código CSS otimizado
- **Avaliação:**
  - Score Lighthouse (40%)
  - Experiência do usuário (30%)
  - Criatividade das soluções (20%)
  - Documentação das otimizações (10%)

**Parte do Projeto Construída:** Sistema Lunysse otimizado para máxima performance

---

### Encerramento e Reflexão (35 min)

#### 📌 Apresentação Final dos Projetos:
**Metodologia Ativa - Demo Day:**
- Cada grupo apresenta sua tela otimizada em 5 minutos:
  - Demonstração em dispositivo real
  - Métricas de performance alcançadas
  - Principais desafios e soluções
  - Lições aprendidas
- Audiência avalia usando critérios:
  - **Usabilidade:** Fácil de usar em todos os dispositivos?
  - **Performance:** Carrega rapidamente?
  - **Acessibilidade:** Funciona para diferentes usuários?
  - **Estética:** Mantém qualidade visual?

#### 📌 Discussão em grupo:
**Metodologia Ativa - Retrospectiva da Parte 1:**
- "Qual foi a evolução do projeto desde a primeira aula?"
- "Quais conceitos foram mais desafiadores de aplicar?"
- "Como o Sistema Lunysse se compara a outros sistemas de saúde?"
- "Que aspectos são mais importantes para o sucesso do projeto?"

#### 📌 Preparação para Parte 2:
**Metodologia Ativa - Bridge Building:**
- Apresentar preview da Parte 2: transformar designs em código
- Cada grupo escolhe uma tela para ser a primeira a ser implementada
- Criar checklist de especificações técnicas necessárias
- Definir prioridades de desenvolvimento

---

### 📌 Objetos de Aprendizagem

📝 **Materiais Didáticos Utilizados:**
- Biblioteca completa de layouts responsivos
- Especificações de animações com timing e easing
- Relatórios de testes multi-dispositivo
- Métricas de performance e otimizações
- Guia de boas práticas para design responsivo
- Checklist de acessibilidade para animações
- Templates de breakpoints e media queries

---

## 🎯 Avaliação

### **Avaliação Formativa (Durante a aula):**
✅ **Qualidade dos layouts responsivos** - Adaptação eficiente para diferentes telas  
✅ **Adequação das animações** - Propósito claro e performance otimizada  
✅ **Rigor nos testes** - Processo sistemático e documentação completa  
✅ **Eficácia das otimizações** - Melhoria mensurável de performance  

### **Avaliação Somativa (Entregáveis):**
✅ **Sistema visual completo** - Todos os componentes responsivos e animados  
✅ **Documentação técnica** - Especificações para implementação  
✅ **Relatório de testes** - Validação em múltiplos dispositivos  

### **Critérios de Qualidade:**
- **Excelente (9-10):** Sistema completamente responsivo, animações fluidas, performance otimizada
- **Bom (7-8):** Boa responsividade com pequenos ajustes, animações adequadas
- **Satisfatório (6-7):** Funciona na maioria dos dispositivos, animações básicas
- **Insatisfatório (<6):** Problemas significativos de responsividade ou performance

---

## 🎓 Conclusão

### **Aprendizado Esperado:**

Ao final desta aula, os alunos serão capazes de:

🎯 **Conhecimento Técnico:**
- Implementar design responsivo seguindo abordagem mobile-first
- Criar animações web otimizadas para performance e acessibilidade
- Testar sistematicamente em múltiplos dispositivos e navegadores
- Otimizar performance considerando diferentes contextos de uso

🎯 **Aplicação Prática:**
- Entregar Sistema Lunysse completamente responsivo e animado
- Documentar especificações técnicas para implementação
- Criar workflows de teste e otimização replicáveis
- Produzir sistema visual pronto para desenvolvimento

🎯 **Competências Profissionais:**
- Trabalhar com metodologias de design responsivo da indústria
- Considerar performance e acessibilidade desde o início
- Testar e validar soluções com rigor profissional
- Comunicar decisões técnicas com base em dados

### **Conexão com o Projeto:**
Esta aula finaliza a Parte 1 do curso, entregando o Sistema Lunysse com design visual completo, responsivo e otimizado. Todos os assets, layouts, animações e especificações estão prontos para a implementação técnica que começará na Parte 2.

### **Transição para Parte 2:**
O sistema visual criado nas 5 aulas da Parte 1 será transformado em código HTML, CSS e JavaScript na Parte 2. Os alunos começarão com estruturação semântica, aplicarão os estilos criados e implementarão as animações especificadas, dando vida ao Sistema Lunysse.

### **Impacto no Aprendizado:**
Os alunos completam a Parte 1 com:
- **Portfolio visual completo** do Sistema Lunysse
- **Competências profissionais** em design para web
- **Metodologias ativas** internalizadas
- **Visão sistêmica** de projetos digitais
- **Preparação sólida** para desenvolvimento técnico

---

## 🎉 Celebração da Conclusão da Parte 1

### **Marcos Alcançados:**
✅ **Design System completo** criado colaborativamente  
✅ **Assets profissionais** otimizados e organizados  
✅ **Layouts responsivos** validados em dispositivos reais  
✅ **Animações especificadas** com foco em UX  
✅ **Performance otimizada** seguindo padrões da indústria  

### **Próximos Passos:**
🚀 **Parte 2** - Transformar todo o trabalho visual em código funcional  
🚀 **Implementação técnica** com HTML semântico, CSS moderno e JavaScript  
🚀 **Sistema real** que poderá ser usado por psicólogos e pacientes  

**Parabéns pela conclusão da Parte 1! O Sistema Lunysse está visualmente pronto para ganhar vida através do código! 🎊**