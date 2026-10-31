import './Pages.css';

export function Destinos() {
  const destinos = [
    { id: 1, cidade: 'Rio de Janeiro', pais: 'Brasil', desc: 'Passagem aérea + Hotel 5 estrelas em Copacabana com vista para o mar.' },
    { id: 2, cidade: 'Paris', pais: 'França', desc: 'Conheça a Torre Eiffel, museu do Louvre e passeios pelo Rio Sena com guia.' },
    { id: 3, cidade: 'Tóquio', pais: 'Japão', desc: 'Explore a tecnologia de Akihabara e os templos tradicionais de Kyoto.' }
  ];

  return (
    <div className="page-container">
      <h2 className="title">Destinos <span className="highlight">Populares</span></h2>
      <p className="lead-text">Escolha seu próximo roteiro de viagem pelo mundo.</p>
      
      <div className="card-grid">
        {destinos.map(item => (
          <div key={item.id} className="card">
            <h3>{item.cidade}</h3>
            <span className="sub-text">{item.pais}</span>
            <p style={{ marginTop: '0.8rem' }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}