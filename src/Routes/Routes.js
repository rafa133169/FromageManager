import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from "../Pages/Login"

function Rutas() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default Rutas;
