import React from "react";
import { Link } from "react-router-dom";
import cheeseLoginImage from '../img/cheeseLogin.png';

export default function Login() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">

      <div className="flex flex-col justify-center bg-[#f5e39b]">
        <div>

        </div>
        <form className="max-w-[400px] w-full mx-auto p-8 px-8 rounded-lg bg-white">
          <h2 className="text-3xl text-center font-bold">Iniciar de sesion</h2>
          <div className="flex flex-col py-2">
            <input
              className=" bg-white mt-2 p-2 border border-black rounded-lg"
              type="text"
              placeholder="email"
            ></input>
          </div>
          <div className="flex flex-col py-2">
            <input
              className=" bg-white mt-2 p-2 border border-black rounded-lg"
              type="Password"
              placeholder="password"
            ></input>
          </div>
          <div className="flex flex-col py-2">
            <input
              className=" bg-white mt-2 p-2 border border-black rounded-lg"
              type="Password"
              placeholder="password"
            ></input>
          </div>
          <div className="mb-6 text-center">
            <Link to="/recetas" className="link-unstyled">
              <button className="rounded-lg p-3 text-white bg-[#9159D8]">Ingresar</button>
            </Link>
          </div>
        </form>
      </div>
      <div className="hidden sm:block">
      <img className="w-full h-full object-cover" src={cheeseLoginImage} alt="Cheese Login" />
    </div>
    </div>
  );
}