import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { appointmentService, patientService } from '../services/apiService';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { Input } from '../components/Input';
import { ArrowLeft, Users, Mail, Phone, Calendar, Activity, CheckCircle, Clock, Eye, Plus } from 'lucide-react';
import toast from 'react-hot-toast';

const PatientInfo = ({ patient }) => {
  const fields = [
    { icon: Calendar, label: 'Idade', value: `${patient.age} anos` },
    { icon: Calendar, label: 'Data de Nascimento', value: new Date(patient.birth_date).toLocaleDateString('pt-BR') },
    { icon: Phone, label: 'Telefone', value: patient.phone, href: `tel:${patient.phone}` },
    { icon: Mail, label: 'Email', value: patient.email, href: `mailto:${patient.email}` },
    { icon: CheckCircle, label: 'Status do Tratamento', value: patient.status, isStatus: true }
  ];

  return (
    <Card>
      <div className="space-y-4 sm:space-y-6">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-light to-accent rounded-full flex items-center justify-center flex-shrink-0">
            <Users className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="text-xl sm:text-2xl font-bold text-dark">{patient.name}</h2>
            <p className="text-sm sm:text-base text-dark/60">Paciente #{patient.id}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {fields.map(({ icon: IconComponent, label, value, href, isStatus }) => (
            <div key={label} className="flex items-center gap-2 sm:gap-3">
              <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-dark/60 flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-xs sm:text-sm text-dark/60">{label}</p>
                {href ? (
                  <a href={href} className="text-sm sm:text-base font-semibold text-dark hover:text-light transition-colors break-all">{value}</a>
                ) : isStatus ? (
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                    value === 'Ativo' || value === 'Em tratamento' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>{value}</span>
                ) : (
                  <p className="text-sm sm:text-base font-semibold text-dark">{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

const SessionForm = ({ data, onChange, onSubmit, onCancel, loading }) => {
  const timeSlots = ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
  const durations = [30, 45, 50, 60];
  const today = new Date().toISOString().split('T')[0];

  return (
    <Card className="bg-blue-50">
      <h4 className="text-base sm:text-lg font-semibold text-dark mb-4">Agendar Nova Sessão</h4>
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Data *"
            type="date"
            value={data.date}
            onChange={(e) => onChange({ ...data, date: e.target.value })}
            min={today}
            required
          />
          <div>
            <label className="block text-sm font-medium text-dark mb-2">Horário *</label>
            <select
              value={data.time}
              onChange={(e) => onChange({ ...data, time: e.target.value })}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-dark focus:outline-none focus:ring-2 focus:ring-light text-sm sm:text-base"
              required
            >
              <option value="">Selecione o horário</option>
              {timeSlots.map(time => <option key={time} value={time}>{time}</option>)}
            </select>
          </div>
        </div>
        <Input
          label="Descrição"
          value={data.description}
          onChange={(e) => onChange({ ...data, description: e.target.value })}
          placeholder="Ex: Sessão de acompanhamento, Avaliação inicial..."
        />
        <div>
          <label className="block text-sm font-medium text-dark mb-2">Duração (minutos)</label>
          <select
            value={data.duration}
            onChange={(e) => onChange({ ...data, duration: parseInt(e.target.value) })}
            className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-dark focus:outline-none focus:ring-2 focus:ring-light text-sm sm:text-base"
          >
            {durations.map(duration => <option key={duration} value={duration}>{duration} minutos</option>)}
          </select>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Button type="button" variant="secondary" onClick={onCancel} className="flex-1 w-full">Cancelar</Button>
          <Button type="submit" loading={loading} className="flex-1 w-full" disabled={!data.date || !data.time}>Agendar Sessão</Button>
        </div>
      </form>
    </Card>
  );
};

const Header = ({ onBack, title }) => (
  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
    <Button 
      variant="secondary" 
      onClick={onBack} 
      className="flex items-center gap-2 bg-white text-light hover:bg-gray-50 border border-gray-200 self-start"
    >
      <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
      <span className="text-sm sm:text-base">Voltar</span>
    </Button>
    <h1 className="text-2xl sm:text-3xl font-bold text-white">{title}</h1>
  </div>
);

const SessionsCard = ({ sessions, showForm, formData, onFormChange, onFormSubmit, onFormCancel, onShowForm, onStatusUpdate, updatingSessions, creatingSession, navigate }) => (
  <Card>
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0">
        <h3 className="text-lg sm:text-xl font-bold text-dark flex items-center gap-2">
          <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
          Histórico de Sessões
        </h3>
        <Button onClick={onShowForm} className="flex items-center gap-2 self-start sm:self-auto">
          <Plus className="w-4 h-4" />
          <span className="text-sm sm:text-base">Nova Sessão</span>
        </Button>
      </div>
      {showForm && (
        <SessionForm
          data={formData}
          onChange={onFormChange}
          onSubmit={onFormSubmit}
          onCancel={onFormCancel}
          loading={creatingSession}
        />
      )}
      <SessionList sessions={sessions} onStatusUpdate={onStatusUpdate} updatingSessions={updatingSessions} navigate={navigate} />
    </div>
  </Card>
);

const SessionList = ({ sessions, onStatusUpdate, updatingSessions, navigate }) => {
  if (sessions.length === 0) {
    return (
      <div className="text-center py-8">
        <Clock className="w-16 h-16 text-dark/30 mx-auto mb-4" />
        <p className="text-dark/70">Nenhuma sessão encontrada para este paciente.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {sessions.map(session => (
        <div key={session.id} className="bg-white/50 rounded-lg border border-white/20 p-3 sm:p-4">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-0">
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                <p className="text-sm sm:text-base font-semibold text-dark">Sessão #{session.id}</p>
                <select
                  value={session.status}
                  onChange={(e) => onStatusUpdate(session.id, e.target.value)}
                  disabled={updatingSessions.has(session.id)}
                  className="px-2 py-1 text-xs font-medium border-0 rounded-full focus:ring-2 focus:ring-light bg-blue-100 text-blue-800 self-start"
                >
                  <option value="agendado">Agendado</option>
                  <option value="iniciado">Iniciado</option>
                  <option value="concluido">Concluído</option>
                  <option value="cancelado">Cancelado</option>
                </select>
              </div>
              <p className="text-xs sm:text-sm text-dark/70 mb-2">
                {new Date(session.date).toLocaleDateString('pt-BR')} às {session.time}
              </p>
              <p className="text-sm sm:text-base text-dark font-medium">{session.description}</p>
            </div>
            <button
              onClick={() => navigate(`/sessao/${session.id}`)}
              className="p-2 text-dark/60 hover:text-dark transition-colors self-start sm:self-auto"
              title="Ver detalhes completos"
            >
              <Eye size={16} className="sm:w-[18px] sm:h-[18px]" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export const PacienteDetalhes = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [patient, setPatient] = useState(null);
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatingSessions, setUpdatingSessions] = useState(new Set());
  const [showNewSessionForm, setShowNewSessionForm] = useState(false);
  const [newSessionData, setNewSessionData] = useState({
    date: '',
    time: '',
    description: 'Sessão de acompanhamento',
    duration: 50
  });
  const [creatingSession, setCreatingSession] = useState(false);

  const updateSessionStatus = async (sessionId, newStatus) => {
    setUpdatingSessions(prev => new Set([...prev, sessionId]));
    try {
      await appointmentService.updateAppointment(sessionId, { status: newStatus });
      setSessions(prev => prev.map(session => 
        session.id === sessionId ? { ...session, status: newStatus } : session
      ));
    } catch (error) {
      console.error('Erro ao atualizar status:', error);
    } finally {
      setUpdatingSessions(prev => {
        const newSet = new Set(prev);
        newSet.delete(sessionId);
        return newSet;
      });
    }
  };

  const handleCreateSession = async (e) => {
  e.preventDefault();

  // Validação dos campos obrigatórios
  if (!newSessionData.date || !newSessionData.time || !newSessionData.description) {
    toast.error('Preencha todos os campos obrigatórios: Data, Hora e Descrição.');
    return;
  }

  setCreatingSession(true);

  try {
    // Monta o payload corretamente conforme o backend espera
    const payload = {
      patient_id: parseInt(id),
      psychologist_id: user.id,
      date: newSessionData.date,          // obrigatório
      time: newSessionData.time,          // obrigatório
      description: newSessionData.description, // obrigatório
      duration: newSessionData.duration   // opcional, caso a API aceite
    };

    const newSession = await appointmentService.createAppointment(payload);

    // Atualiza lista de sessões
    setSessions(prev => [newSession, ...prev]);

    // Fecha o formulário e reseta os campos
    setShowNewSessionForm(false);
    setNewSessionData({
      date: '',
      time: '',
      description: 'Sessão de acompanhamento',
      duration: 50
    });

    // Atualiza contador de sessões do paciente
    setPatient(prev => ({ ...prev, totalSessions: (prev.totalSessions || 0) + 1 }));

    toast.success('Sessão agendada com sucesso!');
  } catch (error) {
    console.error('Erro ao criar sessão:', error);

    // Tenta mostrar mensagem específica do backend, se existir
    if (error?.response?.data?.detail) {
      const messages = error.response.data.detail.map(d => `${d.loc[1]}: ${d.msg}`).join(', ');
      toast.error(`Erro ao agendar sessão: ${messages}`);
    } else {
      toast.error('Erro ao agendar sessão. Tente novamente.');
    }
  } finally {
    setCreatingSession(false);
  }
};


  useEffect(() => {
    const loadPatientData = async () => {
      try {
        const patientData = await patientService.getPatientDetails(parseInt(id));
        setPatient(patientData);
        
        const patientSessions = await patientService.getPatientSessions(parseInt(id));
        setSessions(patientSessions.sort((a, b) => new Date(b.appointment_date) - new Date(a.appointment_date)));
        
        setSessions(patientSessions);
      } catch (error) {
        console.error('Erro ao carregar dados do paciente:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPatientData();
  }, [id, user.id, navigate]);

  if (loading) return <LoadingSpinner size="lg" />;
  if (!patient) return null;

  return (
    <div className="space-y-4 sm:space-y-6 px-4">
      <Header onBack={() => navigate('/pacientes')} title="Detalhes do Paciente" />
      <PatientInfo patient={patient} />
      <SessionsCard
        sessions={sessions}
        showForm={showNewSessionForm}
        formData={newSessionData}
        onFormChange={setNewSessionData}
        onFormSubmit={handleCreateSession}
        onFormCancel={() => setShowNewSessionForm(false)}
        onShowForm={() => setShowNewSessionForm(true)}
        onStatusUpdate={updateSessionStatus}
        updatingSessions={updatingSessions}
        creatingSession={creatingSession}
        navigate={navigate}
      />
    </div>
  );
};