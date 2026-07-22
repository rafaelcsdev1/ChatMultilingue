interface NavItem {
  label: string;
  href: string;
  icon: string;
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems: NavItem[] = [
  { label: 'Dashboard', href: '#dashboard', icon: '🏠' },
  { label: 'Conversas', href: '#chat', icon: '💬' },
  { label: 'Lições', href: '#lessons', icon: '📚' },
  { label: 'Vocabulário', href: '#vocabulary', icon: '📝' },
  { label: 'Progresso', href: '#progress', icon: '📈' },
  { label: 'Perfil', href: '#profile', icon: '👤' }
];

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <aside className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
      <div className="sidebar-header">
        <div>
          <span className="brand-mark">CM</span>
          <div>
            <strong>ChatMultilingue</strong>
            <p>Professor particular de idiomas</p>
          </div>
        </div>
        <button className="icon-button sidebar-close" type="button" onClick={onClose} aria-label="Fechar menu">
          ×
        </button>
      </div>

      <nav className="sidebar-nav" aria-label="Navegação principal">
        {navItems.map((item) => (
          <a key={item.label} href={item.href} className="nav-link" onClick={onClose}>
            <span className="nav-icon" aria-hidden="true">{item.icon}</span>
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="sidebar-footer">
        <p>Bem-vindo ao seu espaço de aprendizado.</p>
      </div>
    </aside>
  );
}
