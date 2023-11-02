import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Pages/Dashboard';
import AppNavbar from './Pages/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <AppNavbar />
        <Dashboard />
        <Footer/>
        <Routes>
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          {/* Otras rutas de tu aplicación */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
