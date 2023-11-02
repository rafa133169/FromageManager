import React, { useState } from "react";
import Dashboard from './Dashboard'

const InventoryForm = () => {
  const [quantities, setQuantities] = useState([0, 0, 0, 0, 0]);

  const handleIncrement = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const handleDecrement = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 0) {
      newQuantities[index] -= 1;
      setQuantities(newQuantities);
    }
  };

  const handleDeleteItem = (index) => {
    const newQuantities = [...quantities];
    newQuantities.splice(index, 1); // Elimina el elemento en el índice especificado
    setQuantities(newQuantities);
  };

  return (
    <>
    <Dashboard></Dashboard>
     <div className="bg-white-padd p-5 ">
      <div className=" text-white text-center p-5 bg-custom-orange rounded border-10 m-3 ">
        <h1 className="text-3xl font-bold">Inventario</h1>
      </div>
      <div className="w-900 h-1000 p-1 m-8">
        {quantities.map((quantity, index) => (
          <div
            key={index}
            className="w-full h-16 flex justify-between items-center bg-custom-orange mb-4 rounded border-20 relative"
          >
            <span className="">Queso{}</span>
            <div className="flex items-center space-x-4 p-10">
              <button
                onClick={() => handleIncrement(index)}
                className="w-12 h-12 bg-custom-orange text-white font-bold text-2xl flex items-center justify-center rounded-full border border-white"
              >
                +
              </button>
              <span className="text-2xl font-bold text-white">{quantity}</span>
              <button
                onClick={() => handleDecrement(index)}
                className="w-12 h-12 bg-custom-orange text-white font-bold text-2xl flex items-center justify-center rounded-full border border-white"
              >
                -
              </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="white"
                class="bi bi-trash3-fill"
                viewBox="0 0 16 16"
              >
                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
   
  );
};

export default InventoryForm;
