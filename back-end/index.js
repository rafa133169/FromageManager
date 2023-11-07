// !dependencias
const express = require("express");
const cors = require("cors");

const MateriaPrimaRouter = require("./Router/materiaPrimaRouter");
const recetasRouter = require("./Router/recetasRouter")
const usuariosRouter = require("./Router/usuariosRouter")
const inventarioRouter = require("./Router/inventarioRouter")
const busquedaRouter = require ("./Router/buscadoresRouter")
const tipoUsuarioRouter = require("./Router/tipoUsuarioRouter")


/* app va a tener todos los atributos y metodos de 
express */

const app = express();

app.use(cors());

app.use(express.json());

// Ruta al Router
app.use("/materiaPrima", MateriaPrimaRouter);
app.use("/recetas", recetasRouter);
app.use("/usuarios",usuariosRouter);
app.use("/inventario",inventarioRouter);
app.use("/buscar",busquedaRouter);
app.use("/tipoUsuario",tipoUsuarioRouter)


app.get("/", (req, res) => {
  res.send(`<h1>Hola</h1>`);
});

app.listen(4001, () => {
  console.log("API escuchando por el puerto 4001");
});