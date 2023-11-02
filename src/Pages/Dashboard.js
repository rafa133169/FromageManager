import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css';


function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    
    <div className={`menu-dashboard ${menuOpen ? 'open' : ''}`}>
      <div className="top-menu">
        <div className="logo">
          <img src="./src/logo.svg" alt="" />
          <span>Cheese Sitio</span>
        </div>
        <div className="toggle" onClick={toggleMenu}>
          <i className={`bx ${menuOpen ? 'bx-x' : 'bx-menu'}`}></i>
        </div>
      </div>
      <div className="input-search">
        <i className="bx bx-search"></i>
        <input type="text" className="input" placeholder="Buscar" />
      </div>
      <div className="menu">
        <div className="enlace">
          <i className="bx bx-food-menu"></i>
          <span>Recetas</span>
        </div>
        <div className="enlace">
          <i className="bx bx-basket"></i>
          <span>Inventario de productos</span>
        </div>
        <div className="enlace">
          <i className="bx bx-package"></i>
          <span>Materia prima</span>
        </div>
        <div className="enlace">
          <i className="bx bx-user"></i>
          <span>Usuarios</span>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
