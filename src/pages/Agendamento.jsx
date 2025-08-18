import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { mockApi } from '../services/mockApi';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { Calendar, Clock, Bell } from 'lucide-react';
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
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [requestData, setRequestData] = useState({
    description: '',
    urgency: 'media',
    preferredDates: [],
    preferredTimes: []
  });

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
      await mockApi.createRequest({
        patientName: user.name,
        patientEmail: user.email,
        patientPhone: user.phone || '(11) 99999-9999',
        preferredPsychologist: parseInt(selectedPsychologist),
        description: 'Solicitação de agendamento de sessão',
        urgency: 'media',
        preferredDates: [selectedDate],
        preferredTimes: [selectedTime]
      });
      
      toast.success('Solicitação enviada! O psicólogo avaliará e entrará em contato.');
      navigate('/dashboard');
    } catch (error) {
      toast.error('Erro ao enviar solicitação');
    } finally {
      setSubmitting(false);
    }
  };

  const handleRequestSubmit = async (e) => {
    e.preventDefault();
    
    if (!selectedPsychologist || !requestData.description) {
      toast.error('Selecione um psicólogo e descreva sua necessidade');
      return;
    }

    setSubmitting(true);
    
    try {
      await mockApi.createRequest({
        patientName: user.name,
        patientEmail: user.email,
        patientPhone: user.phone || '(11) 99999-9999',
        preferredPsychologist: parseInt(selectedPsychologist),
        description: requestData.description,
        urgency: requestData.urgency,
        preferredDates: requestData.preferredDates,
        preferredTimes: requestData.preferredTimes
      });
      
      toast.success('Solicitação enviada! O psicólogo avaliará e entrará em contato se aceitar você como paciente.');
      navigate('/dashboard');
    } catch (error) {
      toast.error('Erro ao enviar solicitação');
    } finally {
      setSubmitting(false);
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-dark mb-2">Solicitar Sessão</h1>
        <p className="text-dark/70">Escolha o psicólogo, data e horário preferidos para sua sessão</p>
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
                <div className="text-center py-4">
                  <p className="text-dark/70 mb-4">Nenhum horário disponível para esta data</p>
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => setShowRequestForm(true)}
                    className="inline-flex items-center"
                  >
                    <Bell className="w-4 h-4 mr-2" />
                    Solicitar ser Paciente
                  </Button>
                </div>
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

          {/* Botão para Solicitar Atendimento */}
          {selectedPsychologist && !showRequestForm && (
            <div className="text-center">
              <p className="text-dark/70 mb-3">Não encontrou um horário ideal?</p>
              <Button
                type="button"
                variant="secondary"
                onClick={() => setShowRequestForm(true)}
                className="inline-flex items-center"
              >
                <Bell className="w-4 h-4 mr-2" />
                Solicitar ser Paciente deste Psicólogo
              </Button>
            </div>
          )}

          {/* Formulário de Solicitação */}
          {showRequestForm && (
            <Card className="bg-blue-50">
              <h3 className="font-semibold text-dark mb-4 flex items-center">
                <Bell className="w-5 h-5 mr-2" />
                Solicitar ser Paciente
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">
                    Descreva sua necessidade *
                  </label>
                  <textarea
                    value={requestData.description}
                    onChange={(e) => setRequestData({...requestData, description: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-light"
                    rows={3}
                    placeholder="Ex: Gostaria de ser seu paciente. Preciso de ajuda com ansiedade, tenho disponibilidade nas manhãs..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark mb-2">
                    Urgência
                  </label>
                  <select
                    value={requestData.urgency}
                    onChange={(e) => setRequestData({...requestData, urgency: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-light"
                  >
                    <option value="baixa">Baixa - Posso aguardar</option>
                    <option value="media">Média - Prefiro em breve</option>
                    <option value="alta">Alta - Preciso urgentemente</option>
                  </select>
                </div>

                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => setShowRequestForm(false)}
                    className="flex-1"
                  >
                    Cancelar
                  </Button>
                  <Button
                    type="button"
                    onClick={handleRequestSubmit}
                    loading={submitting}
                    className="flex-1"
                  >
                    Enviar Solicitação
                  </Button>
                </div>
              </div>
            </Card>
          )}

          {/* Resumo */}
          {selectedDate && selectedTime && selectedPsychologist && !showRequestForm && (
            <Card className="bg-blue-50">
              <h3 className="font-semibold text-dark mb-2">Resumo da Solicitação</h3>
              <p className="text-dark/70">
                <strong>Psicólogo:</strong> {psychologists.find(p => p.id === parseInt(selectedPsychologist))?.name}
              </p>
              <p className="text-dark/70">
                <strong>Especialidade:</strong> {psychologists.find(p => p.id === parseInt(selectedPsychologist))?.specialty}
              </p>
              <p className="text-dark/70">
                <strong>Data preferida:</strong> {new Date(selectedDate).toLocaleDateString('pt-BR')}
              </p>
              <p className="text-dark/70">
                <strong>Horário preferido:</strong> {selectedTime}
              </p>
              <div className="mt-3 p-3 bg-blue-100 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Importante:</strong> Esta é uma solicitação que será avaliada pelo psicólogo. 
                  Você será contatado se a solicitação for aprovada.
                </p>
              </div>
            </Card>
          )}

          {!showRequestForm && (
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
                Enviar Solicitação
              </Button>
            </div>
          )}
        </form>
      </Card>
    </div>
  );
};