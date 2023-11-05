import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login"
import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Recetas from "../Pages/Recetas";
import AppNavbar from "../Pages/Navbar";

export const rutas = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path:"/recetas",
    element:<Recetas/>
  },
  {
    path:"/prueba",
    element:<Container/>,
  },
  {
    path:"/inventario",
    element:<Inventario/>
  },
  {
    path: "/newreceta",
    element: <NewReceta/>
  }
]);


