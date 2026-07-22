import { NavLink } from 'react-router-dom';

interface NavItem {
  label: string;
  to: string;
  icon: string;
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems: NavItem[] = [
  { label: 'Dashboard', to: '/', icon: '🏠' },
  { label: 'Conversas', to: '/chat', icon: '💬' },
  { label: 'Lições', to: '/lessons', icon: '📚' },
  { label: 'Vocabulário', to: '/vocabulary', icon: '📝' },
  { label: 'Progresso', to: '/progress', icon: '📈' },
  { label: 'Perfil', to: '/profile', icon: '👤' }
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
          <NavLink
            key={item.label}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            onClick={onClose}
          >
            <span className="nav-icon" aria-hidden="true">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <p>Bem-vindo ao seu espaço de aprendizado.</p>
      </div>
    </aside>
  );
}
