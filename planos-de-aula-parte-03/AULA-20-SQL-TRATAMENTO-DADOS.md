# PLANO DE TRABALHO DOCENTE

## MODELO PEDAGÓGICO SENAC

**Curso:** Desenvolvedor Full Stack  
**Carga Horária Total:** 108h  
**Carga Horária da UC:** 108h  
**Docente:** Jeremias O Nunes

---

# PLANO DE AULA – Linguagem SQL para Tratamento de Dados

📌 **Disciplina:** Desenvolvimento Full Stack  
👨🏫 **Mentor(a):** Jeremias O Nunes  
📆 **Data:** Aula 20 - Parte 3  
⏰ **Duração:** 4 horas

---

## 📖 Planejamento

### 📌 Conteúdo Formativo

• Workshop intensivo de modelagem de dados para sistemas de saúde  
• Implementação de queries SQL complexas para CRUD de pacientes e agendamentos  
• Laboratório de joins avançados e relacionamentos entre entidades médicas  
• Criação de stored procedures e functions para relatórios especializados  
• Desenvolvimento de API mock com integração SQL real usando SQLite  
• Otimização avançada de consultas e implementação de índices estratégicos  
• Implementação de triggers para auditoria e integridade de dados médicos  
• Desenvolvimento de views complexas para dashboards e relatórios gerenciais

### 🎯 Objetivo Geral

Implementar integração completa com banco de dados utilizando SQL para tratamento eficiente de dados do Sistema Lunysse, desenvolvendo competências em modelagem, consultas complexas, otimização e integração com aplicações web, focando especificamente nas necessidades de sistemas de saúde.

### 💡 Habilidades e Competências

✅ **Modelagem de Dados:** Criar modelos relacionais robustos para contexto médico  
✅ **SQL Avançado:** Dominar queries complexas, joins, subqueries e CTEs  
✅ **Stored Procedures:** Implementar lógica de negócio no banco de dados  
✅ **Otimização:** Otimizar performance de consultas e estruturas de dados  
✅ **Integração:** Conectar aplicações web com bancos de dados SQL  
✅ **Auditoria:** Implementar rastreamento e auditoria de dados sensíveis  
✅ **Relatórios:** Criar consultas para relatórios gerenciais complexos

### 📌 Materiais Necessários

📌 Sistema Lunysse com estrutura OOP implementada  
📌 SQLite para desenvolvimento local  
📌 DB Browser for SQLite para visualização  
📌 Node.js com sqlite3 package  
📌 Ferramentas de modelagem (draw.io, MySQL Workbench)  
📌 Dados de exemplo realistas para sistema médico  
📌 Scripts de migração e seed data  
📌 Ferramentas de performance profiling para SQL

---

## 🎓 Estratégias de Ensino e Aprendizagem

### Introdução e Contextualização (50 min)

**Reflexão inicial:** "Por que o tratamento adequado de dados é crítico em sistemas de saúde e como SQL garante integridade e performance?"

Discussão aprofundada sobre a importância de dados estruturados em sistemas médicos, incluindo regulamentações como HIPAA, LGPD e requisitos de auditoria. Análise de casos reais onde falhas na modelagem de dados causaram problemas em sistemas hospitalares.

**Contextualização profissional:** Apresentação de arquiteturas de dados utilizadas por sistemas médicos líderes (Epic, Cerner, Allscripts) e como grandes volumes de dados médicos são gerenciados. Demonstração de como consultas SQL otimizadas impactam diretamente a experiência do usuário em sistemas críticos.

**Análise do cenário atual:** Revisão da estrutura de dados atual do Sistema Lunysse (localStorage) e identificação das limitações para crescimento, integridade e performance. Apresentação dos benefícios da migração para SQL.

---

### Tópico 1: Modelagem de Dados para Sistemas de Saúde (90 min)

#### 📌 Demonstração Prática:
O mentor demonstrará modelagem completa de dados médicos:
- **Análise de requisitos:** Identificação de entidades e relacionamentos
- **Normalização:** Aplicação de formas normais para integridade
- **Relacionamentos:** Implementação de FK, constraints e índices
- **Auditoria:** Estruturas para rastreamento de mudanças
- **Performance:** Estratégias de indexação e particionamento

```sql
-- Exemplo demonstrado pelo mentor
-- Estrutura completa do banco de dados para Sistema Lunysse

-- Tabela de usuários base
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    user_type ENUM('psychologist', 'patient', 'admin') NOT NULL,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE,
    last_login TIMESTAMP,
    
    -- Índices para performance
    INDEX idx_email (email),
    INDEX idx_user_type (user_type),
    INDEX idx_active (is_active)
);

-- Tabela específica para psicólogos
CREATE TABLE psychologists (
    id INTEGER PRIMARY KEY,
    user_id INTEGER NOT NULL,
    crp VARCHAR(20) UNIQUE NOT NULL,
    specialty VARCHAR(255) NOT NULL,
    license_expiry DATE,
    consultation_fee DECIMAL(10,2),
    bio TEXT,
    
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_crp (crp),
    INDEX idx_specialty (specialty)
);

-- Tabela de pacientes
CREATE TABLE patients (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    phone VARCHAR(20),
    birth_date DATE NOT NULL,
    cpf VARCHAR(14) UNIQUE,
    emergency_contact VARCHAR(255),
    emergency_phone VARCHAR(20),
    medical_history TEXT,
    allergies TEXT,
    medications TEXT,
    assigned_psychologist_id INTEGER,
    status ENUM('active', 'inactive', 'discharged') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
    FOREIGN KEY (assigned_psychologist_id) REFERENCES psychologists(id),
    INDEX idx_cpf (cpf),
    INDEX idx_psychologist (assigned_psychologist_id),
    INDEX idx_status (status)
);

-- Tabela de agendamentos/sessões
CREATE TABLE appointments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    patient_id INTEGER NOT NULL,
    psychologist_id INTEGER NOT NULL,
    appointment_date DATE NOT NULL,
    appointment_time TIME NOT NULL,
    duration_minutes INTEGER DEFAULT 50,
    status ENUM('scheduled', 'completed', 'cancelled', 'no_show') DEFAULT 'scheduled',
    session_type ENUM('individual', 'group', 'family') DEFAULT 'individual',
    notes TEXT,
    private_notes TEXT, -- Apenas para o psicólogo
    session_report TEXT,
    fee_charged DECIMAL(10,2),
    payment_status ENUM('pending', 'paid', 'cancelled') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (patient_id) REFERENCES patients(id) ON DELETE CASCADE,
    FOREIGN KEY (psychologist_id) REFERENCES psychologists(id) ON DELETE CASCADE,
    
    -- Constraint para evitar conflitos de horário
    UNIQUE KEY unique_psychologist_datetime (psychologist_id, appointment_date, appointment_time),
    
    INDEX idx_patient (patient_id),
    INDEX idx_psychologist (psychologist_id),
    INDEX idx_date (appointment_date),
    INDEX idx_status (status),
    INDEX idx_datetime (appointment_date, appointment_time)
);

-- Tabela de auditoria para rastreamento de mudanças
CREATE TABLE audit_log (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    table_name VARCHAR(50) NOT NULL,
    record_id INTEGER NOT NULL,
    action ENUM('INSERT', 'UPDATE', 'DELETE') NOT NULL,
    old_values JSON,
    new_values JSON,
    user_id INTEGER,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ip_address VARCHAR(45),
    user_agent TEXT,
    
    FOREIGN KEY (user_id) REFERENCES users(id),
    INDEX idx_table_record (table_name, record_id),
    INDEX idx_timestamp (timestamp),
    INDEX idx_user (user_id)
);

-- Tabela para relatórios e métricas
CREATE TABLE session_metrics (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    appointment_id INTEGER NOT NULL,
    mood_before INTEGER CHECK (mood_before BETWEEN 1 AND 10),
    mood_after INTEGER CHECK (mood_after BETWEEN 1 AND 10),
    anxiety_level INTEGER CHECK (anxiety_level BETWEEN 1 AND 10),
    progress_rating INTEGER CHECK (progress_rating BETWEEN 1 AND 5),
    goals_achieved TEXT,
    homework_assigned TEXT,
    next_session_focus TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (appointment_id) REFERENCES appointments(id) ON DELETE CASCADE,
    INDEX idx_appointment (appointment_id)
);

-- Triggers para auditoria automática
CREATE TRIGGER audit_users_insert AFTER INSERT ON users
BEGIN
    INSERT INTO audit_log (table_name, record_id, action, new_values, user_id)
    VALUES ('users', NEW.id, 'INSERT', json_object(
        'email', NEW.email,
        'user_type', NEW.user_type,
        'name', NEW.name
    ), NEW.id);
END;

CREATE TRIGGER audit_appointments_update AFTER UPDATE ON appointments
BEGIN
    INSERT INTO audit_log (table_name, record_id, action, old_values, new_values, user_id)
    VALUES ('appointments', NEW.id, 'UPDATE', 
        json_object(
            'status', OLD.status,
            'notes', OLD.notes,
            'session_report', OLD.session_report
        ),
        json_object(
            'status', NEW.status,
            'notes', NEW.notes,
            'session_report', NEW.session_report
        ),
        NEW.psychologist_id
    );
END;
```

#### 📌 Atividade Prática 1:
🎯 **Objetivo:** Criar modelo de dados completo para o Sistema Lunysse  
📝 **Tarefa:**
- Analisar requisitos do Sistema Lunysse e identificar todas as entidades
- Criar diagrama ER completo com relacionamentos
- Implementar estrutura SQL com todas as tabelas necessárias
- Definir constraints, índices e relacionamentos apropriados
- Criar triggers para auditoria automática de dados sensíveis
- Implementar estruturas para soft delete e versionamento
- Criar tabelas de configuração e parâmetros do sistema
- Desenvolver estrutura para armazenamento de arquivos e documentos
- Implementar particionamento para tabelas de grande volume
- Validar modelo com dados de exemplo realistas

---

### Tópico 2: Queries SQL Complexas e Joins Avançados (85 min)

#### 📌 Demonstração Prática:
Implementação de consultas SQL avançadas para o contexto médico:
- **Joins complexos:** Relacionamentos entre múltiplas tabelas
- **Subqueries:** Consultas aninhadas para lógica complexa
- **CTEs:** Common Table Expressions para queries legíveis
- **Window functions:** Análises avançadas e rankings
- **Agregações:** Relatórios estatísticos e métricas

```sql
-- Exemplos demonstrados pelo mentor

-- 1. Relatório completo de produtividade por psicólogo
WITH psychologist_stats AS (
    SELECT 
        p.id,
        u.name as psychologist_name,
        p.specialty,
        COUNT(DISTINCT pat.id) as total_patients,
        COUNT(a.id) as total_appointments,
        COUNT(CASE WHEN a.status = 'completed' THEN 1 END) as completed_sessions,
        COUNT(CASE WHEN a.status = 'cancelled' THEN 1 END) as cancelled_sessions,
        COUNT(CASE WHEN a.status = 'no_show' THEN 1 END) as no_show_sessions,
        AVG(CASE WHEN a.status = 'completed' THEN sm.mood_after - sm.mood_before END) as avg_mood_improvement,
        SUM(CASE WHEN a.status = 'completed' THEN a.fee_charged ELSE 0 END) as total_revenue
    FROM psychologists p
    JOIN users u ON p.user_id = u.id
    LEFT JOIN patients pat ON pat.assigned_psychologist_id = p.id
    LEFT JOIN appointments a ON a.psychologist_id = p.id
    LEFT JOIN session_metrics sm ON sm.appointment_id = a.id
    WHERE a.appointment_date >= DATE('now', '-30 days')
    GROUP BY p.id, u.name, p.specialty
),
ranking AS (
    SELECT *,
        ROW_NUMBER() OVER (ORDER BY completed_sessions DESC) as productivity_rank,
        ROUND((completed_sessions * 100.0 / NULLIF(total_appointments, 0)), 2) as completion_rate
    FROM psychologist_stats
)
SELECT 
    psychologist_name,
    specialty,
    total_patients,
    completed_sessions,
    completion_rate || '%' as completion_rate,
    COALESCE(ROUND(avg_mood_improvement, 2), 0) as avg_mood_improvement,
    'R$ ' || COALESCE(total_revenue, 0) as total_revenue,
    productivity_rank
FROM ranking
ORDER BY productivity_rank;

-- 2. Análise de padrões de agendamento e otimização de horários
WITH hourly_distribution AS (
    SELECT 
        CAST(strftime('%H', appointment_time) AS INTEGER) as hour,
        COUNT(*) as appointment_count,
        COUNT(CASE WHEN status = 'completed' THEN 1 END) as completed_count,
        COUNT(CASE WHEN status = 'cancelled' THEN 1 END) as cancelled_count,
        AVG(CASE WHEN status = 'completed' THEN duration_minutes END) as avg_duration
    FROM appointments
    WHERE appointment_date >= DATE('now', '-90 days')
    GROUP BY CAST(strftime('%H', appointment_time) AS INTEGER)
),
peak_hours AS (
    SELECT hour,
        appointment_count,
        completed_count,
        cancelled_count,
        ROUND(avg_duration, 0) as avg_duration_minutes,
        ROUND((completed_count * 100.0 / appointment_count), 2) as success_rate,
        CASE 
            WHEN appointment_count >= (SELECT AVG(appointment_count) * 1.2 FROM hourly_distribution) 
            THEN 'Peak'
            WHEN appointment_count <= (SELECT AVG(appointment_count) * 0.8 FROM hourly_distribution)
            THEN 'Low'
            ELSE 'Normal'
        END as demand_level
    FROM hourly_distribution
)
SELECT 
    hour || ':00' as time_slot,
    appointment_count,
    success_rate || '%' as success_rate,
    avg_duration_minutes,
    demand_level,
    CASE 
        WHEN demand_level = 'Peak' AND success_rate < 80 THEN 'Consider additional resources'
        WHEN demand_level = 'Low' THEN 'Opportunity for marketing'
        ELSE 'Optimal'
    END as recommendation
FROM peak_hours
ORDER BY hour;

-- 3. Identificação de pacientes em risco baseado em padrões
WITH patient_risk_analysis AS (
    SELECT 
        pat.id,
        pat.name,
        u.name as psychologist_name,
        COUNT(a.id) as total_appointments,
        COUNT(CASE WHEN a.status = 'cancelled' THEN 1 END) as cancelled_count,
        COUNT(CASE WHEN a.status = 'no_show' THEN 1 END) as no_show_count,
        COUNT(CASE WHEN a.status = 'completed' THEN 1 END) as completed_count,
        MAX(a.appointment_date) as last_appointment,
        AVG(CASE WHEN sm.mood_before IS NOT NULL THEN sm.mood_before END) as avg_initial_mood,
        AVG(CASE WHEN sm.mood_after IS NOT NULL THEN sm.mood_after END) as avg_final_mood,
        JULIANDAY('now') - JULIANDAY(MAX(a.appointment_date)) as days_since_last_appointment
    FROM patients pat
    LEFT JOIN appointments a ON a.patient_id = pat.id
    LEFT JOIN psychologists p ON pat.assigned_psychologist_id = p.id
    LEFT JOIN users u ON p.user_id = u.id
    LEFT JOIN session_metrics sm ON sm.appointment_id = a.id
    WHERE pat.status = 'active'
    GROUP BY pat.id, pat.name, u.name
),
risk_scoring AS (
    SELECT *,
        CASE 
            WHEN days_since_last_appointment > 30 THEN 3
            WHEN days_since_last_appointment > 14 THEN 2
            WHEN days_since_last_appointment > 7 THEN 1
            ELSE 0
        END +
        CASE 
            WHEN (cancelled_count + no_show_count) * 100.0 / NULLIF(total_appointments, 0) > 30 THEN 3
            WHEN (cancelled_count + no_show_count) * 100.0 / NULLIF(total_appointments, 0) > 15 THEN 2
            ELSE 0
        END +
        CASE 
            WHEN avg_initial_mood < 4 AND (avg_final_mood - avg_initial_mood) < 1 THEN 2
            WHEN avg_initial_mood < 4 THEN 1
            ELSE 0
        END as risk_score
    FROM patient_risk_analysis
)
SELECT 
    name as patient_name,
    psychologist_name,
    total_appointments,
    completed_count,
    ROUND((cancelled_count + no_show_count) * 100.0 / NULLIF(total_appointments, 0), 1) as absence_rate,
    COALESCE(ROUND(avg_initial_mood, 1), 0) as avg_initial_mood,
    COALESCE(ROUND(avg_final_mood, 1), 0) as avg_final_mood,
    ROUND(days_since_last_appointment, 0) as days_since_last,
    risk_score,
    CASE 
        WHEN risk_score >= 6 THEN 'High Risk'
        WHEN risk_score >= 4 THEN 'Medium Risk'
        WHEN risk_score >= 2 THEN 'Low Risk'
        ELSE 'Stable'
    END as risk_level,
    CASE 
        WHEN risk_score >= 6 THEN 'Immediate follow-up required'
        WHEN risk_score >= 4 THEN 'Schedule check-in call'
        WHEN risk_score >= 2 THEN 'Monitor closely'
        ELSE 'Continue regular treatment'
    END as recommended_action
FROM risk_scoring
WHERE total_appointments > 0
ORDER BY risk_score DESC, days_since_last_appointment DESC;

-- 4. Relatório financeiro com análise de tendências
WITH monthly_revenue AS (
    SELECT 
        strftime('%Y-%m', appointment_date) as month,
        COUNT(CASE WHEN status = 'completed' THEN 1 END) as completed_sessions,
        SUM(CASE WHEN status = 'completed' THEN fee_charged ELSE 0 END) as revenue,
        COUNT(DISTINCT patient_id) as unique_patients,
        COUNT(DISTINCT psychologist_id) as active_psychologists
    FROM appointments
    WHERE appointment_date >= DATE('now', '-12 months')
    GROUP BY strftime('%Y-%m', appointment_date)
),
revenue_trends AS (
    SELECT *,
        LAG(revenue) OVER (ORDER BY month) as prev_month_revenue,
        LAG(completed_sessions) OVER (ORDER BY month) as prev_month_sessions,
        revenue - LAG(revenue) OVER (ORDER BY month) as revenue_change,
        ROUND((revenue - LAG(revenue) OVER (ORDER BY month)) * 100.0 / 
              NULLIF(LAG(revenue) OVER (ORDER BY month), 0), 2) as revenue_growth_pct
    FROM monthly_revenue
)
SELECT 
    month,
    completed_sessions,
    'R$ ' || ROUND(revenue, 2) as monthly_revenue,
    unique_patients,
    active_psychologists,
    ROUND(revenue / NULLIF(completed_sessions, 0), 2) as avg_session_value,
    CASE 
        WHEN revenue_change > 0 THEN '+R$ ' || ROUND(revenue_change, 2)
        WHEN revenue_change < 0 THEN '-R$ ' || ROUND(ABS(revenue_change), 2)
        ELSE 'R$ 0.00'
    END as revenue_change,
    COALESCE(revenue_growth_pct || '%', 'N/A') as growth_percentage
FROM revenue_trends
ORDER BY month DESC;
```

#### 📌 Atividade Prática 2:
🎯 **Objetivo:** Implementar queries SQL complexas para o Sistema Lunysse  
📝 **Tarefa:**
- Criar consultas para relatório de produtividade por psicólogo
- Desenvolver análise de padrões de agendamento e otimização
- Implementar sistema de identificação de pacientes em risco
- Criar relatórios financeiros com análise de tendências
- Desenvolver consultas para dashboard gerencial
- Implementar queries para análise de satisfação do paciente
- Criar consultas para otimização de recursos e horários
- Desenvolver relatórios de conformidade e auditoria
- Implementar análises preditivas usando SQL
- Otimizar todas as consultas para performance máxima

---

### Pausa (15 min)

---

### Tópico 3: Stored Procedures e Functions Especializadas (80 min)

#### 📌 Demonstração Prática:
Implementação de lógica de negócio no banco de dados:
- **Stored Procedures:** Operações complexas encapsuladas
- **Functions:** Cálculos reutilizáveis e validações
- **Triggers:** Automação de processos e integridade
- **Views:** Abstrações para consultas complexas
- **Transactions:** Garantia de consistência de dados

```sql
-- Exemplos demonstrados pelo mentor

-- 1. Stored Procedure para agendamento inteligente
CREATE PROCEDURE schedule_appointment(
    IN p_patient_id INTEGER,
    IN p_psychologist_id INTEGER,
    IN p_preferred_date DATE,
    IN p_preferred_time TIME,
    IN p_session_type VARCHAR(20),
    OUT p_appointment_id INTEGER,
    OUT p_status VARCHAR(50),
    OUT p_message TEXT
)
BEGIN
    DECLARE v_conflict_count INTEGER DEFAULT 0;
    DECLARE v_patient_active INTEGER DEFAULT 0;
    DECLARE v_psychologist_active INTEGER DEFAULT 0;
    DECLARE v_suggested_time TIME;
    
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        SET p_status = 'ERROR';
        SET p_message = 'Database error occurred during scheduling';
    END;
    
    START TRANSACTION;
    
    -- Verificar se paciente está ativo
    SELECT COUNT(*) INTO v_patient_active
    FROM patients 
    WHERE id = p_patient_id AND status = 'active';
    
    IF v_patient_active = 0 THEN
        SET p_status = 'ERROR';
        SET p_message = 'Patient not found or inactive';
        ROLLBACK;
        LEAVE;
    END IF;
    
    -- Verificar se psicólogo está ativo
    SELECT COUNT(*) INTO v_psychologist_active
    FROM psychologists p
    JOIN users u ON p.user_id = u.id
    WHERE p.id = p_psychologist_id AND u.is_active = TRUE;
    
    IF v_psychologist_active = 0 THEN
        SET p_status = 'ERROR';
        SET p_message = 'Psychologist not found or inactive';
        ROLLBACK;
        LEAVE;
    END IF;
    
    -- Verificar conflitos de horário
    SELECT COUNT(*) INTO v_conflict_count
    FROM appointments
    WHERE psychologist_id = p_psychologist_id
    AND appointment_date = p_preferred_date
    AND appointment_time = p_preferred_time
    AND status IN ('scheduled', 'completed');
    
    IF v_conflict_count > 0 THEN
        -- Sugerir horário alternativo
        SELECT MIN(TIME(DATETIME(p_preferred_time, '+50 minutes'))) INTO v_suggested_time
        FROM (
            SELECT TIME('09:00') as available_time
            UNION SELECT TIME('10:00')
            UNION SELECT TIME('11:00')
            UNION SELECT TIME('14:00')
            UNION SELECT TIME('15:00')
            UNION SELECT TIME('16:00')
            UNION SELECT TIME('17:00')
        ) available_times
        WHERE available_time NOT IN (
            SELECT appointment_time
            FROM appointments
            WHERE psychologist_id = p_psychologist_id
            AND appointment_date = p_preferred_date
            AND status IN ('scheduled', 'completed')
        )
        AND available_time >= p_preferred_time;
        
        SET p_status = 'CONFLICT';
        SET p_message = CONCAT('Time slot unavailable. Suggested time: ', 
                              COALESCE(v_suggested_time, 'No available slots'));
        ROLLBACK;
        LEAVE;
    END IF;
    
    -- Criar agendamento
    INSERT INTO appointments (
        patient_id, 
        psychologist_id, 
        appointment_date, 
        appointment_time,
        session_type,
        status,
        created_at
    ) VALUES (
        p_patient_id,
        p_psychologist_id,
        p_preferred_date,
        p_preferred_time,
        p_session_type,
        'scheduled',
        CURRENT_TIMESTAMP
    );
    
    SET p_appointment_id = LAST_INSERT_ID();
    SET p_status = 'SUCCESS';
    SET p_message = 'Appointment scheduled successfully';
    
    COMMIT;
END;

-- 2. Function para cálculo de métricas de progresso do paciente
CREATE FUNCTION calculate_patient_progress(p_patient_id INTEGER)
RETURNS JSON
READS SQL DATA
DETERMINISTIC
BEGIN
    DECLARE v_result JSON;
    DECLARE v_total_sessions INTEGER DEFAULT 0;
    DECLARE v_avg_mood_improvement DECIMAL(5,2) DEFAULT 0;
    DECLARE v_consistency_score DECIMAL(5,2) DEFAULT 0;
    DECLARE v_last_session_date DATE;
    DECLARE v_progress_trend VARCHAR(20) DEFAULT 'stable';
    
    -- Calcular total de sessões
    SELECT COUNT(*) INTO v_total_sessions
    FROM appointments
    WHERE patient_id = p_patient_id AND status = 'completed';
    
    -- Calcular melhoria média do humor
    SELECT AVG(mood_after - mood_before) INTO v_avg_mood_improvement
    FROM session_metrics sm
    JOIN appointments a ON sm.appointment_id = a.id
    WHERE a.patient_id = p_patient_id AND a.status = 'completed';
    
    -- Calcular score de consistência (baseado em faltas)
    SELECT 
        CASE 
            WHEN total_appointments = 0 THEN 0
            ELSE (completed_sessions * 100.0 / total_appointments)
        END INTO v_consistency_score
    FROM (
        SELECT 
            COUNT(*) as total_appointments,
            COUNT(CASE WHEN status = 'completed' THEN 1 END) as completed_sessions
        FROM appointments
        WHERE patient_id = p_patient_id
    ) stats;
    
    -- Determinar tendência de progresso
    WITH recent_sessions AS (
        SELECT 
            sm.mood_after - sm.mood_before as improvement,
            ROW_NUMBER() OVER (ORDER BY a.appointment_date DESC) as session_rank
        FROM session_metrics sm
        JOIN appointments a ON sm.appointment_id = a.id
        WHERE a.patient_id = p_patient_id 
        AND a.status = 'completed'
        LIMIT 5
    ),
    trend_analysis AS (
        SELECT 
            AVG(CASE WHEN session_rank <= 2 THEN improvement END) as recent_avg,
            AVG(CASE WHEN session_rank > 2 THEN improvement END) as older_avg
        FROM recent_sessions
    )
    SELECT 
        CASE 
            WHEN recent_avg > older_avg + 0.5 THEN 'improving'
            WHEN recent_avg < older_avg - 0.5 THEN 'declining'
            ELSE 'stable'
        END INTO v_progress_trend
    FROM trend_analysis;
    
    -- Obter data da última sessão
    SELECT MAX(appointment_date) INTO v_last_session_date
    FROM appointments
    WHERE patient_id = p_patient_id AND status = 'completed';
    
    -- Construir resultado JSON
    SET v_result = JSON_OBJECT(
        'patient_id', p_patient_id,
        'total_sessions', v_total_sessions,
        'avg_mood_improvement', COALESCE(v_avg_mood_improvement, 0),
        'consistency_score', COALESCE(v_consistency_score, 0),
        'progress_trend', v_progress_trend,
        'last_session_date', v_last_session_date,
        'calculated_at', CURRENT_TIMESTAMP
    );
    
    RETURN v_result;
END;

-- 3. View complexa para dashboard gerencial
CREATE VIEW dashboard_summary AS
WITH current_month AS (
    SELECT 
        COUNT(CASE WHEN status = 'scheduled' THEN 1 END) as scheduled_appointments,
        COUNT(CASE WHEN status = 'completed' THEN 1 END) as completed_appointments,
        COUNT(CASE WHEN status = 'cancelled' THEN 1 END) as cancelled_appointments,
        SUM(CASE WHEN status = 'completed' THEN fee_charged ELSE 0 END) as monthly_revenue,
        COUNT(DISTINCT patient_id) as active_patients,
        COUNT(DISTINCT psychologist_id) as active_psychologists
    FROM appointments
    WHERE strftime('%Y-%m', appointment_date) = strftime('%Y-%m', 'now')
),
previous_month AS (
    SELECT 
        COUNT(CASE WHEN status = 'completed' THEN 1 END) as prev_completed,
        SUM(CASE WHEN status = 'completed' THEN fee_charged ELSE 0 END) as prev_revenue
    FROM appointments
    WHERE strftime('%Y-%m', appointment_date) = strftime('%Y-%m', 'now', '-1 month')
),
patient_stats AS (
    SELECT 
        COUNT(CASE WHEN status = 'active' THEN 1 END) as total_active_patients,
        COUNT(CASE WHEN status = 'inactive' THEN 1 END) as inactive_patients
    FROM patients
),
risk_patients AS (
    SELECT COUNT(*) as high_risk_patients
    FROM patients p
    WHERE p.status = 'active'
    AND (
        SELECT COUNT(*)
        FROM appointments a
        WHERE a.patient_id = p.id
        AND a.status IN ('cancelled', 'no_show')
        AND a.appointment_date >= DATE('now', '-30 days')
    ) >= 2
)
SELECT 
    cm.scheduled_appointments,
    cm.completed_appointments,
    cm.cancelled_appointments,
    ROUND(cm.monthly_revenue, 2) as monthly_revenue,
    cm.active_patients,
    cm.active_psychologists,
    ps.total_active_patients,
    ps.inactive_patients,
    rp.high_risk_patients,
    ROUND(
        CASE 
            WHEN pm.prev_completed > 0 
            THEN ((cm.completed_appointments - pm.prev_completed) * 100.0 / pm.prev_completed)
            ELSE 0 
        END, 2
    ) as sessions_growth_pct,
    ROUND(
        CASE 
            WHEN pm.prev_revenue > 0 
            THEN ((cm.monthly_revenue - pm.prev_revenue) * 100.0 / pm.prev_revenue)
            ELSE 0 
        END, 2
    ) as revenue_growth_pct,
    ROUND(
        CASE 
            WHEN (cm.completed_appointments + cm.cancelled_appointments) > 0
            THEN (cm.completed_appointments * 100.0 / (cm.completed_appointments + cm.cancelled_appointments))
            ELSE 0
        END, 2
    ) as completion_rate
FROM current_month cm
CROSS JOIN previous_month pm
CROSS JOIN patient_stats ps
CROSS JOIN risk_patients rp;

-- 4. Trigger para auditoria automática de mudanças críticas
CREATE TRIGGER audit_critical_changes
AFTER UPDATE ON appointments
FOR EACH ROW
WHEN NEW.status != OLD.status OR NEW.session_report != OLD.session_report
BEGIN
    INSERT INTO audit_log (
        table_name,
        record_id,
        action,
        old_values,
        new_values,
        user_id,
        timestamp
    ) VALUES (
        'appointments',
        NEW.id,
        'UPDATE',
        JSON_OBJECT(
            'status', OLD.status,
            'session_report', OLD.session_report,
            'notes', OLD.notes
        ),
        JSON_OBJECT(
            'status', NEW.status,
            'session_report', NEW.session_report,
            'notes', NEW.notes
        ),
        NEW.psychologist_id,
        CURRENT_TIMESTAMP
    );
    
    -- Notificar sobre mudanças críticas
    IF NEW.status = 'cancelled' AND OLD.status = 'scheduled' THEN
        INSERT INTO system_notifications (
            type,
            title,
            message,
            user_id,
            created_at
        ) VALUES (
            'appointment_cancelled',
            'Appointment Cancelled',
            CONCAT('Appointment #', NEW.id, ' was cancelled'),
            NEW.psychologist_id,
            CURRENT_TIMESTAMP
        );
    END IF;
END;
```

#### 📌 Atividade Prática 3:
🎯 **Objetivo:** Implementar stored procedures e functions para o Sistema Lunysse  
📝 **Tarefa:**
- Criar stored procedure para agendamento inteligente com validações
- Desenvolver function para cálculo de progresso do paciente
- Implementar procedures para relatórios automatizados
- Criar functions para validação de dados médicos
- Desenvolver triggers para auditoria automática
- Implementar views complexas para dashboards
- Criar procedures para backup e manutenção
- Desenvolver functions para cálculos financeiros
- Implementar sistema de notificações automáticas
- Testar todas as procedures com cenários reais

---

### Tópico 4: Integração com API e Otimização de Performance (65 min)

#### 📌 Demonstração Prática:
Integração completa entre SQL e aplicação web:
- **Node.js + SQLite:** Configuração e conexão
- **Query optimization:** Índices e performance tuning
- **Connection pooling:** Gerenciamento eficiente de conexões
- **Prepared statements:** Segurança e performance
- **Transaction management:** Consistência de dados

```javascript
// Exemplo demonstrado pelo mentor
const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');

class DatabaseManager {
    constructor(dbPath = './lunysse.db') {
        this.dbPath = dbPath;
        this.db = null;
        this.connectionPool = [];
        this.maxConnections = 10;
    }

    async initialize() {
        this.db = await open({
            filename: this.dbPath,
            driver: sqlite3.Database
        });

        // Configurações de performance
        await this.db.exec(`
            PRAGMA journal_mode = WAL;
            PRAGMA synchronous = NORMAL;
            PRAGMA cache_size = 1000;
            PRAGMA temp_store = MEMORY;
            PRAGMA mmap_size = 268435456;
        `);

        // Criar índices otimizados
        await this.createOptimizedIndexes();
        
        console.log('Database initialized successfully');
    }

    async createOptimizedIndexes() {
        const indexes = [
            'CREATE INDEX IF NOT EXISTS idx_appointments_patient_date ON appointments(patient_id, appointment_date)',
            'CREATE INDEX IF NOT EXISTS idx_appointments_psychologist_date ON appointments(psychologist_id, appointment_date)',
            'CREATE INDEX IF NOT EXISTS idx_appointments_status_date ON appointments(status, appointment_date)',
            'CREATE INDEX IF NOT EXISTS idx_patients_psychologist_status ON patients(assigned_psychologist_id, status)',
            'CREATE INDEX IF NOT EXISTS idx_audit_log_table_timestamp ON audit_log(table_name, timestamp)',
            'CREATE INDEX IF NOT EXISTS idx_session_metrics_appointment ON session_metrics(appointment_id)'
        ];

        for (const index of indexes) {
            await this.db.exec(index);
        }
    }

    // Repository pattern para operações de dados
    async getPatientsByPsychologist(psychologistId, options = {}) {
        const {
            status = 'active',
            limit = 50,
            offset = 0,
            sortBy = 'name',
            sortOrder = 'ASC'
        } = options;

        const query = `
            SELECT 
                p.*,
                u.email,
                u.phone as user_phone,
                COUNT(a.id) as total_appointments,
                COUNT(CASE WHEN a.status = 'completed' THEN 1 END) as completed_sessions,
                MAX(a.appointment_date) as last_appointment_date,
                calculate_patient_progress(p.id) as progress_data
            FROM patients p
            LEFT JOIN users u ON p.user_id = u.id
            LEFT JOIN appointments a ON a.patient_id = p.id
            WHERE p.assigned_psychologist_id = ? 
            AND p.status = ?
            GROUP BY p.id
            ORDER BY ${sortBy} ${sortOrder}
            LIMIT ? OFFSET ?
        `;

        try {
            const patients = await this.db.all(query, [psychologistId, status, limit, offset]);
            
            // Parse JSON progress data
            return patients.map(patient => ({
                ...patient,
                progress_data: patient.progress_data ? JSON.parse(patient.progress_data) : null
            }));
        } catch (error) {
            console.error('Error fetching patients:', error);
            throw new Error('Failed to fetch patients');
        }
    }

    async createAppointment(appointmentData) {
        const {
            patientId,
            psychologistId,
            appointmentDate,
            appointmentTime,
            sessionType = 'individual',
            duration = 50,
            notes = ''
        } = appointmentData;

        const transaction = await this.db.prepare('BEGIN TRANSACTION');
        
        try {
            await transaction.run();

            // Verificar conflitos usando stored procedure
            const conflictCheck = await this.db.get(`
                SELECT COUNT(*) as conflicts
                FROM appointments
                WHERE psychologist_id = ? 
                AND appointment_date = ? 
                AND appointment_time = ?
                AND status IN ('scheduled', 'completed')
            `, [psychologistId, appointmentDate, appointmentTime]);

            if (conflictCheck.conflicts > 0) {
                await this.db.prepare('ROLLBACK').run();
                throw new Error('Time slot already booked');
            }

            // Inserir agendamento
            const insertResult = await this.db.run(`
                INSERT INTO appointments (
                    patient_id, psychologist_id, appointment_date, 
                    appointment_time, session_type, duration_minutes, 
                    notes, status, created_at
                ) VALUES (?, ?, ?, ?, ?, ?, ?, 'scheduled', CURRENT_TIMESTAMP)
            `, [patientId, psychologistId, appointmentDate, appointmentTime, sessionType, duration, notes]);

            // Criar entrada de métricas inicial
            await this.db.run(`
                INSERT INTO session_metrics (appointment_id, created_at)
                VALUES (?, CURRENT_TIMESTAMP)
            `, [insertResult.lastID]);

            await this.db.prepare('COMMIT').run();

            return {
                id: insertResult.lastID,
                status: 'success',
                message: 'Appointment created successfully'
            };

        } catch (error) {
            await this.db.prepare('ROLLBACK').run();
            console.error('Error creating appointment:', error);
            throw error;
        }
    }

    async getAppointmentsByDateRange(psychologistId, startDate, endDate) {
        const query = `
            SELECT 
                a.*,
                p.name as patient_name,
                p.phone as patient_phone,
                sm.mood_before,
                sm.mood_after,
                sm.progress_rating
            FROM appointments a
            JOIN patients p ON a.patient_id = p.id
            LEFT JOIN session_metrics sm ON sm.appointment_id = a.id
            WHERE a.psychologist_id = ?
            AND a.appointment_date BETWEEN ? AND ?
            ORDER BY a.appointment_date, a.appointment_time
        `;

        return await this.db.all(query, [psychologistId, startDate, endDate]);
    }

    async updateSessionReport(appointmentId, reportData) {
        const {
            notes,
            sessionReport,
            moodBefore,
            moodAfter,
            anxietyLevel,
            progressRating,
            goalsAchieved,
            homeworkAssigned
        } = reportData;

        const transaction = await this.db.prepare('BEGIN TRANSACTION');

        try {
            await transaction.run();

            // Atualizar appointment
            await this.db.run(`
                UPDATE appointments 
                SET notes = ?, session_report = ?, status = 'completed', updated_at = CURRENT_TIMESTAMP
                WHERE id = ?
            `, [notes, sessionReport, appointmentId]);

            // Atualizar métricas
            await this.db.run(`
                UPDATE session_metrics 
                SET mood_before = ?, mood_after = ?, anxiety_level = ?, 
                    progress_rating = ?, goals_achieved = ?, homework_assigned = ?
                WHERE appointment_id = ?
            `, [moodBefore, moodAfter, anxietyLevel, progressRating, goalsAchieved, homeworkAssigned, appointmentId]);

            await this.db.prepare('COMMIT').run();

            return { status: 'success', message: 'Session report updated successfully' };

        } catch (error) {
            await this.db.prepare('ROLLBACK').run();
            console.error('Error updating session report:', error);
            throw error;
        }
    }

    async getDashboardData(psychologistId) {
        const queries = {
            summary: `
                SELECT * FROM dashboard_summary
            `,
            recentAppointments: `
                SELECT a.*, p.name as patient_name
                FROM appointments a
                JOIN patients p ON a.patient_id = p.id
                WHERE a.psychologist_id = ?
                AND a.appointment_date >= DATE('now')
                ORDER BY a.appointment_date, a.appointment_time
                LIMIT 10
            `,
            riskPatients: `
                SELECT p.name, p.id,
                       COUNT(CASE WHEN a.status IN ('cancelled', 'no_show') THEN 1 END) as missed_appointments,
                       MAX(a.appointment_date) as last_appointment
                FROM patients p
                LEFT JOIN appointments a ON a.patient_id = p.id
                WHERE p.assigned_psychologist_id = ?
                AND p.status = 'active'
                GROUP BY p.id, p.name
                HAVING missed_appointments >= 2 OR last_appointment < DATE('now', '-30 days')
                ORDER BY missed_appointments DESC, last_appointment ASC
            `
        };

        const [summary, recentAppointments, riskPatients] = await Promise.all([
            this.db.get(queries.summary),
            this.db.all(queries.recentAppointments, [psychologistId]),
            this.db.all(queries.riskPatients, [psychologistId])
        ]);

        return {
            summary,
            recentAppointments,
            riskPatients
        };
    }

    async close() {
        if (this.db) {
            await this.db.close();
            console.log('Database connection closed');
        }
    }
}

// Integração com Express.js
const express = require('express');
const app = express();
const dbManager = new DatabaseManager();

app.use(express.json());

// Middleware para inicializar DB
app.use(async (req, res, next) => {
    if (!dbManager.db) {
        await dbManager.initialize();
    }
    req.db = dbManager;
    next();
});

// Rotas da API
app.get('/api/patients/:psychologistId', async (req, res) => {
    try {
        const { psychologistId } = req.params;
        const { status, limit, offset, sortBy, sortOrder } = req.query;
        
        const patients = await req.db.getPatientsByPsychologist(psychologistId, {
            status, limit: parseInt(limit), offset: parseInt(offset), sortBy, sortOrder
        });
        
        res.json({ success: true, data: patients });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

app.post('/api/appointments', async (req, res) => {
    try {
        const result = await req.db.createAppointment(req.body);
        res.json({ success: true, data: result });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});

app.get('/api/dashboard/:psychologistId', async (req, res) => {
    try {
        const { psychologistId } = req.params;
        const dashboardData = await req.db.getDashboardData(psychologistId);
        res.json({ success: true, data: dashboardData });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = { DatabaseManager, app };
```

#### 📌 Atividade Prática 4:
🎯 **Objetivo:** Integrar SQL com a API do Sistema Lunysse  
📝 **Tarefa:**
- Configurar SQLite com Node.js e otimizações de performance
- Implementar DatabaseManager class com connection pooling
- Criar repository pattern para todas as operações de dados
- Desenvolver API endpoints integrados com SQL
- Implementar transaction management para operações críticas
- Criar sistema de cache para consultas frequentes
- Desenvolver middleware de logging para queries SQL
- Implementar prepared statements para segurança
- Criar sistema de backup automático
- Testar performance com grandes volumes de dados

---

### Encerramento e Reflexão (50 min)

#### 📌 Discussão em grupo:
**Tema:** "Como o domínio de SQL impacta a qualidade e escalabilidade de sistemas de saúde?"

Reflexão aprofundada sobre:
- **Integridade de dados:** Importância de constraints e validações em dados médicos
- **Performance crítica:** Como consultas otimizadas impactam a experiência do usuário
- **Auditoria e compliance:** Rastreamento de mudanças para regulamentações de saúde
- **Escalabilidade:** Preparação para crescimento de volume de dados
- **Segurança:** Proteção de dados sensíveis através de estruturas adequadas
- **Relatórios gerenciais:** Importância de dados estruturados para tomada de decisão

#### 📌 Desafio para a próxima aula:
Migrar completamente o Sistema Lunysse para SQL:
- Migrar todos os dados do localStorage para SQLite
- Atualizar todas as operações da aplicação para usar SQL
- Implementar sistema de backup e recovery
- Criar dashboard de monitoramento de performance do banco
- Documentar todas as consultas e procedures criadas

---

## 📌 Objetos de Aprendizagem

📝 **Database Schema:** Modelo completo de dados para sistema médico  
📝 **SQL Query Library:** Biblioteca de consultas otimizadas para relatórios  
📝 **Stored Procedures Collection:** Conjunto de procedures para lógica de negócio  
📝 **API Integration Guide:** Manual de integração SQL com aplicações web  
📝 **Performance Optimization Manual:** Guia de otimização de consultas e índices  
📝 **Audit System:** Sistema completo de auditoria para dados médicos  
📝 **Backup & Recovery Procedures:** Processos de backup e recuperação de dados

---

## 🎯 Avaliação

### Critérios de Avaliação:

✅ **Modelagem de Dados (25%):** Qualidade do modelo relacional e normalização  
✅ **Consultas SQL (25%):** Complexidade e eficiência das queries desenvolvidas  
✅ **Stored Procedures (25%):** Implementação de lógica de negócio no banco  
✅ **Integração API (25%):** Qualidade da integração entre SQL e aplicação web

### Instrumentos de Avaliação:

- **Projeto prático:** Sistema Lunysse completamente integrado com SQL
- **Performance testing:** Medição de performance das consultas
- **Code review:** Análise da qualidade do código SQL e integração
- **Apresentação técnica:** Demonstração das funcionalidades implementadas

---

## 🎓 Conclusão

Ao final desta aula, os alunos serão capazes de:

- **Modelar dados complexos** para sistemas médicos com integridade total
- **Criar consultas SQL avançadas** para relatórios e análises gerenciais
- **Implementar stored procedures** para lógica de negócio robusta
- **Integrar SQL com aplicações web** usando Node.js e melhores práticas
- **Otimizar performance** de consultas e estruturas de dados
- **Implementar auditoria completa** para dados sensíveis de saúde

Esta competência é fundamental para desenvolvedores full stack, estabelecendo uma base sólida para trabalho com dados em sistemas críticos e preparando para arquiteturas enterprise complexas.

---

**Indicador de Competência Trabalhado:**  
✔️ **Indicador 4** - Utiliza linguagem de programação SQL para tratamento de dados

**Metodologia Ativa Aplicada:**  
- **Project-Based Learning:** Desenvolvimento de sistema completo com SQL
- **Problem-Solving Approach:** Resolução de problemas reais de dados médicos  
- **Hands-on Database Design:** Modelagem prática de sistemas complexos  
- **Performance-Driven Development:** Foco em otimização e escalabilidade