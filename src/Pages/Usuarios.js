import React from "react";
import Dashboard from "./Dashboard";
import ContenedorUsuario from "../Components/ContenedorUsuario";
import { Link } from "react-router-dom";

function Usuarios() {
  return (
    <>
      <div className="flex min-h-screen bg-[#F5E39E]">
        <div className="flex-1">
          <Dashboard />
        </div>
        <div className="w-screen m-5 h-screen items-center flex-row">
          <Link to="/newusuario">
          <button className=" rounded-2xl m-2 p-2 text-center text-xl text-white bg-[#9159D8]">
            Agregar Usuario
          </button>
          </Link>
          <ContenedorUsuario />
        </div>
      </div>
    </>
  );
}

export default Usuarios;
