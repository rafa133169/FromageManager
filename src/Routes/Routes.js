import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Pages/Login"
import Dashboard from "../Pages/Dashboard";
import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import AppNavbar from "../Pages/Navbar";

function Rutas() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <AppNavbar />
          <Dashboard />
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default Rutas;
