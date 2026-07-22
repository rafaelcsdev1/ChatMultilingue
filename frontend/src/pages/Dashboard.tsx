const kpis = [
  { label: 'Tempo de prática', value: '3h 45m', helper: 'Últimos 7 dias' },
  { label: 'Sessões concluídas', value: '12', helper: 'Última semana' },
  { label: 'Progresso', value: '38%', helper: 'No curso atual' },
  { label: 'Streak', value: '5 dias', helper: 'Praticando diariamente' }
];

const quickActions = [
  { label: 'Iniciar conversa', detail: 'Praticar fala e compreensão' },
  { label: 'Rever vocabulário', detail: 'Termos para revisar' },
  { label: 'Continuar lição', detail: 'Lição em andamento' },
  { label: 'Ver relatório', detail: 'Seu desempenho recente' }
];

const recentSessions = [
  { title: 'Prática no restaurante', topic: 'Vida diária', duration: '20 min', status: 'Concluída' },
  { title: 'Viagem ao aeroporto', topic: 'Viagem', duration: '15 min', status: 'Em andamento' },
  { title: 'Entrevista de emprego', topic: 'Trabalho', duration: '30 min', status: 'Agendada' }
];

const upcomingLessons = [
  { title: 'Frases úteis no aeroporto', progress: '45%' },
  { title: 'Negociação em loja', progress: '20%' }
];

const vocabularyItems = [
  { label: 'Novos termos', value: '8' },
  { label: 'Revisar agora', value: '14' },
  { label: 'Dominados', value: '42' }
];

const insights = [
  'Seu último chat teve 3 correções de gramática.',
  'A IA recomenda respostas mais longas para melhorar fluência.',
  'Você está a 3 lições de concluir o módulo de viagem.'
];

export function Dashboard() {
  return (
    <section className="dashboard-page">
      <div className="dashboard-hero page-panel">
        <div>
          <p className="eyebrow">Bem-vindo de volta, Mariana!</p>
          <h2>Seu progresso em idiomas hoje</h2>
          <p>Continue seu aprendizado com atividades recomendadas e acompanhe seu desempenho.</p>
        </div>

        <div className="hero-actions">
          <button className="button-primary" type="button">Continuar prática</button>
          <button className="button-secondary" type="button">Ver progresso</button>
        </div>
      </div>

      <div className="dashboard-grid">
        <section className="kpi-grid">
          {kpis.map((item) => (
            <article key={item.label} className="kpi-card">
              <p>{item.label}</p>
              <strong>{item.value}</strong>
              <span>{item.helper}</span>
            </article>
          ))}
        </section>

        <section className="progress-card page-panel">
          <div className="page-heading">
            <h2>Progresso geral</h2>
            <p>Visão rápida do seu nível e performance atual.</p>
          </div>

          <div className="progress-item">
            <div>
              <strong>Intermediário B1</strong>
              <p>Nível estimado</p>
            </div>
            <span>38%</span>
          </div>

          <div className="progress-bar">
            <span style={{ width: '38%' }} />
          </div>

          <div className="progress-metrics">
            <div>
              <p>Conversação</p>
              <strong>42%</strong>
            </div>
            <div>
              <p>Vocabulário</p>
              <strong>34%</strong>
            </div>
            <div>
              <p>Lições</p>
              <strong>66%</strong>
            </div>
          </div>
        </section>
      </div>

      <section className="quick-actions page-panel">
        <div className="section-title">
          <div>
            <h2>Ações rápidas</h2>
            <p>Escolha uma forma rápida de estudar agora.</p>
          </div>
        </div>

        <div className="quick-action-grid">
          {quickActions.map((action) => (
            <button key={action.label} className="quick-action" type="button">
              <strong>{action.label}</strong>
              <span>{action.detail}</span>
            </button>
          ))}
        </div>
      </section>

      <div className="dashboard-panels">
        <article className="page-panel panel-card">
          <div className="section-title">
            <div>
              <h2>Sessões recentes</h2>
              <p>Veja o que você praticou recentemente.</p>
            </div>
          </div>

          <div className="session-list">
            {recentSessions.map((session) => (
              <div key={session.title} className="session-item">
                <div>
                  <h3>{session.title}</h3>
                  <p>{session.topic}</p>
                </div>
                <div className="session-meta">
                  <span>{session.duration}</span>
                  <span className={`badge ${session.status === 'Concluída' ? 'badge-success' : session.status === 'Em andamento' ? 'badge-secondary' : 'badge'} `}>
                    {session.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="page-panel panel-card">
          <div className="section-title">
            <div>
              <h2>Lições recomendadas</h2>
              <p>Continue de onde parou.</p>
            </div>
          </div>

          <div className="lesson-list">
            {upcomingLessons.map((lesson) => (
              <div key={lesson.title} className="lesson-card">
                <div>
                  <h3>{lesson.title}</h3>
                  <p>Progresso: {lesson.progress}</p>
                </div>
                <span className="badge badge-secondary">Continuar</span>
              </div>
            ))}
          </div>
        </article>

        <article className="page-panel panel-card vocabulary-panel">
          <div className="section-title">
            <div>
              <h2>Vocabulário</h2>
              <p>Termos para memorizar e revisar.</p>
            </div>
          </div>

          <div className="vocabulary-grid">
            {vocabularyItems.map((item) => (
              <div key={item.label} className="vocab-card">
                <p>{item.label}</p>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </article>
      </div>

      <section className="insights-card page-panel">
        <div className="section-title">
          <div>
            <h2>Insights</h2>
            <p>Recomendações e observações personalizadas.</p>
          </div>
        </div>

        <ul className="insights-grid">
          {insights.map((insight) => (
            <li key={insight}>{insight}</li>
          ))}
        </ul>
      </section>
    </section>
  );
}
