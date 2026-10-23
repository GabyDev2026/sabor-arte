import React from 'react'

export default function Nosotros() {
  return (
    <div>
      <div className="container mt-5 pt-4">
      <div className="row mb-4">
        <div className="col-md-12 text-center">
          <span className="text-warning text-uppercase fw-bold small">Sobre Nosotros</span>
          <h1 className="fw-bold display-5">Nuestra pasión es la buena comida</h1>
          <p className="lead mt-3 mx-auto" style={{ maxWidth: '800px' }}>
            En Sabor & Arte creemos que la gastronomía es mucho más que comer; es una experiencia que despierta los sentidos. Nuestro restaurante nace del amor por la cocina, la calidad de los ingredientes y el deseo de compartir momentos únicos alrededor de una mesa.
          </p>
        </div>
      </div>

      <div className="row align-items-center my-5 py-4 bg-light rounded p-4">
        <div className="col-md-6">
          <h3 className="fw-bold mb-3">Nuestra historia</h3>
          <p className="text-muted">
            Sabor & Arte nació de la idea de unir la tradición culinaria con la creatividad moderna. Desde el primer día, nuestro objetivo ha sido ofrecer una experiencia gastronómica única, con platos que cuentan historias y sabores que se quedan en la memoria.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <blockquote className="blockquote fst-italic">
            "La buena comida no solo alimenta el cuerpo, también el alma."
            <footer className="blockquote-footer mt-2">Sabor & Arte</footer>
          </blockquote>
        </div>
      </div>
    </div>
    </div>
  )
}
