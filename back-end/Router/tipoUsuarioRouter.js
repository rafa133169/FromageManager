const express = require("express");
const tipoUsuariosControllers = require("../Controllers/tipoUsuarioController"); // Asegúrate de importar el controlador correcto

const router = express.Router();

// Rutas para la tabla Tipo Usuario
router.get("/", tipoUsuariosControllers.obtenerTipoUsuario);


module.exports = router;
