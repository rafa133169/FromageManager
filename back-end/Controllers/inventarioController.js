const connection = require("../database");

const obtenerInventario = (req, res) => {
  connection.query("SELECT D.*, R.queso FROM DetallesQueso AS D JOIN Receta AS R ON D.id_receta_id = R.id_receta", (error, results) => {
    if (error) {
      console.error("Error al obtener los detalles del Queso para el inventario", error);
      res.status(500).json({
        error: "No se encontro el inventario",
      });
    } else {
      res.json(results);
    }
  });
};
// const editarInventariPorId = (req, res) => {
//     const id = req.params.id_inventario;
//     connection.query("SELECT * FROM DetallesQueso", [id],(error, results) => {
//       if (error) {
//         console.error("Error al editar los detalles del Queso para el inventario mediante ID", error);
//         res.status(500).json({
//           error: "No se encontro el inventario para editar",
//         });
//       } else {
//         res.json(results[0]);
//       }
//     });
//   };



module.exports = {
  obtenerInventario,
//   editarInventariPorId,

};
