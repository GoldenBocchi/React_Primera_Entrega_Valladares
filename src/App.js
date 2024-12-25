import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa React Router
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Casacas from './components/Casacas'; // Importa el componente de Casacas
import Camisas from './components/Camisas'; // Importa el componente de Camisas
import Pantalones from './components/Pantalones'; // Importa el componente de Pantalones
import './App.css';

function App() {
  return (
    <Router>
      <div>
        {/* Navbar siempre visible */}
        <Navbar />
        
        {/* Define las rutas */}
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />} />
          <Route path="/categoria1" element={<Casacas />} />
          <Route path="/categoria2" element={<Camisas />} />
          <Route path="/categoria3" element={<Pantalones />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
