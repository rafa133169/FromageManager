import React from "react";
import Dashboard from "./Dashboard";
import RectanguloInventario from "../Components/formInventario";
import { Link } from "react-router-dom";
// import Elemento from '../Components/Elemento'

function Inventario() {
  return (
    <>
      <div className="flex min-h-screen bg-[#F5E39E]">
        <div className="flex-1">
          <Dashboard></Dashboard>
        </div>
        <div className="w-screen m-5 items-center flex-row">
          <Link to="/newingrediente">
          <button className=" rounded-2xl m-2 p-2 text-center text-xl text-white bg-[#9159D8]">
            Agregar Ingrediente
          </button>
          </Link>
          <RectanguloInventario></RectanguloInventario>
        </div>
      </div>
    </>
  );
}

export default Inventario;
