import React from "react";
import Dashboard from "./Dashboard";
import ContenedorRecetas from "../Components/Contenedor";

function Recetas() {
  
  return (
    <>
      <div className="flex min-h-screen bg-[#F5E39E]">
        <div className="flex-1">
          <Dashboard />
        </div>
        <div className="w-screen m-5 h-screen items-center flex-row">
          <ContenedorRecetas />
        </div>
      </div>
    </>
  );
}

export default Recetas;
