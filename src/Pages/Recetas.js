import React from 'react'
import AppNavbar from './Navbar'
import Dashboard from './Dashboard'
import Footer from '../Components/Footer'

function Recetas() {
  return (
    <>
    <div >
    <AppNavbar />
    </div>
    <Dashboard/>
   
    <div className=''>
      <Footer/>
    </div>
    
    </>
    
  )
}

export default Recetas