import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navegacion from './Components/Navegacion';
import Inicio from './Components/Inicio';
import Nosotros from './Components/Nosotros';
import Menu from './Components/Menu';
import Galeria from './Components/Galeria';
import Reservas from './Components/Reservas';
import Contacto from './Components/Contacto';
import Footer from './Components/Footer';

export const App = () => {
  return (
    <Router>
      <Navegacion/>
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/nosotros" element={<Nosotros/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/galeria" element={<Galeria/>} />
        <Route path="/reservas" element={<Reservas/>} />
        <Route path="/contacto" element={<Contacto/>} />
      </Routes>
      <Footer/>  
    </Router>
  )
}

export default App;