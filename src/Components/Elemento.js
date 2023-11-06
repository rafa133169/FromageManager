import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const ElementoMateriaPrima = ({ nombre, cantidad, id, setMateriasPrimas, materiasPrimas }) => {
  const [contador, setContador] = useState(0);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const aumentarContador = () => {
    setContador(contador + 1);
  };

  const disminuirContador = () => {
    setContador(contador - 1);
  };

  const eliminarElemento = () => {
    axios
      .delete(`http://localhost:4001/materiaPrima/`+ id)
      .then(function (response) {
        if (response.status === 200) {
          setMateriasPrimas(materiasPrimas.filter((m) => m.id_materiaPrima !== id));
          setShowConfirmationModal(false);
        } else {
          console.error('Error al eliminar el elemento');
        }
      })
      .catch((error) => {
        console.error('Error al eliminar el elemento', error);
      });
  };

  const mostrarModalConfirmacion = () => {
    setShowConfirmationModal(true);
  };

  return (
    <div className="w-1000 h-200 bg-custom-orange rounded-lg flex items-center p-2 mb-4">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center">
          <p className="text-white">{nombre}</p>
        </div>
        <div className="flex items-center">
          <button className="w-12 h-12 bg-custom-orange text-white font-bold text-1xl flex items-center justify-center rounded-full border border-white" onClick={aumentarContador}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <p className="text-white text-2xl mx-4">{cantidad}</p>
          <button className="w-12 h-12 bg-custom-orange text-white font-bold text-1xl flex items-center justify-center rounded-full border border-white" onClick={disminuirContador}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <button className="text-white border-white ml-4 " onClick={mostrarModalConfirmacion}>
            <FontAwesomeIcon icon={faTrash} className="fa-lg" />
          </button>
        </div>
      </div>

      <div className={`fixed bg-gray-800 bg-opacity-50 ${showConfirmationModal ? "flex" : "hidden"} items-center justify-center top-0 left-0 w-full h-full`}>
        <div className="bg-white p-4 rounded-md shadow-lg">
          <p>¿Estás seguro de eliminar este elemento de materia prima?</p>
          <div className="flex justify-end mt-4">
            <button
              className="px-3 py-1 bg-blue-500 text-white rounded-md mr-2"
              onClick={() => {
                eliminarElemento();
              }}
            >
              Confirmar
            </button>
            <button
              className="px-3 py-1 bg-red-500 text-white rounded-md"
              onClick={() => setShowConfirmationModal(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const RectanguloNaranja = () => {
  const [materiasPrimas, setMateriasPrimas] = useState([]);
  const apiUrl = "http://localhost:4001/materiaPrima/datoselemento";

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setMateriasPrimas(data);
        }
      })
      .catch((error) => {
        console.error("Error al obtener los datos de la materia prima", error);
      });
  }, []);

  return (
    <div>
      {materiasPrimas.map((materiaPrima) => (
        <ElementoMateriaPrima
          key={materiaPrima.id_materiaPrima}
          nombre={materiaPrima.nombre_materia}
          cantidad={materiaPrima.cantidad}
          id={materiaPrima.id_materiaPrima}
          setMateriasPrimas={setMateriasPrimas}
          materiasPrimas={materiasPrimas}
        />
      ))}
    </div>
  );
};

export default RectanguloNaranja;
