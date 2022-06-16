

function Pacientes({paciente,setPacientee,deletePaciente}) {

  return (
    <div className="mx-5 my-5 px-5 py-10 bg-white shadow-md rounded-l">
            <p className="font-bold mb-3 text-gray-700 uppercase"> Nombre: {""}
                <span className="font-normal normal-case">{paciente.nombre}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase"> Dueño: {""}
                <span className="font-normal normal-case">{paciente.dueño}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase"> Email: {""}
                <span className="font-normal normal-case">{paciente.email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase"> Fecha alta: {""}
                <span className="font-normal normal-case">{paciente.fecha}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase"> Sintomas: {""}
                <span className="font-normal normal-case">{paciente.sintomas}</span>
            </p>

            <div>
                <button type="button"
                onClick={()=>setPacientee(paciente)}
                className="py-2 px-10  bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-md uppercase"
                >Editar</button>

               <button type="button"
               onClick={()=>deletePaciente(paciente.id)}
               className="py-2 px-10 ml-1 bg-red-500 hover:bg-red-700 text-white font-bold rounded-lg uppercase"
               > Eliminar
               </button>
            </div>
            
        </div>
  )
}
export default Pacientes