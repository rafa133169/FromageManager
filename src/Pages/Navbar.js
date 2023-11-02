import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCog } from "@fortawesome/free-solid-svg-icons";
import '../App.css';

const AppNavbar = () => {
  return (
    <Navbar className="purple-bg" variant="dark">
      <Navbar.Brand>Recetas de Queso Tradicional</Navbar.Brand>
      <Nav className="ml-auto"> {/* Utiliza ml-auto para alinear a la derecha */}
        <Nav.Link>
          <FontAwesomeIcon icon={faUser} />
        </Nav.Link>
        <Nav.Link>
          <FontAwesomeIcon icon={faCog} />
        </Nav.Link>
      </Nav>
      
    </Navbar>
    
  );
};

export default AppNavbar;
