# PLANO DE TRABALHO DOCENTE 

## MODELO PEDAGÓGICO SENAC 

**Curso:** Desenvolvedor Full Stack  
**Carga Horária Total:** 108h  
**Carga Horária da UC:** 108h  

**Docente:** Jeremias O Nunes 

---

## PLANO DE AULA – Estilização de Páginas e Integração

📌 **Disciplina:** Construir aplicações front-end  
👨🏫 **Mentor(a):** Jeremias O Nunes  
📆 **Data:** Aula 7 - Parte 2  
⏰ **Duração:** 4 horas  

---

## 📖 Planejamento

### 📌 Conteúdo Formativo

- Fundamentos CSS: seletores, especificidade, box model
- Integração de linguagens de estilo com estrutura HTML
- Tailwind CSS: utility-first approach e configuração
- Implementação do design system criado na Parte 1
- Customização de tema Tailwind para o Sistema Lunysse
- Organização de arquivos CSS e metodologias
- Aplicação de cores, tipografia e espaçamentos
- Criação de componentes Button e Card funcionais

### 🎯 Objetivo Geral

Implementar estilização de páginas web integrando CSS com HTML e utilizando framework Tailwind CSS de forma organizada e eficiente, transformando as estruturas semânticas da aula anterior em interfaces visuais que reflitam o design system do Sistema Lunysse.

### 💡 Habilidades e Competências

✅ **Integrar linguagens de estilo e marcação** - Conectar CSS com HTML semântico  
✅ **Utilizar editor de código** - Dominar workflow de desenvolvimento com CSS  
✅ **Manipular framework** - Configurar e customizar Tailwind CSS  
✅ **Organizar código** - Estruturar CSS de forma escalável e manutenível  

### 📌 Materiais Necessários

📌 Projeto HTML da aula anterior  
📌 Node.js instalado para Tailwind CSS  
📌 Design system da Parte 1 (cores, tipografia, componentes)  
📌 Extensões VS Code: Tailwind CSS IntelliSense  
📌 Navegadores com DevTools para debugging  
📌 Figma com designs de referência  
📌 Ferramentas de teste de contraste  

---

## 🎓 Estratégias de Ensino e Aprendizagem

### Introdução e Contextualização (20 min)

**Metodologia Ativa - Comparação Visual:**
Mostrar a mesma página HTML em 3 estados:
- **Estado 1:** HTML puro (sem CSS)
- **Estado 2:** CSS básico aplicado
- **Estado 3:** Design system completo implementado

**Questões Problematizadoras:**
- "Como o CSS impacta a percepção de credibilidade de um sistema médico?"
- "Por que usar um framework CSS ao invés de CSS puro?"
- "Como manter consistência visual em uma equipe de desenvolvimento?"

**Contextualização do Lunysse:**
Apresentar o desafio: transformar o HTML semântico em uma interface visual que reflita exatamente o design system criado na Parte 1, mantendo performance e acessibilidade.

---

### **Tópico 1: Configuração do Tailwind CSS (45 min)**

#### 📌 Demonstração Prática:
**Metodologia Ativa - Setup ao Vivo:**
- Instalar e configurar Tailwind CSS no projeto:
```bash
npm init -y
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
- Configurar `tailwind.config.js` com tema personalizado:
```javascript
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'dark': '#010440',
        'medium': '#024873', 
        'light': '#2493BF',
        'accent': '#26B0BF',
        'background': '#F2EFE9'
      },
      fontFamily: {
        'primary': ['Inter', 'sans-serif'],
        'secondary': ['Nunito', 'sans-serif']
      }
    }
  }
}
```

#### 📌 Atividade Prática 1:
🎯 **Objetivo:** Configurar Tailwind CSS personalizado para o Sistema Lunysse  
📝 **Tarefa:**
- **Metodologia Ativa - Pair Configuration:**
- **Duplas trabalham na configuração:**
  1. Instalar dependências do Tailwind (10 min)
  2. Configurar arquivo de configuração com paleta Lunysse (15 min)
  3. Criar arquivo CSS base com @tailwind directives (10 min)
  4. Configurar build process (10 min)
  5. Testar configuração com classes personalizadas (10 min)
- **Validação:** Aplicar classe `bg-dark text-background` em elemento teste
- **Troubleshooting:** Duplas ajudam umas às outras com problemas

**Parte do Projeto Construída:** Tailwind CSS configurado e funcionando com tema personalizado

---

### **Tópico 2: Implementação do Design System (60 min)**

#### 📌 Demonstração Prática:
**Metodologia Ativa - Live Coding:**
- Implementar componente Button ao vivo seguindo especificações da Parte 1:
```html
<!-- Botão Primary -->
<button class="
  bg-light hover:bg-accent 
  text-white font-semibold 
  px-6 py-3 rounded-lg 
  transition-all duration-200 
  focus:outline-none focus:ring-2 focus:ring-light focus:ring-offset-2
">
  Agendar Consulta
</button>

<!-- Botão Secondary -->
<button class="
  bg-transparent border border-light 
  text-light hover:bg-accent hover:border-accent hover:text-white
  font-semibold px-6 py-3 rounded-lg 
  transition-all duration-200
">
  Cancelar
</button>
```

#### 📌 Atividade Prática 2:
🎯 **Objetivo:** Implementar todos os componentes do design system  
📝 **Tarefa:**
- **Metodologia Ativa - Component Factory:**
- **Grupos especializados por componente:**
  - **Grupo 1:** Sistema de botões (primary, secondary, danger, sizes)
  - **Grupo 2:** Cards com glassmorphism effect
  - **Grupo 3:** Formulários e inputs estilizados
  - **Grupo 4:** Sistema de navegação (sidebar, navbar)
- **Processo de implementação:**
  1. Analisar design da Parte 1 (10 min)
  2. Identificar classes Tailwind necessárias (15 min)
  3. Implementar componente base (20 min)
  4. Criar variações (estados, tamanhos) (10 min)
  5. Testar responsividade (5 min)
- **Critérios de fidelidade:**
  - Cores exatas da paleta Lunysse
  - Tipografia conforme especificação
  - Espaçamentos consistentes
  - Estados interativos funcionais

**Parte do Projeto Construída:** Biblioteca completa de componentes estilizados

---

### **Tópico 3: Glassmorphism e Efeitos Visuais (50 min)**

#### 📌 Demonstração Prática:
**Metodologia Ativa - Efeitos ao Vivo:**
- Implementar glassmorphism effect usando Tailwind:
```html
<div class="
  bg-white/10 backdrop-blur-md 
  border border-white/20 
  rounded-lg shadow-lg 
  p-6
">
  <h3 class="text-dark font-primary font-semibold text-lg mb-2">
    Dr. João Silva
  </h3>
  <p class="text-dark/70 font-secondary">
    Psicologia Clínica
  </p>
</div>
```
- Mostrar como criar efeitos customizados no Tailwind config
- Demonstrar sombras, gradientes e transições

#### 📌 Atividade Prática 3:
🎯 **Objetivo:** Aplicar efeitos visuais modernos nos componentes  
📝 **Tarefa:**
- **Metodologia Ativa - Visual Effects Lab:**
- **Cenários específicos por dupla:**
  - **Dupla 1-2:** Cards de pacientes com glassmorphism
  - **Dupla 3-4:** Modal de confirmação com overlay
  - **Dupla 5-6:** Dashboard com gradientes sutis
  - **Dupla 7-8:** Sidebar com efeitos de profundidade
- **Experimentação guiada:**
  1. Implementar efeito base (15 min)
  2. Ajustar opacidade e blur (10 min)
  3. Adicionar sombras e bordas (10 min)
  4. Testar em diferentes backgrounds (10 min)
  5. Otimizar para performance (5 min)
- **Validação visual:** Comparar com designs originais da Parte 1

**Parte do Projeto Construída:** Efeitos visuais implementados e otimizados

---

### **Tópico 4: Páginas Completas e Integração (45 min)**

#### 📌 Demonstração Prática:
**Metodologia Ativa - Page Assembly:**
- Montar página de login completa ao vivo:
  - Header com logo e navegação
  - Main com formulário estilizado
  - Footer com informações
  - Aplicar todos os componentes criados
- Mostrar como manter consistência entre páginas
- Demonstrar debugging com DevTools

#### 📌 Atividade Prática 4:
🎯 **Objetivo:** Completar estilização de todas as páginas principais  
📝 **Tarefa:**
- **Metodologia Ativa - Page Sprint:**
- **Grupos finalizam páginas específicas:**
  - **Grupo 1:** Página inicial pública
  - **Grupo 2:** Login e registro
  - **Grupo 3:** Dashboard psicólogo
  - **Grupo 4:** Dashboard paciente
- **Checklist de qualidade:**
  - Todos os componentes aplicados consistentemente
  - Responsividade funcionando
  - Acessibilidade mantida (contraste, foco)
  - Performance otimizada (CSS mínimo)
- **Integração:** Testar navegação entre páginas
- **Validação:** Comparar com designs originais

**Parte do Projeto Construída:** Sistema Lunysse com visual completo implementado

---

### Encerramento e Reflexão (40 min)

#### 📌 Showcase das Páginas:
**Metodologia Ativa - Design Review:**
- Cada grupo apresenta suas páginas em 5 minutos
- Demonstrar fidelidade ao design original
- Mostrar responsividade em diferentes telas
- Outros grupos avaliam usando critérios:
  - **Fidelidade:** Segue o design system?
  - **Consistência:** Componentes uniformes?
  - **Responsividade:** Funciona em mobile?
  - **Performance:** Carrega rapidamente?

#### 📌 Discussão técnica:
**Metodologia Ativa - Code Review:**
- "Quais foram os maiores desafios na implementação?"
- "Como o Tailwind CSS facilitou ou complicou o desenvolvimento?"
- "Que ajustes foram necessários em relação ao design original?"
- "Como garantir consistência quando múltiplas pessoas trabalham no CSS?"

#### 📌 Desafio para a próxima aula:
**Metodologia Ativa - Responsive Challenge:**
- Testar todas as páginas em dispositivos reais
- Identificar problemas de responsividade
- Pesquisar técnicas avançadas de CSS Grid e Flexbox
- Preparar lista de melhorias para implementar na próxima aula

---

### 📌 Objetos de Aprendizagem

📝 **Materiais Didáticos Utilizados:**
- Configuração Tailwind personalizada para Lunysse
- Biblioteca de componentes com código CSS
- Guia de implementação de glassmorphism
- Checklist de fidelidade ao design system
- Templates de páginas com estrutura base
- Ferramentas de debugging CSS
- Documentação de classes Tailwind customizadas

---

## 🎯 Avaliação

### **Avaliação Formativa (Durante a aula):**
✅ **Configuração correta do Tailwind** - Setup funcionando sem erros  
✅ **Fidelidade ao design system** - Implementação precisa dos componentes  
✅ **Qualidade do código CSS** - Organização e boas práticas  
✅ **Integração HTML/CSS** - Estrutura semântica mantida  

### **Avaliação Somativa (Entregáveis):**
✅ **Componentes estilizados** - Biblioteca completa funcionando  
✅ **Páginas implementadas** - Visual completo aplicado  
✅ **Configuração documentada** - Setup replicável por outros  

### **Critérios de Qualidade:**
- **Excelente (9-10):** Implementação perfeita do design system, código limpo e otimizado
- **Bom (7-8):** Boa fidelidade visual com pequenos ajustes necessários
- **Satisfatório (6-7):** Implementação adequada mas com oportunidades de melhoria
- **Insatisfatório (<6):** Problemas significativos de implementação ou fidelidade

---

## 🎓 Conclusão

### **Aprendizado Esperado:**

Ao final desta aula, os alunos serão capazes de:

🎯 **Conhecimento Técnico:**
- Configurar e customizar Tailwind CSS para projetos específicos
- Implementar design systems com fidelidade e consistência
- Aplicar efeitos visuais modernos usando CSS utilitário
- Integrar CSS com HTML mantendo semântica e acessibilidade

🎯 **Aplicação Prática:**
- Transformar designs visuais em código CSS funcional
- Criar biblioteca de componentes reutilizáveis
- Manter consistência visual em múltiplas páginas
- Otimizar CSS para performance e manutenibilidade

🎯 **Competências Profissionais:**
- Trabalhar com frameworks CSS modernos
- Colaborar efetivamente usando design systems
- Manter qualidade visual em projetos em equipe
- Documentar e organizar código CSS profissionalmente

### **Conexão com o Projeto:**
Esta aula transforma o Sistema Lunysse de estruturas HTML em interfaces visuais completas. O CSS implementado hoje será refinado na próxima aula com técnicas avançadas de responsividade, completando a camada visual do projeto.

### **Preparação para Próxima Aula:**
O visual implementado hoje será otimizado na Aula 8 com técnicas avançadas de layout responsivo, garantindo que o Sistema Lunysse funcione perfeitamente em todos os dispositivos e contextos de uso.