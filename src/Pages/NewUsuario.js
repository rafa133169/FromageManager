import React,{useState,useEffect} from "react";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";
// import FormularioUsuario from "../Components/FormularioUsuario";

function NewUsuario() {
  const [usuario, setUsuario] = useState([]);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState({});
  const [tipo, setTipo] = useState([]);
  const [tipoSeleccionado, setTipoSeleccionado] = useState("");

  const handleAgregarUsuario = async (event) => {
    event.preventDefault();

    try {
      const nuevoProducto = {
        nombre_usuario: usuarioSeleccionado.nombre_usuario,
        matricula_usuario: usuarioSeleccionado.matricula_usuario,
        contrasena: usuarioSeleccionado.contrasena,
        id_tipo_usuario_id: tipoSeleccionado,
        
      };

      const response = await fetch("http://localhost:4001/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoProducto),
      });

      if (response.ok) {
        const data = await response.json();
        setUsuario([...usuario, data]);
        setUsuarioSeleccionado({});
        setTipoSeleccionado("");
      } else {
        console.error("Error al agregar usuario");
      }
    } catch (error) {
      console.error("Error al comunicarse con la API", error);
    }

   
  };
  const obtenerTipo = async () => {
    try {
      const response = await fetch("http://localhost:4001/tipoUsuario");
      if (response.ok) {
        const data = await response.json();
        setTipo(data);
      } else {
        console.error("Error al obtener Tipo usuario");
      }
    } catch (error) {
      console.error("Error al comunicarse con la API", error);
    }
  };

  // Llamada a obtenerProductos y obtenerFabricantes cuando el componente se monta
  useEffect(() => {
    obtenerTipo();
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
          <table className="w-full text-left p-3 m-2 bg-[#9159D8] border rounded-xl ">
            <tr className="gap-4">
              <td className="text-xl">
                <div className="mb-4 mt-4 ml-10">
                  <label className="text-white ml-3" htmlFor="nombre">
                    Nombre del personal:
                  </label>
                  <input
                    id="nombre_usuario"
                    type="text"
                    className="mt-2 flow-root w-[90%] p-3 rounded-xl  "
                    placeholder="Nombre del personal"
                    name="nombre_usuario"
                    value={usuarioSeleccionado.nombre_usuario || ""}
                    onChange={(event) =>
                      setUsuarioSeleccionado({
                        ...usuarioSeleccionado,
                        nombre_usuario: event.target.value,
                      })
                    }
                  />
                </div>
              </td>
              <td className="text-xl">
                <div className="mb-4 mt-4">
                  <label className="text-white ml-3" htmlFor="descrpcion">
                    Matricula:
                  </label>
                  <input
                    id="matricula_usuario"
                    type="number"
                    className="mt-2 flow-root w-[90%] p-3 rounded-xl  "
                    placeholder="matricula"
                    name="matricula_usuario"
                    value={usuarioSeleccionado.matricula_usuario || ""}
                    onChange={(event) =>
                      setUsuarioSeleccionado({
                        ...usuarioSeleccionado,
                        matricula_usuario: event.target.value,
                      })
                    }
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td className="text-xl">
                <div className="mb-4 ml-10">
                  <label className="text-white ml-3" htmlFor="nombre">
                    Contraseña:
                  </label>
                  <input
                    id="contasena_usuario"
                    type="password"
                    className="mt-2 flow-root w-[90%] p-3 rounded-xl  "
                    placeholder="Contraseña del usuario"
                    name="contasena"
                    value={usuarioSeleccionado.contrasena || ""}
                    onChange={(event) =>
                      setUsuarioSeleccionado({
                        ...usuarioSeleccionado,
                        contrasena: event.target.value,
                      })
                    }
                  />
                </div>
              </td>
              <td className="text-xl">
                <div className="mb-4">
                  <label className="text-white ml-3" htmlFor="descrpcion">
                    Tipo de usuario:
                  </label>
                  <select
                    id="tipo_usuario"
                    type="tipo_usuario"
                    className="mt-2 flow-root w-[90%] p-3 rounded-xl  "
                    placeholder="Tipo de usuario"
                    name="tipo_usuario"
                    value={tipoSeleccionado}
                      onChange={(event) =>
                        setTipoSeleccionado(event.target.value)
                      }
                  >
                    {tipo.map((eltipo) => (
                        <option
                          key={eltipo.id_tipo_usuario}
                          value={eltipo.id_tipo_usuario}
                        >
                          {eltipo.tipo_usuario}
                        </option>
                      ))}
                  </select>
                </div>
              </td>
            </tr>
          </table>
          <button className=" rounded-2xl m-2 p-2 text-center text-xl text-white bg-[#9159D8]"
          type="button"
          onClick={handleAgregarUsuario}>
            Crear Usuario
          </button>
         <Link to={"/usuarios"}>
        <button
          className="rounded-2xl m-2 p-2 text-center text-xl text-white bg-[#9159D8]"
          type="button"
        >
          Ver Usuarios
        </button>
        </Link> 
        </div>
      </div>
    </>
  );
}

export default NewUsuario;
