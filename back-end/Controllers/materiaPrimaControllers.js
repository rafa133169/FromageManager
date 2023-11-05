const connection = require("../database");

const obtenerMateriasPrimas = (req, res) => {
  connection.query("SELECT * FROM MateriaPrima", (error, results) => {
    if (error) {
      console.error("Error al obtener las materias primas", error);
      res.status(500).json({
        error: "Error al obtener las materias primas",
      });
    } else {
      res.json(results);
    }
  });
};

const obtenerMateriaPrimaPorId = (req, res) => {
  const id = req.params.id_materiaPrima;
  connection.query("SELECT * FROM MateriaPrima WHERE id_materiaPrima = ?", [id], (error, results) => {
    if (error) {
      res.status(500).json({ error: "Ocurrió un error al obtener la materia prima" });
    } else if (results.length === 0) {
      res.status(404).json({ error: "La materia prima no fue encontrada" });
    } else {
      res.json(results[0]);
    }
  });
};

const crearMateriaPrima = (req, res) => {
  const { nombre_materia, cantidad, estatus } = req.body;

  connection.query(
    "INSERT INTO MateriaPrima (nombre_materia, cantidad, estatus) VALUES (?, ?, ?)",
    [nombre_materia, cantidad, estatus],
    (error, results) => {
      if (error) {
        console.error("Error al agregar materia prima", error);
        res.status(500).json({
          error: "Error al agregar materia prima",
        });
      } else {
        res.json({ message: "Materia prima agregada correctamente" });
      }
    }
  );
};

const actualizarMateriaPrimaPorId = (req, res) => {
  const id = req.params.id_materiaPrima;
  const { nombre_materia, cantidad, estatus } = req.body;
  connection.query(
    "UPDATE MateriaPrima SET nombre_materia = ?, cantidad = ?, estatus = ? WHERE id_materiaPrima = ?",
    [nombre_materia, cantidad, estatus, id],
    (error, results) => {
      if (error) {
        console.error("Error al actualizar materia prima", error);
        res.status(500).json({ error: "Error al actualizar materia prima" });
      } else {
        res.json({ message: "Materia prima actualizada correctamente" });
      }
    }
  );
};

const eliminarMateriaPrimaPorId = (req, res) => {
  const id = req.params.id_materiaPrima;
  connection.query("DELETE FROM MateriaPrima WHERE id_materiaPrima = ?", [id], (error, results) => {
    if (error) {
      res.status(500).json({ error: "Ocurrió un error al eliminar la materia prima" });
    } else {
      res.json({ message: "Materia prima eliminada correctamente" });
    }
  });
};

module.exports = {
  obtenerMateriasPrimas,
  obtenerMateriaPrimaPorId,
  crearMateriaPrima,
  actualizarMateriaPrimaPorId,
  eliminarMateriaPrimaPorId,
};
