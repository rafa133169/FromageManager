import React from 'react'
import Dashboard from './Dashboard'
import ContenerdorQueso from '../Components/ContenerdorQueso'
function Quesos() {
  return (
    <>
        <div className="flex min-h-screen bg-[#F5E39E]">
        <div className="flex-1">
          <Dashboard/>
        </div>
        <div className="w-screen m-5 h-screen items-center flex-row">
          <ContenerdorQueso />
        </div>
      </div>
    </>
  )
}

export default Quesos