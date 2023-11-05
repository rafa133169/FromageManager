import React from "react";
import Dashboard from "./Dashboard";
import RectanguloInventario from "../Components/formInventario";
// import Elemento from '../Components/Elemento'
function Inventario() {
  return (
    <>
      <div className="flex h-screen bg-[#F5E39E]">
        <div className="flex-1">
          <Dashboard></Dashboard>
        </div>
        <div className="w-screen m-5 items-center flex-row">
          <RectanguloInventario></RectanguloInventario>
        </div>
      </div>
    </>
  );
}

export default Inventario;
