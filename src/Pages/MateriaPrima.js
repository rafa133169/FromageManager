import React from "react";
import Dashboard from "./Dashboard";
import FormMateria from "../Components/formMateriaprima";

function MateriaPrima() {
  return (
    <>
      <div className="flex">
        <div className="w-1/2">
          <Dashboard></Dashboard>
        </div>
        <div className="w-3/4 flex mt-10 mr-80">
          <div className="w-full">
            <FormMateria title="Materia prima"></FormMateria>
          </div>
        </div>
      </div>
    </>
  );
}

export default MateriaPrima;
