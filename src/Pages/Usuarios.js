import React from 'react'
import Dashboard from './Dashboard'
import ContenedorUsuario from '../Components/ContenedorUsuario'

function Usuarios() {
  return (
    <>
    <div className="flex h-screen bg-[#F5E39E]">
        <div className="flex-1">
          <Dashboard />
        </div>
        <div className="w-screen m-5 h-screen items-center flex-row">
          <ContenedorUsuario />
        </div>
      </div>
    </>
  )
}

export default Usuarios