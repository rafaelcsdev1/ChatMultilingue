import { Layout } from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <section className="hero-panel">
        <div className="hero-title">
          <span className="eyebrow">Visão geral</span>
          <h2>Layout principal da plataforma</h2>
          <p>Uma base responsiva com sidebar, header e área de conteúdo pronta para escalar.</p>
        </div>
        <div className="hero-actions">
          <button className="button-primary" type="button">Iniciar prática</button>
          <button className="button-secondary" type="button">Ver novidades</button>
        </div>
      </section>

      <section className="overview-grid">
        <article className="stat-card">
          <p>Total de sessões</p>
          <strong>00</strong>
        </article>
        <article className="stat-card">
          <p>Liçõess pendentes</p>
          <strong>00</strong>
        </article>
        <article className="stat-card">
          <p>Progressão</p>
          <strong>0%</strong>
        </article>
      </section>

      <section className="content-section">
        <div className="section-header">
          <div>
            <h3>Últimas sessões</h3>
            <p>Um painel falso para ilustrar o fluxo de navegação.</p>
          </div>
        </div>

        <div className="session-list">
          <article className="session-card">
            <h4>Prática de conversação</h4>
            <p>Tema: Viagem</p>
            <span className="badge">Em breve</span>
          </article>
          <article className="session-card">
            <h4>Revisão de vocabulário</h4>
            <p>Tema: Restaurante</p>
            <span className="badge badge-secondary">Planejado</span>
          </article>
        </div>
      </section>
    </Layout>
  );
}

export default App;
