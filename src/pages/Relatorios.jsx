import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { reportService, mlService } from '../services/apiService';
import { Card } from '../components/Card';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { AlertTriangle, TrendingUp, Users, Calendar, BarChart3 } from 'lucide-react';

export const Relatorios = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [reportsData, setReportsData] = useState(null);
  const [riskAnalysis, setRiskAnalysis] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [reportsResponse, riskResponse] = await Promise.all([
          reportService.getPsychologistReport(user.id),
          mlService.getRiskAnalysis()
        ]);
        
        setReportsData(reportsResponse);
        setRiskAnalysis(riskResponse);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [user.id]);

  if (loading) return <LoadingSpinner size="lg" />;
  if (!reportsData) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-white mb-2">Relatórios</h1>
        <p className="text-white/70">Nenhum relatório a ser exibido no momento</p>
      </div>
    );
  }

  const { stats, frequency_data, status_data, patients_data, risk_alerts } = reportsData || {};
  const riskPatients = riskAnalysis?.patients || [];
  const riskSummary = riskAnalysis?.summary || {};

  // Verifica se é um psicólogo novo (sem dados)
  const hasNoData = !stats || (stats.active_patients === 0 && stats.total_sessions === 0);

  return (
    <div className="space-y-4 sm:space-y-6 px-4">
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-dark mb-2">Relatórios e Analytics</h1>
        <p className="text-sm sm:text-base text-dark/70">Acompanhe métricas e indicadores da sua prática</p>
      </div>

      {/* Mensagem para psicólogos sem dados */}
      {hasNoData ? (
        <div className="min-h-[60vh] flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-white mb-2">Relatórios</h1>
          <p className="text-white/70">Nenhum relatório a ser exibido no momento</p>
        </div>
      ) : (
        <>
          {/* KPIs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <Card className="text-center p-3 sm:p-4">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-light mx-auto mb-2" />
              <h3 className="text-lg sm:text-2xl font-bold text-dark">{stats.active_patients}</h3>
              <p className="text-dark/70 text-xs sm:text-sm">Pacientes Ativos</p>
            </Card>

            <Card className="text-center p-3 sm:p-4">
              <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-accent mx-auto mb-2" />
              <h3 className="text-lg sm:text-2xl font-bold text-dark">{stats.total_sessions}</h3>
              <p className="text-dark/70 text-xs sm:text-sm">Total de Sessões</p>
            </Card>

            <Card className="text-center p-3 sm:p-4">
              <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-green-500 mx-auto mb-2" />
              <h3 className="text-lg sm:text-2xl font-bold text-dark">{stats.attendance_rate}</h3>
              <p className="text-dark/70 text-xs sm:text-sm">Taxa de Conclusão</p>
            </Card>

            <Card className="text-center p-3 sm:p-4">
              <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 text-red-500 mx-auto mb-2" />
              <h3 className="text-lg sm:text-2xl font-bold text-dark">{riskSummary.high_risk || 0}</h3>
              <p className="text-dark/70 text-xs sm:text-sm">Pacientes Alto Risco</p>
            </Card>
          </div>

          {/* Gráficos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {frequency_data && frequency_data.length > 0 && (
              <Card>
                <h2 className="text-lg sm:text-xl font-semibold text-dark mb-4">Frequência de Sessões</h2>
                <ResponsiveContainer width="100%" height={250} className="sm:h-[300px]">
                  <BarChart data={frequency_data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="sessions" fill="#2493BF" />
                  </BarChart>
                </ResponsiveContainer>
              </Card>
            )}

            {status_data && status_data.length > 0 && (
              <Card>
                <h2 className="text-lg sm:text-xl font-semibold text-dark mb-4">Status das Sessões</h2>
                <ResponsiveContainer width="100%" height={250} className="sm:h-[300px]">
                  <PieChart>
                    <Pie
                      data={status_data}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                    >
                      {status_data?.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </Card>
            )}


            {patients_data && patients_data.length > 0 && (
              <Card>
                <h2 className="text-lg sm:text-xl font-semibold text-dark mb-4 text-center">Pacientes por Status de Sessão</h2>
                <ResponsiveContainer width="100%" height={250} className="sm:h-[300px]">
                  <PieChart>
                    <Pie
                      data={patients_data}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {patients_data?.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </Card>
            )}

            <Card className="lg:col-span-2">
              <h2 className="text-lg sm:text-xl font-semibold text-dark mb-4 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                Análise de Risco ML
              </h2>
              <div className="space-y-4">
                {/* Resumo de Risco */}
                {riskSummary.total_patients > 0 && (
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4">
                    <div className="text-center p-2 sm:p-3 bg-red-50 rounded-lg">
                      <p className="text-lg sm:text-2xl font-bold text-red-600">{riskSummary.high_risk}</p>
                      <p className="text-xs sm:text-sm text-red-700">Alto Risco</p>
                    </div>
                    <div className="text-center p-2 sm:p-3 bg-yellow-50 rounded-lg">
                      <p className="text-lg sm:text-2xl font-bold text-yellow-600">{riskSummary.moderate_risk}</p>
                      <p className="text-xs sm:text-sm text-yellow-700">Risco Moderado</p>
                    </div>
                    <div className="text-center p-2 sm:p-3 bg-green-50 rounded-lg">
                      <p className="text-lg sm:text-2xl font-bold text-green-600">{riskSummary.low_risk}</p>
                      <p className="text-xs sm:text-sm text-green-700">Baixo Risco</p>
                    </div>
                  </div>
                )}
                
                {/* Lista de Pacientes com Risco */}
                <div className="space-y-3">
                  {!riskPatients || riskPatients.length === 0 ? (
                    <p className="text-dark/70 text-center py-4">Nenhum dado de risco disponível</p>
                  ) : (
                    riskPatients.filter(patient => patient.risk === 'Alto' || patient.risk === 'Moderado').map(patient => (
                      <div key={patient.id} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0 p-3 sm:p-4 bg-white/10 rounded-lg">
                        <div className="flex-1">
                          <p className="font-medium text-dark text-sm sm:text-base">{patient.name}</p>
                          <p className="text-xs sm:text-sm text-dark/70">{patient.main_reason || 'Análise baseada em frequência de consultas'}</p>
                        </div>
                        <div className="text-left sm:text-right">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            patient.risk === 'Alto' 
                              ? 'bg-red-500/20 text-red-700' 
                              : patient.risk === 'Moderado'
                              ? 'bg-yellow-500/20 text-yellow-700'
                              : 'bg-green-500/20 text-green-700'
                          }`}>
                            Risco {patient.risk}
                          </span>
                          <p className="text-xs text-dark/70 mt-1">Score: {patient.risk_score}</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </Card>
          </div>
         
        </>
      )}
    </div>
  );
};