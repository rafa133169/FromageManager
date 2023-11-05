import React from 'react'
import Card from './Card'

function ContenedorRecetas() {
  return (
    <>
        <div className="w-1000  bg-white-padd flex flex-col items-center rounded-xl mt-1000">
        <div className="w-full bg-custom-orange flex justify-center items-center rounded-t-xl mt-500">
          <p className="text-white text-3xl font-bold">Recetas</p>
        </div>
        <div className="w-full h-900 mt-5 items-center">
          <Card/>
        </div>
      </div>
    </>
  )
}

export default ContenedorRecetas