import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center text-lg-start mt-5 pt-4 border-top border-secondary">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase fw-bold text-warning">Sabor & Arte</h5>
            <p className="small text-muted">Restaurante gourmet especializado en alta cocina y experiencias inolvidables.</p>
          </div> 
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-uppercase small fw-bold">Enlaces</h5>
            <ul className="list-unstyled mb-0 small">
              <li><a href="/" className="text-white text-decoration-none">Inicio</a></li>
              <li><a href="/nosotros" className="text-white text-decoration-none">Nosotros</a></li>
              <li><a href="/menu" className="text-white text-decoration-none">Menú</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-uppercase small fw-bold">Contacto</h5>
            <ul className="list-unstyled small text-muted">
              <li>Av. Los Olivos 123, Lima[cite: 15]</li>
              <li>+51 987 654 321[cite: 15]</li>
              <li>contacto@saborarte.com[cite: 31]</li>
            </ul>
          </div>
        </div> 
      </div>
      <div className="text-center p-3 bg-black small text-muted">
        © 2025 Sabor & Arte. Todos los derechos reservados[cite: 15].
      </div>
    </footer>
  )
}