# PLANO DE TRABALHO DOCENTE

## MODELO PEDAGÓGICO SENAC

**Curso:** Desenvolvedor Full Stack  
**Carga Horária Total:** 108h  
**Carga Horária da UC:** 108h  
**Docente:** Jeremias O Nunes

---

# PLANO DE AULA – Design Responsivo Avançado e Frameworks

📌 **Disciplina:** Desenvolvimento Front-end Avançado  
👨🏫 **Mentor(a):** Jeremias O Nunes  
📆 **Data:** Aula 15 - Parte 3  
⏰ **Duração:** 4 horas

---

## 📖 Planejamento

### 📌 Conteúdo Formativo

• Implementação de Container Queries e técnicas CSS avançadas  
• Workshop de otimização de performance em layouts responsivos  
• Criação de componentes adaptativos inteligentes com React  
• Laboratório de testes em dispositivos variados e diferentes resoluções  
• Implementação de Progressive Web App (PWA) básico para o Sistema Lunysse  
• Otimização final de todos os layouts seguindo padrões W3C rigorosos

### 🎯 Objetivo Geral

Dominar técnicas avançadas de responsividade e frameworks modernos para criar layouts robustos e adaptáveis, implementando soluções que funcionam perfeitamente em qualquer dispositivo e seguem rigorosamente os padrões W3C para máxima compatibilidade e acessibilidade.

### 💡 Habilidades e Competências

✅ **Container Queries:** Implementar layouts que se adaptam ao contexto do container  
✅ **Performance Responsiva:** Otimizar carregamento e renderização para diferentes dispositivos  
✅ **Componentes Adaptativos:** Criar componentes que se ajustam inteligentemente  
✅ **PWA Development:** Implementar funcionalidades de Progressive Web App  
✅ **Padrões W3C:** Garantir conformidade total com especificações web modernas

### 📌 Materiais Necessários

📌 Sistema Lunysse com layouts base implementados  
📌 Dispositivos variados para teste (smartphones, tablets, desktops)  
📌 Ferramentas de desenvolvimento responsivo (Chrome DevTools, Firefox DevTools)  
📌 Lighthouse para auditoria PWA  
📌 Validadores W3C (HTML, CSS, Accessibility)  
📌 Ferramentas de teste de performance (PageSpeed Insights, WebPageTest)

---

## 🎓 Estratégias de Ensino e Aprendizagem

### Introdução e Contextualização (30 min)

**Reflexão inicial:** "Como garantir que uma aplicação de saúde funcione perfeitamente em qualquer dispositivo?"

Discussão sobre a importância crítica da responsividade em aplicações médicas, onde usuários podem acessar o sistema em emergências usando diferentes dispositivos, e como a falha na adaptação pode impactar o atendimento.

**Contextualização profissional:** Análise de estatísticas de uso de dispositivos em aplicações de saúde e como empresas líderes garantem experiência consistente across-platform.

---

### Tópico 1: Container Queries e Técnicas CSS Avançadas (70 min)

#### 📌 Demonstração Prática:
O mentor demonstrará implementação de Container Queries:
- **@container rules:** Sintaxe e aplicação prática
- **Container types:** Size, inline-size, e style queries
- **Responsive components:** Componentes que se adaptam ao container pai
- **Fallback strategies:** Compatibilidade com navegadores mais antigos
- **Performance implications:** Impacto na renderização

#### 📌 Atividade Prática 1:
🎯 **Objetivo:** Implementar Container Queries no Sistema Lunysse  
📝 **Tarefa:**
- Refatorar componentes Card para usar Container Queries
- Implementar layout adaptativo no dashboard baseado no tamanho do container
- Criar componente de lista de pacientes que se adapta ao espaço disponível
- Desenvolver sistema de grid inteligente usando Container Queries
- Implementar fallbacks para navegadores sem suporte
- Testar comportamento em diferentes tamanhos de container
- Documentar casos de uso e benefícios obtidos

---

### Tópico 2: Otimização de Performance em Layouts Responsivos (60 min)

#### 📌 Demonstração Prática:
Técnicas avançadas de otimização responsiva:
- **Critical CSS:** Extração e inlining de CSS crítico
- **Media query optimization:** Organização eficiente de breakpoints
- **Image optimization:** Responsive images com art direction
- **Font loading:** Estratégias para carregamento otimizado de fontes
- **Layout shift prevention:** Técnicas para evitar CLS

#### 📌 Atividade Prática 2:
🎯 **Objetivo:** Otimizar performance responsiva do Sistema Lunysse  
📝 **Tarefa:**
- Implementar critical CSS para above-the-fold content
- Otimizar media queries para reduzir redundância
- Configurar responsive images com srcset e sizes
- Implementar font-display: swap para melhor performance
- Eliminar layout shifts em componentes responsivos
- Medir Core Web Vitals em diferentes dispositivos
- Criar relatório de melhorias de performance obtidas

---

### Pausa (15 min)

---

### Tópico 3: Componentes Adaptativos Inteligentes (65 min)

#### 📌 Demonstração Prática:
Desenvolvimento de componentes que se adaptam inteligentemente:
- **Adaptive components:** Componentes que mudam comportamento baseado no contexto
- **Breakpoint hooks:** Custom hooks para detecção de breakpoints
- **Orientation handling:** Adaptação para mudanças de orientação
- **Touch vs mouse:** Interfaces adaptadas para diferentes tipos de input
- **Accessibility responsive:** Acessibilidade que se adapta ao dispositivo

#### 📌 Atividade Prática 3:
🎯 **Objetivo:** Criar componentes adaptativos inteligentes para o Sistema Lunysse  
📝 **Tarefa:**
- Desenvolver hook useBreakpoint para detecção de tamanho de tela
- Criar componente Navigation que se adapta automaticamente (sidebar/bottom nav)
- Implementar DataTable que se transforma em cards em mobile
- Desenvolver Modal que se adapta para fullscreen em mobile
- Criar sistema de formulários que se reorganiza baseado no espaço
- Implementar detecção de touch para otimizar interações
- Testar componentes em diferentes dispositivos e orientações

---

### Tópico 4: Progressive Web App (PWA) e Otimização Final (50 min)

#### 📌 Demonstração Prática:
Implementação de PWA básico:
- **Service Worker:** Cache strategies e offline functionality
- **Web App Manifest:** Configuração para instalação
- **Push notifications:** Notificações nativas
- **Background sync:** Sincronização em background
- **App-like experience:** Navegação e comportamento nativo

#### 📌 Atividade Prática 4:
🎯 **Objetivo:** Transformar o Sistema Lunysse em PWA funcional  
📝 **Tarefa:**
- Criar e configurar Web App Manifest
- Implementar Service Worker com cache strategy
- Configurar offline fallbacks para páginas críticas
- Implementar funcionalidade de instalação
- Configurar push notifications básicas
- Otimizar ícones e splash screens para diferentes dispositivos
- Testar instalação e funcionamento offline
- Auditar PWA com Lighthouse e corrigir issues

---

### Encerramento e Reflexão (30 min)

#### 📌 Discussão em grupo:
**Tema:** "Como a responsividade avançada impacta a acessibilidade e inclusão digital em aplicações de saúde?"

Reflexão sobre:
- Importância da responsividade para acessibilidade
- Impacto de PWAs na adoção de aplicações médicas
- Tendências futuras em design responsivo
- Metodologias para teste cross-device

#### 📌 Desafio para a próxima aula:
Criar um guia completo de responsividade para o Sistema Lunysse:
- Documentação de todos os breakpoints e comportamentos
- Guia de testes para diferentes dispositivos
- Checklist de conformidade W3C implementado

---

## 📌 Objetos de Aprendizagem

📝 **Guia de Container Queries:** Manual técnico com exemplos práticos  
📝 **Performance Report:** Relatório detalhado de otimizações implementadas  
📝 **Biblioteca de Componentes Adaptativos:** Coleção de componentes inteligentes  
📝 **PWA Configuration:** Documentação completa da implementação PWA  
📝 **Responsive Testing Guide:** Metodologia para testes cross-device

---

## 🎯 Avaliação

### Critérios de Avaliação:

✅ **Implementação Técnica (30%):** Qualidade da implementação de Container Queries e PWA  
✅ **Performance (25%):** Otimizações e melhorias mensuráveis de velocidade  
✅ **Adaptabilidade (25%):** Funcionamento em diferentes dispositivos e contextos  
✅ **Conformidade W3C (20%):** Aderência rigorosa aos padrões web

### Instrumentos de Avaliação:

- **Teste multi-device:** Avaliação em diferentes dispositivos reais
- **Auditoria técnica:** Verificação com ferramentas automatizadas
- **Performance metrics:** Análise de Core Web Vitals
- **Code review:** Avaliação da qualidade e organização do código

---

## 🎓 Conclusão

Ao final desta aula, os alunos serão capazes de:

- **Implementar Container Queries** para layouts verdadeiramente adaptativos
- **Otimizar performance responsiva** usando técnicas avançadas de CSS e JavaScript
- **Criar componentes inteligentes** que se adaptam automaticamente ao contexto
- **Desenvolver PWAs funcionais** com cache, offline e instalação
- **Garantir conformidade W3C** em todos os aspectos da responsividade

Esta competência é essencial para desenvolvedores que trabalham com aplicações modernas, estabelecendo um padrão profissional de qualidade que garante funcionamento perfeito em qualquer dispositivo.

---

**Indicador de Competência Trabalhado:**  
✔️ **Indicador 2** - Utiliza linguagem de marcação e estilo, de acordo com os padrões do W3C

**Metodologia Ativa Aplicada:**  
- **Aprendizagem Baseada em Projetos:** Implementação prática de PWA completo
- **Teste Iterativo:** Ciclos de teste e refinamento em dispositivos reais  
- **Problem-Based Learning:** Solução de problemas reais de responsividade