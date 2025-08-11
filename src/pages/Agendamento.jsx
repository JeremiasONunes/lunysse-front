import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { mockApi } from '../services/mockApi';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { Calendar, Clock } from 'lucide-react';
import toast from 'react-hot-toast';

export const Agendamento = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedPsychologist, setSelectedPsychologist] = useState('');
  const [psychologists, setPsychologists] = useState([]);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    loadPsychologists();
  }, []);

  useEffect(() => {
    if (selectedDate && selectedPsychologist) {
      loadAvailableSlots();
    }
  }, [selectedDate, selectedPsychologist]);

  const loadPsychologists = async () => {
    try {
      const data = await mockApi.getPsychologists();
      setPsychologists(data);
    } catch (error) {
      toast.error('Erro ao carregar psicólogos');
    }
  };

  const loadAvailableSlots = async () => {
    setLoading(true);
    try {
      const slots = await mockApi.getAvailableSlots(selectedDate, parseInt(selectedPsychologist));
      setAvailableSlots(slots);
    } catch (error) {
      toast.error('Erro ao carregar horários disponíveis');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime || !selectedPsychologist) {
      toast.error('Selecione psicólogo, data e horário');
      return;
    }

    setSubmitting(true);
    
    try {
      await mockApi.createAppointment({
        patientId: user.id,
        psychologistId: parseInt(selectedPsychologist),
        date: selectedDate,
        time: selectedTime,
        description: 'Sessão agendada pelo paciente',
        duration: 50
      });
      
      toast.success('Agendamento realizado com sucesso!');
      navigate('/dashboard');
    } catch (error) {
      toast.error('Erro ao realizar agendamento');
    } finally {
      setSubmitting(false);
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-dark mb-2">Agendar Sessão</h1>
        <p className="text-dark/70">Escolha a data e horário para sua próxima sessão</p>
      </div>

      <Card>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Seletor de Psicólogo */}
          <div>
            <label className="flex items-center gap-2 text-lg font-medium text-dark mb-3">
              <Calendar className="w-5 h-5" />
              Escolha o Psicólogo
            </label>
            <select
              value={selectedPsychologist}
              onChange={(e) => setSelectedPsychologist(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-dark focus:outline-none focus:ring-2 focus:ring-light"
              required
            >
              <option value="">Selecione um psicólogo</option>
              {psychologists.map(psych => (
                <option key={psych.id} value={psych.id}>
                  {psych.name} - {psych.specialty}
                </option>
              ))}
            </select>
          </div>

          {/* Seletor de Data */}
          <div>
            <label className="flex items-center gap-2 text-lg font-medium text-dark mb-3">
              <Calendar className="w-5 h-5" />
              Selecione a Data
            </label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              min={today}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-dark focus:outline-none focus:ring-2 focus:ring-light"
              required
              disabled={!selectedPsychologist}
            />
          </div>

          {/* Seletor de Horário */}
          {selectedDate && selectedPsychologist && (
            <div>
              <label className="flex items-center gap-2 text-lg font-medium text-dark mb-3">
                <Clock className="w-5 h-5" />
                Horários Disponíveis
              </label>
              
              {loading ? (
                <LoadingSpinner />
              ) : availableSlots.length === 0 ? (
                <p className="text-dark/70 text-center py-4">Nenhum horário disponível para esta data</p>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {availableSlots.map(slot => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTime(slot)}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        selectedTime === slot
                          ? 'border-light bg-light/20 text-light'
                          : 'border-white/20 bg-white/10 text-dark hover:border-light/50'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Resumo */}
          {selectedDate && selectedTime && selectedPsychologist && (
            <Card className="bg-accent/10">
              <h3 className="font-semibold text-dark mb-2">Resumo do Agendamento</h3>
              <p className="text-dark/70">
                <strong>Psicólogo:</strong> {psychologists.find(p => p.id === parseInt(selectedPsychologist))?.name}
              </p>
              <p className="text-dark/70">
                <strong>Especialidade:</strong> {psychologists.find(p => p.id === parseInt(selectedPsychologist))?.specialty}
              </p>
              <p className="text-dark/70">
                <strong>Data:</strong> {new Date(selectedDate).toLocaleDateString('pt-BR')}
              </p>
              <p className="text-dark/70">
                <strong>Horário:</strong> {selectedTime}
              </p>
            </Card>
          )}

          <div className="flex gap-4">
            <Button
              type="button"
              variant="secondary"
              onClick={() => navigate('/dashboard')}
              className="flex-1"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              loading={submitting}
              className="flex-1"
              disabled={!selectedDate || !selectedTime || !selectedPsychologist}
            >
              Confirmar Agendamento
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};