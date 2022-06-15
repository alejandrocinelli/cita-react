
import Pacientes from './Pacientes'

function ListadoPacientes({pacientes, setPacientee}) {
  
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {pacientes && pacientes.length  ? (

        <>
          <h2 className="font-black text-3xl text-center" >Listado Pacientes </h2>
            <p className="text-center mt-5 text-lg mb-10">Administra tus {""}
              <span className="text-indigo-600 font-bold ">pacientes y citas</span>
            </p>
            {pacientes.map((paciente)=>{
            return (
            <Pacientes
            key={paciente.id}
            paciente={paciente}
            setPacientee={setPacientee}
            />
            )
          } )}
        </>
      ) : (
        <>
            <h2 className="font-black text-3xl text-center" >No Hay Pacientes </h2>
            <p className="text-center mt-5 text-lg mb-10">Comienza a cargar pacientes {""}
            <span className="text-indigo-600 font-bold ">apareceran a continuacion</span>
            </p>
            </>
      )}
          
        </div>
  )
}
export default ListadoPacientes