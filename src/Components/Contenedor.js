import React from 'react';
import Card from './Card'

function ContenedorRecetas() {
  
  return (
    <>
        <div className="w-1000 bg-[#FBFFE2] flex flex-col items-center rounded-xl mt-1000">
        <div className="w-full bg-custom-orange flex justify-center text-center items-center rounded-t-xl mt-500">
          <p className="text-white text-3xl text-center font-bold">Recetas</p>
        </div>
        <div className="w-full h-900 items-center">
          <br/>
          <Card/>
        </div>
      </div>
    </>
  )
}

export default ContenedorRecetas