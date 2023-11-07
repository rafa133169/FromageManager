import React, { useState, useEffect } from "react";
import axios from "axios";

function Card() {
  const [receta, setReceta] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4001/recetas/")
      .then((respuesta) => {
        setReceta(respuesta.data.Resultado);
      })
      .catch((error) => console.log(error));
      
  }, []);
  return (
    <>
    <div className="grid grid-cols-3 gap-4">
    {receta.map((laReceta) =>(
      <div className="card">
      <img
        className="w-2px h-48"
        src={laReceta.imagen}
        alt="Imagen de la tarjeta"
      />
      <div className="card-body">
        <div className="font-bold text-lg mb-2">{laReceta.queso}</div>
        <p className="text-gray-700 text-sm">
          {`Tiempo de cuajado: ${laReceta.tiempo_cuajado} minutos`}<br/>
          {`Tiempo de maduracion: ${laReceta.tiempo_cuajado} minutos`}<br/>
          {`Cantidad de sal: ${laReceta.cantidad_sal} Gramos`}<br/>
          {`Prensado: ${laReceta.prensado} Veces`}<br/>
          {`Tiempo Total de elaboracion: ${laReceta.tiempo_total_elaboracion} minutos`}<br/>
          {`Valoracion: ${laReceta.valoracion_queso}/10`}<br/>
        </p>
      </div>
      <div className="px-4 py-2">
        <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2">
          {laReceta.nombre_materia}
        </span>
        
       
      </div>
    </div>
    

    ))}
      </div>
    </>
  );
}

export default Card;
