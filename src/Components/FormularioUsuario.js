import React from 'react'

function FormularioUsuario() {
  return (
    <>
    <table className="w-full text-left p-3 m-2 bg-[#9159D8] border rounded-xl ">
        <tr className="gap-4">
          <td className="text-xl">
            <div className="mb-4 mt-4 ml-10">
              <label className="text-white ml-3" htmlFor="nombre">
                Nombre del personal:
              </label>
              <input
                id="nombre_usuario"
                type="text"
                className="mt-2 flow-root w-[90%] p-3 rounded-xl  "
                placeholder="Nombre del personal"
                name="nombre_usuario"
                onChange={"nombre_usuario"}
              />
            </div>
          </td>
          <td className="text-xl">
            <div className="mb-4 mt-4">
              <label className="text-white ml-3" htmlFor="descrpcion">
                Matricula:
              </label>
              <input
                id="matricula_usuario"
                type="text"
                className="mt-2 flow-root w-[90%] p-3 rounded-xl  "
                placeholder="matricula"
                name="matricula_usuario"
                onChange={"matricula_usuario"}
              />
            </div>
          </td>
        </tr>
        <tr>
          <td className="text-xl">
            <div className="mb-4 ml-10">
              <label className="text-white ml-3" htmlFor="nombre">
                Contraseña:
              </label>
              <input
                id="contasena_usuario"
                type="contasena_usuario"
                className="mt-2 flow-root w-[90%] p-3 rounded-xl  "
                placeholder="Contraseña del usuario"
                name="contasena"
                onChange={"Contasena"}
              />
            </div>
          </td>
          <td className="text-xl">
            <div className="mb-4">
              <label className="text-white ml-3" htmlFor="descrpcion">
                Tipo de usuario:
              </label>
              <input
                id="tipo_usuario"
                type="tipo_usuario"
                className="mt-2 flow-root w-[90%] p-3 rounded-xl  "
                placeholder="Tipo de usuario"
                name="tipo_usuario"
                onChange={"tipo_usuario"}
              />
            </div>
          </td>
        </tr>
        
      </table>
    </>
  )
}

export default FormularioUsuario