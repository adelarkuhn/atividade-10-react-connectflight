import './Pages.css';

export function Contato() {
  return (
    <div className="page-container">
      <h2 className="title">Fale <span className="highlight">Conosco</span></h2>
      <p className="lead-text">Tire dúvidas sobre pacotes ou solicite um roteiro sob medida.</p>

      <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Mensagem enviada com sucesso!'); }}>
        <div className="form-group">
          <label>Nome Completo</label>
          <input type="text" placeholder="Seu nome" required />
        </div>

        <div className="form-group">
          <label>E-mail</label>
          <input type="email" placeholder="seuemail@exemplo.com" required />
        </div>

        <div className="form-group">
          <label>Mensagem</label>
          <textarea rows="4" placeholder="Como podemos ajudar no seu próximo destino?" required></textarea>
        </div>

        <button type="submit" className="btn-submit">Enviar Mensagem</button>
      </form>
    </div>
  );
}