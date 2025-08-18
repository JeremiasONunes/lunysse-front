import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { mockApi } from '../services/mockApi';
import { Card } from '../components/Card';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { Calendar, Users, AlertTriangle, Bell } from 'lucide-react';

export const DashboardPsicologo = () => {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState([]);
  const [patients, setPatients] = useState([]);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [appointmentsData, patientsData, requestsData] = await Promise.all([
          mockApi.getAppointments(user.id, 'psicologo'),
          mockApi.getPatients(user.id),
          mockApi.getRequests(user.id)
        ]);
        setAppointments(appointmentsData);
        setPatients(patientsData);
        setRequests(requestsData);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [user.id]);

  if (loading) return <LoadingSpinner size="lg" />;

  const todayAppointments = appointments.filter(apt => 
    apt.date === new Date().toISOString().split('T')[0]
  );

  const totalPatients = patients.length;
  const completedSessions = appointments.filter(apt => apt.status === 'concluido').length;
  const pendingRequests = requests.filter(req => req.status === 'pendente').length;
  const upcomingAppointments = appointments.filter(apt => 
    new Date(apt.date) >= new Date() && apt.status === 'agendado'
  ).slice(0, 5);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-dark">Dashboard</h1>
        <p className="text-white">Bem-vindo, {user.name}</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="text-center">
          <Users className="w-8 h-8 text-light mx-auto mb-2" />
          <h3 className="text-2xl font-bold text-dark">{totalPatients}</h3>
          <p className="text-dark/70">Pacientes Ativos</p>
        </Card>

        <Card className="text-center">
          <Calendar className="w-8 h-8 text-accent mx-auto mb-2" />
          <h3 className="text-2xl font-bold text-dark">{todayAppointments.length}</h3>
          <p className="text-dark/70">Sessões Hoje</p>
        </Card>

        <Card className="text-center">
          <AlertTriangle className="w-8 h-8 text-medium mx-auto mb-2" />
          <h3 className="text-2xl font-bold text-dark">{completedSessions}</h3>
          <p className="text-dark/70">Sessões Concluídas</p>
        </Card>

        <Card className="text-center">
          <Bell className="w-8 h-8 text-orange-500 mx-auto mb-2" />
          <h3 className="text-2xl font-bold text-dark">{pendingRequests}</h3>
          <p className="text-dark/70">Solicitações Pendentes</p>
        </Card>
      </div>

      {/* Próximos Agendamentos */}
      <Card>
        <h2 className="text-xl font-semibold text-dark mb-4">Próximos Agendamentos</h2>
        {upcomingAppointments.length === 0 ? (
          <p className="text-dark/70">Nenhum agendamento futuro encontrado.</p>
        ) : (
          <div className="space-y-3">
            {upcomingAppointments.map(appointment => {
              const patient = patients.find(p => p.id === appointment.patientId);
              return (
                <div key={appointment.id} className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                  <div>
                    <p className="font-medium text-dark">{patient?.name || 'Paciente não encontrado'}</p>
                    <p className="text-sm text-dark/70">{new Date(appointment.date).toLocaleDateString('pt-BR')} às {appointment.time}</p>
                    <p className="text-xs text-dark/60">{appointment.description}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    appointment.status === 'agendado' 
                      ? 'bg-blue-100 text-blue-800' 
                      : appointment.status === 'iniciado'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {appointment.status === 'agendado' ? 'Agendado' :
                     appointment.status === 'iniciado' ? 'Iniciado' : 'Concluído'}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </Card>
    </div>
  );
};