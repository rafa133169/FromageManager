import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Modal from "../Components/Modal";
import Card from "../Components/Card";
import Contenedor from "../Components/Contenedor";
import ContenedorRecetas from "../Components/Contenedor";

function Recetas() {
  
  return (
    <>
      <div className="flex">
        <div className="flex-1">
          <Dashboard />
        </div>
        <div>
          <ContenedorRecetas />
        </div>
      </div>
    </>
  );
}

export default Recetas;
