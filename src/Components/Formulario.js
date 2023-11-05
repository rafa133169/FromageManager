import React from "react";

function Formulario() {
  return (
    <>
      <table className="w-full text-left p-3 m-2 bg-[#9159D8] border rounded-xl ">
        <tr className="gap-4">
          <td className="text-xl">
            <div className="mb-4 mt-4 ml-10">
              <label className="text-white ml-3" htmlFor="nombre">
                Queso:
              </label>
              <input
                id="queso"
                type="text"
                className="mt-2 flow-root w-[90%] p-3 rounded-xl  "
                placeholder="Nombre del queso en preparación"
                name="Queso"
                onChange={"Queso"}
              />
            </div>
          </td>
          <td className="text-xl">
            <div className="sm:col-span-3">
              <label className="text-white ml-3" htmlFor="descrpcion">
                Ingrediente:
              </label>
              <div className="mt-2">
              <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
              <option>opcion 1</option>
              <option>opcion 2</option>
              <option>opcion 3</option>
            </select>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td className="text-xl">
            <div className="mb-4 ml-10">
              <label className="text-white ml-3" htmlFor="nombre">
                Tiempo de cuajado:
              </label>
              <input
                id="cuajado"
                type="text"
                className="mt-2 flow-root w-[90%] p-3 rounded-xl  "
                placeholder="Tiempo de cuajado"
                name="Cuajulado"
                onChange={"Cuajulado"}
              />
            </div>
          </td>
          <td className="text-xl">
            <div className="mb-4">
              <label className="text-white ml-3" htmlFor="descrpcion">
                Tiempo de maduracion"
              </label>
              <input
                id="maduracion"
                type="maduracion"
                className="mt-2 flow-root w-[90%] p-3 rounded-xl  "
                placeholder="Tiempo de maduracion"
                name="maduracion"
                onChange={"Tiempo de maduracion"}
              />
            </div>
          </td>
        </tr>
        <tr className="">
          <td className="text-xl">
            <div className="mb-4 ml-10">
              <label className="text-white ml-3" htmlFor="descrpcion">
                Cantidad de sal:
              </label>
              <table>
                <tr>
                  <td>
                    <input
                      id="sal"
                      type="sal"
                      className="mt-2 flow-root w-[90%] p-3 rounded-xl  "
                      placeholder="sal"
                      name="sal"
                      onChange={"sal"}
                    />
                  </td>
                  <td>
                    <p className="text-white">gr</p>
                  </td>
                </tr>
              </table>
            </div>
          </td>
          <td className="text-xl">
            <div className="mb-4">
              <label className="text-white ml-3" htmlFor="descrpcion">
                Prensado:
              </label>

              <input
                id="prensado"
                type="text"
                className="mt-2 flow-root w-[90%] p-3 rounded-xl  "
                placeholder="¿Cada cuántas presando?"
                name="presando"
                onChange={"presando"}
              />
            </div>
          </td>
        </tr>
        <tr className="">
          <td className="text-xl">
            <div className="mb-4 ml-10">
              <label className="text-white ml-3" htmlFor="descrpcion">
                Tiempo en total de elaboración:
              </label>

              <input
                id="elaboracion"
                type="elaboracion"
                className="mt-2 flow-root w-[90%] p-3 rounded-xl  "
                placeholder="Tiempo total de elaboración"
                name="elaboracion"
                onChange={"elaboracion"}
              />
            </div>
          </td>
          <td className="text-xl">
            <div className="mb-4">
              <label className="text-white ml-3" htmlFor="descrpcion">
                Valoracion del queso:
              </label>

              <input
                id="valoracion"
                type="text"
                className="mt-2 flow-root w-[90%] p-3 rounded-xl  "
                placeholder="Estatus del queso"
                name="valoracion"
                onChange={"valoracion"}
              />
            </div>
          </td>
        </tr>
      </table>
    </>
  );
}

export default Formulario;
