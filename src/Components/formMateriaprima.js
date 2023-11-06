import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function FormMateriaPrima({ title }) {
  const [materiasPrimas, setMateriasPrimas] = useState([]);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:4001/materiaPrima/datoselemento')
      .then((response) => {
        setMateriasPrimas(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener las materias primas', error);
      });
  }, []);

  const handleDelete = (id) => {
    setIdToDelete(id);
    setShowConfirmationModal(true);
  };

  const handleConfirmDelete = (id) => {
    axios.delete(`http://localhost:4001/materiaPrima/${id}`)
      .then((response) => {
        setMateriasPrimas(materiasPrimas.filter(materiaPrima => materiaPrima.id_materiaPrima !== id));
        setShowConfirmationModal(false);
        setShowSuccessModal(true);
      })
      .catch((error) => {
        console.error('Error al eliminar la materia prima', error);
        setShowConfirmationModal(false);
      });
  };

  const handleIncrement = (id) => {
    axios.put(`http://localhost:4001/materiaPrima/aumentar/${id}`)
      .then((response) => {
        // Si el aumento en la base de datos tiene éxito, actualiza el estado para reflejar el cambio
        setMateriasPrimas(materiasPrimas.map(materiaPrima => {
          if (materiaPrima.id_materiaPrima === id) {
            return { ...materiaPrima, cantidad: materiaPrima.cantidad + 1 };
          }
          return materiaPrima;
        }));
      })
      .catch((error) => {
        console.error('Error al aumentar la cantidad de materia prima', error);
      });
  };

  const handleDecrement = (id) => {
    axios.put(`http://localhost:4001/materiaPrima/disminuir/${id}`)
      .then((response) => {
        // Si la disminución en la base de datos tiene éxito, actualiza el estado para reflejar el cambio
        setMateriasPrimas(materiasPrimas.map(materiaPrima => {
          if (materiaPrima.id_materiaPrima === id && materiaPrima.cantidad > 0) {
            return { ...materiaPrima, cantidad: materiaPrima.cantidad - 1 };
          }
          return materiaPrima;
        }));
      })
      .catch((error) => {
        console.error('Error al disminuir la cantidad de materia prima', error);
      });
  };


  return (
    <>
      <div className="w-1000 h-1200 bg-white-padd flex flex-col items-center rounded-xl mt-1000">
        <div className="w-full h-300 bg-custom-orange flex justify-center items-center rounded-t-xl mt-500">
          <p className="text-white text-3xl font-bold">{title}</p>
        </div>
        <div className="w-full h-900 mt-5">
          <div className="mt-5 mx-5">
            {materiasPrimas.map((materiaPrima) => (
              <div className="w-1000 h-200 bg-custom-orange rounded-lg flex items-center p-2 mb-4" key={materiaPrima.id_materiaPrima}>
                <div className="w-full flex items-center justify-between">
                  <div className="flex items-center">
                    <p className="text-white">{materiaPrima.nombre_materia}</p>
                  </div>
                  <div className="flex items-center">
                    <button
                      className="w-12 h-12 bg-custom-orange text-white font-bold text-1xl flex items-center justify-center rounded-full border border-white"
                      onClick={() => handleIncrement(materiaPrima.id_materiaPrima)}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                    <p className="text-white text-2xl mx-4">{materiaPrima.cantidad}</p>
                    <button
                      className="w-12 h-12 bg-custom-orange text-white font-bold text-1xl flex items-center justify-center rounded-full border border-white"
                      onClick={() => handleDecrement(materiaPrima.id_materiaPrima)}
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <button
                      className="text-white border-white ml-4"
                      onClick={() => handleDelete(materiaPrima.id_materiaPrima)}
                    >
                      <FontAwesomeIcon icon={faTrash} className="fa-lg"/>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal de Confirmación */}
      <div
        className={`fixed bg-gray-800 bg-opacity-50 ${
          showConfirmationModal ? "flex" : "hidden"
        } items-center justify-center top-0 left-0 w-full h-full`}
      >
        <div className="bg-white p-4 rounded-md shadow-lg">
          <p>¿Estás seguro de eliminar esta materia?</p>
          <div className="flex justify-end mt-4">
            <button
              className="px-3 py-1 bg-blue-500 text-white rounded-md mr-2"
              onClick={() => handleConfirmDelete(idToDelete)}
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

      {/* Modal de Éxito */}
      <div
        className={`fixed bg-gray-800 bg-opacity-50 ${
          showSuccessModal ? "flex" : "hidden"
        } items-center justify-center top-0 left-0 w-full h-full`}
      >
        <div className="bg-white p-4 rounded-md shadow-lg">
          <p>Materia eliminado exitosamente.</p>
          <div className="flex justify-end mt-4">
            <button
              className="px-3 py-1 bg-blue-500 text-white rounded-md"
              onClick={() => setShowSuccessModal(false)}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormMateriaPrima;
