# PLANO DE TRABALHO DOCENTE

## MODELO PEDAGÓGICO SENAC

**Curso:** Desenvolvedor Full Stack  
**Carga Horária Total:** 108h  
**Carga Horária da UC:** 108h  
**Docente:** Jeremias O Nunes

---

# PLANO DE AULA – Manipulação Avançada do DOM e Eventos Complexos

📌 **Disciplina:** Desenvolvimento Front-end Avançado  
👨🏫 **Mentor(a):** Jeremias O Nunes  
📆 **Data:** Aula 18 - Parte 3  
⏰ **Duração:** 4 horas

---

## 📖 Planejamento

### 📌 Conteúdo Formativo

• Implementação de Custom Events e Event Delegation para arquitetura escalável  
• Workshop intensivo de performance em manipulação DOM com técnicas avançadas  
• Criação de sistema de notificações avançado com múltiplos canais  
• Laboratório de Intersection Observer e APIs modernas do navegador  
• Desenvolvimento de filtros dinâmicos complexos com debouncing e throttling  
• Implementação de drag-and-drop para agendamentos com feedback visual  
• Integração com Web APIs modernas (Notification, Geolocation, Web Storage)  
• Otimização de performance com Virtual DOM concepts e batch updates

### 🎯 Objetivo Geral

Avançar em técnicas de manipulação DOM e implementação de eventos complexos seguindo padrões ECMAScript modernos, criando interações sofisticadas e performáticas no Sistema Lunysse que proporcionem uma experiência de usuário fluida e responsiva em aplicações médicas críticas.

### 💡 Habilidades e Competências

✅ **Custom Events:** Criar e gerenciar eventos personalizados para comunicação entre componentes  
✅ **Event Delegation:** Implementar delegação eficiente para elementos dinâmicos  
✅ **Performance DOM:** Otimizar manipulações DOM para máxima performance  
✅ **Modern APIs:** Integrar APIs modernas do navegador (Intersection Observer, Notification)  
✅ **Drag & Drop:** Implementar interfaces drag-and-drop complexas e acessíveis  
✅ **Real-time Updates:** Criar sistemas de atualização em tempo real  
✅ **Error Handling:** Implementar tratamento robusto de erros em eventos

### 📌 Materiais Necessários

📌 Sistema Lunysse com arquitetura OOP implementada  
📌 Navegadores modernos com DevTools para debugging  
📌 Ferramentas de performance profiling (Chrome DevTools Performance tab)  
📌 Dispositivos touch para teste de drag-and-drop mobile  
📌 Extensões de acessibilidade para teste de interações  
📌 Documentação ECMAScript 2024 para referência  
📌 Templates de eventos customizados para contexto médico

---

## 🎓 Estratégias de Ensino e Aprendizagem

### Introdução e Contextualização (40 min)

**Reflexão inicial:** "Como eventos complexos e manipulação DOM eficiente impactam a experiência do usuário em aplicações médicas críticas?"

Discussão aprofundada sobre a importância de interações fluidas em sistemas de saúde, onde delays ou falhas podem impactar diretamente o atendimento ao paciente. Análise de casos reais onde performance inadequada de DOM causou problemas em sistemas hospitalares.

**Contextualização profissional:** Apresentação de técnicas utilizadas por aplicações médicas líderes (Epic MyChart, Cerner PowerChart) para gerenciar interfaces complexas com milhares de elementos DOM simultâneos. Demonstração de como eventos bem estruturados facilitam integração com equipamentos médicos e sistemas externos.

**Demonstração de problema:** Análise de performance do Sistema Lunysse atual identificando gargalos em manipulação DOM e oportunidades de otimização com eventos customizados.

---

### Tópico 1: Custom Events e Event Delegation Avançada (80 min)

#### 📌 Demonstração Prática:
O mentor demonstrará implementação completa de sistema de eventos customizados:
- **CustomEvent API:** Criação de eventos específicos para contexto médico
- **Event bubbling e capturing:** Controle avançado de propagação
- **Event delegation:** Gerenciamento eficiente de elementos dinâmicos
- **Event namespacing:** Organização de eventos por módulos
- **Cross-component communication:** Comunicação entre componentes React

```javascript
// Exemplo demonstrado pelo mentor
class MedicalEventSystem {
  constructor() {
    this.eventTarget = new EventTarget();
    this.setupEventDelegation();
  }

  // Eventos customizados para contexto médico
  createAppointmentEvent(appointmentData) {
    const event = new CustomEvent('appointment:created', {
      detail: {
        appointment: appointmentData,
        timestamp: new Date().toISOString(),
        source: 'user-action'
      },
      bubbles: true,
      cancelable: true
    });
    return event;
  }

  // Sistema de delegação para elementos dinâmicos
  setupEventDelegation() {
    document.addEventListener('click', (e) => {
      // Delegação para botões de ação
      if (e.target.matches('[data-action]')) {
        const action = e.target.dataset.action;
        const context = e.target.dataset.context;
        this.handleAction(action, context, e);
      }

      // Delegação para cards de paciente
      if (e.target.closest('.patient-card')) {
        const patientId = e.target.closest('.patient-card').dataset.patientId;
        this.handlePatientInteraction(patientId, e);
      }
    });

    // Delegação para formulários dinâmicos
    document.addEventListener('input', (e) => {
      if (e.target.matches('[data-validate]')) {
        this.validateField(e.target);
      }
    });
  }

  // Comunicação entre componentes
  emit(eventName, data) {
    const event = new CustomEvent(eventName, { detail: data });
    this.eventTarget.dispatchEvent(event);
  }

  on(eventName, callback) {
    this.eventTarget.addEventListener(eventName, callback);
  }

  off(eventName, callback) {
    this.eventTarget.removeEventListener(eventName, callback);
  }
}
```

#### 📌 Atividade Prática 1:
🎯 **Objetivo:** Implementar sistema completo de eventos customizados no Sistema Lunysse  
📝 **Tarefa:**
- Criar MedicalEventSystem para gerenciamento centralizado de eventos
- Implementar eventos customizados para todas as ações médicas (criar consulta, atualizar paciente, etc.)
- Desenvolver sistema de delegação para elementos dinâmicos da interface
- Criar namespace de eventos por módulo (appointments, patients, sessions)
- Implementar comunicação entre componentes React usando eventos customizados
- Desenvolver sistema de logging de eventos para auditoria
- Criar middleware para validação e transformação de eventos
- Implementar sistema de replay de eventos para debugging
- Testar performance com milhares de elementos dinâmicos

---

### Tópico 2: Performance DOM e Técnicas de Otimização (70 min)

#### 📌 Demonstração Prática:
Técnicas avançadas de otimização DOM:
- **Batch DOM updates:** Agrupamento de modificações DOM
- **DocumentFragment:** Construção eficiente de elementos
- **Virtual scrolling:** Renderização de listas grandes
- **Debouncing e throttling:** Controle de frequência de eventos
- **RequestAnimationFrame:** Sincronização com refresh rate

```javascript
// Exemplo demonstrado pelo mentor
class DOMOptimizer {
  constructor() {
    this.updateQueue = [];
    this.isUpdating = false;
  }

  // Batch updates para performance
  batchUpdate(updateFn) {
    this.updateQueue.push(updateFn);
    if (!this.isUpdating) {
      this.isUpdating = true;
      requestAnimationFrame(() => {
        this.flushUpdates();
      });
    }
  }

  flushUpdates() {
    const fragment = document.createDocumentFragment();
    
    this.updateQueue.forEach(updateFn => {
      updateFn(fragment);
    });
    
    // Aplicar todas as mudanças de uma vez
    document.body.appendChild(fragment);
    
    this.updateQueue = [];
    this.isUpdating = false;
  }

  // Virtual scrolling para listas grandes
  createVirtualList(container, items, renderItem) {
    const itemHeight = 60; // altura fixa dos itens
    const containerHeight = container.clientHeight;
    const visibleItems = Math.ceil(containerHeight / itemHeight);
    
    let scrollTop = 0;
    
    const render = () => {
      const startIndex = Math.floor(scrollTop / itemHeight);
      const endIndex = Math.min(startIndex + visibleItems + 1, items.length);
      
      container.innerHTML = '';
      container.style.height = `${items.length * itemHeight}px`;
      
      for (let i = startIndex; i < endIndex; i++) {
        const item = renderItem(items[i], i);
        item.style.position = 'absolute';
        item.style.top = `${i * itemHeight}px`;
        container.appendChild(item);
      }
    };

    container.addEventListener('scroll', this.throttle((e) => {
      scrollTop = e.target.scrollTop;
      render();
    }, 16)); // 60fps

    render();
  }

  // Debounce para inputs
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Throttle para scroll events
  throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
}
```

#### 📌 Atividade Prática 2:
🎯 **Objetivo:** Otimizar performance DOM do Sistema Lunysse  
📝 **Tarefa:**
- Implementar sistema de batch updates para modificações DOM
- Criar virtual scrolling para lista de pacientes e agendamentos
- Implementar debouncing em campos de busca e filtros
- Desenvolver throttling para eventos de scroll e resize
- Otimizar renderização de componentes com muitos elementos
- Implementar lazy loading para conteúdo não crítico
- Criar sistema de cache DOM para elementos reutilizáveis
- Medir performance antes/depois das otimizações
- Implementar monitoring de performance em tempo real

---

### Pausa (15 min)

---

### Tópico 3: Intersection Observer e APIs Modernas (75 min)

#### 📌 Demonstração Prática:
Integração com APIs modernas do navegador:
- **Intersection Observer:** Detecção eficiente de visibilidade
- **Mutation Observer:** Monitoramento de mudanças DOM
- **Resize Observer:** Detecção de mudanças de tamanho
- **Notification API:** Notificações nativas do sistema
- **Web Storage API:** Armazenamento local avançado

```javascript
// Exemplo demonstrado pelo mentor
class ModernAPIIntegration {
  constructor() {
    this.setupIntersectionObserver();
    this.setupMutationObserver();
    this.setupNotificationSystem();
  }

  // Intersection Observer para lazy loading e analytics
  setupIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '50px',
      threshold: [0, 0.25, 0.5, 0.75, 1]
    };

    this.intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Lazy load de imagens
          if (entry.target.dataset.src) {
            entry.target.src = entry.target.dataset.src;
            entry.target.removeAttribute('data-src');
          }

          // Analytics de visualização
          this.trackElementView(entry.target, entry.intersectionRatio);

          // Animações de entrada
          if (entry.target.classList.contains('animate-on-scroll')) {
            entry.target.classList.add('animated');
          }
        }
      });
    }, options);
  }

  // Mutation Observer para mudanças dinâmicas
  setupMutationObserver() {
    this.mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
          // Novos elementos adicionados
          mutation.addedNodes.forEach(node => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              this.initializeNewElement(node);
            }
          });
        }

        if (mutation.type === 'attributes') {
          // Atributos modificados
          this.handleAttributeChange(mutation.target, mutation.attributeName);
        }
      });
    });

    this.mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class', 'data-status']
    });
  }

  // Sistema de notificações nativas
  async setupNotificationSystem() {
    if ('Notification' in window) {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        this.notificationsEnabled = true;
      }
    }
  }

  showNotification(title, options = {}) {
    if (this.notificationsEnabled) {
      const notification = new Notification(title, {
        icon: '/logo.png',
        badge: '/badge.png',
        ...options
      });

      notification.onclick = () => {
        window.focus();
        notification.close();
      };

      // Auto close após 5 segundos
      setTimeout(() => notification.close(), 5000);
    }
  }

  // Integração com Web Storage
  saveToStorage(key, data, type = 'local') {
    const storage = type === 'session' ? sessionStorage : localStorage;
    try {
      storage.setItem(key, JSON.stringify({
        data,
        timestamp: Date.now(),
        version: '1.0'
      }));
    } catch (error) {
      console.error('Storage error:', error);
    }
  }

  loadFromStorage(key, type = 'local') {
    const storage = type === 'session' ? sessionStorage : localStorage;
    try {
      const item = storage.getItem(key);
      if (item) {
        const parsed = JSON.parse(item);
        return parsed.data;
      }
    } catch (error) {
      console.error('Storage error:', error);
    }
    return null;
  }
}
```

#### 📌 Atividade Prática 3:
🎯 **Objetivo:** Integrar APIs modernas no Sistema Lunysse  
📝 **Tarefa:**
- Implementar Intersection Observer para lazy loading de imagens e componentes
- Criar sistema de analytics de visualização usando Intersection Observer
- Desenvolver Mutation Observer para monitoramento de mudanças dinâmicas
- Implementar sistema de notificações nativas para lembretes de consulta
- Criar Resize Observer para componentes adaptativos
- Desenvolver sistema avançado de Web Storage com versionamento
- Implementar Background Sync para operações offline
- Criar sistema de geolocalização para clínicas próximas
- Testar compatibilidade e fallbacks para navegadores mais antigos

---

### Tópico 4: Drag-and-Drop e Filtros Dinâmicos (60 min)

#### 📌 Demonstração Prática:
Implementação de interfaces drag-and-drop complexas:
- **HTML5 Drag API:** Implementação nativa de drag-and-drop
- **Touch events:** Suporte para dispositivos móveis
- **Visual feedback:** Indicadores visuais durante drag
- **Drop zones:** Áreas de destino inteligentes
- **Accessibility:** Suporte para navegação por teclado

```javascript
// Exemplo demonstrado pelo mentor
class DragDropSystem {
  constructor() {
    this.draggedElement = null;
    this.dropZones = new Map();
    this.setupDragAndDrop();
  }

  setupDragAndDrop() {
    // Configurar elementos arrastáveis
    document.addEventListener('dragstart', (e) => {
      if (e.target.draggable) {
        this.draggedElement = e.target;
        e.target.classList.add('dragging');
        
        // Configurar dados do drag
        e.dataTransfer.setData('text/plain', e.target.dataset.id);
        e.dataTransfer.effectAllowed = 'move';
        
        // Feedback visual
        this.showDropZones(e.target.dataset.type);
      }
    });

    document.addEventListener('dragend', (e) => {
      if (e.target.draggable) {
        e.target.classList.remove('dragging');
        this.hideDropZones();
        this.draggedElement = null;
      }
    });

    // Configurar zonas de drop
    document.addEventListener('dragover', (e) => {
      const dropZone = e.target.closest('[data-drop-zone]');
      if (dropZone && this.canDrop(dropZone)) {
        e.preventDefault();
        dropZone.classList.add('drag-over');
      }
    });

    document.addEventListener('dragleave', (e) => {
      const dropZone = e.target.closest('[data-drop-zone]');
      if (dropZone) {
        dropZone.classList.remove('drag-over');
      }
    });

    document.addEventListener('drop', (e) => {
      e.preventDefault();
      const dropZone = e.target.closest('[data-drop-zone]');
      if (dropZone && this.canDrop(dropZone)) {
        this.handleDrop(dropZone, e);
        dropZone.classList.remove('drag-over');
      }
    });

    // Suporte para touch devices
    this.setupTouchDragDrop();
  }

  // Sistema de filtros dinâmicos
  createDynamicFilter(container, items, filterConfig) {
    const filterState = new Map();
    
    // Criar interface de filtros
    const filterContainer = document.createElement('div');
    filterContainer.className = 'filter-container';
    
    filterConfig.forEach(config => {
      const filter = this.createFilterElement(config);
      filterContainer.appendChild(filter);
      
      filter.addEventListener('change', (e) => {
        filterState.set(config.key, e.target.value);
        this.applyFilters(items, filterState, container);
      });
    });

    container.parentNode.insertBefore(filterContainer, container);
    
    // Busca em tempo real
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Buscar...';
    searchInput.className = 'search-input';
    
    searchInput.addEventListener('input', this.debounce((e) => {
      this.applySearch(items, e.target.value, container);
    }, 300));
    
    filterContainer.appendChild(searchInput);
  }

  applyFilters(items, filterState, container) {
    const filteredItems = items.filter(item => {
      return Array.from(filterState.entries()).every(([key, value]) => {
        if (!value) return true;
        return item.dataset[key] === value;
      });
    });

    this.renderFilteredItems(filteredItems, container);
  }

  // Suporte para touch devices
  setupTouchDragDrop() {
    let touchItem = null;
    let touchOffset = { x: 0, y: 0 };

    document.addEventListener('touchstart', (e) => {
      const draggable = e.target.closest('[draggable]');
      if (draggable) {
        touchItem = draggable;
        const touch = e.touches[0];
        const rect = draggable.getBoundingClientRect();
        touchOffset.x = touch.clientX - rect.left;
        touchOffset.y = touch.clientY - rect.top;
        
        draggable.classList.add('touch-dragging');
      }
    });

    document.addEventListener('touchmove', (e) => {
      if (touchItem) {
        e.preventDefault();
        const touch = e.touches[0];
        touchItem.style.position = 'fixed';
        touchItem.style.left = `${touch.clientX - touchOffset.x}px`;
        touchItem.style.top = `${touch.clientY - touchOffset.y}px`;
        touchItem.style.zIndex = '1000';
      }
    });

    document.addEventListener('touchend', (e) => {
      if (touchItem) {
        const touch = e.changedTouches[0];
        const elementBelow = document.elementFromPoint(touch.clientX, touch.clientY);
        const dropZone = elementBelow?.closest('[data-drop-zone]');
        
        if (dropZone && this.canDrop(dropZone)) {
          this.handleDrop(dropZone, { dataTransfer: { getData: () => touchItem.dataset.id } });
        }
        
        // Reset styles
        touchItem.style.position = '';
        touchItem.style.left = '';
        touchItem.style.top = '';
        touchItem.style.zIndex = '';
        touchItem.classList.remove('touch-dragging');
        touchItem = null;
      }
    });
  }
}
```

#### 📌 Atividade Prática 4:
🎯 **Objetivo:** Implementar drag-and-drop e filtros avançados no Sistema Lunysse  
📝 **Tarefa:**
- Criar sistema drag-and-drop para reorganização de agendamentos
- Implementar drag-and-drop de pacientes entre psicólogos
- Desenvolver filtros dinâmicos para lista de pacientes e consultas
- Criar sistema de busca em tempo real com highlighting
- Implementar suporte completo para dispositivos touch
- Desenvolver feedback visual avançado durante drag operations
- Criar sistema de validação de drop zones
- Implementar undo/redo para operações de drag-and-drop
- Adicionar suporte para acessibilidade (navegação por teclado)
- Testar performance com grandes volumes de dados

---

### Encerramento e Reflexão (40 min)

#### 📌 Discussão em grupo:
**Tema:** "Como eventos complexos e manipulação DOM eficiente contribuem para a confiabilidade de sistemas médicos?"

Reflexão aprofundada sobre:
- **Performance crítica:** Importância da responsividade em sistemas de saúde
- **Experiência do usuário:** Como interações fluidas impactam a produtividade médica
- **Acessibilidade:** Garantir que todos os usuários possam interagir eficientemente
- **Escalabilidade:** Como técnicas avançadas permitem crescimento do sistema
- **Manutenibilidade:** Benefícios de código bem estruturado para equipes
- **Integração:** Como eventos customizados facilitam integração com outros sistemas

#### 📌 Desafio para a próxima aula:
Criar um dashboard interativo avançado para o Sistema Lunysse:
- Implementar widgets drag-and-drop para personalização
- Criar sistema de filtros e busca em tempo real
- Desenvolver notificações inteligentes baseadas em eventos
- Implementar analytics de uso com Intersection Observer
- Adicionar suporte completo para dispositivos móveis

---

## 📌 Objetos de Aprendizagem

📝 **Event System Library:** Biblioteca completa de eventos customizados para contexto médico  
📝 **DOM Optimization Guide:** Manual de técnicas de otimização DOM  
📝 **Modern APIs Integration:** Guia de integração com APIs modernas do navegador  
📝 **Drag-Drop Framework:** Framework reutilizável para interfaces drag-and-drop  
📝 **Performance Monitoring:** Sistema de monitoramento de performance em tempo real  
📝 **Accessibility Checklist:** Lista de verificação para interações acessíveis  
📝 **Mobile Touch Support:** Biblioteca de suporte para dispositivos touch

---

## 🎯 Avaliação

### Critérios de Avaliação:

✅ **Implementação de Eventos (25%):** Qualidade e eficiência do sistema de eventos customizados  
✅ **Performance DOM (25%):** Otimizações implementadas e melhorias mensuráveis  
✅ **Integração de APIs (25%):** Uso adequado de APIs modernas do navegador  
✅ **Interações Complexas (25%):** Qualidade das implementações drag-and-drop e filtros

### Instrumentos de Avaliação:

- **Performance testing:** Medição de melhorias de performance
- **Usability testing:** Teste de interações com usuários reais
- **Code review:** Análise da qualidade e organização do código
- **Cross-browser testing:** Verificação de compatibilidade
- **Accessibility audit:** Validação de acessibilidade das interações

---

## 🎓 Conclusão

Ao final desta aula, os alunos serão capazes de:

- **Criar sistemas de eventos customizados** robustos e escaláveis
- **Otimizar performance DOM** usando técnicas avançadas
- **Integrar APIs modernas** do navegador de forma eficiente
- **Implementar interfaces drag-and-drop** complexas e acessíveis
- **Desenvolver filtros dinâmicos** com performance otimizada
- **Criar interações fluidas** que melhoram significativamente a UX

Esta competência é essencial para desenvolvedores front-end avançados, estabelecendo um padrão profissional de interatividade que diferencia aplicações no mercado e garante experiências de usuário excepcionais em sistemas críticos.

---

**Indicador de Competência Trabalhado:**  
✔️ **Indicador 3** - Utiliza linguagem de programação de script, de acordo com os padrões do ECMAScript

**Metodologia Ativa Aplicada:**  
- **Hands-on Development:** Implementação prática intensiva de interações complexas
- **Performance-Driven Learning:** Aprendizado focado em otimização e métricas  
- **User-Centered Design:** Desenvolvimento centrado na experiência do usuário  
- **Progressive Enhancement:** Melhoria incremental de funcionalidades existentes