import React from "react";

function Card() {
  return (
    <>
      <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white items-center m-5">
        <img
          className="w-2px h-48"
          src="https://s1.eestatic.com/2019/02/06/como/queso-como_hacer_374225412_114100912_1706x960.jpg"
          alt="Imagen de la tarjeta"
        />
        <div className="px-4 py-2">
          <div className="font-bold text-lg mb-2">Título de la Tarjeta</div>
          <p className="text-gray-700 text-sm">
            Contenido de la tarjeta. Puedes agregar una descripción o detalles
            aquí.
          </p>
        </div>
        <div className="px-4 py-2">
          <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2">
            Etiqueta 1
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2">
            Etiqueta 2
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700">
            Etiqueta 3
          </span>
        </div>
      </div>
    </>
  );
}

export default Card;
