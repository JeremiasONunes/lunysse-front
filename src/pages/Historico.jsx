import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { mockApi } from '../services/mockApi';
import { Card } from '../components/Card';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { Calendar, Clock, FileText } from 'lucide-react';

export const Historico = () => {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState([]);
  const [psychologists, setPsychologists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [appointmentsData, psychologistsData] = await Promise.all([
          mockApi.getAppointments(user.id, 'paciente'),
          mockApi.getPsychologists()
        ]);
        const completedAppointments = appointmentsData.filter(apt => apt.status === 'concluido');
        setAppointments(completedAppointments.sort((a, b) => new Date(b.date) - new Date(a.date)));
        setPsychologists(psychologistsData);
      } catch (error) {
        console.error('Erro ao carregar histórico:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [user.id]);

  if (loading) return <LoadingSpinner size="lg" />;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-dark">Histórico de Sessões</h1>
        <p className="text-dark/70">{appointments.length} sessões concluídas</p>
      </div>

      {appointments.length === 0 ? (
        <Card className="text-center py-8">
          <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-dark/70">Nenhuma sessão concluída encontrada.</p>
        </Card>
      ) : (
        <div className="space-y-4">
          {appointments.map(appointment => (
            <Card key={appointment.id} className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-dark">
                    Sessão com {psychologists.find(p => p.id === appointment.psychologistId)?.name || 'Psicólogo'}
                  </h3>
                  <div className="flex items-center text-dark/70 text-sm mt-1">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(appointment.date).toLocaleDateString('pt-BR')}
                    <Clock className="w-4 h-4 ml-4 mr-1" />
                    {appointment.time}
                  </div>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  Concluída
                </span>
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-dark mb-1">Descrição da Sessão</h4>
                  <p className="text-dark/70 text-sm">{appointment.description}</p>
                </div>

                {appointment.notes && (
                  <div>
                    <h4 className="font-medium text-dark mb-1">Observações</h4>
                    <p className="text-dark/70 text-sm bg-gray-50 p-3 rounded-lg">
                      {appointment.notes}
                    </p>
                  </div>
                )}

                <div className="flex items-center text-sm text-dark/60">
                  <Clock className="w-4 h-4 mr-1" />
                  Duração: {appointment.duration} minutos
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};