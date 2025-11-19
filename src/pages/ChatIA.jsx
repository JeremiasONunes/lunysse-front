import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, AlertCircle } from 'lucide-react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { MarkdownRenderer } from '../components/MarkdownRenderer';
import { enviarParaIA } from '../services/aiService';

export const ChatIA = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Olá! Sou sua assistente de IA especializada em psicologia. Como posso ajudá-lo hoje?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);



  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputMessage;
    setInputMessage('');
    setIsLoading(true);
    setError(null);

    try {
      const aiResponse = await enviarParaIA(currentInput, messages);
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: aiResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (err) {
      setError(err.message);
      const errorMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: `Desculpe, ocorreu um erro: ${err.message}`,
        timestamp: new Date(),
        isError: true
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-dark mb-2">Chat com IA</h1>
        <p className="text-sm sm:text-base text-white">Assistente especializada em psicologia para apoiar sua prática clínica</p>
      </div>

      <Card className="h-[500px] sm:h-[600px] flex flex-col">
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3 sm:space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start space-x-2 sm:space-x-3 max-w-[85%] sm:max-w-[80%] ${
                message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
              }`}>
                <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.type === 'user' 
                    ? 'bg-light text-white' 
                    : 'bg-accent text-white'
                }`}>
                  {message.type === 'user' ? <User size={14} className="sm:w-4 sm:h-4" /> : <Bot size={14} className="sm:w-4 sm:h-4" />}
                </div>
                <div className={`rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-3 ${
                  message.type === 'user'
                    ? 'bg-light text-white'
                    : message.isError
                    ? 'bg-red-100 text-red-800 border border-red-200'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {message.type === 'user' ? (
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  ) : (
                    <div className="text-sm">
                      <MarkdownRenderer content={message.content} />
                    </div>
                  )}
                  <p className="text-xs opacity-70 mt-2">
                    {message.timestamp.toLocaleTimeString('pt-BR', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex items-start space-x-3 max-w-[80%]">
                <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center">
                  <Bot size={16} />
                </div>
                <div className="bg-gray-100 rounded-2xl px-4 py-3">
                  <div className="flex items-center space-x-2">
                    <Loader2 size={16} className="animate-spin text-accent" />
                    <span className="text-sm text-gray-600">Pensando...</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="border-t border-gray-200 p-3 sm:p-4">
          <div className="flex space-x-2 sm:space-x-3">
            <textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Digite sua pergunta sobre psicologia..."
              className="flex-1 resize-none border border-gray-300 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-light focus:border-transparent"
              rows="2"
              disabled={isLoading}
            />
            <Button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isLoading}
              className="self-end px-3 sm:px-4"
            >
              <Send size={16} className="sm:w-[18px] sm:h-[18px]" />
            </Button>
          </div>
        </div>
      </Card>

      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
          <AlertCircle size={20} className="text-red-500" />
          <span className="text-red-700">{error}</span>
        </div>
      )}

      {/* Quick Actions */}
      <div className="mt-4 sm:mt-6">
        <h3 className="text-base sm:text-lg font-semibold text-dark mb-3">Perguntas Sugeridas</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          {[
            'Como lidar com pacientes com ansiedade?',
            'Técnicas para terapia infantil',
            'Abordagens para terapia de casal',
            'Sinais de alerta em depressão'
          ].map((suggestion, index) => (
            <button
              key={index}
              onClick={() => setInputMessage(suggestion)}
              className="text-left p-2 sm:p-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-light transition-colors"
              disabled={isLoading}
            >
              <span className="text-xs sm:text-sm text-gray-700">{suggestion}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};