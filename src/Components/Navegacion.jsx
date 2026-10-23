import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navegacion() {
  const location = useLocation();

  // Función auxiliar para saber qué enlace está activo y ponerle la línea dorada
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top py-3 px-4 border-bottom border-secondary" style={{ backgroundColor: '#121212' }}>
      <div className="container-fluid">
        
        {/* LOGOTIPO E ICONO */}
        <Link to="/" className="navbar-brand d-flex align-items-center text-decoration-none">
          {/* Reemplaza la ruta 'img/logo-chef.png' por la ubicación real de tu icono */}
          <div className="text-center me-2">
            <span style={{ fontSize: '24px', color: '#d4af37' }}> chef </span>
            {/* Si prefieres usar una imagen propia, descomenta la siguiente línea y borra el span de arriba: */}
            {/* <img src="/img/logo-chef.png" alt="Chef" width="30" height="30" className="d-block mx-auto mb-1" /> */}
          </div>
          <div className="d-flex flex-column">
            <span className="fw-bold fs-4 text-white" style={{ fontFamily: 'Georgia, serif', letterSpacing: '1px' }}>
              Sabor & Arte
            </span>
            <small className="text-uppercase text-warning" style={{ fontSize: '8px', letterSpacing: '2px' }}>
              RESTAURANTE GOURMET
            </small>
          </div>
        </Link>

        {/* BOTÓN HAMBURGUESA PARA MÓVILES */}
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* ENLACES DE NAVEGACIÓN */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center mb-2 mb-lg-0">
            
            <li className="nav-item mx-2">
              <Link to="/" className={`nav-link px-2 ${isActive('/') ? 'text-warning fw-bold' : 'text-light'}`} style={{ borderBottom: isActive('/') ? '2px solid #d4af37' : 'none' }}>
                Inicio
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link to="/nosotros" className={`nav-link px-2 ${isActive('/nosotros') ? 'text-warning fw-bold' : 'text-light'}`} style={{ borderBottom: isActive('/nosotros') ? '2px solid #d4af37' : 'none' }}>
                Nosotros
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link to="/menu" className={`nav-link px-2 ${isActive('/menu') ? 'text-warning fw-bold' : 'text-light'}`} style={{ borderBottom: isActive('/menu') ? '2px solid #d4af37' : 'none' }}>
                Menú
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link to="/galeria" className={`nav-link px-2 ${isActive('/galeria') ? 'text-warning fw-bold' : 'text-light'}`} style={{ borderBottom: isActive('/galeria') ? '2px solid #d4af37' : 'none' }}>
                Galería
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link to="/reservas" className={`nav-link px-2 ${isActive('/reservas') ? 'text-warning fw-bold' : 'text-light'}`} style={{ borderBottom: isActive('/reservas') ? '2px solid #d4af37' : 'none' }}>
                Reservas
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link to="/contacto" className={`nav-link px-2 ${isActive('/contacto') ? 'text-warning fw-bold' : 'text-light'}`} style={{ borderBottom: isActive('/contacto') ? '2px solid #d4af37' : 'none' }}>
                Contacto
              </Link>
            </li>

            {/* BOTÓN "RESERVAR AHORA" DE LA DERECHA */}
            <li className="nav-item ms-lg-4 mt-3 mt-lg-0">
              <Link to="/reservas" className="btn btn-outline-warning rounded-pill px-4 py-2 text-warning fw-bold" style={{ borderColor: '#d4af37', fontSize: '14px' }}>
                Reservar ahora
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  )
}
