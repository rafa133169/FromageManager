import React from 'react'

function FormularioMateriaPrima() {
  return (
    <>
        <table className="w-full text-left p-3 m-2 bg-[#9159D8] border rounded-xl ">
        <tr className="gap-4">
          <td className="text-xl">
            <div className="mb-4 mt-4 ml-10">
              <label className="text-white ml-3" htmlFor="nombre">
                Nombre del ingrediente:
              </label>
              <input
                id="nombre_ingrediente"
                type="text"
                className="mt-2 flow-root w-[90%] p-3 rounded-xl  "
                placeholder="Nombre del ingrediente"
                name="nombre_ingrediente"
                onChange={"nombre_ingrediente"}
              />
            </div>
          </td>
          <td className="text-xl">
            <div className="mb-4 mt-4">
              <label className="text-white ml-3" htmlFor="descrpcion">
                Cantidad inicial de ingreso:
              </label>
              <input
                id="cantidad_ingrediente"
                type="text"
                className="mt-2 flow-root w-[90%] p-3 rounded-xl  "
                placeholder="Cantidad"
                name="cantidad_ingrediente"
                onChange={"cantidad_ingrediente"}
              />
            </div>
          </td>
        </tr>
        <tr>
          <td className="text-xl">
            <div className="mb-4 ml-10">
              <label className="text-white ml-3" htmlFor="nombre">
                Estatus:
              </label>
              <input
                id="estatus_ingrediente"
                type="estatus_ingrediente"
                className="mt-2 flow-root w-[90%] p-3 rounded-xl  "
                placeholder="Estatus del ingrediente"
                name="estatus"
                onChange={"estatus"}
              />
            </div>
          </td>
          <td className="text-xl">
            <div className="mb-4">
              <label className="text-white ml-3" htmlFor="descrpcion">
                Tipo de ingrediente:
              </label>
              <input
                id="tipo_ingrediente"
                type="tipo_ingrediente"
                className="mt-2 flow-root w-[90%] p-3 rounded-xl  "
                placeholder="Tipo de ingrediente"
                name="tipo_ingrediente"
                onChange={"tipo_ingrediente"}
              />
            </div>
          </td>
        </tr>
        
      </table>
    </>
  )
}

export default FormularioMateriaPrima