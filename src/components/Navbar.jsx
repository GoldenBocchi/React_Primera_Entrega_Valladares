import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        {/* Usamos Link para navegar a la página principal */}
        <Link className="navbar-item has-text-white" to="/">
          <h1 className="title has-text-white">Mi Tienda</h1>
        </Link>
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarMenu" className="navbar-menu">
        <div className="navbar-start">
          {/* Links a las categorías */}
          <Link className="navbar-item has-text-white" to="/categoria1">
            Casacas
          </Link>
          <Link className="navbar-item has-text-white" to="/categoria2">
            Camisas
          </Link>
          <Link className="navbar-item has-text-white" to="/categoria3">
            Pantalones
          </Link>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;





