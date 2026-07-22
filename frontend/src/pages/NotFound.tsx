import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <section className="page-panel not-found-panel">
      <div className="page-heading">
        <h2>Página não encontrada</h2>
        <p>Desculpe, não encontramos o que você procurava.</p>
      </div>
      <div className="page-card">
        <p>Use a navegação para voltar ao conteúdo principal.</p>
        <Link to="/" className="button-secondary">
          Voltar ao Dashboard
        </Link>
      </div>
    </section>
  );
}
