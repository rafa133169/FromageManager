import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css';
import { Link } from "react-router-dom";

function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (

    <div className={`menu-dashboard ${menuOpen ? 'open' : ''} rounded-xl`} >
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


        <Link to="/recetas" className='link-unstyled'>
          <div className="enlace">
            <i className="bx bx-food-menu"></i>
            <span>Recetas</span>
          </div>
        </Link>

        <Link to="/Inventario" className='link-unstyled'>
          <div className="enlace">
            <i className="bx bx-basket"></i>
            <span>Inventario de productos</span>
          </div>
        </Link>


        <div className="enlace">
          <i className="bx bx-package"></i>
          <span>Materia prima</span>
        </div>

        <Link to="/Usuarios" className='link-unstyled'>
          <div className="enlace">
            <i className="bx bx-user"></i>
            <span>Usuarios</span>
          </div>
        </Link>

      </div>
    </div>
  );
}

export default Dashboard;
