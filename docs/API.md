# 🔌 API Documentation - Sistema Lunysse

## Visão Geral

A API do Lunysse é atualmente implementada como uma **Mock API** usando localStorage para persistência. Esta documentação serve como especificação para a futura implementação de uma API REST real.

## Base URL

```
Desenvolvimento: http://localhost:3000/api/v1
Produção: https://api.lunysse.com/v1
```

## Autenticação

### Método Atual (Mock)
```javascript
// Simulação de token JWT
const token = 'mock-token-' + user.id;
localStorage.setItem('auth_token', token);
```

### Método Futuro (JWT)
```http
Authorization: Bearer <jwt_token>
```

## Endpoints

### 🔐 Autenticação

#### POST /auth/login
Autentica um usuário no sistema.

**Request:**
```json
{
  "email": "psicologo@test.com",
  "password": "123456"
}
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": 1,
      "name": "Dr. João Silva",
      "email": "psicologo@test.com",
      "type": "psicologo",
      "specialty": "Psicologia Clínica",
      "crp": "CRP 01/12345"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

**Response (401):**
```json
{
  "success": false,
  "error": {
    "code": "INVALID_CREDENTIALS",
    "message": "Credenciais inválidas"
  }
}
```

#### POST /auth/register
Registra um novo usuário.

**Request:**
```json
{
  "name": "Dr. Maria Silva",
  "email": "maria@test.com",
  "password": "123456",
  "type": "psicologo",
  "specialty": "Terapia Cognitiva",
  "crp": "CRP 01/54321"
}
```

**Response (201):**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": 5,
      "name": "Dr. Maria Silva",
      "email": "maria@test.com",
      "type": "psicologo",
      "specialty": "Terapia Cognitiva",
      "crp": "CRP 01/54321"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

#### POST /auth/logout
Invalida o token do usuário.

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "success": true,
  "message": "Logout realizado com sucesso"
}
```

### 👨⚕️ Psicólogos

#### GET /psychologists
Lista todos os psicólogos disponíveis.

**Response (200):**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Dr. João Silva",
      "specialty": "Psicologia Clínica",
      "crp": "CRP 01/12345"
    },
    {
      "id": 2,
      "name": "Dra. Ana Costa",
      "specialty": "Terapia Cognitivo-Comportamental",
      "crp": "CRP 01/23456"
    }
  ]
}
```

#### GET /psychologists/:id
Detalhes de um psicólogo específico.

**Response (200):**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Dr. João Silva",
    "email": "psicologo@test.com",
    "specialty": "Psicologia Clínica",
    "crp": "CRP 01/12345",
    "totalPatients": 4,
    "totalSessions": 15,
    "createdAt": "2024-01-15T10:00:00Z"
  }
}
```

### 👤 Pacientes

#### GET /patients
Lista pacientes do psicólogo autenticado.

**Headers:**
```
Authorization: Bearer <token>
```

**Query Parameters:**
- `page` (optional): Número da página (default: 1)
- `limit` (optional): Itens por página (default: 10)
- `status` (optional): Filtrar por status
- `search` (optional): Buscar por nome

**Response (200):**
```json
{
  "success": true,
  "data": {
    "patients": [
      {
        "id": 1,
        "name": "Maria Santos",
        "email": "maria.santos@email.com",
        "phone": "(11) 99999-1111",
        "birthDate": "1990-05-15",
        "age": 34,
        "status": "Em tratamento",
        "totalSessions": 5,
        "lastSession": "2024-12-10",
        "createdAt": "2024-01-15T10:00:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 4,
      "totalPages": 1
    }
  }
}
```

#### GET /patients/:id
Detalhes de um paciente específico.

**Response (200):**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Maria Santos",
    "email": "maria.santos@email.com",
    "phone": "(11) 99999-1111",
    "birthDate": "1990-05-15",
    "age": 34,
    "status": "Em tratamento",
    "psychologistId": 1,
    "totalSessions": 5,
    "sessions": [
      {
        "id": 1,
        "date": "2024-12-10",
        "time": "14:00",
        "status": "concluido",
        "description": "Sessão de acompanhamento"
      }
    ],
    "createdAt": "2024-01-15T10:00:00Z"
  }
}
```

#### POST /patients
Cadastra um novo paciente.

**Request:**
```json
{
  "name": "João Silva",
  "email": "joao@email.com",
  "phone": "(11) 99999-2222",
  "birthDate": "1985-08-22"
}
```

**Response (201):**
```json
{
  "success": true,
  "data": {
    "id": 17,
    "name": "João Silva",
    "email": "joao@email.com",
    "phone": "(11) 99999-2222",
    "birthDate": "1985-08-22",
    "age": 39,
    "status": "Ativo",
    "psychologistId": 1,
    "totalSessions": 0,
    "createdAt": "2024-12-15T10:00:00Z"
  }
}
```

#### PUT /patients/:id
Atualiza dados de um paciente.

**Request:**
```json
{
  "phone": "(11) 88888-2222",
  "status": "Em tratamento"
}
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "id": 17,
    "name": "João Silva",
    "email": "joao@email.com",
    "phone": "(11) 88888-2222",
    "status": "Em tratamento",
    "updatedAt": "2024-12-15T11:00:00Z"
  }
}
```

### 📅 Agendamentos

#### GET /appointments
Lista agendamentos do usuário.

**Query Parameters:**
- `date` (optional): Filtrar por data (YYYY-MM-DD)
- `status` (optional): Filtrar por status
- `patient_id` (optional): Filtrar por paciente

**Response (200):**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "patientId": 1,
      "patientName": "Maria Santos",
      "psychologistId": 1,
      "date": "2024-12-20",
      "time": "14:00",
      "status": "agendado",
      "description": "Sessão de acompanhamento",
      "duration": 50,
      "createdAt": "2024-12-15T10:00:00Z"
    }
  ]
}
```

#### GET /appointments/:id
Detalhes de um agendamento específico.

**Response (200):**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "patient": {
      "id": 1,
      "name": "Maria Santos",
      "email": "maria.santos@email.com"
    },
    "psychologist": {
      "id": 1,
      "name": "Dr. João Silva"
    },
    "date": "2024-12-20",
    "time": "14:00",
    "status": "agendado",
    "description": "Sessão de acompanhamento",
    "duration": 50,
    "notes": "",
    "fullReport": "",
    "createdAt": "2024-12-15T10:00:00Z",
    "updatedAt": "2024-12-15T10:00:00Z"
  }
}
```

#### POST /appointments
Cria um novo agendamento.

**Request:**
```json
{
  "patientId": 1,
  "psychologistId": 1,
  "date": "2024-12-25",
  "time": "15:00",
  "description": "Sessão de acompanhamento",
  "duration": 50
}
```

**Response (201):**
```json
{
  "success": true,
  "data": {
    "id": 20,
    "patientId": 1,
    "psychologistId": 1,
    "date": "2024-12-25",
    "time": "15:00",
    "status": "agendado",
    "description": "Sessão de acompanhamento",
    "duration": 50,
    "createdAt": "2024-12-15T10:00:00Z"
  }
}
```

#### PUT /appointments/:id
Atualiza um agendamento.

**Request:**
```json
{
  "status": "concluido",
  "notes": "Sessão produtiva, paciente demonstrou progresso.",
  "fullReport": "Relatório completo da sessão..."
}
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "status": "concluido",
    "notes": "Sessão produtiva, paciente demonstrou progresso.",
    "fullReport": "Relatório completo da sessão...",
    "updatedAt": "2024-12-15T16:00:00Z"
  }
}
```

#### DELETE /appointments/:id
Cancela um agendamento.

**Response (200):**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "status": "cancelado",
    "updatedAt": "2024-12-15T16:00:00Z"
  }
}
```

### 🕐 Disponibilidade

#### GET /availability/:psychologist_id
Verifica horários disponíveis de um psicólogo.

**Query Parameters:**
- `date` (required): Data para verificar (YYYY-MM-DD)

**Response (200):**
```json
{
  "success": true,
  "data": {
    "date": "2024-12-20",
    "psychologistId": 1,
    "availableSlots": [
      "09:00",
      "10:00",
      "11:00",
      "16:00",
      "17:00"
    ],
    "occupiedSlots": [
      {
        "time": "14:00",
        "patientName": "Maria Santos",
        "status": "agendado"
      },
      {
        "time": "15:00",
        "patientName": "Pedro Oliveira",
        "status": "agendado"
      }
    ]
  }
}
```

### 📊 Relatórios

#### GET /reports/dashboard
Dados para dashboard do psicólogo.

**Response (200):**
```json
{
  "success": true,
  "data": {
    "stats": {
      "activePatients": 4,
      "totalSessions": 15,
      "completedSessions": 12,
      "attendanceRate": 80,
      "riskAlerts": 2
    },
    "frequencyData": [
      { "month": "Jan", "sessions": 10 },
      { "month": "Fev", "sessions": 15 },
      { "month": "Mar", "sessions": 12 }
    ],
    "statusData": [
      { "name": "Concluídas", "value": 80, "color": "#26B0BF" },
      { "name": "Canceladas", "value": 15, "color": "#ef4444" },
      { "name": "Reagendadas", "value": 5, "color": "#f59e0b" }
    ],
    "riskAlerts": [
      {
        "id": 1,
        "patient": "Maria Santos",
        "risk": "Alto",
        "reason": "Faltas consecutivas",
        "date": "2024-12-10"
      }
    ]
  }
}
```

#### GET /reports/sessions
Relatório detalhado de sessões.

**Query Parameters:**
- `start_date` (optional): Data inicial (YYYY-MM-DD)
- `end_date` (optional): Data final (YYYY-MM-DD)
- `patient_id` (optional): Filtrar por paciente

**Response (200):**
```json
{
  "success": true,
  "data": {
    "summary": {
      "totalSessions": 15,
      "completedSessions": 12,
      "canceledSessions": 2,
      "rescheduledSessions": 1,
      "averageDuration": 48
    },
    "sessions": [
      {
        "id": 1,
        "date": "2024-12-10",
        "time": "14:00",
        "patient": "Maria Santos",
        "status": "concluido",
        "duration": 50,
        "hasNotes": true,
        "hasReport": true
      }
    ]
  }
}
```

## Códigos de Status HTTP

| Código | Descrição |
|--------|-----------|
| 200 | OK - Requisição bem-sucedida |
| 201 | Created - Recurso criado com sucesso |
| 400 | Bad Request - Dados inválidos |
| 401 | Unauthorized - Token inválido ou ausente |
| 403 | Forbidden - Sem permissão para o recurso |
| 404 | Not Found - Recurso não encontrado |
| 409 | Conflict - Conflito de dados (ex: horário ocupado) |
| 422 | Unprocessable Entity - Dados válidos mas não processáveis |
| 500 | Internal Server Error - Erro interno do servidor |

## Tratamento de Erros

### Formato Padrão de Erro

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Mensagem de erro legível",
    "details": {
      "field": "Campo específico com erro",
      "value": "Valor que causou o erro"
    }
  }
}
```

### Códigos de Erro Comuns

| Código | Descrição |
|--------|-----------|
| INVALID_CREDENTIALS | Credenciais de login inválidas |
| TOKEN_EXPIRED | Token JWT expirado |
| VALIDATION_ERROR | Erro de validação de dados |
| RESOURCE_NOT_FOUND | Recurso não encontrado |
| DUPLICATE_EMAIL | Email já cadastrado |
| SCHEDULE_CONFLICT | Conflito de horário |
| UNAUTHORIZED_ACCESS | Acesso não autorizado ao recurso |

## Rate Limiting

### Limites por Endpoint

| Endpoint | Limite | Janela |
|----------|--------|--------|
| POST /auth/login | 5 tentativas | 15 minutos |
| POST /auth/register | 3 tentativas | 1 hora |
| GET /appointments | 100 requests | 1 minuto |
| POST /appointments | 10 requests | 1 minuto |
| Outros endpoints | 60 requests | 1 minuto |

### Headers de Rate Limiting

```http
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 45
X-RateLimit-Reset: 1640995200
```

## Paginação

### Parâmetros de Query

- `page`: Número da página (default: 1)
- `limit`: Itens por página (default: 10, max: 100)
- `sort`: Campo para ordenação
- `order`: Direção da ordenação (asc/desc)

### Resposta com Paginação

```json
{
  "success": true,
  "data": {
    "items": [...],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 45,
      "totalPages": 5,
      "hasNext": true,
      "hasPrev": false
    }
  }
}
```

## Filtros e Busca

### Operadores de Filtro

- `eq`: Igual (default)
- `ne`: Diferente
- `gt`: Maior que
- `gte`: Maior ou igual
- `lt`: Menor que
- `lte`: Menor ou igual
- `like`: Contém (busca textual)
- `in`: Está em (lista de valores)

### Exemplo de Uso

```
GET /patients?name[like]=Maria&status[in]=Ativo,Em tratamento&age[gte]=18
```

## Webhooks (Futuro)

### Eventos Disponíveis

- `appointment.created`: Novo agendamento criado
- `appointment.updated`: Agendamento atualizado
- `appointment.canceled`: Agendamento cancelado
- `patient.created`: Novo paciente cadastrado
- `session.completed`: Sessão concluída

### Formato do Payload

```json
{
  "event": "appointment.created",
  "timestamp": "2024-12-15T10:00:00Z",
  "data": {
    "id": 1,
    "patientId": 1,
    "psychologistId": 1,
    "date": "2024-12-20",
    "time": "14:00"
  }
}
```

## Implementação Mock Atual

### Estrutura do mockApi.js

```javascript
export const mockApi = {
  // Autenticação
  async login(email, password) {
    await delay(1000);
    const currentUsers = getStorageData(STORAGE_KEYS.USERS, initialUsers);
    const user = currentUsers.find(u => u.email === email && u.password === password);
    if (!user) throw new Error('Credenciais inválidas');
    return { user: { ...user, password: undefined }, token: 'mock-token' };
  },

  // Psicólogos
  async getPsychologists() {
    await delay(500);
    const currentUsers = getStorageData(STORAGE_KEYS.USERS, initialUsers);
    return currentUsers.filter(user => user.type === 'psicologo');
  },

  // Pacientes
  async getPatients(psychologistId) {
    await delay(500);
    const currentPatients = getStorageData(STORAGE_KEYS.PATIENTS, initialPatients);
    return currentPatients.filter(patient => patient.psychologistId === psychologistId);
  },

  // Agendamentos
  async createAppointment(appointmentData) {
    await delay(1000);
    const currentAppointments = getStorageData(STORAGE_KEYS.APPOINTMENTS, appointments);
    const newAppointment = { id: Date.now(), ...appointmentData, status: 'agendado' };
    currentAppointments.push(newAppointment);
    setStorageData(STORAGE_KEYS.APPOINTMENTS, currentAppointments);
    return newAppointment;
  }
};
```

## Migração para API Real

### Checklist de Migração

- [ ] Configurar servidor Express/Fastify
- [ ] Implementar autenticação JWT
- [ ] Criar middleware de validação
- [ ] Implementar rate limiting
- [ ] Configurar CORS
- [ ] Adicionar logging
- [ ] Implementar testes de API
- [ ] Configurar monitoramento
- [ ] Documentar com Swagger/OpenAPI
- [ ] Configurar CI/CD

### Exemplo de Implementação (Express)

```javascript
// routes/auth.js
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const router = express.Router();

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await User.findOne({ where: { email } });
    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(401).json({
        success: false,
        error: {
          code: 'INVALID_CREDENTIALS',
          message: 'Credenciais inválidas'
        }
      });
    }

    const token = jwt.sign(
      { id: user.id, type: user.type },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      success: true,
      data: {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          type: user.type
        },
        token
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: {
        code: 'INTERNAL_ERROR',
        message: 'Erro interno do servidor'
      }
    });
  }
});

module.exports = router;
```

## Conclusão

Esta documentação da API serve como:

1. **Especificação**: Define contratos claros para frontend/backend
2. **Guia de Implementação**: Roadmap para migração da mock API
3. **Referência**: Documentação completa para desenvolvedores
4. **Padrões**: Estabelece convenções e boas práticas

A API foi projetada seguindo princípios REST e boas práticas de desenvolvimento, garantindo escalabilidade e manutenibilidade.