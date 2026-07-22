import { FormEvent, useEffect, useMemo, useRef, useState } from 'react';

type ChatMessage = {
  id: string;
  role: 'assistant' | 'user' | 'system';
  content: string;
  time: string;
};

const initialMessages: ChatMessage[] = [
  {
    id: 'm1',
    role: 'assistant',
    content: 'Olá! Vamos praticar uma conversa em inglês sobre viagens. Como posso ajudar você hoje?',
    time: '09:18'
  },
  {
    id: 'm2',
    role: 'user',
    content: 'Quero simular uma situação no aeroporto.',
    time: '09:19'
  },
  {
    id: 'm3',
    role: 'assistant',
    content: 'Perfeito! Posso ser o atendente do balcão de check-in. Você pode começar dizendo seu nome e destino.',
    time: '09:20'
  }
];

const suggestedReplies = [
  'Como posso chegar ao portão B12?',
  'Pode me ajudar com meu check-in?',
  'Qual é o horário de embarque para Londres?'
];

const sidebarNotes = [
  'Use frases completas em inglês.',
  'Peça correções se precisar.',
  'Tente responder com 2-3 frases.'
];

export function Chat() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [responseIndex, setResponseIndex] = useState(0);
  const endRef = useRef<HTMLDivElement | null>(null);

  const suggestions = useMemo(() => suggestedReplies, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [messages, isTyping]);

  const handleSend = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const content = input.trim();
    if (!content) return;

    const newMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((current) => [...current, newMessage]);
    setInput('');
    setIsTyping(true);

    const mockResponse = getMockResponse(responseIndex);
    setResponseIndex((current) => current + 1);

    window.setTimeout(() => {
      setMessages((current) => [
        ...current,
        {
          id: `assistant-${Date.now()}`,
          role: 'assistant',
          content: mockResponse,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <section className="chat-page">
      <div className="chat-header page-panel">
        <div>
          <p className="eyebrow">Sala de conversação</p>
          <h2>Aeroporto em Inglês</h2>
          <p>Pratique com a IA como se estivesse em um balcão de check-in ou embarque.</p>
        </div>
        <div className="chat-header-actions">
          <button className="button-secondary" type="button">Novo cenário</button>
          <button className="button-primary" type="button">Reiniciar sessão</button>
        </div>
      </div>

      <div className="chat-grid">
        <div className="chat-panel page-panel">
          <div className="chat-thread">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`chat-bubble ${message.role === 'user' ? 'message-user' : 'message-assistant'}`}
              >
                <div className="message-meta">
                  <span className="message-role">{message.role === 'user' ? 'Você' : 'IA'}</span>
                  <span>{message.time}</span>
                </div>
                <p>{message.content}</p>
              </div>
            ))}

            {isTyping && (
              <div className="chat-bubble message-assistant typing-bubble">
                <div className="message-meta">
                  <span className="message-role">IA</span>
                  <span>Digitando...</span>
                </div>
                <div className="typing-indicator">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}

            <div ref={endRef} />
          </div>

          <form className="chat-composer" onSubmit={handleSend}>
            <textarea
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Digite sua mensagem aqui..."
              rows={2}
              className="composer-input"
            />
            <button className="composer-send" type="submit" disabled={!input.trim()}>
              Enviar
            </button>
          </form>
        </div>

        <aside className="chat-sidebar page-panel">
          <div className="sidebar-section">
            <h3>Cenário</h3>
            <p>Você está no balcão de check-in de um aeroporto internacional.</p>
          </div>

          <div className="sidebar-section">
            <h3>Dicas</h3>
            <ul>
              {sidebarNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>

          <div className="sidebar-section">
            <h3>Respostas sugeridas</h3>
            <div className="suggestion-grid">
              {suggestions.map((item) => (
                <button key={item} type="button" className="suggestion-chip">
                  {item}
                </button>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function getMockResponse(index: number) {
  const responses = [
    'Claro, posso ajudar com seu check-in. Para qual destino você está viajando?',
    'Por favor, mostre seu passaporte e bilhete. Posso verificar suas malas para despacho?',
    'O portão de embarque é o B12 e o embarque começa em 30 minutos.'
  ];

  return responses[index % responses.length];
}
