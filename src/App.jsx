import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Destinos } from './pages/Destinos';
import { Ofertas } from './pages/Ofertas';
import { Contato } from './pages/Contato';

export function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderCurrentView = () => {
    switch (currentPage) {
      case 'destinos':
        return <Destinos />;
      case 'ofertas':
        return <Ofertas />;
      case 'contato':
        return <Contato />;
      case 'home':
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-container">
      <Navbar activePage={currentPage} setActivePage={setCurrentPage} />
      <main className="main-content">
        {renderCurrentView()}
      </main>
      <Footer setActivePage={setCurrentPage} />
    </div>
  );
}

export default App;