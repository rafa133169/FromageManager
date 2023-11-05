import React from 'react'
import RectanguloNaranja from './Elemento'


function ContenedorUsuario() {
  return (
    <>
    <div className="w-1000 bg-[#FBFFE2] flex flex-col items-center rounded-xl mt-1000">
        <div className="w-full bg-custom-orange flex justify-center text-center items-center rounded-t-xl mt-500">
          <p className="text-white text-3xl text-center font-bold">Usuarios</p>
        </div>
        <div className="w-full h-900 p-4 items-center">
         <RectanguloNaranja/>
        </div>
      </div>
    </>
  )
}

export default ContenedorUsuario