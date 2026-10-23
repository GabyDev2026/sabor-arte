import React from 'react'
import { Link } from 'react-router-dom'

export default function Inicio() {
  return (
    <div>
      {/* 1. SECCIÓN HERO CON IMAGEN DE FONDO A ANCHO COMPLETO */}
      <div className="container-fluid px-0 mb-5">
        <div 
          className="text-white py-5 px-4 px-md-5 d-flex align-items-center" 
          style={{ 
            /* Aquí puedes cambiar el enlace por la ruta de tu imagen o dejar el degradado oscuro con el estilo gourmet */
            backgroundColor: '#121212',
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '500px'
          }}
        >
          <div className="container py-4">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-9">
                <span className="text-warning text-uppercase small fw-bold" style={{ letterSpacing: '2px' }}>
                  Buena comida &middot; Grandes momentos
                </span>
                <h1 className="display-4 fw-bold mt-2 text-white" style={{ fontFamily: 'Georgia, serif' }}>
                  Una experiencia gastronómica única
                </h1>
                <p className="lead fs-6 mt-3 text-light opacity-85" style={{ maxWidth: '550px' }}>
                  En Sabor & Arte combinamos ingredientes frescos, técnicas de alta cocina y un ambiente acogedor para que cada visita sea inolvidable.
                </p>
                <Link to="/menu" className="btn btn-warning btn-lg mt-3 px-4 fw-bold text-dark rounded-pill shadow">
                  Ver nuestro menú &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. SECCIÓN MEDIA CLARA (Iconos de características + Platos + Sobre Nosotros) */}
      <div className="bg-light text-dark py-5">
        <div className="container">
          
          {/* Barra de Características en fondo claro */}
          <div className="row text-center py-4 bg-white rounded shadow-sm border mb-5 mx-0">
            <div className="col-md-3 mb-3 mb-md-0 px-2 border-end">
              <h6 className="fw-bold text-dark mb-1">Ingredientes frescos</h6>
              <p className="text-muted small mb-0">Seleccionamos lo mejor de cada temporada.</p>
            </div>
            <div className="col-md-3 mb-3 mb-md-0 px-2 border-end">
              <h6 className="fw-bold text-dark mb-1">Alta cocina</h6>
              <p className="text-muted small mb-0">Recetas únicas con toque gourmet.</p>
            </div>
            <div className="col-md-3 mb-3 mb-md-0 px-2 border-end">
              <h6 className="fw-bold text-dark mb-1">Ambiente acogedor</h6>
              <p className="text-muted small mb-0">El lugar perfecto para compartir.</p>
            </div>
            <div className="col-md-3 px-2">
              <h6 className="fw-bold text-dark mb-1">Vinos selectos</h6>
              <p className="text-muted small mb-0">Maridajes que realzan cada sabor.</p>
            </div>
          </div>

          {/* Título de Platos */}
          <div className="text-center mb-5">
            <span className="text-muted text-uppercase fw-bold small" style={{ letterSpacing: '2px' }}>
              Nuestros Platos
            </span>
            <h2 className="fw-bold text-dark mt-2 display-6">Sabores que enamoran</h2>
            <p className="text-muted">Descubre una selección de nuestros mejores platos, preparados con pasión y los más altos estándares de calidad.</p>
          </div>

          {/* Tarjetas de Platos */}
          <div className="row row-cols-1 row-cols-md-4 g-4 mb-5">
            <div className="col">
              <div className="card h-100 bg-white text-dark border-0 shadow-sm">
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title fw-bold text-dark">Bife de res gourmet</h5>
                    <p className="card-text small text-muted">Jugoso corte de res acompañado de papas rústicas y vegetales salteados.</p>
                  </div>
                  <p className="fw-bold text-dark mt-3 mb-0">S/ 45.00</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100 bg-white text-dark border-0 shadow-sm">
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title fw-bold text-dark">Pasta alfredo con langostinos</h5>
                    <p className="card-text small text-muted">Pasta fresca en salsa cremosa con langostinos y un toque de parmesano.</p>
                  </div>
                  <p className="fw-bold text-dark mt-3 mb-0">S/ 38.00</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100 bg-white text-dark border-0 shadow-sm">
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title fw-bold text-dark">Salmón a la parrilla</h5>
                    <p className="card-text small text-muted">Salmón fresco con salsa de limón, espárragos y puré de camote.</p>
                  </div>
                  <p className="fw-bold text-dark mt-3 mb-0">S/ 42.00</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100 bg-white text-dark border-0 shadow-sm">
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title fw-bold text-dark">Coulant de chocolate</h5>
                    <p className="card-text small text-muted">Suave por dentro, intenso por fuera. Acompañado de helado artesanal.</p>
                  </div>
                  <p className="fw-bold text-dark mt-3 mb-0">S/ 18.00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sección Sobre Nosotros */}
          <div className="row align-items-center py-4 mt-5">
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="bg-secondary rounded p-5 text-center text-white shadow-sm" style={{ minHeight: '220px' }}>
                <span className="opacity-75">[ Imagen del Restaurante / Ambiente ]</span>
              </div>
            </div>
            <div className="col-md-6 ps-md-5">
              <span className="text-muted text-uppercase fw-bold small" style={{ letterSpacing: '2px' }}>Sobre Nosotros</span>
              <h2 className="fw-bold text-dark mt-2 mb-3">Más que un restaurante,<br/>una experiencia</h2>
              <p className="text-muted">
                En Sabor & Arte creemos que la buena comida no solo se disfruta, se vive. Por eso, cada plato está pensado para despertar tus sentidos y hacer de cada visita un momento especial.
              </p>
              <Link to="/nosotros" className="btn btn-outline-dark mt-2 rounded-pill px-4">
                Conoce más &rarr;
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* 3. SECCIÓN INFERIOR OSCURA (Reserva rápida de mesa) */}
      <div className="bg-black text-white py-5 border-top border-secondary">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5 mb-4 mb-md-0">
              <span className="text-warning text-uppercase small fw-bold" style={{ letterSpacing: '2px' }}>Reserva tu mesa</span>
              <h2 className="fw-bold text-white mt-1">Te esperamos</h2>
              <p className="text-muted mb-0">Vive una experiencia gastronómica inolvidable.</p>
            </div>
            <div className="col-md-7">
              <div className="row g-2">
                <div className="col-md-4">
                  <input type="date" className="form-control bg-dark text-white border-secondary" defaultValue="2026-10-23" />
                </div>
                <div className="col-md-4">
                  <input type="time" className="form-control bg-dark text-white border-secondary" defaultValue="20:00" />
                </div>
                <div className="col-md-4">
                  <Link to="/reservas" className="btn btn-warning w-100 fw-bold text-dark">
                    Reservar ahora &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}