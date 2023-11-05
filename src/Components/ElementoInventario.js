import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";

const RectanguloNaranja = ({ title = "sopero" }) => {
  const [inventario, setInventario] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4001/inventario")
      .then((respuesta) => {
        setInventario(respuesta.data.listaInventario);
      })
      .catch((error) => console.log(error));
      
  }, []);
  const [contador, setContador] = useState(0);

  const aumentarContador = () => {
    setContador(contador + 1);
  };

  const disminuirContador = () => {
    setContador(contador - 1);
  };

  const eliminarElemento = () => {
    // Implementa la lógica para eliminar el elemento aquí
  };

  return (
    <>
    {console.log(inventario)}
      {inventario.map((elemento) => (
        <>
        <div className="w-1000 h-200 bg-custom-orange rounded-lg flex items-center p-2">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center">
              <p className="text-white">{elemento.queso}</p>
            </div>
            <div className="flex items-center">
              <button
                className="w-12 h-12 bg-custom-orange text-white font-bold text-1xl flex items-center justify-center rounded-full border border-white"
                onClick={aumentarContador}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
              <p className="text-white text-2xl mx-4">{elemento.cantidad}</p>
              <button
                className="w-12 h-12 bg-custom-orange text-white font-bold text-1xl flex items-center justify-center rounded-full border border-white"
                onClick={disminuirContador}
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <button
                className="text-white border-white ml-4 "
                onClick={eliminarElemento}
              >
                <FontAwesomeIcon icon={faTrash} className="fa-lg" />
              </button>
            </div>
          </div>
          
        </div>
        <br/>
        </>
      ))}
    </>
  );
};

export default RectanguloNaranja;
