interface HeaderProps {
  onToggleSidebar: () => void;
  onToggleTheme: () => void;
  isDarkMode: boolean;
}

export function Header({ onToggleSidebar, onToggleTheme, isDarkMode }: HeaderProps) {
  return (
    <header className="app-header">
      <div className="header-left">
        <button className="icon-button mobile-menu" type="button" onClick={onToggleSidebar} aria-label="Abrir menu">
          ☰
        </button>
        <div>
          <p className="eyebrow">Bem-vindo de volta</p>
          <h1>Continue sua jornada de idiomas</h1>
        </div>
      </div>

      <div className="header-actions">
        <button className="button-secondary" type="button" onClick={onToggleTheme}>
          {isDarkMode ? 'Modo claro' : 'Modo escuro'}
        </button>
      </div>
    </header>
  );
}
