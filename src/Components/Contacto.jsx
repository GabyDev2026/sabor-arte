import React from 'react'

export default function Contacto() {
  return (
    <div className="container mt-5 pt-4">
      <div className="row mb-4 text-center">
        <div className="col-md-12">
          <span className="text-warning text-uppercase fw-bold small">Contáctanos</span>
          <h1 className="fw-bold">Estamos para ti</h1>
          <p className="text-muted">Será un gusto atenderte. Escríbenos, llámanos o visítanos. ¡Te esperamos!</p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-4">
          <h4 className="mb-3">Información</h4>
          <p><strong>📍 Nuestra ubicación:</strong> Av. Los Olivos 123, Lima - Perú[cite: 15]</p>
          <p><strong>📞 Teléfono:</strong> +51 987 654 321[cite: 15]</p>
          <p><strong>✉️ Email:</strong> contacto@saborarte.com[cite: 31]</p>
          <p><strong>⏰ Horario de atención:</strong> Lun - Dom 12:00 p.m. - 11:00 p.m.[cite: 31]</p>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm p-4 border-0">
            <h4 className="mb-3">Envíanos un mensaje</h4>
            <form onSubmit={(e)=>{e.preventDefault(); alert("¡Mensaje enviado con éxito!");}}>
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Correo electrónico</label>
                <input type="email" className="form-control" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Mensaje</label>
                <textarea className="form-control" rows="3" required></textarea>
              </div>
              <button type="submit" className="btn btn-dark w-100">Enviar mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}