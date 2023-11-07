const connection = require("../database");

const obtenerTipoUsuario = (req, res) => {
    connection.query('SELECT * FROM TipoUsuarios', (error, results) => {
      if (error) {
        res.status(500).json({ error: "Ocurrió un error al obtener Tipo Usuario" });
      } else if (results.length === 0) {
        res.status(404).json({ error: "El Tipo usuario no fue encontrado" });
      } else {
        res.json(results);
      
      }
    });
  };
  module.exports = {
    obtenerTipoUsuario,
  };