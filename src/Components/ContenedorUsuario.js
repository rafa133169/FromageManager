import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function ContenedorUsuario() {
  const [contador, setContador] = useState(0);
  const [usuario, setUsuario] = useState([]);
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);
  
  const eliminarElemento = () => {
    // Implementa la lógica para eliminar el elemento aquí
  };
  useEffect(() => {
    axios
      .get("http://localhost:4001/usuarios")
      .then((respuesta) => {
        setUsuario(respuesta.data.listaUsuarios);
      })
      .catch((error) => console.log(error));
  }, []);

  const toggleAccordion = (index) => {
    if (openAccordionIndex === index) {
      // If the clicked accordion is already open, close it.
      setOpenAccordionIndex(null);
    } else {
      // If the clicked accordion is closed, open it.
      setOpenAccordionIndex(index);
    }
  };

  return (
    <>
      <div className="w-1000 bg-[#FBFFE2] flex flex-col items-center rounded-xl mt-1000">
        <div className="w-full bg-custom-orange flex justify-center text-center items-center rounded-t-xl mt-500">
          <h1 className="text-white text-3xl text-center font-bold">Usuarios</h1>
        </div>
        <div className="w-full h-900 p-4 items-center">
          {usuario.map((elusuario, index) => (
            <div
              key={elusuario.id_usuario}
              className="w-1000 bg-custom-orange rounded-lg p-2 mb-2"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <h4 className="text-white">{elusuario.nombre_usuario}</h4>
                </div>
                <div className="flex items-center">
                  
                  {/* <button
                    className="text-white border-white ml-4"
                    onClick={
                    eliminarElemento()}
                  >
                    <FontAwesomeIcon icon={faTrash} className="fa-lg" />
                  </button> */}
                </div>
              </div>

              {openAccordionIndex === index && (
                <div className="bg-white p-2 rounded-lg mt-2">
                  <p>Usuario: {elusuario.nombre_usuario}</p>
                  <p>Matricula: {elusuario.matricula_usuario}</p>
                  <p>Contraseña: {elusuario.contrasena}</p>
                  <p>Tipo de Usuario: {elusuario.tipo_usuario}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ContenedorUsuario;
