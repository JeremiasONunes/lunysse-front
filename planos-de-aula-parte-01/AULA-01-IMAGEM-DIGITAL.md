# PLANO DE TRABALHO DOCENTE 

## MODELO PEDAGÓGICO SENAC 

**Curso:** Desenvolvedor Full Stack  
**Carga Horária Total:** 108h  
**Carga Horária da UC:** 108h  

**Docente:** Jeremias O Nunes 

---

## PLANO DE AULA – Imagem Digital: Conceitos Básicos e Formatos

📌 **Disciplina:** Construir aplicações front-end  
👨🏫 **Mentor(a):** Jeremias O Nunes  
📆 **Data:** Aula 1 - Parte 1  
⏰ **Duração:** 4 horas  

---

## 📖 Planejamento

### 📌 Conteúdo Formativo

- Conceitos fundamentais de imagem digital: vetor vs bitmap
- Formatos de imagem para web: PNG, JPEG, SVG, GIF
- Unidades de medida: pixels, DPI, densidade de pixels
- Taxa de bits e impacto na performance web
- Otimização de assets para o Sistema Lunysse
- Preparação de ícones e elementos visuais

### 🎯 Objetivo Geral

Capacitar o aluno a compreender e aplicar conceitos fundamentais de imagem digital, diferenciando formatos apropriados para web e otimizando assets visuais para o projeto Sistema Lunysse, estabelecendo as bases técnicas para criação de interfaces modernas e performáticas.

### 💡 Habilidades e Competências

✅ **Interpretar requisitos de projetos** - Analisar necessidades visuais do Sistema Lunysse  
✅ **Manipular imagens no padrão RGB** - Trabalhar com cores digitais para web  
✅ **Organizar conteúdo visual para web** - Estruturar assets de forma eficiente  
✅ **Utilizar editor de código** - Integrar assets otimizados no projeto  

### 📌 Materiais Necessários

📌 Computadores com acesso à internet  
📌 Software de design (Figma, GIMP ou Photoshop)  
📌 Editor de código (VS Code)  
📌 Navegadores web (Chrome, Firefox, Safari)  
📌 Assets do Sistema Lunysse (logo, ícones base)  
📌 Ferramentas online: TinyPNG, SVGOMG, Favicon Generator  
📌 Projetor para demonstrações  

---

## 🎓 Estratégias de Ensino e Aprendizagem

### Introdução e Contextualização (30 min)

**Metodologia Ativa - Problematização:**
Iniciaremos com uma análise crítica de websites de saúde digital existentes, identificando problemas visuais comuns:
- "Por que alguns sites carregam lentamente?"
- "Como a qualidade visual impacta a confiança em sistemas de saúde?"
- "Qual a diferença entre o logo do Google (SVG) e uma foto de perfil (JPEG)?"

**Contextualização do Sistema Lunysse:**
Apresentação do desafio real: criar uma plataforma visual moderna para agendamento psicológico que seja rápida, acessível e profissional.

---

### **Tópico 1: Conceitos de Vetor vs Bitmap (45 min)**

#### 📌 Demonstração Prática:
**Metodologia Ativa - Demonstração Interativa:**
- Abrir o Figma e mostrar ao vivo a diferença entre:
  - Desenhar um ícone vetorial (círculo, quadrado)
  - Importar uma foto bitmap
  - Fazer zoom extremo em ambos para mostrar a diferença
- Demonstrar como o logo do Lunysse deve ser vetorial para diferentes tamanhos

#### 📌 Atividade Prática 1:
🎯 **Objetivo:** Identificar e classificar diferentes tipos de imagem  
📝 **Tarefa:** 
- **Metodologia Ativa - Aprendizagem Baseada em Problemas:**
- Em duplas, analisar 10 elementos visuais do Sistema Lunysse:
  - Logo principal
  - Ícones da sidebar (Dashboard, Pacientes, Agendamento, etc.)
  - Fotos de perfil de usuários
  - Gráficos de relatórios
  - Botões e elementos de interface
- Classificar cada elemento como "Vetor" ou "Bitmap" e justificar
- Apresentar conclusões para a turma (5 min por dupla)

**Parte do Projeto Construída:** Análise e catalogação de todos os assets visuais necessários para o Sistema Lunysse

---

### **Tópico 2: Formatos de Imagem para Web (60 min)**

#### 📌 Demonstração Prática:
**Metodologia Ativa - Experimentação Guiada:**
- Pegar o logo do Lunysse e salvar em 4 formatos diferentes
- Comparar tamanhos de arquivo e qualidade visual
- Mostrar quando usar cada formato:
  - **PNG:** Logo com transparência, ícones com poucos cores
  - **JPEG:** Fotos de perfil de psicólogos e pacientes
  - **SVG:** Ícones da interface, logo responsivo
  - **GIF:** Animações de loading (se necessário)

#### 📌 Atividade Prática 2:
🎯 **Objetivo:** Otimizar assets reais do Sistema Lunysse  
📝 **Tarefa:**
- **Metodologia Ativa - Projeto Hands-on:**
- Cada aluno recebe um conjunto de assets "problemáticos":
  - Logo em JPEG (deveria ser SVG)
  - Ícone em PNG grande (deveria ser SVG otimizado)
  - Foto de perfil em PNG (deveria ser JPEG)
- Converter para formatos apropriados usando ferramentas online
- Comparar tamanhos antes/depois
- Documentar economia de bytes obtida

**Parte do Projeto Construída:** Biblioteca de assets otimizados do Sistema Lunysse com formatos corretos

---

### **Tópico 3: Densidade de Pixels e Responsividade (45 min)**

#### 📌 Demonstração Prática:
**Metodologia Ativa - Investigação Prática:**
- Mostrar o mesmo ícone em diferentes densidades:
  - Tela normal (1x)
  - Tela Retina (2x)
  - Tela 4K (3x)
- Demonstrar como criar favicons em múltiplas resoluções
- Explicar viewport units vs pixels absolutos

#### 📌 Atividade Prática 3:
🎯 **Objetivo:** Criar sistema de ícones responsivo  
📝 **Tarefa:**
- **Metodologia Ativa - Design Thinking:**
- Grupos de 3-4 alunos criam conjunto completo de favicons para o Lunysse:
  - 16x16, 32x32, 48x48, 180x180, 192x192, 512x512
- Testar em diferentes dispositivos (celular, tablet, desktop)
- Usar Favicon Generator para automatizar processo
- Implementar no código HTML básico

**Parte do Projeto Construída:** Sistema completo de favicons e ícones responsivos implementados

---

### **Tópico 4: Taxa de Bits e Performance (30 min)**

#### 📌 Demonstração Prática:
**Metodologia Ativa - Análise de Performance:**
- Usar Chrome DevTools para medir tempo de carregamento
- Comparar página com imagens otimizadas vs não otimizadas
- Mostrar impacto real na experiência do usuário

#### 📌 Atividade Prática 4:
🎯 **Objetivo:** Otimizar performance de carregamento  
📝 **Tarefa:**
- **Metodologia Ativa - Gamificação:**
- "Desafio da Otimização": cada aluno recebe uma página HTML com imagens pesadas
- Meta: reduzir tempo de carregamento em 50%
- Usar TinyPNG, compressão JPEG, conversão para WebP
- Ranking dos melhores resultados

**Parte do Projeto Construída:** Página de login do Sistema Lunysse otimizada para carregamento rápido

---

### Encerramento e Reflexão (30 min)

#### 📌 Discussão em grupo:
**Metodologia Ativa - Círculo de Aprendizagem:**
- "Como a otimização de imagens impacta a experiência do usuário em sistemas de saúde?"
- "Quais critérios usar para escolher formatos de imagem em projetos reais?"
- "Como explicar para um cliente a importância da otimização visual?"

#### 📌 Desafio para a próxima aula:
**Metodologia Ativa - Aprendizagem Baseada em Projetos:**
- Pesquisar 3 aplicações de saúde digital (Telemedicina, prontuário eletrônico, etc.)
- Analisar suas escolhas visuais: paleta de cores, tipografia, ícones
- Preparar apresentação de 2 minutos sobre insights encontrados
- Trazer ideias para aplicar no Sistema Lunysse

---

### 📌 Objetos de Aprendizagem

📝 **Materiais Didáticos Utilizados:**
- Apresentação interativa sobre formatos de imagem
- Assets originais do Sistema Lunysse para prática
- Ferramentas online de otimização (TinyPNG, SVGOMG)
- Templates HTML para testes de performance
- Checklist de otimização de imagens para web
- Biblioteca de ícones médicos para referência

---

## 🎯 Avaliação

### **Avaliação Formativa (Durante a aula):**
✅ **Participação ativa nas discussões** - Contribuições relevantes sobre otimização  
✅ **Qualidade das otimizações realizadas** - Redução efetiva de tamanho mantendo qualidade  
✅ **Colaboração em atividades em grupo** - Trabalho efetivo em equipe  
✅ **Aplicação prática dos conceitos** - Uso correto de formatos apropriados  

### **Avaliação Somativa (Entregáveis):**
✅ **Portfolio de assets otimizados** - Biblioteca completa para o Sistema Lunysse  
✅ **Documentação de otimizações** - Relatório com antes/depois e justificativas  
✅ **Implementação técnica** - Favicons funcionando corretamente no HTML  

### **Critérios de Qualidade:**
- **Excelente (9-10):** Assets otimizados com redução >70% mantendo qualidade visual
- **Bom (7-8):** Assets otimizados com redução >50% e qualidade adequada
- **Satisfatório (6-7):** Assets otimizados com redução >30% e qualidade aceitável
- **Insatisfatório (<6):** Otimizações inadequadas ou qualidade comprometida

---

## 🎓 Conclusão

### **Aprendizado Esperado:**

Ao final desta aula, os alunos serão capazes de:

🎯 **Conhecimento Técnico:**
- Distinguir claramente entre imagens vetoriais e bitmap
- Escolher formatos apropriados para diferentes tipos de conteúdo visual
- Calcular e otimizar taxa de bits para performance web
- Implementar sistemas de ícones responsivos

🎯 **Aplicação Prática:**
- Otimizar assets visuais do Sistema Lunysse com critérios técnicos
- Implementar favicons funcionais em projetos web
- Medir e melhorar performance de carregamento de imagens
- Documentar decisões técnicas de otimização

🎯 **Competências Profissionais:**
- Tomar decisões informadas sobre assets visuais em projetos reais
- Comunicar benefícios da otimização para clientes e equipes
- Estabelecer workflows eficientes de preparação de assets
- Aplicar boas práticas de performance desde o início do projeto

### **Conexão com o Projeto:**
Esta aula estabelece as fundações visuais do Sistema Lunysse, criando uma biblioteca de assets otimizados que será utilizada em todas as aulas subsequentes. Os alunos saem com componentes visuais reais e funcionais que darão vida ao projeto.

### **Preparação para Próxima Aula:**
Os assets otimizados criados hoje serão integrados ao framework de comunicação visual na Aula 2, onde trabalharemos com paleta de cores, tipografia e grid system do Sistema Lunysse.