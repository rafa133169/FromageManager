import React, { useState } from 'react';

function DetalleRecta2() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <div className="bg-violet-600 shadow-lg sm:max-w-md lg:max-w-2xl xl:max-w-3xl mx-auto mb-6 rounded-lg">
        <div className="flex flex-col sm:flex-row">
          <div className="bg-white w-full sm:w-1/2 flex items-center">
            <img
              src="https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&q=80&w=2073&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="..."
              className="h-48 w-full object-cover p-2 rounded-sm"
            />
          </div>

          {/* SECCION DE TEXTO */}
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* PRIMERA SECCIÓN DE TEXTO */}
            <div className="p-2 text-left">
              <h4 className="text-white">Queso:</h4>
              <p className="text-white">Nombre del queso a mapear</p>

              <h4 className="text-white">Tiempo de cuajado:</h4>
              <p className="text-white">Tiempo a mapear</p>

              <h4 className="text-white">Cantidad de sal:</h4>
              <p className="text-white">Cantidad de sal a mapear</p>

              <h4 className="text-white">Tiempo de elaboración:</h4>
              <p className="text-white">Tiempo de elaboración a mapear</p>
            </div>

            {/* SEGUNDA SECCIÓN PARA MEJOR PRESENTACIÓN */}
            <div className="p-2 text-left">
              <div className="">
                <h4 className="text-white">Ingredientes:</h4>
                <ul>
                  <li className="text-white">Ingrediente 1</li>
                  <li className="text-white">Ingrediente 2</li>
                  <li className="text-white">Ingrediente 3</li>
                </ul>
              </div>

              {/* DIV PARA ESPACIO DE INGREDIENTES: */}
              <div className="">
                <h4 className="text-white">Tiempo de maduración:</h4>
                <p className="text-white">Tiempo de maduración a mapear</p>

                <h4 className="text-white">Prensado:</h4>
                <p className="text-white">Duración de prensado</p>
              </div>

              {/* BOTÓN */}
            </div>
          </div>
          {/* CAJA DE TEXTOS FINAL */}
        </div>
      </div>
    </div>
  );
}

export default DetalleRecta2;
