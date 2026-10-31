import './Navbar.css';

export function Navbar({ activePage, setActivePage }) {
  return (
    <header className="navbar-container">
      <div className="logo" onClick={() => setActivePage('home')}>
        Connect<span>Flight</span>
      </div>
      <nav className="nav-links">
        <button 
          className={activePage === 'home' ? 'active' : ''} 
          onClick={() => setActivePage('home')}
        >
          Início
        </button>
        <button 
          className={activePage === 'destinos' ? 'active' : ''} 
          onClick={() => setActivePage('destinos')}
        >
          Destinos
        </button>
        <button 
          className={activePage === 'ofertas' ? 'active' : ''} 
          onClick={() => setActivePage('ofertas')}
        >
          Ofertas
        </button>
        <button 
          className={activePage === 'contato' ? 'active' : ''} 
          onClick={() => setActivePage('contato')}
        >
          Contato
        </button>
      </nav>
    </header>
  );
}