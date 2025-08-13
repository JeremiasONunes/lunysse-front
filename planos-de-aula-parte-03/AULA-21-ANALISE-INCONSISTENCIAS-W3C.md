# PLANO DE TRABALHO DOCENTE

## MODELO PEDAGÓGICO SENAC

**Curso:** Desenvolvedor Full Stack  
**Carga Horária Total:** 108h  
**Carga Horária da UC:** 108h  
**Docente:** Jeremias O Nunes

---

# PLANO DE AULA – Análise de Inconsistências e Padrões W3C

📌 **Disciplina:** Desenvolvimento Front-end Avançado  
👨🏫 **Mentor(a):** Jeremias O Nunes  
📆 **Data:** Aula 21 - Parte 3  
⏰ **Duração:** 4 horas

---

## 📖 Planejamento

### 📌 Conteúdo Formativo

• Auditoria completa do Sistema Lunysse com ferramentas W3C especializadas  
• Workshop intensivo de correção sistemática de inconsistências e não-conformidades  
• Implementação de testes automatizados de qualidade e conformidade contínua  
• Laboratório avançado de validação cross-browser com foco em compatibilidade  
• Criação de checklist abrangente de conformidade W3C para desenvolvimento  
• Documentação detalhada de padrões de qualidade implementados no projeto  
• Implementação de pipeline de CI/CD com validação automática de padrões  
• Desenvolvimento de sistema de monitoramento contínuo de conformidade

### 🎯 Objetivo Geral

Implementar metodologia sistemática e rigorosa para identificação e correção de inconsistências seguindo padrões W3C, garantindo conformidade total do Sistema Lunysse com especificações web modernas e estabelecendo processos de qualidade que assegurem manutenção contínua dos padrões implementados.

### 💡 Habilidades e Competências

✅ **Auditoria W3C:** Dominar ferramentas e processos de validação de padrões web  
✅ **Correção Sistemática:** Implementar metodologias estruturadas de correção de problemas  
✅ **Testes Automatizados:** Criar suites de testes para validação contínua de qualidade  
✅ **Cross-browser Testing:** Garantir compatibilidade em diferentes navegadores e dispositivos  
✅ **Documentação de Qualidade:** Criar documentação técnica de padrões e processos  
✅ **CI/CD Integration:** Integrar validação de qualidade em pipelines de desenvolvimento  
✅ **Monitoring Systems:** Implementar monitoramento contínuo de conformidade

### 📌 Materiais Necessários

📌 Sistema Lunysse com todas as funcionalidades implementadas  
📌 Ferramentas de validação W3C (HTML, CSS, WCAG, Link Checker)  
📌 Navegadores múltiplos para testes cross-browser (Chrome, Firefox, Safari, Edge)  
📌 Ferramentas de teste automatizado (Playwright, Cypress, Selenium)  
📌 Dispositivos variados para teste de compatibilidade  
📌 Ferramentas de análise de código (SonarQube, ESLint, Stylelint)  
📌 Plataformas de CI/CD (GitHub Actions, GitLab CI)  
📌 Ferramentas de monitoramento (Lighthouse CI, Pa11y)

---

## 🎓 Estratégias de Ensino e Aprendizagem

### Introdução e Contextualização (55 min)

**Reflexão inicial:** "Por que a conformidade rigorosa com padrões W3C é fundamental para sistemas de saúde que devem ser acessíveis a todos os usuários?"

Discussão aprofundada sobre a importância crítica da conformidade em sistemas médicos, incluindo aspectos legais (ADA, Section 508, LGPD), éticos (inclusão digital) e técnicos (interoperabilidade). Análise de casos reais onde não-conformidade causou problemas de acessibilidade em sistemas de saúde.

**Contextualização profissional:** Apresentação de como organizações líderes em healthtech (Mayo Clinic, Cleveland Clinic, Kaiser Permanente) implementam e mantêm conformidade W3C. Demonstração de como a conformidade impacta certificações médicas, auditorias regulatórias e adoção por instituições de saúde.

**Análise do estado atual:** Avaliação preliminar do Sistema Lunysse identificando áreas de não-conformidade e estabelecendo baseline para melhorias. Apresentação de metodologia sistemática que será aplicada durante a aula.

---

### Tópico 1: Auditoria Completa com Ferramentas W3C (95 min)

#### 📌 Demonstração Prática:
O mentor demonstrará uso completo de ferramentas W3C para auditoria:
- **W3C Markup Validator:** Validação HTML5 completa
- **W3C CSS Validator:** Validação de folhas de estilo
- **W3C Link Checker:** Verificação de links e recursos
- **WAVE Web Accessibility Evaluator:** Análise de acessibilidade
- **axe DevTools:** Auditoria automatizada de acessibilidade

```javascript
// Exemplo demonstrado pelo mentor
class W3CComplianceAuditor {
    constructor() {
        this.auditResults = {
            html: { errors: [], warnings: [], info: [] },
            css: { errors: [], warnings: [], info: [] },
            accessibility: { violations: [], incomplete: [], passes: [] },
            links: { broken: [], redirects: [], warnings: [] },
            performance: { metrics: {}, opportunities: [], diagnostics: [] }
        };
        this.setupAuditTools();
    }

    async setupAuditTools() {
        // Configurar ferramentas de auditoria
        this.validators = {
            html: new HTMLValidator(),
            css: new CSSValidator(),
            accessibility: new AccessibilityValidator(),
            links: new LinkChecker(),
            performance: new PerformanceAuditor()
        };
    }

    async auditHTML(url) {
        console.log(`🔍 Starting HTML validation for: ${url}`);
        
        try {
            // Validação W3C HTML
            const htmlResponse = await fetch(`https://validator.w3.org/nu/?doc=${encodeURIComponent(url)}&out=json`);
            const htmlResults = await htmlResponse.json();
            
            htmlResults.messages.forEach(message => {
                const issue = {
                    type: message.type,
                    message: message.message,
                    line: message.lastLine,
                    column: message.lastColumn,
                    extract: message.extract,
                    severity: this.categorizeSeverity(message.type, message.subType)
                };

                switch (message.type) {
                    case 'error':
                        this.auditResults.html.errors.push(issue);
                        break;
                    case 'warning':
                        this.auditResults.html.warnings.push(issue);
                        break;
                    default:
                        this.auditResults.html.info.push(issue);
                }
            });

            // Validações customizadas para contexto médico
            await this.auditMedicalSpecificHTML(url);

            console.log(`✅ HTML validation completed. Errors: ${this.auditResults.html.errors.length}, Warnings: ${this.auditResults.html.warnings.length}`);
            
        } catch (error) {
            console.error('❌ HTML validation failed:', error);
            this.auditResults.html.errors.push({
                type: 'system_error',
                message: `Validation failed: ${error.message}`,
                severity: 'critical'
            });
        }
    }

    async auditMedicalSpecificHTML(url) {
        // Validações específicas para aplicações médicas
        const page = await this.getPageContent(url);
        const parser = new DOMParser();
        const doc = parser.parseFromString(page, 'text/html');

        // Verificar elementos obrigatórios para aplicações médicas
        const requiredElements = [
            { selector: '[role="main"]', description: 'Main content area must be identified' },
            { selector: 'h1', description: 'Page must have a primary heading' },
            { selector: '[lang]', description: 'Language must be specified' },
            { selector: 'meta[name="viewport"]', description: 'Viewport meta tag required for mobile' }
        ];

        requiredElements.forEach(({ selector, description }) => {
            if (!doc.querySelector(selector)) {
                this.auditResults.html.errors.push({
                    type: 'medical_compliance',
                    message: description,
                    severity: 'high',
                    category: 'accessibility'
                });
            }
        });

        // Verificar estrutura semântica para dados médicos
        const medicalForms = doc.querySelectorAll('form[data-medical], .patient-form, .appointment-form');
        medicalForms.forEach((form, index) => {
            if (!form.querySelector('fieldset')) {
                this.auditResults.html.warnings.push({
                    type: 'medical_form_structure',
                    message: `Medical form ${index + 1} should use fieldset for grouping related fields`,
                    severity: 'medium',
                    element: form.outerHTML.substring(0, 100) + '...'
                });
            }

            if (!form.querySelector('legend')) {
                this.auditResults.html.warnings.push({
                    type: 'medical_form_structure',
                    message: `Medical form ${index + 1} should have legend for fieldset`,
                    severity: 'medium'
                });
            }
        });
    }

    async auditCSS(url) {
        console.log(`🎨 Starting CSS validation for: ${url}`);
        
        try {
            // Obter todas as folhas de estilo
            const stylesheets = await this.extractStylesheets(url);
            
            for (const stylesheet of stylesheets) {
                const cssResponse = await fetch(`https://jigsaw.w3.org/css-validator/validator?uri=${encodeURIComponent(stylesheet)}&output=json`);
                const cssResults = await cssResponse.json();
                
                if (cssResults.cssvalidation) {
                    cssResults.cssvalidation.errors.forEach(error => {
                        this.auditResults.css.errors.push({
                            type: 'css_error',
                            message: error.message,
                            line: error.line,
                            context: error.context,
                            file: stylesheet,
                            severity: 'high'
                        });
                    });

                    cssResults.cssvalidation.warnings.forEach(warning => {
                        this.auditResults.css.warnings.push({
                            type: 'css_warning',
                            message: warning.message,
                            line: warning.line,
                            context: warning.context,
                            file: stylesheet,
                            severity: 'medium'
                        });
                    });
                }
            }

            // Validações CSS específicas para acessibilidade médica
            await this.auditMedicalSpecificCSS(stylesheets);

            console.log(`✅ CSS validation completed. Errors: ${this.auditResults.css.errors.length}, Warnings: ${this.auditResults.css.warnings.length}`);
            
        } catch (error) {
            console.error('❌ CSS validation failed:', error);
        }
    }

    async auditMedicalSpecificCSS(stylesheets) {
        // Verificações específicas para CSS em aplicações médicas
        for (const stylesheet of stylesheets) {
            const cssContent = await this.getCSSContent(stylesheet);
            
            // Verificar contraste de cores
            const colorPairs = this.extractColorPairs(cssContent);
            for (const pair of colorPairs) {
                const contrastRatio = this.calculateContrastRatio(pair.foreground, pair.background);
                
                if (contrastRatio < 4.5) { // WCAG AA standard
                    this.auditResults.css.errors.push({
                        type: 'contrast_violation',
                        message: `Insufficient color contrast: ${contrastRatio.toFixed(2)}:1 (minimum 4.5:1)`,
                        colors: pair,
                        severity: 'critical',
                        wcag: 'AA'
                    });
                }
            }

            // Verificar uso de unidades relativas para acessibilidade
            const absoluteUnits = cssContent.match(/\d+px(?![a-z])/g);
            if (absoluteUnits && absoluteUnits.length > 10) {
                this.auditResults.css.warnings.push({
                    type: 'accessibility_units',
                    message: 'Excessive use of absolute units (px) may impact accessibility',
                    count: absoluteUnits.length,
                    severity: 'medium',
                    recommendation: 'Consider using relative units (rem, em, %) for better scalability'
                });
            }

            // Verificar media queries para responsividade
            const mediaQueries = cssContent.match(/@media[^{]+/g);
            if (!mediaQueries || mediaQueries.length < 2) {
                this.auditResults.css.warnings.push({
                    type: 'responsive_design',
                    message: 'Limited responsive design implementation detected',
                    severity: 'medium',
                    recommendation: 'Implement comprehensive media queries for mobile accessibility'
                });
            }
        }
    }

    async auditAccessibility(url) {
        console.log(`♿ Starting accessibility audit for: ${url}`);
        
        try {
            // Usar axe-core para auditoria automatizada
            const axeResults = await this.runAxeAudit(url);
            
            axeResults.violations.forEach(violation => {
                this.auditResults.accessibility.violations.push({
                    id: violation.id,
                    impact: violation.impact,
                    description: violation.description,
                    help: violation.help,
                    helpUrl: violation.helpUrl,
                    tags: violation.tags,
                    nodes: violation.nodes.map(node => ({
                        html: node.html,
                        target: node.target,
                        failureSummary: node.failureSummary
                    })),
                    severity: this.mapImpactToSeverity(violation.impact)
                });
            });

            axeResults.incomplete.forEach(incomplete => {
                this.auditResults.accessibility.incomplete.push({
                    id: incomplete.id,
                    description: incomplete.description,
                    help: incomplete.help,
                    nodes: incomplete.nodes.length,
                    severity: 'review_required'
                });
            });

            // Testes manuais específicos para aplicações médicas
            await this.auditMedicalAccessibility(url);

            console.log(`✅ Accessibility audit completed. Violations: ${this.auditResults.accessibility.violations.length}`);
            
        } catch (error) {
            console.error('❌ Accessibility audit failed:', error);
        }
    }

    async auditMedicalAccessibility(url) {
        // Testes específicos para acessibilidade em contexto médico
        const page = await this.getPageContent(url);
        const parser = new DOMParser();
        const doc = parser.parseFromString(page, 'text/html');

        // Verificar formulários médicos
        const medicalInputs = doc.querySelectorAll('input[type="date"], input[data-medical], .medical-input');
        medicalInputs.forEach((input, index) => {
            if (!input.labels || input.labels.length === 0) {
                this.auditResults.accessibility.violations.push({
                    id: 'medical_input_label',
                    description: `Medical input field ${index + 1} lacks proper labeling`,
                    impact: 'serious',
                    help: 'All medical input fields must have associated labels',
                    severity: 'high',
                    element: input.outerHTML
                });
            }

            if (input.hasAttribute('required') && !input.hasAttribute('aria-required')) {
                this.auditResults.accessibility.violations.push({
                    id: 'medical_required_aria',
                    description: `Required medical field ${index + 1} missing aria-required attribute`,
                    impact: 'moderate',
                    severity: 'medium',
                    element: input.outerHTML
                });
            }
        });

        // Verificar tabelas de dados médicos
        const dataTables = doc.querySelectorAll('table[data-medical], .patient-table, .appointment-table');
        dataTables.forEach((table, index) => {
            if (!table.querySelector('caption')) {
                this.auditResults.accessibility.violations.push({
                    id: 'medical_table_caption',
                    description: `Medical data table ${index + 1} lacks caption`,
                    impact: 'serious',
                    help: 'Medical data tables must have descriptive captions',
                    severity: 'high'
                });
            }

            const headers = table.querySelectorAll('th');
            if (headers.length === 0) {
                this.auditResults.accessibility.violations.push({
                    id: 'medical_table_headers',
                    description: `Medical data table ${index + 1} lacks proper headers`,
                    impact: 'serious',
                    severity: 'high'
                });
            }
        });

        // Verificar alertas e notificações médicas
        const alerts = doc.querySelectorAll('[role="alert"], .alert, .notification');
        alerts.forEach((alert, index) => {
            if (!alert.hasAttribute('aria-live')) {
                this.auditResults.accessibility.violations.push({
                    id: 'medical_alert_live',
                    description: `Medical alert ${index + 1} missing aria-live attribute`,
                    impact: 'serious',
                    help: 'Medical alerts must announce changes to screen readers',
                    severity: 'high'
                });
            }
        });
    }

    async generateComprehensiveReport() {
        const report = {
            summary: {
                totalIssues: this.getTotalIssues(),
                criticalIssues: this.getCriticalIssues(),
                complianceScore: this.calculateComplianceScore(),
                auditDate: new Date().toISOString()
            },
            detailed: this.auditResults,
            recommendations: this.generateRecommendations(),
            actionPlan: this.createActionPlan()
        };

        return report;
    }

    getTotalIssues() {
        return this.auditResults.html.errors.length +
               this.auditResults.css.errors.length +
               this.auditResults.accessibility.violations.length;
    }

    getCriticalIssues() {
        let critical = 0;
        
        Object.values(this.auditResults).forEach(category => {
            if (Array.isArray(category)) {
                critical += category.filter(issue => issue.severity === 'critical').length;
            } else {
                Object.values(category).forEach(subcategory => {
                    if (Array.isArray(subcategory)) {
                        critical += subcategory.filter(issue => issue.severity === 'critical').length;
                    }
                });
            }
        });
        
        return critical;
    }

    calculateComplianceScore() {
        const totalChecks = 100; // Base score
        const deductions = {
            critical: 10,
            high: 5,
            medium: 2,
            low: 1
        };

        let score = totalChecks;
        
        Object.values(this.auditResults).forEach(category => {
            if (Array.isArray(category)) {
                category.forEach(issue => {
                    score -= deductions[issue.severity] || 1;
                });
            } else {
                Object.values(category).forEach(subcategory => {
                    if (Array.isArray(subcategory)) {
                        subcategory.forEach(issue => {
                            score -= deductions[issue.severity] || 1;
                        });
                    }
                });
            }
        });

        return Math.max(0, score);
    }

    generateRecommendations() {
        const recommendations = [];
        
        // Recomendações baseadas nos problemas encontrados
        if (this.auditResults.html.errors.length > 0) {
            recommendations.push({
                category: 'HTML Validation',
                priority: 'high',
                action: 'Fix all HTML validation errors to ensure proper document structure',
                impact: 'Improves browser compatibility and accessibility'
            });
        }

        if (this.auditResults.accessibility.violations.length > 0) {
            recommendations.push({
                category: 'Accessibility',
                priority: 'critical',
                action: 'Address all accessibility violations to ensure WCAG 2.1 AA compliance',
                impact: 'Essential for users with disabilities and legal compliance'
            });
        }

        if (this.auditResults.css.errors.length > 0) {
            recommendations.push({
                category: 'CSS Validation',
                priority: 'medium',
                action: 'Resolve CSS validation errors for consistent styling',
                impact: 'Ensures consistent appearance across browsers'
            });
        }

        return recommendations;
    }

    createActionPlan() {
        const issues = this.getAllIssuesSorted();
        const actionPlan = {
            immediate: [], // Critical issues
            shortTerm: [], // High priority issues
            longTerm: []   // Medium/low priority issues
        };

        issues.forEach(issue => {
            const action = {
                description: issue.message,
                category: issue.type,
                severity: issue.severity,
                estimatedEffort: this.estimateEffort(issue),
                resources: this.getRequiredResources(issue)
            };

            switch (issue.severity) {
                case 'critical':
                    actionPlan.immediate.push(action);
                    break;
                case 'high':
                    actionPlan.shortTerm.push(action);
                    break;
                default:
                    actionPlan.longTerm.push(action);
            }
        });

        return actionPlan;
    }

    // Métodos utilitários
    categorizeSeverity(type, subType) {
        if (type === 'error') return 'high';
        if (type === 'warning') return 'medium';
        return 'low';
    }

    mapImpactToSeverity(impact) {
        const mapping = {
            'critical': 'critical',
            'serious': 'high',
            'moderate': 'medium',
            'minor': 'low'
        };
        return mapping[impact] || 'medium';
    }

    calculateContrastRatio(foreground, background) {
        // Implementação simplificada do cálculo de contraste WCAG
        const getLuminance = (color) => {
            // Converter cor para luminância
            const rgb = this.hexToRgb(color);
            const [r, g, b] = [rgb.r, rgb.g, rgb.b].map(c => {
                c = c / 255;
                return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
            });
            return 0.2126 * r + 0.7152 * g + 0.0722 * b;
        };

        const l1 = getLuminance(foreground);
        const l2 = getLuminance(background);
        const lighter = Math.max(l1, l2);
        const darker = Math.min(l1, l2);
        
        return (lighter + 0.05) / (darker + 0.05);
    }

    hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
}

// Uso da classe
const auditor = new W3CComplianceAuditor();

// Executar auditoria completa
async function runFullAudit(url) {
    console.log(`🚀 Starting comprehensive W3C compliance audit for: ${url}`);
    
    await auditor.auditHTML(url);
    await auditor.auditCSS(url);
    await auditor.auditAccessibility(url);
    
    const report = await auditor.generateComprehensiveReport();
    
    console.log(`📊 Audit completed. Compliance Score: ${report.summary.complianceScore}/100`);
    console.log(`🔍 Total Issues: ${report.summary.totalIssues} (${report.summary.criticalIssues} critical)`);
    
    return report;
}
```

#### 📌 Atividade Prática 1:
🎯 **Objetivo:** Realizar auditoria completa W3C do Sistema Lunysse  
📝 **Tarefa:**
- Implementar W3CComplianceAuditor class com todas as validações
- Executar validação HTML completa em todas as páginas do sistema
- Realizar validação CSS de todas as folhas de estilo
- Executar auditoria de acessibilidade com axe-core e validações customizadas
- Implementar verificações específicas para aplicações médicas
- Criar sistema de scoring de conformidade
- Gerar relatório detalhado com recomendações e plano de ação
- Documentar todos os problemas encontrados com priorização
- Criar baseline de qualidade para monitoramento futuro

---

### Tópico 2: Correção Sistemática de Inconsistências (90 min)

#### 📌 Demonstração Prática:
Metodologia estruturada para correção de problemas:
- **Priorização:** Sistema de classificação por impacto e esforço
- **Correção incremental:** Abordagem sistemática de resolução
- **Validação:** Verificação de correções implementadas
- **Regressão:** Prevenção de novos problemas
- **Documentação:** Registro de mudanças e decisões

#### 📌 Atividade Prática 2:
🎯 **Objetivo:** Corrigir sistematicamente todas as inconsistências identificadas  
📝 **Tarefa:**
- Priorizar problemas por criticidade e impacto no usuário
- Implementar correções para todos os erros HTML identificados
- Resolver problemas de contraste e acessibilidade
- Corrigir erros de CSS e problemas de compatibilidade
- Implementar melhorias de estrutura semântica
- Validar cada correção com ferramentas apropriadas
- Documentar todas as mudanças realizadas
- Criar testes para prevenir regressão dos problemas
- Medir melhoria no score de conformidade

---

### Pausa (15 min)

---

### Tópico 3: Testes Automatizados e Cross-browser (85 min)

#### 📌 Demonstração Prática:
Implementação de testes automatizados para qualidade:
- **Playwright/Cypress:** Testes end-to-end com validação W3C
- **Pa11y:** Testes automatizados de acessibilidade
- **Lighthouse CI:** Auditoria contínua de qualidade
- **Cross-browser testing:** Compatibilidade em múltiplos navegadores
- **Visual regression:** Detecção de mudanças visuais

```javascript
// Exemplo demonstrado pelo mentor
const { test, expect } = require('@playwright/test');
const pa11y = require('pa11y');

class AutomatedQualityTester {
    constructor() {
        this.testResults = {
            w3c: [],
            accessibility: [],
            crossBrowser: [],
            performance: []
        };
    }

    // Testes W3C automatizados
    async testW3CCompliance(page, url) {
        test.describe('W3C Compliance Tests', () => {
            test('HTML validation', async () => {
                await page.goto(url);
                
                // Verificar estrutura HTML básica
                await expect(page.locator('html[lang]')).toBeVisible();
                await expect(page.locator('head title')).toBeVisible();
                await expect(page.locator('meta[name="viewport"]')).toBeVisible();
                
                // Verificar elementos semânticos
                await expect(page.locator('main, [role="main"]')).toBeVisible();
                await expect(page.locator('h1')).toBeVisible();
                
                // Verificar formulários médicos
                const medicalForms = await page.locator('form[data-medical], .patient-form').count();
                if (medicalForms > 0) {
                    await expect(page.locator('fieldset')).toBeVisible();
                    await expect(page.locator('legend')).toBeVisible();
                }
            });

            test('CSS validation', async () => {
                await page.goto(url);
                
                // Verificar carregamento de estilos
                const stylesheets = await page.locator('link[rel="stylesheet"]').count();
                expect(stylesheets).toBeGreaterThan(0);
                
                // Verificar responsividade
                await page.setViewportSize({ width: 320, height: 568 }); // Mobile
                await expect(page.locator('body')).toBeVisible();
                
                await page.setViewportSize({ width: 768, height: 1024 }); // Tablet
                await expect(page.locator('body')).toBeVisible();
                
                await page.setViewportSize({ width: 1920, height: 1080 }); // Desktop
                await expect(page.locator('body')).toBeVisible();
            });
        });
    }

    // Testes de acessibilidade automatizados
    async testAccessibility(url) {
        const options = {
            standard: 'WCAG2AA',
            includeNotices: false,
            includeWarnings: true,
            chromeLaunchConfig: {
                args: ['--no-sandbox']
            },
            rules: [
                'color-contrast',
                'heading-order',
                'label',
                'landmark-one-main',
                'page-has-heading-one',
                'region'
            ]
        };

        try {
            const results = await pa11y(url, options);
            
            this.testResults.accessibility.push({
                url,
                issues: results.issues,
                issueCount: results.issues.length,
                timestamp: new Date().toISOString()
            });

            // Testes específicos para aplicações médicas
            await this.testMedicalAccessibility(url);

            return results;
        } catch (error) {
            console.error('Accessibility test failed:', error);
            throw error;
        }
    }

    async testMedicalAccessibility(url) {
        const medicalTests = [
            {
                name: 'Medical form labels',
                selector: 'input[data-medical], .medical-input',
                test: (element) => element.labels && element.labels.length > 0
            },
            {
                name: 'Required field indicators',
                selector: 'input[required]',
                test: (element) => element.hasAttribute('aria-required')
            },
            {
                name: 'Medical data tables',
                selector: 'table[data-medical], .patient-table',
                test: (element) => element.querySelector('caption') !== null
            },
            {
                name: 'Medical alerts',
                selector: '[role="alert"], .medical-alert',
                test: (element) => element.hasAttribute('aria-live')
            }
        ];

        // Implementar testes customizados para contexto médico
        for (const testCase of medicalTests) {
            const elements = document.querySelectorAll(testCase.selector);
            elements.forEach((element, index) => {
                if (!testCase.test(element)) {
                    this.testResults.accessibility.push({
                        type: 'medical_accessibility',
                        test: testCase.name,
                        element: index + 1,
                        issue: `${testCase.name} failed for element ${index + 1}`,
                        severity: 'high'
                    });
                }
            });
        }
    }

    // Testes cross-browser
    async testCrossBrowser(url) {
        const browsers = ['chromium', 'firefox', 'webkit'];
        const viewports = [
            { width: 320, height: 568, name: 'mobile' },
            { width: 768, height: 1024, name: 'tablet' },
            { width: 1920, height: 1080, name: 'desktop' }
        ];

        for (const browserName of browsers) {
            const { chromium, firefox, webkit } = require('playwright');
            const browserType = { chromium, firefox, webkit }[browserName];
            const browser = await browserType.launch();

            try {
                for (const viewport of viewports) {
                    const context = await browser.newContext({ viewport });
                    const page = await context.newPage();

                    await page.goto(url);

                    // Testes básicos de funcionalidade
                    const testResults = await this.runBasicFunctionalityTests(page);
                    
                    this.testResults.crossBrowser.push({
                        browser: browserName,
                        viewport: viewport.name,
                        url,
                        results: testResults,
                        timestamp: new Date().toISOString()
                    });

                    await context.close();
                }
            } finally {
                await browser.close();
            }
        }
    }

    async runBasicFunctionalityTests(page) {
        const tests = [];

        try {
            // Teste de carregamento da página
            await page.waitForLoadState('networkidle');
            tests.push({ name: 'page_load', status: 'pass' });

            // Teste de elementos críticos
            const criticalElements = [
                'header, [role="banner"]',
                'main, [role="main"]',
                'nav, [role="navigation"]',
                'footer, [role="contentinfo"]'
            ];

            for (const selector of criticalElements) {
                try {
                    await expect(page.locator(selector).first()).toBeVisible({ timeout: 5000 });
                    tests.push({ name: `element_${selector}`, status: 'pass' });
                } catch (error) {
                    tests.push({ name: `element_${selector}`, status: 'fail', error: error.message });
                }
            }

            // Teste de formulários
            const forms = await page.locator('form').count();
            if (forms > 0) {
                const firstForm = page.locator('form').first();
                const inputs = await firstForm.locator('input, select, textarea').count();
                tests.push({ name: 'form_elements', status: inputs > 0 ? 'pass' : 'fail', count: inputs });
            }

            // Teste de navegação
            const navLinks = await page.locator('nav a, [role="navigation"] a').count();
            tests.push({ name: 'navigation_links', status: navLinks > 0 ? 'pass' : 'fail', count: navLinks });

        } catch (error) {
            tests.push({ name: 'general_error', status: 'fail', error: error.message });
        }

        return tests;
    }

    // Testes de performance
    async testPerformance(url) {
        const lighthouse = require('lighthouse');
        const chromeLauncher = require('chrome-launcher');

        const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
        const options = {
            logLevel: 'info',
            output: 'json',
            onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
            port: chrome.port
        };

        try {
            const runnerResult = await lighthouse(url, options);
            const reportJson = runnerResult.report;
            const report = JSON.parse(reportJson);

            this.testResults.performance.push({
                url,
                scores: {
                    performance: report.categories.performance.score * 100,
                    accessibility: report.categories.accessibility.score * 100,
                    bestPractices: report.categories['best-practices'].score * 100,
                    seo: report.categories.seo.score * 100
                },
                metrics: {
                    firstContentfulPaint: report.audits['first-contentful-paint'].numericValue,
                    largestContentfulPaint: report.audits['largest-contentful-paint'].numericValue,
                    cumulativeLayoutShift: report.audits['cumulative-layout-shift'].numericValue,
                    totalBlockingTime: report.audits['total-blocking-time'].numericValue
                },
                timestamp: new Date().toISOString()
            });

            return report;
        } finally {
            await chrome.kill();
        }
    }

    // Gerar relatório consolidado
    generateConsolidatedReport() {
        const report = {
            summary: {
                totalTests: this.getTotalTestCount(),
                passedTests: this.getPassedTestCount(),
                failedTests: this.getFailedTestCount(),
                overallScore: this.calculateOverallScore()
            },
            details: this.testResults,
            recommendations: this.generateTestRecommendations()
        };

        return report;
    }

    getTotalTestCount() {
        return Object.values(this.testResults).reduce((total, category) => {
            return total + (Array.isArray(category) ? category.length : 0);
        }, 0);
    }

    getPassedTestCount() {
        let passed = 0;
        Object.values(this.testResults).forEach(category => {
            if (Array.isArray(category)) {
                category.forEach(test => {
                    if (test.status === 'pass' || (test.results && test.results.every(r => r.status === 'pass'))) {
                        passed++;
                    }
                });
            }
        });
        return passed;
    }

    getFailedTestCount() {
        return this.getTotalTestCount() - this.getPassedTestCount();
    }

    calculateOverallScore() {
        const total = this.getTotalTestCount();
        const passed = this.getPassedTestCount();
        return total > 0 ? Math.round((passed / total) * 100) : 0;
    }

    generateTestRecommendations() {
        const recommendations = [];

        // Analisar resultados e gerar recomendações
        if (this.testResults.accessibility.length > 0) {
            const accessibilityIssues = this.testResults.accessibility.reduce((sum, test) => sum + test.issueCount, 0);
            if (accessibilityIssues > 0) {
                recommendations.push({
                    category: 'Accessibility',
                    priority: 'critical',
                    issue: `${accessibilityIssues} accessibility issues found`,
                    action: 'Address all accessibility violations to ensure WCAG 2.1 AA compliance'
                });
            }
        }

        if (this.testResults.performance.length > 0) {
            const avgPerformanceScore = this.testResults.performance.reduce((sum, test) => sum + test.scores.performance, 0) / this.testResults.performance.length;
            if (avgPerformanceScore < 90) {
                recommendations.push({
                    category: 'Performance',
                    priority: 'high',
                    issue: `Average performance score: ${avgPerformanceScore.toFixed(1)}`,
                    action: 'Optimize loading times and Core Web Vitals metrics'
                });
            }
        }

        return recommendations;
    }
}
```

#### 📌 Atividade Prática 3:
🎯 **Objetivo:** Implementar suite completa de testes automatizados  
📝 **Tarefa:**
- Implementar AutomatedQualityTester class com todos os tipos de teste
- Criar testes W3C automatizados para todas as páginas
- Implementar testes de acessibilidade com pa11y e validações customizadas
- Desenvolver testes cross-browser para Chrome, Firefox e Safari
- Criar testes de performance com Lighthouse
- Implementar testes específicos para funcionalidades médicas
- Configurar execução automatizada dos testes
- Gerar relatórios consolidados de qualidade
- Integrar testes no processo de desenvolvimento

---

### Tópico 4: Checklist de Conformidade e Documentação (70 min)

#### 📌 Demonstração Prática:
Criação de documentação completa de qualidade:
- **Checklist W3C:** Lista abrangente de verificações
- **Processo de qualidade:** Metodologia documentada
- **Padrões de código:** Guidelines de desenvolvimento
- **Monitoramento contínuo:** Sistema de acompanhamento
- **Treinamento da equipe:** Documentação educativa

#### 📌 Atividade Prática 4:
🎯 **Objetivo:** Criar documentação completa de padrões de qualidade  
📝 **Tarefa:**
- Desenvolver checklist abrangente de conformidade W3C
- Criar processo documentado de garantia de qualidade
- Implementar guidelines de desenvolvimento para a equipe
- Desenvolver sistema de monitoramento contínuo de conformidade
- Criar documentação de treinamento em padrões W3C
- Implementar templates de código que seguem padrões
- Desenvolver processo de code review focado em qualidade
- Criar dashboard de métricas de conformidade
- Documentar todas as correções e melhorias implementadas

---

### Encerramento e Reflexão (50 min)

#### 📌 Discussão em grupo:
**Tema:** "Como a conformidade rigorosa com padrões W3C impacta a qualidade, acessibilidade e sustentabilidade de sistemas de saúde?"

Reflexão aprofundada sobre:
- **Impacto na acessibilidade:** Como padrões garantem acesso universal
- **Qualidade de código:** Benefícios de código conforme para manutenibilidade
- **Interoperabilidade:** Como padrões facilitam integração com outros sistemas
- **Sustentabilidade:** Redução de custos de manutenção a longo prazo
- **Responsabilidade profissional:** Ética em desenvolvimento de sistemas críticos
- **Evolução contínua:** Manutenção de padrões em projetos em crescimento

#### 📌 Desafio para a próxima aula:
Implementar sistema completo de qualidade contínua:
- Pipeline de CI/CD com validação automática de padrões
- Dashboard de monitoramento de conformidade em tempo real
- Sistema de alertas para degradação de qualidade
- Processo de onboarding da equipe em padrões W3C
- Documentação completa de todos os padrões implementados

---

## 📌 Objetos de Aprendizagem

📝 **W3C Compliance Auditor:** Sistema completo de auditoria de conformidade  
📝 **Automated Testing Suite:** Suite de testes automatizados para qualidade  
📝 **Quality Assurance Process:** Processo documentado de garantia de qualidade  
📝 **W3C Compliance Checklist:** Lista abrangente de verificações de conformidade  
📝 **Cross-browser Testing Framework:** Framework para testes de compatibilidade  
📝 **Performance Monitoring System:** Sistema de monitoramento de performance  
📝 **Documentation Templates:** Templates para documentação de padrões

---

## 🎯 Avaliação

### Critérios de Avaliação:

✅ **Auditoria W3C (25%):** Completude e precisão da auditoria de conformidade  
✅ **Correção de Problemas (25%):** Qualidade e efetividade das correções implementadas  
✅ **Testes Automatizados (25%):** Abrangência e qualidade da suite de testes  
✅ **Documentação (25%):** Qualidade e completude da documentação de padrões

### Instrumentos de Avaliação:

- **Auditoria técnica:** Verificação de conformidade com ferramentas W3C
- **Análise de código:** Revisão das correções implementadas
- **Teste de funcionalidade:** Validação cross-browser e dispositivos
- **Apresentação técnica:** Demonstração do sistema de qualidade implementado

---

## 🎓 Conclusão

Ao final desta aula, os alunos serão capazes de:

- **Realizar auditorias completas** de conformidade W3C usando ferramentas especializadas
- **Implementar correções sistemáticas** de inconsistências e problemas de qualidade
- **Criar suites de testes automatizados** para validação contínua de padrões
- **Estabelecer processos de qualidade** que garantem conformidade a longo prazo
- **Documentar padrões e processos** de forma clara e abrangente
- **Monitorar conformidade continuamente** usando sistemas automatizados

Esta competência é essencial para desenvolvedores que trabalham com sistemas críticos, estabelecendo um padrão profissional de qualidade que garante acessibilidade, interoperabilidade e sustentabilidade de aplicações web.

---

**Indicador de Competência Trabalhado:**  
✔️ **Indicador 5** - Analisa desempenho e inconsistências no funcionamento do website, de acordo com os padrões do W3C

**Metodologia Ativa Aplicada:**  
- **Quality-Driven Development:** Desenvolvimento focado em qualidade e conformidade
- **Systematic Problem Solving:** Resolução sistemática de problemas de conformidade  
- **Continuous Improvement:** Melhoria contínua baseada em auditoria e monitoramento  
- **Collaborative Quality Assurance:** Garantia de qualidade colaborativa em equipe