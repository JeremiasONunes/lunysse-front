# PLANO DE TRABALHO DOCENTE

## MODELO PEDAGÓGICO SENAC

**Curso:** Desenvolvedor Full Stack  
**Carga Horária Total:** 108h  
**Carga Horária da UC:** 108h  
**Docente:** Jeremias O Nunes

---

# PLANO DE AULA – Colaboração e Versionamento (Git)

📌 **Disciplina:** Desenvolvimento Full Stack  
👨🏫 **Mentor(a):** Jeremias O Nunes  
📆 **Data:** Aula 22 - Parte 3  
⏰ **Duração:** 4 horas

---

## 📖 Planejamento

### 📌 Conteúdo Formativo

• Workshop intensivo de Git workflows e branching strategies profissionais para projetos médicos  
• Implementação de conventional commits e semantic versioning com foco em rastreabilidade  
• Laboratório avançado de code review e pull requests com critérios de qualidade médica  
• Criação de documentação colaborativa e padrões de desenvolvimento para equipes de saúde  
• Desenvolvimento de pipeline básico de CI/CD com validação automática de compliance  
• Organização final do repositório do Sistema Lunysse seguindo padrões enterprise  
• Implementação de hooks Git para automação de qualidade e proteção de dados sensíveis  
• Desenvolvimento de estratégias de release management para sistemas críticos

### 🎯 Objetivo Geral

Implementar fluxos de trabalho colaborativo profissional utilizando Git e metodologias de desenvolvimento em equipe, estabelecendo processos robustos de versionamento, code review e integração contínua que garantam qualidade, rastreabilidade e colaboração eficiente no desenvolvimento de sistemas de saúde críticos.

### 💡 Habilidades e Competências

✅ **Git Workflows Avançados:** Dominar estratégias profissionais de branching e merging para projetos complexos  
✅ **Code Review Sistemático:** Implementar processos rigorosos de revisão focados em qualidade e compliance  
✅ **Conventional Commits:** Aplicar padrões de commit que garantem rastreabilidade e auditoria  
✅ **CI/CD Implementation:** Configurar pipelines básicos de integração e deployment contínuo  
✅ **Collaborative Documentation:** Criar documentação técnica colaborativa e acessível  
✅ **Quality Automation:** Implementar automações que garantem qualidade e segurança  
✅ **Release Management:** Gerenciar releases seguindo padrões de versionamento semântico

### 📌 Materiais Necessários

📌 Sistema Lunysse completo com todas as funcionalidades implementadas  
📌 Git configurado em ambiente colaborativo  
📌 Plataforma de repositório remoto (GitHub/GitLab)  
📌 Ferramentas de CI/CD (GitHub Actions, GitLab CI)  
📌 Editores com integração Git avançada  
📌 Ferramentas de análise de código e linting  
📌 Templates de documentação técnica  
📌 Ferramentas de comunicação da equipe (Slack, Discord)

---

## 🎓 Estratégias de Ensino e Aprendizagem

### Introdução e Contextualização (60 min)

**Reflexão inicial:** "Por que o versionamento colaborativo é fundamental em sistemas de saúde onde múltiplas equipes trabalham simultaneamente e a rastreabilidade de mudanças pode ser questão de vida ou morte?"

**Contextualização profissional aprofundada:**
Discussão sobre casos reais em sistemas hospitalares onde falhas na colaboração e versionamento causaram problemas críticos. Análise de como empresas líderes em healthtech (Epic Systems, Cerner, Allscripts) implementam workflows Git enterprise para garantir qualidade, auditoria e compliance regulatório.

**Metodologia Ativa - Cenário Problemático:**
Apresentação de situação real: "Uma equipe de 8 desenvolvedores precisa implementar simultaneamente funcionalidades críticas no Sistema Lunysse - dashboard de emergência, integração com equipamentos médicos, sistema de alertas críticos e módulo de auditoria. Como garantir que o trabalho seja coordenado, que não haja conflitos destrutivos e que todas as mudanças sejam rastreáveis para auditoria médica?"

**Análise colaborativa:**
- Identificação de desafios de colaboração em projetos médicos
- Discussão sobre requisitos de rastreabilidade em sistemas de saúde
- Análise de impacto de conflitos de código em funcionalidades críticas
- Estabelecimento de critérios de qualidade para trabalho colaborativo

---

### Tópico 1: Git Workflows e Branching Strategies Profissionais (90 min)

#### 📌 Demonstração Prática:
**Metodologia Ativa - Workflow Design Workshop:**

O mentor demonstrará diferentes estratégias de branching aplicadas ao contexto médico:
- **Git Flow Médico:** Adaptação do Git Flow para sistemas de saúde com branches de compliance
- **Feature Branch Strategy:** Desenvolvimento isolado de funcionalidades críticas
- **Hotfix Emergency Protocol:** Procedimentos para correções urgentes em produção
- **Release Management:** Estratégias de release para sistemas que não podem parar

**Aplicação no Sistema Lunysse:**
- Estruturação do repositório com branches específicas (main, develop, staging, compliance)
- Configuração de proteções de branch para código crítico
- Implementação de conventional commits para rastreabilidade médica
- Criação de templates de commit específicos para contexto de saúde

#### 📌 Atividade Prática 1:
🎯 **Objetivo:** Implementar workflow Git completo para desenvolvimento colaborativo do Sistema Lunysse  
📝 **Tarefa:**

**Metodologia Ativa - Collaborative Git Lab:**
- **Equipes de 4 pessoas:** Cada equipe simula um time de desenvolvimento real
- **Cenário realístico:** Desenvolvimento simultâneo de 4 funcionalidades críticas:
  - **Equipe A:** Sistema de alertas médicos críticos
  - **Equipe B:** Dashboard de monitoramento em tempo real
  - **Equipe C:** Módulo de integração com equipamentos
  - **Equipe D:** Sistema de auditoria e compliance

**Implementação prática:**
1. **Configuração colaborativa (20 min):** Cada equipe configura seu ambiente Git com padrões profissionais
2. **Desenvolvimento paralelo (40 min):** Trabalho simultâneo em branches isoladas
3. **Integração controlada (20 min):** Merge requests com code review obrigatório
4. **Resolução de conflitos (10 min):** Simulação e resolução de conflitos reais

**Parte do Sistema Lunysse:** Implementação de workflow Git profissional com todas as funcionalidades organizadas em branches específicas, conventional commits implementados e processo de code review estabelecido.

---

### Tópico 2: Code Review e Pull Requests com Foco em Qualidade Médica (85 min)

#### 📌 Demonstração Prática:
**Metodologia Ativa - Medical Code Review Masterclass:**

O mentor demonstrará processo sistemático de code review específico para aplicações médicas:
- **Security Review Protocol:** Verificação rigorosa de segurança para dados de saúde
- **Compliance Checklist:** Validação de conformidade com regulamentações médicas
- **Performance Impact Analysis:** Análise de impacto na performance de sistemas críticos
- **Medical Logic Validation:** Verificação de lógica médica e regras de negócio

**Critérios específicos para Sistema Lunysse:**
- Validação de proteção de dados de pacientes (LGPD/HIPAA)
- Verificação de acessibilidade para usuários com necessidades especiais
- Análise de performance para uso em equipamentos médicos antigos
- Validação de logs de auditoria para rastreabilidade médica

#### 📌 Atividade Prática 2:
🎯 **Objetivo:** Estabelecer processo rigoroso de code review para o Sistema Lunysse  
📝 **Tarefa:**

**Metodologia Ativa - Code Review Simulation:**
- **Rotação de papéis:** Cada aluno atua como reviewer e reviewee
- **Cenários reais:** Review de código com problemas intencionais de segurança, performance e compliance
- **Critérios médicos:** Aplicação de checklist específico para aplicações de saúde

**Processo estruturado:**
1. **Criação de guidelines (15 min):** Desenvolvimento de critérios de review específicos
2. **Review prático (45 min):** Execução de reviews reais com feedback estruturado
3. **Discussão de melhorias (15 min):** Análise de pontos de melhoria identificados
4. **Documentação (10 min):** Registro de padrões estabelecidos

**Parte do Sistema Lunysse:** Estabelecimento de processo de code review com guidelines específicas, templates de pull request e critérios de aprovação baseados em qualidade médica.

---

### Pausa (15 min)

---

### Tópico 3: CI/CD Básico e Automação de Qualidade (95 min)

#### 📌 Demonstração Prática:
**Metodologia Ativa - DevOps for Healthcare:**

O mentor demonstrará implementação de pipeline CI/CD específico para aplicações médicas:
- **Quality Gates Médicos:** Validações automáticas específicas para saúde
- **Security Scanning:** Análise automatizada de vulnerabilidades
- **Compliance Validation:** Verificação automática de conformidade regulatória
- **Performance Monitoring:** Monitoramento contínuo de performance crítica

**Pipeline específico para Sistema Lunysse:**
- Validação automática de dados sensíveis
- Testes de acessibilidade obrigatórios
- Verificação de performance em dispositivos limitados
- Análise de compliance com regulamentações de saúde

#### 📌 Atividade Prática 3:
🎯 **Objetivo:** Implementar pipeline CI/CD básico para o Sistema Lunysse  
📝 **Tarefa:**

**Metodologia Ativa - Pipeline Construction Lab:**
- **Trabalho em duplas:** Cada dupla implementa uma parte específica do pipeline
- **Integração progressiva:** Construção incremental do pipeline completo
- **Validação contínua:** Testes constantes de cada etapa implementada

**Implementação estruturada:**
1. **Design do pipeline (20 min):** Planejamento colaborativo da estrutura
2. **Implementação básica (40 min):** Configuração de jobs essenciais
3. **Testes e validação (25 min):** Execução e refinamento do pipeline
4. **Documentação (10 min):** Registro do processo implementado

**Parte do Sistema Lunysse:** Pipeline CI/CD funcional com validações automáticas de qualidade, security scanning e deployment automatizado para ambientes de staging.

---

### Tópico 4: Documentação Colaborativa e Organização Final (75 min)

#### 📌 Demonstração Prática:
**Metodologia Ativa - Documentation Excellence:**

O mentor demonstrará criação de documentação técnica colaborativa de nível enterprise:
- **README Profissional:** Documentação completa para desenvolvedores e stakeholders
- **Contributing Guidelines:** Guias detalhados para novos colaboradores
- **Architecture Documentation:** Documentação de arquitetura com diagramas técnicos
- **API Documentation:** Documentação de APIs com exemplos práticos

**Padrões específicos para Sistema Lunysse:**
- Documentação de compliance e regulamentações
- Guias de segurança para dados médicos
- Procedimentos de emergência e troubleshooting
- Documentação de integração com sistemas hospitalares

#### 📌 Atividade Prática 4:
🎯 **Objetivo:** Criar documentação colaborativa completa do Sistema Lunysse  
📝 **Tarefa:**

**Metodologia Ativa - Documentation Sprint:**
- **Especialização por área:** Cada grupo foca em um tipo específico de documentação
- **Revisão cruzada:** Grupos revisam documentação de outros grupos
- **Integração final:** Consolidação de toda documentação em estrutura coesa

**Áreas de documentação:**
1. **Grupo 1:** README principal e guias de instalação
2. **Grupo 2:** Documentação de arquitetura e APIs
3. **Grupo 3:** Guias de contribuição e padrões de código
4. **Grupo 4:** Documentação de segurança e compliance

**Parte do Sistema Lunysse:** Documentação técnica completa, organizada e acessível, incluindo todos os aspectos necessários para manutenção e evolução colaborativa do sistema.

---

### Encerramento e Reflexão (60 min)

#### 📌 Discussão em grupo:
**Tema:** "Como a colaboração eficiente e versionamento adequado impactam a sustentabilidade e evolução de sistemas de saúde críticos?"

**Metodologia Ativa - Reflective Analysis:**

**Reflexão estruturada sobre:**
- **Impacto na qualidade:** Como processos colaborativos elevam a qualidade do código
- **Sustentabilidade técnica:** Importância da documentação para manutenção a longo prazo
- **Compliance e auditoria:** Papel do versionamento na rastreabilidade regulatória
- **Evolução contínua:** Como colaboração facilita adaptação a novas necessidades médicas
- **Cultura de equipe:** Estabelecimento de mentalidade colaborativa e de qualidade

**Discussão de casos práticos:**
- Análise de situações onde colaboração inadequada causou problemas
- Identificação de benefícios observados durante as atividades práticas
- Planejamento de implementação em projetos reais futuros

#### 📌 Desafio para a próxima aula:
**Preparação para desenvolvimento final:**
- Repositório completamente organizado com todos os padrões implementados
- Equipe sincronizada nos processos colaborativos estabelecidos
- Pipeline CI/CD funcionando e validado
- Documentação técnica completa e atualizada
- Ambiente preparado para desenvolvimento intensivo das funcionalidades finais

---

## 📌 Objetos de Aprendizagem

📝 **Git Workflow Framework:** Sistema completo de workflows colaborativos para projetos médicos  
📝 **Code Review Guidelines:** Processo sistemático de revisão com critérios específicos para saúde  
📝 **CI/CD Pipeline Template:** Pipeline básico configurado para aplicações médicas  
📝 **Documentation Standards:** Padrões de documentação técnica colaborativa  
📝 **Quality Automation Tools:** Ferramentas configuradas para automação de qualidade  
📝 **Collaboration Protocols:** Protocolos estabelecidos para trabalho em equipe eficiente

---

## 🎯 Avaliação

### Critérios de Avaliação:

✅ **Implementação de Workflows (25%):** Qualidade e adequação dos workflows Git implementados  
✅ **Processo de Code Review (25%):** Eficácia do processo de revisão estabelecido  
✅ **Pipeline CI/CD (25%):** Funcionalidade e completude do pipeline automatizado  
✅ **Documentação Colaborativa (25%):** Qualidade e acessibilidade da documentação criada

### Instrumentos de Avaliação:

- **Projeto colaborativo:** Avaliação do repositório Git completamente configurado
- **Simulação de processos:** Demonstração prática dos workflows implementados
- **Peer review:** Avaliação cruzada dos processos de code review
- **Pipeline demonstration:** Teste completo do pipeline CI/CD em funcionamento

---

## 🎓 Conclusão

Ao final desta aula, os alunos serão capazes de:

- **Implementar workflows Git profissionais** adequados para desenvolvimento colaborativo de sistemas críticos
- **Estabelecer processos de code review** rigorosos com foco em qualidade e compliance médico
- **Configurar pipelines CI/CD básicos** com validações automáticas específicas para saúde
- **Criar documentação técnica colaborativa** completa e acessível para equipes
- **Trabalhar eficientemente em equipe** usando metodologias e ferramentas modernas
- **Gerenciar qualidade de forma colaborativa** através de processos automatizados

Esta competência é fundamental para desenvolvedores que trabalham em equipes de desenvolvimento de sistemas críticos, estabelecendo bases sólidas para colaboração profissional, qualidade sistemática e sustentabilidade técnica a longo prazo.

---

**Indicador de Competência Trabalhado:**  
✔️ **Indicador 6** - Utiliza linguagem de programação com foco em desenvolvimento orientado a objetos (colaboração)  
✔️ **Indicador 3** - Utiliza linguagem de programação de script, de acordo com os padrões do ECMAScript (organização)

**Metodologia Ativa Aplicada:**  
- **Collaborative Learning:** Aprendizado através de trabalho colaborativo real e estruturado
- **Process-Based Learning:** Foco em processos e metodologias profissionais  
- **Simulation-Based Training:** Treinamento através de simulação de cenários reais  
- **Peer Learning:** Aprendizado mútuo através de revisão e feedback entre pares