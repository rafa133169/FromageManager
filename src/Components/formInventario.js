import React from "react";
import Elemento from "./Elemento";
const RectanguloInventario = ({title}) => {
  return (
    <>
      <div className="w-1000 h-1200 bg-white-padd flex flex-col items-center rounded-xl mt-1000">
        <div className="w-full h-300 bg-custom-orange flex justify-center items-center rounded-t-xl mt-500">
          <p className="text-white text-3xl font-bold">{title}</p>
        </div>
        <div className="w-full h-900 mt-5">
          <div className="mt-5 mx-5">
            <Elemento itemTexto="Queso"></Elemento>
          </div>
        </div>
      </div>
    </>
  );
};

export default RectanguloInventario;
