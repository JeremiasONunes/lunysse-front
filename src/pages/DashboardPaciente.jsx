import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { mockApi } from '../services/mockApi';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { Calendar, Plus } from 'lucide-react';

export const DashboardPaciente = () => {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await mockApi.getAppointments(user.id, 'paciente');
        setAppointments(data);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [user.id]);

  if (loading) return <LoadingSpinner size="lg" />;

  const upcomingAppointments = appointments.filter(apt => 
    new Date(apt.date) >= new Date() && apt.status === 'agendado'
  );

  const pastAppointments = appointments.filter(apt => 
    new Date(apt.date) < new Date() || apt.status === 'concluido'
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-dark">Meu Dashboard</h1>
        <Link to="/agendamento">
          <Button className="flex items-center gap-2">
            <Plus size={20} />
            Agendar Sessão
          </Button>
        </Link>
      </div>

      {/* Próximas Sessões */}
      <Card>
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-5 h-5 text-light" />
          <h2 className="text-xl font-semibold text-dark">Próximas Sessões</h2>
        </div>
        
        {upcomingAppointments.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-dark/70 mb-4">Você não tem sessões agendadas.</p>
            <Link to="/agendamento">
              <Button>Agendar primeira sessão</Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {upcomingAppointments.map(appointment => (
              <div key={appointment.id} className="flex justify-between items-center p-4 bg-white/10 rounded-lg">
                <div>
                  <p className="font-medium text-dark">Sessão com Dr. João Silva</p>
                  <p className="text-sm text-dark/70">{appointment.date} às {appointment.time}</p>
                </div>
                <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                  Agendado
                </span>
              </div>
            ))}
          </div>
        )}
      </Card>

      {/* Histórico Recente */}
      {pastAppointments.length > 0 && (
        <Card>
          <h2 className="text-xl font-semibold text-dark mb-4">Histórico Recente</h2>
          <div className="space-y-3">
            {pastAppointments.slice(0, 3).map(appointment => (
              <div key={appointment.id} className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                <div>
                  <p className="font-medium text-dark">Sessão com Dr. João Silva</p>
                  <p className="text-sm text-dark/70">{appointment.date} às {appointment.time}</p>
                </div>
                <span className="px-2 py-1 bg-green-500/20 text-green-700 rounded-full text-xs font-medium">
                  Concluída
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link to="/historico" className="text-light hover:text-accent font-medium">
              Ver histórico completo
            </Link>
          </div>
        </Card>
      )}
    </div>
  );
};