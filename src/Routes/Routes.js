import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login"
import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Recetas from "../Pages/Recetas";
import NewReceta from "../Pages/NewReceta";
import Container from "../Pages/Container";
import Inventario from "../Pages/Inventario";
import NewUsuario from "../Pages/NewUsuario";
import NewIngrediente from "../Pages/NewIngrediente";
import Usuarios from "../Pages/Usuarios";


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
  },
  {
    path: "/newusuario",
    element: <NewUsuario/>
  },
  {
    path: "/newingrediente",
    element: <NewIngrediente/>
  },
  {
    path: "/usuarios",
    element: <Usuarios/>
  }
]);


