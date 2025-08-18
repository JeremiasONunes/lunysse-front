import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { mockApi } from '../services/mockApi';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { Modal } from '../components/Modal';
import { Clock, User, Phone, Mail, AlertCircle, CheckCircle, XCircle } from 'lucide-react';
import toast from 'react-hot-toast';

export const Solicitacoes = () => {
  const { user } = useAuth();
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);

  useEffect(() => {
    loadRequests();
  }, [user.id]);

  const loadRequests = async () => {
    try {
      const data = await mockApi.getRequests(user.id);
      setRequests(data);
    } catch (error) {
      toast.error('Erro ao carregar solicitações');
    } finally {
      setLoading(false);
    }
  };

  const handleAction = async (requestId, status) => {
    setActionLoading(true);
    try {
      await mockApi.updateRequestStatus(requestId, status);
      
      // Se aprovado, criar agendamento automaticamente
      if (status === 'aprovada') {
        const request = requests.find(r => r.id === requestId);
        if (request && request.preferredDates?.length > 0 && request.preferredTimes?.length > 0) {
          await mockApi.createAppointment({
            patientId: user.id, // Usar ID do psicólogo como temporário
            psychologistId: user.id,
            date: request.preferredDates[0],
            time: request.preferredTimes[0],
            description: 'Sessão aprovada pelo psicólogo',
            duration: 50
          });
        }
      }
      
      await loadRequests();
      setShowModal(false);
      toast.success(
        status === 'aprovada' ? 'Solicitação aprovada e sessão agendada!' : 'Solicitação recusada.'
      );
    } catch (error) {
      toast.error('Erro ao processar solicitação');
    } finally {
      setActionLoading(false);
    }
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'alta': return 'text-red-600 bg-red-100';
      case 'media': return 'text-yellow-600 bg-yellow-100';
      case 'baixa': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pendente': return 'text-blue-600 bg-blue-100';
      case 'aprovada': return 'text-green-600 bg-green-100';
      case 'rejeitada': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  if (loading) return <LoadingSpinner size="lg" />;

  const pendingRequests = requests.filter(req => req.status === 'pendente');
  const processedRequests = requests.filter(req => req.status !== 'pendente');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-dark">Solicitações de Atendimento</h1>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-dark/70">
            {pendingRequests.length} pendentes
          </span>
        </div>
      </div>

      {/* Solicitações Pendentes */}
      <div>
        <h2 className="text-xl font-semibold text-dark mb-4 flex items-center">
          <Clock className="w-5 h-5 mr-2 text-blue-600" />
          Pendentes ({pendingRequests.length})
        </h2>
        
        {pendingRequests.length === 0 ? (
          <Card className="text-center py-8">
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <p className="text-dark/70">Nenhuma solicitação pendente</p>
          </Card>
        ) : (
          <div className="grid gap-4">
            {pendingRequests.map(request => (
              <Card key={request.id} className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-light to-accent rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark">{request.patientName}</h3>
                      <p className="text-sm text-dark/70">
                        {new Date(request.createdAt).toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getUrgencyColor(request.urgency)}`}>
                    {request.urgency === 'alta' ? 'Alta' : 
                     request.urgency === 'media' ? 'Média' : 'Baixa'} Urgência
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-dark/70">
                    <Mail className="w-4 h-4 mr-2" />
                    {request.patientEmail}
                  </div>
                  <div className="flex items-center text-sm text-dark/70">
                    <Phone className="w-4 h-4 mr-2" />
                    {request.patientPhone}
                  </div>
                </div>

                <p className="text-dark mb-4 text-sm bg-white/20 p-3 rounded-lg">
                  {request.description}
                </p>

                <div className="flex justify-between items-center">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      setSelectedRequest(request);
                      setShowModal(true);
                    }}
                  >
                    Ver Detalhes
                  </Button>
                  <div className="flex space-x-2">
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleAction(request.id, 'rejeitada')}
                      disabled={actionLoading}
                    >
                      <XCircle className="w-4 h-4 mr-1" />
                      Recusar
                    </Button>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => handleAction(request.id, 'aprovada')}
                      disabled={actionLoading}
                    >
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Aceitar Paciente
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Solicitações Processadas */}
      {processedRequests.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold text-dark mb-4">
            Histórico ({processedRequests.length})
          </h2>
          <div className="grid gap-4">
            {processedRequests.map(request => (
              <Card key={request.id} className="p-4 opacity-75">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-dark">{request.patientName}</h3>
                    <p className="text-sm text-dark/70">{request.patientEmail}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}>
                    {request.status === 'aprovada' ? 'Aceito' : 'Recusado'}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Modal de Detalhes */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Detalhes da Solicitação"
      >
        {selectedRequest && (
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-dark mb-2">Informações do Paciente</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Nome:</strong> {selectedRequest.patientName}</p>
                <p><strong>Email:</strong> {selectedRequest.patientEmail}</p>
                <p><strong>Telefone:</strong> {selectedRequest.patientPhone}</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-dark mb-2">Descrição</h3>
              <p className="text-sm bg-gray-50 p-3 rounded-lg">
                {selectedRequest.description}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-dark mb-2">Preferências</h3>
              <div className="text-sm space-y-1">
                <p><strong>Datas preferidas:</strong> {selectedRequest.preferredDates?.join(', ')}</p>
                <p><strong>Horários preferidos:</strong> {selectedRequest.preferredTimes?.join(', ')}</p>
              </div>
            </div>

            <div className="flex justify-end space-x-2 pt-4">
              <Button
                variant="danger"
                onClick={() => handleAction(selectedRequest.id, 'rejeitada')}
                disabled={actionLoading}
              >
                Recusar
              </Button>
              <Button
                variant="primary"
                onClick={() => handleAction(selectedRequest.id, 'aprovada')}
                disabled={actionLoading}
              >
                Aceitar como Paciente
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};