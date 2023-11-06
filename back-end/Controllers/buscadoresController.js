const connection = require("../database");
const obtenerRecetaPorNombre = (req, res) => {
    const queso = req.params.queso;
    console.log(queso);
    connection.query(
      "SELECT * FROM Receta WHERE Receta.queso LIKE ?", [`%${queso}%`],(error, results) => {
        if (error) {
          res.status(500).json({ error: "Ocurrió un error al obtener la receta" });
        } else if (results.length === 0) {
          res.status(404).json({ error: "La receta no fue encontrada" });
        } else {
          res.json({busqueda:results});
        }
      }
    );
  };

  module.exports = {
    obtenerRecetaPorNombre
  };