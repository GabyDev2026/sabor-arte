import React from 'react'

export default function Menu() {
  return (
    <div>
        <div className="container mt-5 pt-4">
      <div className="row mb-5 text-center">
        <div className="col-md-12">
          <span className="text-warning text-uppercase fw-bold small">Nuestra Carta</span>
          <h1 className="fw-bold display-5">Disfruta una experiencia única</h1>
          <p className="text-muted">Explora nuestra variedad de entradas, platos de fondo y postres artesanales.</p>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <h4 className="card-title text-primary">Entradas</h4>
              <ul className="list-unstyled mt-3">
                <li className="d-flex justify-content-between py-2 border-bottom"><span>Ceviche clásico de mero</span> <strong>S/ 32.00</strong></li>
                <li className="d-flex justify-content-between py-2 border-bottom"><span>Carpaccio de lomo fino</span> <strong>S/ 36.00</strong></li>
                <li className="d-flex justify-content-between py-2"><span>Crema de zapallo loche</span> <strong>S/ 24.00</strong></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <h4 className="card-title text-primary">Platos Principales</h4>
              <ul className="list-unstyled mt-3">
                <li className="d-flex justify-content-between py-2 border-bottom"><span>Bife de res gourmet</span> <strong>S/ 45.00</strong></li>
                <li className="d-flex justify-content-between py-2 border-bottom"><span>Pasta alfredo con langostinos</span> <strong>S/ 38.00</strong></li>
                <li className="d-flex justify-content-between py-2"><span>Salmón a la parrilla</span> <strong>S/ 42.00</strong></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <h4 className="card-title text-primary">Postres y Bebidas</h4>
              <ul className="list-unstyled mt-3">
                <li className="d-flex justify-content-between py-2 border-bottom"><span>Coulant de chocolate</span> <strong>S/ 18.00</strong></li>
                <li className="d-flex justify-content-between py-2 border-bottom"><span>Suspiro a la limeña</span> <strong>S/ 16.00</strong></li>
                <li className="d-flex justify-content-between py-2"><span>Vino tinto reserva (copa)</span> <strong>S/ 22.00</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
