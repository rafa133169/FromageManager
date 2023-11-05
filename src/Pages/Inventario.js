import React from "react";
import Dashboard from "./Dashboard";
import RectanguloInventario from "../Components/FormInventario"
// import Elemento from '../Components/Elemento'
function Inventario() {
  return (
    <>
  <div className="flex">
  <div className="w-1/2">
    <Dashboard></Dashboard>
  </div>
  <div className="w-3/4 flex mt-10 mr-80">
    <div className="w-full">
      <RectanguloInventario></RectanguloInventario>
    </div>
  </div>
</div>

</>
  );
}

export default Inventario;
