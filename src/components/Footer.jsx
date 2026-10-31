import './Footer.css';

export function Footer({ setActivePage }) {
  return (
    <footer className="footer-wrapper">
      {/* Linha divisória cinza do Figma */}
      <div className="footer-divider"></div>

      <div className="footer-links">
        <button onClick={() => setActivePage('destinos')}>Destinos</button>
        <button onClick={() => setActivePage('ofertas')}>Ofertas</button>
        <button onClick={() => setActivePage('contato')}>Contato</button>
      </div>

      <div className="wave-container">
        <svg viewBox="0 0 1440 180" preserveAspectRatio="none">
          <path 
            fill="#3F3D56" 
            d="M0,64L80,80C160,96,320,128,480,128C640,128,800,96,960,80C1120,64,1280,64,1360,64L1440,64L1440,180L1360,180C1280,180,1120,180,960,180C800,180,640,180,480,180C320,180,160,180,80,180L0,180Z"
          ></path>
        </svg>
      </div>
    </footer>
  );
}