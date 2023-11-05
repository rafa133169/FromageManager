import React from 'react';

function Modal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) {
    return null;
  }
  console.log('aqui toy jijij')

  const buttonColor = "#9159D8";

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      <div className="modal-overlay" onClick={onClose} />
      <div className="modal-container bg-white w-96 mx-auto rounded-lg shadow-lg z-50">
        <div className="modal-content p-4 bg-white">
          <p className="text-lg font-bold">¿Desea confirmar los cambios?</p>
        </div>
        <div className="modal-actions p-4 bg-gray-100">
          <button
            className="btn-primary mr-2 rounded-md p-4"
            style={{ backgroundColor: buttonColor, color: 'white' }}
            onClick={onConfirm}
          >
            Confirmar
          </button>
          <button
            className="btn-secondary rounded-md p-4"
            style={{ backgroundColor: buttonColor, color: 'white' }}
            onClick={onClose}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;