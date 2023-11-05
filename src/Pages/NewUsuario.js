import React from 'react'
import Dashboard from './Dashboard'
import FormularioUsuario from '../Components/FormularioUsuario'

function NewUsuario() {
  return (
    <>
        <div className="flex items-center bg-[#F5E39E] m-auto p-3">
        <div className="flex-1"> 
          <Dashboard/>
        </div>
        <div className="w-screen  m-4"> {/* Agrega un margen a la izquierda para separar los elementos */}
          <FormularioUsuario/>
          <button className=" rounded-2xl m-2 p-2 text-center text-xl text-white bg-[#9159D8]">
            Crear Usuario
          </button>
        </div> 

      </div>
    </>
  )
}

export default NewUsuario