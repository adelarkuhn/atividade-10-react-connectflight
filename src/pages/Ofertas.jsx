import './Pages.css';

export function Ofertas() {
  const pacotes = [
    { id: 1, titulo: 'Pacote Nordeste Completo', noites: '7 noites', preco: 'R$ 1.299' },
    { id: 2, titulo: 'Buenos Aires Express', noites: '4 noites', preco: 'R$ 1.850' },
    { id: 3, titulo: 'Santiago & Cordilheira', noites: '5 noites', preco: 'R$ 2.190' }
  ];

  return (
    <div className="page-container">
      <h2 className="title">Seção de <span className="highlight">Ofertas</span></h2>
      <p className="lead-text">Pacotes com descontos imperdíveis disponíveis por tempo limitado!</p>
      
      <div className="card-grid">
        {pacotes.map(item => (
          <div key={item.id} className="card">
            <h3>{item.titulo}</h3>
            <p>{item.noites} com café da manhã e traslado incluído.</p>
            <div className="price">{item.preco}</div>
          </div>
        ))}
      </div>
    </div>
  );
}