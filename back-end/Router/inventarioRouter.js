const express = require("express");
const inventarioControllers = require("../Controllers/inventarioController"); // Asegúrate de importar el controlador correcto

const router = express.Router();

// Rutas para la tabla MateriaPrima
router.get("/", inventarioControllers.obtenerInventario);
// router.put("/:id_materiaPrima", materiaPrimaControllers.actualizarMateriaPrimaPorId);

module.exports = router;
