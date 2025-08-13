# PLANO DE TRABALHO DOCENTE 

## MODELO PEDAGÓGICO SENAC 

**Curso:** Desenvolvedor Full Stack  
**Carga Horária Total:** 108h  
**Carga Horária da UC:** 108h  

**Docente:** Jeremias O Nunes 

---

## PLANO DE AULA – Estrutura Semântica e Linguagem de Marcação

📌 **Disciplina:** Construir aplicações front-end  
👨🏫 **Mentor(a):** Jeremias O Nunes  
📆 **Data:** Aula 6 - Parte 2  
⏰ **Duração:** 4 horas  

---

## 📖 Planejamento

### 📌 Conteúdo Formativo

- Estrutura semântica HTML5: conceitos e aplicações práticas
- Linguagem de marcação de conteúdo para sistemas de saúde
- Web standards e boas práticas W3C
- Acessibilidade e usabilidade em aplicações médicas
- Tags semânticas: header, nav, main, section, article, footer
- Atributos ARIA para melhor acessibilidade
- SEO básico para aplicações web
- Validação W3C e ferramentas de qualidade

### 🎯 Objetivo Geral

Desenvolver competências em estruturação semântica de páginas web utilizando HTML5 e seguindo padrões W3C de acessibilidade, criando a base estrutural sólida do Sistema Lunysse que seja acessível, indexável e compatível com tecnologias assistivas.

### 💡 Habilidades e Competências

✅ **Utilizar editor de código para aplicações web** - Dominar VS Code e extensões  
✅ **Integrar linguagens de estilo e marcação** - Preparar estrutura para CSS  
✅ **Comprometimento com padrões de acessibilidade** - Implementar WCAG desde o início  
✅ **Colaboração em equipe** - Trabalhar com padrões que facilitam manutenção  

### 📌 Materiais Necessários

📌 Computadores com VS Code instalado  
📌 Extensões: HTML5 Boilerplate, Live Server, W3C Validator  
📌 Navegadores com DevTools (Chrome, Firefox)  
📌 Screen reader para testes (NVDA ou JAWS)  
📌 Designs da Parte 1 como referência visual  
📌 Checklist de acessibilidade WCAG 2.1  
📌 Ferramentas de validação online  

---

## 🎓 Estratégias de Ensino e Aprendizagem

### Introdução e Contextualização (25 min)

**Metodologia Ativa - Investigação Comparativa:**
Análise de código HTML de 3 sistemas diferentes:
- **Sistema A:** HTML sem semântica (divs genéricas)
- **Sistema B:** HTML semântico bem estruturado
- **Sistema C:** Sistema de saúde com problemas de acessibilidade

**Questões Problematizadoras:**
- "Como um deficiente visual navega em um sistema de agendamento médico?"
- "Por que a estrutura HTML impacta o SEO de clínicas?"
- "Qual a diferença entre `<div>` e `<section>` para tecnologias assistivas?"

**Contextualização do Lunysse:**
Apresentar o desafio: transformar os designs visuais da Parte 1 em código HTML semântico que seja acessível para todos os usuários, incluindo pessoas com deficiência.

---

### **Tópico 1: Configuração do Ambiente de Desenvolvimento (40 min)**

#### 📌 Demonstração Prática:
**Metodologia Ativa - Setup Colaborativo:**
- Configurar VS Code ao vivo com extensões essenciais:
  - HTML5 Boilerplate
  - Live Server
  - Prettier
  - W3C Web Validator
  - axe DevTools (acessibilidade)
- Criar estrutura de pastas do projeto Lunysse:
  ```
  lunysse-frontend/
  ├── index.html
  ├── pages/
  ├── assets/
  ├── css/
  └── js/
  ```

#### 📌 Atividade Prática 1:
🎯 **Objetivo:** Configurar ambiente de desenvolvimento profissional  
📝 **Tarefa:**
- **Metodologia Ativa - Peer Programming:**
- Duplas configuram ambiente seguindo checklist:
  1. Instalar extensões necessárias
  2. Configurar Prettier para formatação automática
  3. Criar estrutura de pastas do projeto
  4. Testar Live Server
  5. Validar configuração com HTML básico
- **Validação cruzada:** Uma dupla testa o ambiente da outra
- **Documentação:** Criar README.md com instruções de setup

**Parte do Projeto Construída:** Ambiente de desenvolvimento configurado e documentado

---

### **Tópico 2: Estrutura Semântica HTML5 (55 min)**

#### 📌 Demonstração Prática:
**Metodologia Ativa - Construção Incremental:**
- Criar estrutura da página de login do Lunysse ao vivo:
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login - Sistema Lunysse</title>
</head>
<body>
  <header role="banner">
    <nav aria-label="Navegação principal">
      <!-- Logo e menu público -->
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

#### 📌 Atividade Prática 2:
🎯 **Objetivo:** Criar estruturas HTML semânticas das páginas principais  
📝 **Tarefa:**
- **Metodologia Ativa - Divisão de Responsabilidades:**
- **Grupos especializados por página:**
  - **Grupo 1:** Página inicial pública (Home)
  - **Grupo 2:** Página de login e registro
  - **Grupo 3:** Dashboard do psicólogo
  - **Grupo 4:** Dashboard do paciente
- **Processo estruturado:**
  1. Analisar design visual da Parte 1 (10 min)
  2. Identificar seções lógicas do conteúdo (10 min)
  3. Escolher tags semânticas apropriadas (15 min)
  4. Implementar estrutura HTML (15 min)
  5. Validar com W3C Validator (5 min)
- **Critérios de qualidade:**
  - Uso correto de tags semânticas
  - Hierarquia lógica de headings (h1-h6)
  - Atributos ARIA onde necessário
  - Validação W3C sem erros

**Parte do Projeto Construída:** Estruturas HTML semânticas das páginas principais do Sistema Lunysse

---

### **Tópico 3: Acessibilidade e ARIA (50 min)**

#### 📌 Demonstração Prática:
**Metodologia Ativa - Experiência Imersiva:**
- Demonstrar navegação com screen reader (NVDA):
  - Página sem ARIA (confusa)
  - Mesma página com ARIA (clara)
- Implementar ARIA ao vivo no formulário de login:
```html
<form role="form" aria-labelledby="form-title">
  <h2 id="form-title">Dados de Acesso</h2>
  
  <div class="form-group">
    <label for="email">Email:</label>
    <input 
      type="email" 
      id="email" 
      name="email" 
      required 
      aria-describedby="email-error"
      aria-invalid="false"
    >
    <div id="email-error" role="alert" aria-live="polite"></div>
  </div>
</form>
```

#### 📌 Atividade Prática 3:
🎯 **Objetivo:** Implementar acessibilidade completa nos formulários e navegação  
📝 **Tarefa:**
- **Metodologia Ativa - Accessibility Testing:**
- **Cenários de teste por dupla:**
  - **Dupla 1-2:** Formulário de cadastro de paciente
  - **Dupla 3-4:** Sistema de navegação (sidebar)
  - **Dupla 5-6:** Formulário de agendamento
  - **Dupla 7-8:** Tabelas de dados (lista de pacientes)
- **Processo de implementação:**
  1. Implementar ARIA labels e roles (15 min)
  2. Testar com teclado (Tab, Enter, Esc) (10 min)
  3. Testar com screen reader (10 min)
  4. Corrigir problemas encontrados (10 min)
  5. Validar com axe DevTools (5 min)
- **Checklist de acessibilidade:**
  - Navegação por teclado funcional
  - Labels descritivos para todos os campos
  - Mensagens de erro acessíveis
  - Contraste adequado (será refinado no CSS)
  - Estrutura lógica para screen readers

**Parte do Projeto Construída:** Formulários e navegação completamente acessíveis

---

### **Tópico 4: SEO e Meta Tags (35 min)**

#### 📌 Demonstração Prática:
**Metodologia Ativa - SEO Audit:**
- Analisar SEO de sistemas de saúde existentes
- Implementar meta tags otimizadas para o Lunysse:
```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sistema Lunysse - Agendamento Psicológico Online</title>
  <meta name="description" content="Plataforma moderna para agendamento de consultas psicológicas. Conecte-se com psicólogos qualificados de forma simples e segura.">
  <meta name="keywords" content="psicologia, agendamento, consulta online, saúde mental">
  <meta name="author" content="Sistema Lunysse">
  
  <!-- Open Graph -->
  <meta property="og:title" content="Sistema Lunysse - Agendamento Psicológico">
  <meta property="og:description" content="Plataforma moderna para agendamento de consultas psicológicas">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://lunysse.com">
  
  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
</head>
```

#### 📌 Atividade Prática 4:
🎯 **Objetivo:** Otimizar SEO de todas as páginas do sistema  
📝 **Tarefa:**
- **Metodologia Ativa - SEO Competition:**
- **Competição entre grupos:**
  - Cada grupo otimiza SEO de uma página diferente
  - **Grupo 1:** Página inicial (foco: conversão)
  - **Grupo 2:** Página sobre (foco: credibilidade)
  - **Grupo 3:** Páginas de login/registro (foco: usabilidade)
  - **Grupo 4:** Páginas internas (foco: funcionalidade)
- **Critérios de avaliação:**
  - Títulos únicos e descritivos
  - Meta descriptions atrativas
  - Estrutura de headings lógica
  - URLs amigáveis planejadas
  - Schema.org básico (quando aplicável)
- **Validação:** Usar ferramentas como SEO Site Checkup

**Parte do Projeto Construída:** Todas as páginas otimizadas para SEO

---

### Encerramento e Reflexão (35 min)

#### 📌 Validação e Testes Finais:
**Metodologia Ativa - Quality Assurance:**
- **Estações de validação (10 min cada):**
  - **Estação 1:** Validação W3C
  - **Estação 2:** Teste de acessibilidade (axe DevTools)
  - **Estação 3:** Teste com screen reader
  - **Estação 4:** Navegação por teclado
- Cada grupo roda pelas estações testando o trabalho dos outros
- Documentar problemas encontrados e soluções

#### 📌 Discussão em grupo:
**Metodologia Ativa - Retrospectiva Técnica:**
- "Qual a diferença entre código HTML semântico e não semântico na prática?"
- "Como a acessibilidade impacta usuários reais de sistemas de saúde?"
- "Que desafios encontramos ao implementar padrões W3C?"
- "Como o HTML semântico facilita o trabalho em equipe?"

#### 📌 Desafio para a próxima aula:
**Metodologia Ativa - Preparação Técnica:**
- Pesquisar frameworks CSS modernos (Tailwind, Bootstrap, Bulma)
- Analisar vantagens/desvantagens de cada um
- Preparar argumentos para escolha do framework para o Lunysse
- Instalar Tailwind CSS no projeto (seguir documentação oficial)

---

### 📌 Objetos de Aprendizagem

📝 **Materiais Didáticos Utilizados:**
- Boilerplate HTML5 personalizado para o projeto
- Checklist de acessibilidade WCAG 2.1
- Templates de meta tags otimizadas
- Guia de tags semânticas com exemplos práticos
- Ferramentas de validação e teste configuradas
- Documentação W3C traduzida e comentada
- Exemplos de código de sistemas de saúde reais

---

## 🎯 Avaliação

### **Avaliação Formativa (Durante a aula):**
✅ **Uso correto de tags semânticas** - Aplicação apropriada de HTML5  
✅ **Implementação de acessibilidade** - ARIA e navegação por teclado funcionais  
✅ **Qualidade do código** - Estrutura limpa e bem organizada  
✅ **Validação W3C** - Código sem erros de marcação  

### **Avaliação Somativa (Entregáveis):**
✅ **Estruturas HTML completas** - Todas as páginas principais implementadas  
✅ **Acessibilidade implementada** - Testes passando em ferramentas automatizadas  
✅ **SEO otimizado** - Meta tags e estrutura adequadas  

### **Critérios de Qualidade:**
- **Excelente (9-10):** HTML semântico perfeito, acessibilidade completa, SEO otimizado
- **Bom (7-8):** Boa estrutura semântica com pequenos ajustes de acessibilidade
- **Satisfatório (6-7):** Estrutura adequada mas com oportunidades de melhoria
- **Insatisfatório (<6):** Problemas significativos de semântica ou acessibilidade

---

## 🎓 Conclusão

### **Aprendizado Esperado:**

Ao final desta aula, os alunos serão capazes de:

🎯 **Conhecimento Técnico:**
- Estruturar páginas web com HTML5 semântico
- Implementar acessibilidade seguindo padrões WCAG
- Otimizar páginas para SEO e indexação
- Validar código seguindo padrões W3C

🎯 **Aplicação Prática:**
- Criar base estrutural sólida do Sistema Lunysse
- Implementar navegação acessível para todos os usuários
- Preparar páginas para integração com CSS e JavaScript
- Documentar código para facilitar manutenção em equipe

🎯 **Competências Profissionais:**
- Trabalhar com padrões da indústria desde o início
- Considerar acessibilidade como requisito, não opcional
- Criar código limpo e bem documentado
- Colaborar efetivamente usando boas práticas

### **Conexão com o Projeto:**
Esta aula cria a fundação técnica sólida do Sistema Lunysse. O HTML semântico implementado hoje será estilizado na próxima aula com CSS, mantendo a acessibilidade e performance como prioridades.

### **Preparação para Próxima Aula:**
O HTML estruturado hoje receberá vida visual na Aula 7 através da implementação do design system criado na Parte 1, usando Tailwind CSS para aplicar cores, tipografia e layout de forma eficiente e consistente.