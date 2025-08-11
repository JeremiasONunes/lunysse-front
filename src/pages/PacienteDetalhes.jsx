import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { mockApi } from '../services/mockApi';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ArrowLeft, Users, Mail, Phone, Calendar, Activity, CheckCircle, Clock, Eye } from 'lucide-react';

export const PacienteDetalhes = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [patient, setPatient] = useState(null);
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatingSessions, setUpdatingSessions] = useState(new Set());



  const updateSessionStatus = async (sessionId, newStatus) => {
    setUpdatingSessions(prev => new Set([...prev, sessionId]));
    try {
      await mockApi.updateSessionStatus(sessionId, newStatus);
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

  useEffect(() => {
    const loadPatientData = async () => {
      try {
        const patients = await mockApi.getPatients(user.id);
        const patientData = patients.find(p => p.id === parseInt(id));
        
        if (!patientData) {
          navigate('/pacientes');
          return;
        }

        setPatient(patientData);
        
        // Carregar histórico de sessões
        const appointments = await mockApi.getAppointments(user.id, 'psicologo');
        const patientSessions = appointments
          .filter(apt => apt.patientId === parseInt(id))
          .sort((a, b) => new Date(b.date) - new Date(a.date));
        
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
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate('/pacientes')}
          className="flex items-center gap-2 bg-white text-light hover:bg-gray-50 hover:scale-105 active:scale-95 border border-gray-200 px-4 py-2 rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md"
        >
          <ArrowLeft size={20} className="transition-transform duration-200 group-hover:-translate-x-1" />
          Voltar
        </button>
        <h1 className="text-3xl font-bold text-white">Detalhes do Paciente</h1>
      </div>

      {/* Informações do Paciente */}
      <Card>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-gradient-to-br from-light to-accent rounded-full flex items-center justify-center">
              <Users className="w-10 h-10 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-dark">{patient.name}</h2>
              <p className="text-dark/60">Paciente #{patient.id}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-dark/60" />
              <div>
                <p className="text-sm text-dark/60">Idade</p>
                <p className="font-semibold text-dark">{patient.age} anos</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-dark/60" />
              <div>
                <p className="text-sm text-dark/60">Data de Nascimento</p>
                <p className="font-semibold text-dark">{new Date(patient.birthDate).toLocaleDateString('pt-BR')}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-dark/60" />
              <div>
                <p className="text-sm text-dark/60">Telefone</p>
                <a href={`tel:${patient.phone}`} className="font-semibold text-dark hover:text-light transition-colors">
                  {patient.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-dark/60" />
              <div>
                <p className="text-sm text-dark/60">Email</p>
                <a href={`mailto:${patient.email}`} className="font-semibold text-dark hover:text-light transition-colors">
                  {patient.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Activity className="w-5 h-5 text-dark/60" />
              <div>
                <p className="text-sm text-dark/60">Total de Sessões</p>
                <p className="font-semibold text-dark">{patient.totalSessions}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-dark/60" />
              <div>
                <p className="text-sm text-dark/60">Status do Tratamento</p>
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                  patient.status === 'Ativo' || patient.status === 'Em tratamento'
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {patient.status}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Histórico de Sessões */}
      <Card>
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-dark flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Histórico de Sessões
          </h3>

          {sessions.length === 0 ? (
            <div className="text-center py-8">
              <Clock className="w-16 h-16 text-dark/30 mx-auto mb-4" />
              <p className="text-dark/70">Nenhuma sessão encontrada para este paciente.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {sessions.map(session => (
                <div key={session.id} className="bg-white/50 rounded-lg border border-white/20 p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <p className="font-semibold text-dark">
                          Sessão #{session.id}
                        </p>
                        <select
                          value={session.status}
                          onChange={(e) => updateSessionStatus(session.id, e.target.value)}
                          disabled={updatingSessions.has(session.id)}
                          className="px-2 py-1 text-xs font-medium border-0 rounded-full focus:ring-2 focus:ring-light bg-blue-100 text-blue-800"
                        >
                          <option value="agendado">Agendado</option>
                          <option value="iniciado">Iniciado</option>
                          <option value="concluido">Concluído</option>
                          <option value="cancelado">Cancelado</option>
                        </select>
                      </div>
                      
                      <p className="text-sm text-dark/70 mb-2">
                        {new Date(session.date).toLocaleDateString('pt-BR')} às {session.time}
                      </p>
                      
                      <p className="text-dark font-medium">
                        {session.description}
                      </p>
                    </div>
                    
                    <button
                      onClick={() => navigate(`/sessao/${session.id}`)}
                      className="p-2 text-dark/60 hover:text-dark transition-colors" 
                      title="Ver detalhes completos"
                    >
                      <Eye size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};