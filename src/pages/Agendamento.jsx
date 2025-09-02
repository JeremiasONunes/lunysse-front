import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { mockApi } from '../services/mockApi';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import {  Bell } from 'lucide-react';
import toast from 'react-hot-toast';

export const Agendamento = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [selectedPsychologist, setSelectedPsychologist] = useState('');
  const [psychologists, setPsychologists] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [requestData, setRequestData] = useState({
    description: '',
    urgency: 'media'
  });

  useEffect(() => {
    loadPsychologists();
  }, []);

  const loadPsychologists = async () => {
    try {
      const data = await mockApi.getPsychologists();
      setPsychologists(data);
    } catch {
      toast.error('Erro ao carregar psicólogos');
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
        urgency: requestData.urgency
      });
      
      toast.success('Solicitação enviada! O psicólogo avaliará e entrará em contato se aceitar você como paciente.');
      navigate('/dashboard');
    } catch {
      toast.error('Erro ao enviar solicitação');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-dark mb-2">Solicitar ser Paciente</h1>
        <p className="text-dark/70">Escolha um psicólogo e descreva sua necessidade de atendimento</p>
      </div>

      <Card>
        <form onSubmit={handleRequestSubmit} className="space-y-6">
          {/* Seletor de Psicólogo */}
          <div>
            <label className="flex items-center gap-2 text-lg font-medium text-dark mb-3">
              <Bell className="w-5 h-5" />
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

          {/* Descrição da Necessidade */}
          <div>
            <label className="block text-lg font-medium text-dark mb-3">
              Descreva sua necessidade *
            </label>
            <textarea
              value={requestData.description}
              onChange={(e) => setRequestData({...requestData, description: e.target.value})}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-dark focus:outline-none focus:ring-2 focus:ring-light"
              rows={4}
              placeholder="Ex: Gostaria de ser seu paciente. Preciso de ajuda com ansiedade, tenho disponibilidade nas manhãs de segunda a quarta..."
              required
            />
          </div>

          {/* Urgência */}
          <div>
            <label className="block text-lg font-medium text-dark mb-3">
              Nível de Urgência
            </label>
            <select
              value={requestData.urgency}
              onChange={(e) => setRequestData({...requestData, urgency: e.target.value})}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-dark focus:outline-none focus:ring-2 focus:ring-light"
            >
              <option value="baixa">Baixa - Posso aguardar</option>
              <option value="media">Média - Prefiro em breve</option>
              <option value="alta">Alta - Preciso urgentemente</option>
            </select>
          </div>

          {/* Informações Importantes */}
          {selectedPsychologist && (
            <Card className="bg-blue-50">
              <h3 className="font-semibold text-dark mb-2">Informações Importantes</h3>
              <div className="space-y-2 text-sm text-dark/70">
                <p><strong>Psicólogo selecionado:</strong> {psychologists.find(p => p.id === parseInt(selectedPsychologist))?.name}</p>
                <p><strong>Especialidade:</strong> {psychologists.find(p => p.id === parseInt(selectedPsychologist))?.specialty}</p>
                <div className="mt-3 p-3 bg-blue-100 rounded-lg">
                  <p className="text-blue-800">
                    <strong>Como funciona:</strong> Sua solicitação será enviada ao psicólogo. Se aceita, ele entrará em contato para agendar as sessões nos horários que funcionem para ambos.
                  </p>
                </div>
              </div>
            </Card>
          )}

          {/* Botões */}
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
              disabled={!selectedPsychologist || !requestData.description}
            >
              Enviar Solicitação
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};