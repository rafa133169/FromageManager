import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login"
import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Recetas from "../Pages/Recetas";
import DetalleRecta2 from "../Pages/DetalleRecta2";

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
    path:"/DetalleReceta",
    element:<DetalleRecta2></DetalleRecta2>
  }
]);


