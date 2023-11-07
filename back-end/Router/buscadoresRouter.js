const express = require("express");
const buscadoresControllers = require("../Controllers/buscadoresController"); // Asegúrate de importar el controlador correcto

const router = express.Router();

// Rutas para la tabla Recetas
router.get("/:queso", buscadoresControllers.obtenerRecetaPorNombre);


module.exports = router;
