import React, { useState } from 'react'

export default function Reservas() {
  const [formData, setFormData] = useState({ cliente: '', email: '', fecha: '', hora: '', personas: '2' });
  const [codigo, setCodigo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const codigoGenerado = 'SYA-' + Math.floor(1000 + Math.random() * 9000);
    setCodigo(codigoGenerado);
  };
  return (
    <div>

      <div className="container mt-5 pt-4">
      <div className="row mb-4 text-center">
        <div className="col-md-12">
          <span className="text-warning text-uppercase fw-bold small">Reservas</span>
          <h1 className="fw-bold">Tu mesa te espera</h1>
          <p className="text-muted">Haz tu reserva y disfruta de una experiencia gastronómica sin preocupaciones.</p>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-7">
          <div className="card shadow p-4 border-0">
            <h4 className="mb-4 text-primary text-center">Reserva tu mesa</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-bold">Nombre completo *</label>
                <input type="text" className="form-control" placeholder="Ej. Carlos Torres" required onChange={(e)=>setFormData({...formData, cliente: e.target.value})} />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Correo electrónico *</label>
                <input type="email" className="form-control" placeholder="tu@correo.com" required onChange={(e)=>setFormData({...formData, email: e.target.value})} />
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold">Fecha de reserva *</label>
                  <input type="date" className="form-control" required onChange={(e)=>setFormData({...formData, fecha: e.target.value})} />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold">Hora *</label>
                  <input type="time" className="form-control" required onChange={(e)=>setFormData({...formData, hora: e.target.value})} />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Número de personas *</label>
                <select className="form-select" onChange={(e)=>setFormData({...formData, personas: e.target.value})} defaultValue="2">
                  <option value="1">1 Persona</option>
                  <option value="2">2 Personas</option>
                  <option value="4">4 Personas</option>
                  <option value="6">6+ Personas</option>
                </select>
              </div>
              <button type="submit" className="btn btn-warning w-100 fw-bold py-2 text-dark">Buscar disponibilidad y reservar</button>
            </form>

            {codigo && (
              <div className="alert alert-success mt-4 text-center">
                ¡Reserva registrada con éxito! Tu código de seguimiento es: <strong>{codigo}</strong>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}