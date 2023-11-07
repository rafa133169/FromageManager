import React from "react";
import Dashboard from "./Dashboard";
import ContenedorRecetas from "../Components/Contenedor";
import { Link } from "react-router-dom";

function Recetas() {
  
  return (
    <>
      <div className="flex min-h-screen bg-[#F5E39E]">
        <div className="flex-1">
          <Dashboard />
        </div>
        <div className="w-screen m-5 h-screen items-center flex-row">
          <Link to="/newreceta">
          <button className=" rounded-2xl m-2 p-2 text-center text-xl text-white bg-[#9159D8]">
            Agregar receta
          </button>
          </Link>
          <ContenedorRecetas />
        </div>
      </div>
    </>
  );
}

export default Recetas;
