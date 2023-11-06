const express = require("express");
const materiaPrimaControllers = require("../Controllers/materiaPrimaControllers"); // Asegúrate de importar el controlador correcto

const router = express.Router();

// Rutas para la tabla MateriaPrima
router.get("/datoselemento", materiaPrimaControllers.obtenerMateriasPrimasNombre);
router.get("/", materiaPrimaControllers.obtenerMateriasPrimas);
router.get("/:id_materiaPrima", materiaPrimaControllers.obtenerMateriaPrimaPorId);
router.post("/", materiaPrimaControllers.crearMateriaPrima);
router.delete("/:id_materiaPrima", materiaPrimaControllers.eliminarMateriaPrimaPorId);
router.put("/:id_materiaPrima", materiaPrimaControllers.actualizarMateriaPrimaPorId);
router.put("/aumentar/:id_materiaPrima", materiaPrimaControllers.aumentarCantidadMateriaPrima);
router.put("/disminuir/:id_materiaPrima", materiaPrimaControllers.disminuirCantidadMateriaPrima);


module.exports = router;
