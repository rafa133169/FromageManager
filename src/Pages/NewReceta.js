import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import { Link} from "react-router-dom";
// import Formulario from "../Components/Formulario";

function NewReceta() {
  const [recetas, setRecetas] = useState([]);
  const [recetaSeleccionada, setRecetaSeleccionada] = useState({});
  const [materiaPrima, setMateriaPrima] = useState([]);
  const [materiaPrimaSeleccionado, setMateriaPrimaSeleccionado] = useState("");

  const handleAgregarReceta = async (event) => {
    event.preventDefault();

    try {
      const nuevoProducto = {
        queso: recetaSeleccionada.queso,
        id_materiaPrima_id: materiaPrimaSeleccionado,
        tiempo_cuajado: recetaSeleccionada.tiempo_cuajado,
        tiempo_maduracion: recetaSeleccionada.tiempo_maduracion,
        cantidad_sal: recetaSeleccionada.cantidad_sal,
        prensado: recetaSeleccionada.prensado,
        tiempo_total_elaboracion: recetaSeleccionada.tiempo_total_elaboracion,
        valoracion_queso: recetaSeleccionada.valoracion_queso,
        imagen: recetaSeleccionada.imagen,
      };

      const response = await fetch("http://localhost:4001/recetas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoProducto),
      });

      if (response.ok) {
        const data = await response.json();
        setRecetas([...recetas, data]);
        setRecetaSeleccionada({});
        setMateriaPrimaSeleccionado("");
      } else {
        console.error("Error al agregar el producto");
      }
    } catch (error) {
      console.error("Error al comunicarse con la API", error);
    }

   
  };
  const obtenerMateriaPrima = async () => {
    try {
      const response = await fetch("http://localhost:4001/materiaPrima");
      if (response.ok) {
        const data = await response.json();
        setMateriaPrima(data);
      } else {
        console.error("Error al obtener materia Prima");
      }
    } catch (error) {
      console.error("Error al comunicarse con la API", error);
    }
  };

  // Llamada a obtenerProductos y obtenerFabricantes cuando el componente se monta
  useEffect(() => {
    obtenerMateriaPrima();
  }, []);
  return (
    <>
      <div className="flex items-center bg-[#F5E39E] m-auto p-3">
        <div className="flex-1">
          <Dashboard />
        </div>
        <div className="w-screen  m-4">
          {" "}
          {/* Agrega un margen a la izquierda para separar los elementos */}
          <table
            className="w-full text-left p-3 m-2 bg-[#9159D8] border rounded-xl "
          
          >
            <tr className="gap-4">
              <td className="text-xl">
                <div className="mb-4 mt-4 ml-10">
                  <label className="text-white ml-3" htmlFor="nombre">
                    Queso:
                  </label>
                  <input
                    id="queso"
                    type="text"
                    className="mt-2 flow-root w-[90%] p-3 rounded-xl  "
                    placeholder="Nombre del queso en preparación"
                    name="Queso"
                    value={recetaSeleccionada.queso || ""}
                    onChange={(event) =>
                      setRecetaSeleccionada({
                        ...recetaSeleccionada,
                        queso: event.target.value,
                      })
                    }
                  />
                </div>
              </td>
              <td className="text-xl">
                <div className="sm:col-span-3">
                  <label className="text-white ml-3" htmlFor="descrpcion">
                    Ingrediente:
                  </label>
                  <div className="mt-2">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      value={materiaPrimaSeleccionado}
                      onChange={(event) =>
                        setMateriaPrimaSeleccionado(event.target.value)
                      }
                    >
                      {materiaPrima.map((material) => (
                        <option
                          key={material.id_materiaPrima}
                          value={material.id_materiaPrima}
                        >
                          {material.nombre_materia}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="text-xl">
                <div className="mb-4 ml-10">
                  <label className="text-white ml-3" htmlFor="nombre">
                    Tiempo de cuajado:
                  </label>
                  <input
                    id="cuajado"
                    type="number"
                    className="mt-2 flow-root w-[90%] p-3 rounded-xl  "
                    placeholder="Tiempo de cuajado en Minutos"
                    name="Cuajulado"
                    value={recetaSeleccionada.tiempo_cuajado || ""}
                    onChange={(event) =>
                      setRecetaSeleccionada({
                        ...recetaSeleccionada,
                        tiempo_cuajado: event.target.value,
                      })
                    }
                  />
                </div>
              </td>
              <td className="text-xl">
                <div className="mb-4">
                  <label className="text-white ml-3" htmlFor="descrpcion">
                    Tiempo de maduracion"
                  </label>
                  <input
                    id="maduracion"
                    type="number"
                    className="mt-2 flow-root w-[90%] p-3 rounded-xl  "
                    placeholder="Tiempo de maduracion en Minutos"
                    name="maduracion"
                    value={recetaSeleccionada.tiempo_maduracion || ""}
                    onChange={(event) =>
                      setRecetaSeleccionada({
                        ...recetaSeleccionada,
                        tiempo_maduracion: event.target.value,
                      })
                    }
                  />
                </div>
              </td>
            </tr>
            <tr className="">
              <td className="text-xl">
                <div className="mb-4 ml-10">
                  <label className="text-white ml-3" htmlFor="descrpcion">
                    Cantidad de sal:
                  </label>
                  <table>
                    <tr>
                      <td>
                        <input
                          id="sal"
                          type="number"
                          className="mt-2 flow-root w-[90%] p-3 rounded-xl  "
                          placeholder="sal"
                          name="sal"
                          value={recetaSeleccionada.cantidad_sal || ""}
                          onChange={(event) =>
                            setRecetaSeleccionada({
                              ...recetaSeleccionada,
                              cantidad_sal: event.target.value,
                            })
                          }
                        />
                      </td>
                      <td>
                        <p className="text-white">gr</p>
                      </td>
                    </tr>
                  </table>
                </div>
              </td>
              <td className="text-xl">
                <div className="mb-4">
                  <label className="text-white ml-3" htmlFor="descrpcion">
                    Prensado:
                  </label>

                  <input
                    id="prensado"
                    type="number"
                    className="mt-2 flow-root w-[90%] p-3 rounded-xl  "
                    placeholder="¿Cada cuántas presando?"
                    name="presando"
                    value={recetaSeleccionada.prensado || ""}
                    onChange={(event) =>
                      setRecetaSeleccionada({
                        ...recetaSeleccionada,
                        prensado: event.target.value,
                      })
                    }
                  />
                </div>
              </td>
            </tr>
            <tr className="">
              <td className="text-xl">
                <div className="mb-4 ml-10">
                  <label className="text-white ml-3" htmlFor="descrpcion">
                    Tiempo en total de elaboración:
                  </label>

                  <input
                    id="elaboracion"
                    type="number"
                    className="mt-2 flow-root w-[90%] p-3 rounded-xl  "
                    placeholder="Tiempo total de elaboración minutos"
                    name="elaboracion"
                    value={recetaSeleccionada.tiempo_total_elaboracion || ""}
                    onChange={(event) =>
                      setRecetaSeleccionada({
                        ...recetaSeleccionada,
                        tiempo_total_elaboracion: event.target.value,
                      })
                    }
                  />
                </div>
              </td>
              <td className="text-xl">
                <div className="mb-4">
                  <label className="text-white ml-3" htmlFor="descrpcion">
                    Valoracion del queso:
                  </label>

                  <input
                    id="valoracion"
                    type="number"
                    className="mt-2 flow-root w-[90%] p-3 rounded-xl  "
                    placeholder="Estatus del queso"
                    name="valoracion"
                    value={recetaSeleccionada.valoracion_queso || ""}
                    onChange={(event) =>
                      setRecetaSeleccionada({
                        ...recetaSeleccionada,
                        valoracion_queso: event.target.value,
                      })
                    }
                  />
                </div>
              </td>
              {/* <td className="text-xl">
                <div className="mb-4 ml-10">
                  <label className="text-white ml-3" htmlFor="descrpcion">
                    Imagen:
                  </label>

                  <input
                    id="imagen"
                    type="imagen"
                    className="mt-2 flow-root w-[90%] p-3 rounded-xl  "
                    placeholder="URL de imagen"
                    name="imagen"
                    value={recetaSeleccionada.imagen || ""}
                    onChange={(event) =>
                      setRecetaSeleccionada({
                        ...recetaSeleccionada,
                        imagen: event.target.value,
                      })
                    }
                  />
                </div>
              </td> */}
            </tr>
          </table>
        <button
          className="rounded-2xl m-2 p-2 text-center text-xl text-white bg-[#9159D8]"
          type="button"
          onClick={handleAgregarReceta}
        >
          Crear Receta
        </button>
         <Link to={"/recetas"}>
        <button
          className="rounded-2xl m-2 p-2 text-center text-xl text-white bg-[#9159D8]"
          type="button"
        >
          Ver las Recetas
        </button>
        </Link> 
        </div>
      </div>
    </>
  );
}

export default NewReceta;
