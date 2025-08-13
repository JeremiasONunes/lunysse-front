# PLANO DE TRABALHO DOCENTE 

## MODELO PEDAGÓGICO SENAC 

**Curso:** Desenvolvedor Full Stack  
**Carga Horária Total:** 108h  
**Carga Horária da UC:** 108h  

**Docente:** Jeremias O Nunes 

---

## PLANO DE AULA – Layout Responsivo com Padrões W3C

📌 **Disciplina:** Construir aplicações front-end  
👨🏫 **Mentor(a):** Jeremias O Nunes  
📆 **Data:** Aula 8 - Parte 2  
⏰ **Duração:** 4 horas  

---

## 📖 Planejamento

### 📌 Conteúdo Formativo

- Técnicas avançadas de Flexbox e CSS Grid
- Media queries estratégicas e breakpoints
- Mobile-first approach na prática
- Padrões W3C para layouts responsivos
- Cross-browser compatibility e fallbacks
- Progressive enhancement e graceful degradation
- Container queries e técnicas modernas
- Otimização de performance em layouts responsivos
- Testes sistemáticos em múltiplos dispositivos

### 🎯 Objetivo Geral

Desenvolver layouts responsivos utilizando técnicas modernas de CSS e garantindo compatibilidade cross-browser seguindo padrões W3C, refinando o Sistema Lunysse para funcionar perfeitamente em todos os dispositivos e contextos de uso.

### 💡 Habilidades e Competências

✅ **Integrar linguagens de estilo e marcação** - Criar layouts adaptativos eficientes  
✅ **Testar compatibilidade em diversos navegadores** - Garantir funcionamento universal  
✅ **Comprometimento com padrões de acessibilidade** - Manter usabilidade em todos os dispositivos  
✅ **Resolver problemas técnicos** - Debuggar e otimizar layouts complexos  

### 📌 Materiais Necessários

📌 Projeto com CSS da aula anterior  
📌 Dispositivos múltiplos (smartphones, tablets)  
📌 Ferramentas de teste: BrowserStack, Responsively App  
📌 Navegadores múltiplos instalados  
📌 Extensões DevTools para responsive design  
📌 Ferramentas de performance: Lighthouse  
📌 Checklist de compatibilidade cross-browser  

---

## 🎓 Estratégias de Ensino e Aprendizagem

### Introdução e Contextualização (25 min)

**Metodologia Ativa - Teste de Realidade:**
Demonstração ao vivo com dispositivos reais:
- Abrir Sistema Lunysse atual em 5 dispositivos diferentes
- Identificar problemas: texto cortado, botões inacessíveis, layout quebrado
- Mostrar estatísticas: 70% dos usuários de saúde acessam via mobile

**Questões Problematizadoras:**
- "Como um paciente idoso com artrite interage com botões pequenos?"
- "Por que um sistema médico deve funcionar em um iPhone 6 de 2014?"
- "Qual o impacto de um layout quebrado na confiança do usuário?"

**Contextualização do Lunysse:**
Apresentar o desafio: garantir que psicólogos e pacientes tenham experiência perfeita independente do dispositivo usado, considerando limitações físicas e tecnológicas.

---

### **Tópico 1: Flexbox e CSS Grid Avançado (55 min)**

#### 📌 Demonstração Prática:
**Metodologia Ativa - Layout Battle:**
- Comparar soluções para o mesmo problema:
  - **Desafio:** Layout de 3 colunas que vira 1 coluna no mobile
  - **Solução 1:** Flexbox
  - **Solução 2:** CSS Grid
  - **Solução 3:** Híbrida (Grid + Flexbox)
- Implementar dashboard do psicólogo ao vivo:
```css
.dashboard-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .dashboard-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .dashboard-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

#### 📌 Atividade Prática 1:
🎯 **Objetivo:** Implementar layouts complexos usando Grid e Flexbox  
📝 **Tarefa:**
- **Metodologia Ativa - Layout Challenge:**
- **Desafios específicos por dupla:**
  - **Dupla 1-2:** Dashboard com sidebar colapsável
  - **Dupla 3-4:** Lista de pacientes com filtros laterais
  - **Dupla 5-6:** Formulário multi-step responsivo
  - **Dupla 7-8:** Chat interface com mensagens
- **Processo técnico:**
  1. Analisar layout em desktop (10 min)
  2. Planejar adaptação mobile (10 min)
  3. Implementar com Grid/Flexbox (20 min)
  4. Testar em 3 breakpoints (10 min)
  5. Refinar e otimizar (10 min)
- **Critérios de sucesso:**
  - Layout funcional em todos os tamanhos
  - Código limpo e semântico
  - Performance otimizada
  - Acessibilidade mantida

**Parte do Projeto Construída:** Layouts complexos totalmente responsivos

---

### **Tópico 2: Media Queries Estratégicas (50 min)**

#### 📌 Demonstração Prática:
**Metodologia Ativa - Breakpoint Strategy:**
- Demonstrar abordagem mobile-first:
```css
/* Mobile First - Base styles */
.sidebar {
  position: fixed;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

/* Tablet */
@media (min-width: 768px) {
  .sidebar {
    position: relative;
    transform: translateX(0);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .sidebar {
    width: 256px;
  }
}

/* Large Desktop */
@media (min-width: 1280px) {
  .sidebar {
    width: 288px;
  }
}
```
- Mostrar como escolher breakpoints baseados em conteúdo, não dispositivos

#### 📌 Atividade Prática 2:
🎯 **Objetivo:** Criar sistema de breakpoints otimizado para o Lunysse  
📝 **Tarefa:**
- **Metodologia Ativa - Breakpoint Optimization:**
- **Análise por grupos:**
  - **Grupo 1:** Analisar navegação (sidebar, menus)
  - **Grupo 2:** Analisar formulários (campos, botões)
  - **Grupo 3:** Analisar dashboards (cards, gráficos)
  - **Grupo 4:** Analisar listas (tabelas, cards)
- **Processo de otimização:**
  1. Identificar pontos de quebra naturais (15 min)
  2. Definir breakpoints customizados (10 min)
  3. Implementar media queries (15 min)
  4. Testar em dispositivos reais (10 min)
- **Documentação:** Criar guia de breakpoints do projeto

**Parte do Projeto Construída:** Sistema de breakpoints otimizado e documentado

---

### **Tópico 3: Cross-browser Compatibility (45 min)**

#### 📌 Demonstração Prática:
**Metodologia Ativa - Browser Testing Lab:**
- Testar mesmo código em 5 navegadores:
  - Chrome (Blink)
  - Firefox (Gecko)
  - Safari (WebKit)
  - Edge (Chromium)
  - Internet Explorer 11 (se necessário)
- Identificar diferenças e implementar fallbacks:
```css
/* Modern browsers */
.card {
  backdrop-filter: blur(10px);
}

/* Fallback for older browsers */
@supports not (backdrop-filter: blur(10px)) {
  .card {
    background: rgba(255, 255, 255, 0.9);
  }
}
```

#### 📌 Atividade Prática 3:
🎯 **Objetivo:** Garantir compatibilidade total do Sistema Lunysse  
📝 **Tarefa:**
- **Metodologia Ativa - Compatibility Sprint:**
- **Estações de teste (15 min cada):**
  - **Estação 1:** Chrome + DevTools mobile simulation
  - **Estação 2:** Firefox + Responsive Design Mode
  - **Estação 3:** Safari + iOS Simulator
  - **Estação 4:** Edge + diferentes resoluções
- **Protocolo de teste:**
  1. Testar fluxo principal (login → dashboard → ação)
  2. Verificar layouts em diferentes tamanhos
  3. Testar funcionalidades interativas
  4. Documentar problemas encontrados
  5. Implementar correções necessárias
- **Consolidação:** Lista priorizada de correções

**Parte do Projeto Construída:** Sistema compatível com todos os navegadores principais

---

### **Tópico 4: Performance e Otimização (40 min)**

#### 📌 Demonstração Prática:
**Metodologia Ativa - Performance Audit:**
- Usar Lighthouse para auditar performance:
  - Métricas: LCP, FID, CLS
  - Impacto de CSS no carregamento
  - Otimizações específicas para mobile
- Demonstrar técnicas de otimização:
```css
/* Otimização de animações */
.sidebar {
  will-change: transform;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

/* Lazy loading de imagens */
img[loading="lazy"] {
  opacity: 0;
  transition: opacity 0.3s;
}

img[loading="lazy"].loaded {
  opacity: 1;
}
```

#### 📌 Atividade Prática 4:
🎯 **Objetivo:** Otimizar performance do sistema para todos os dispositivos  
📝 **Tarefa:**
- **Metodologia Ativa - Performance Competition:**
- **Competição entre grupos:**
  - Meta: Score Lighthouse > 90 em mobile e desktop
  - **Grupo 1:** Otimizar página inicial
  - **Grupo 2:** Otimizar dashboards
  - **Grupo 3:** Otimizar formulários
  - **Grupo 4:** Otimizar navegação
- **Técnicas permitidas:**
  - Otimização de CSS (remoção de código não usado)
  - Lazy loading de componentes
  - Compressão de assets
  - Otimização de animações
- **Medição:** Antes e depois com Lighthouse
- **Prêmio:** Melhor otimização vira padrão do projeto

**Parte do Projeto Construída:** Sistema Lunysse otimizado para máxima performance

---

### Encerramento e Reflexão (45 min)

#### 📌 Teste Final Multi-dispositivo:
**Metodologia Ativa - Device Testing Marathon:**
- **Rotação de dispositivos (10 min cada):**
  - iPhone SE (tela pequena)
  - iPad (orientação portrait/landscape)
  - Android tablet
  - Desktop 1920px
  - Laptop 1366px
- **Protocolo de teste final:**
  1. Navegação completa pelo sistema
  2. Teste de todos os formulários
  3. Verificação de legibilidade
  4. Teste de interações touch
  5. Avaliação de performance

#### 📌 Showcase de Resultados:
**Metodologia Ativa - Before/After Demo:**
- Cada grupo demonstra melhorias implementadas
- Comparação lado a lado: antes vs depois
- Métricas de performance alcançadas
- Problemas resolvidos documentados

#### 📌 Discussão técnica:
**Metodologia Ativa - Technical Retrospective:**
- "Quais foram os maiores desafios de compatibilidade?"
- "Como balancear funcionalidade moderna com suporte a navegadores antigos?"
- "Que técnicas de otimização tiveram maior impacto?"
- "Como manter qualidade responsiva em projetos grandes?"

#### 📌 Desafio para a próxima aula:
**Metodologia Ativa - JavaScript Preparation:**
- Pesquisar conceitos básicos de JavaScript ES6+
- Analisar interações do Sistema Lunysse que precisam de JavaScript
- Preparar lista de funcionalidades para implementar:
  - Validação de formulários
  - Toggle de sidebar mobile
  - Modais de confirmação
  - Feedback visual de ações

---

### 📌 Objetos de Aprendizagem

📝 **Materiais Didáticos Utilizados:**
- Guia de breakpoints otimizados para o projeto
- Checklist de compatibilidade cross-browser
- Templates de media queries mobile-first
- Ferramentas de teste em múltiplos dispositivos
- Métricas de performance e otimização
- Documentação de fallbacks para navegadores antigos
- Biblioteca de soluções para problemas comuns

---

## 🎯 Avaliação

### **Avaliação Formativa (Durante a aula):**
✅ **Qualidade dos layouts responsivos** - Adaptação eficiente para todos os tamanhos  
✅ **Compatibilidade cross-browser** - Funcionamento em todos os navegadores testados  
✅ **Performance otimizada** - Métricas Lighthouse satisfatórias  
✅ **Código limpo e organizado** - Media queries bem estruturadas  

### **Avaliação Somativa (Entregáveis):**
✅ **Sistema completamente responsivo** - Funcional em todos os dispositivos  
✅ **Relatório de compatibilidade** - Testes documentados e correções implementadas  
✅ **Otimizações de performance** - Melhorias mensuráveis implementadas  

### **Critérios de Qualidade:**
- **Excelente (9-10):** Sistema perfeito em todos os dispositivos, performance otimizada
- **Bom (7-8):** Boa responsividade com pequenos ajustes, performance adequada
- **Satisfatório (6-7):** Funciona na maioria dos contextos, performance aceitável
- **Insatisfatório (<6):** Problemas significativos de responsividade ou performance

---

## 🎓 Conclusão

### **Aprendizado Esperado:**

Ao final desta aula, os alunos serão capazes de:

🎯 **Conhecimento Técnico:**
- Implementar layouts responsivos usando Grid e Flexbox avançados
- Criar media queries estratégicas seguindo mobile-first
- Garantir compatibilidade cross-browser com fallbacks apropriados
- Otimizar performance de layouts para diferentes dispositivos

🎯 **Aplicação Prática:**
- Entregar Sistema Lunysse funcionando perfeitamente em todos os dispositivos
- Implementar soluções para problemas específicos de compatibilidade
- Criar código CSS otimizado e performático
- Documentar decisões técnicas e soluções implementadas

🎯 **Competências Profissionais:**
- Testar sistematicamente em múltiplos contextos
- Resolver problemas complexos de layout e compatibilidade
- Otimizar performance considerando limitações de dispositivos
- Trabalhar com padrões da indústria para desenvolvimento responsivo

### **Conexão com o Projeto:**
Esta aula finaliza a camada visual do Sistema Lunysse, garantindo que funcione perfeitamente em qualquer contexto. O CSS responsivo implementado hoje será complementado na próxima aula com JavaScript para adicionar interatividade.

### **Preparação para Próxima Aula:**
O layout responsivo criado hoje receberá vida através de JavaScript na Aula 9, onde implementaremos validações, interações e funcionalidades dinâmicas que tornarão o Sistema Lunysse verdadeiramente funcional.