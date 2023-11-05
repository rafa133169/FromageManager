import React from "react";
import Elemento from "./ElementoInventario";
const RectanguloInventario = () => {
  return (
    <>
      <div className="w-1000 bg-[#FBFFE2] flex flex-col items-center rounded-xl mt-1000">
        <div className="w-full h-300 bg-custom-orange flex justify-center items-center rounded-t-xl mt-500">
          <p className="text-white text-3xl font-bold">Inventario</p>
        </div>
        <div className="w-full h-900 ">
          <div className="mt-5 mx-5">
            <Elemento title="Oaxaca"></Elemento>
          </div>
          
		  
        </div>
      </div>
    </>
  );
};

export default RectanguloInventario;
