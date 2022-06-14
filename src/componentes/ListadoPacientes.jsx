import Pacientes from './Pacientes'

function ListadoPacientes({pacientes}) {
  console.log(pacientes)
  

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

        <h2 className="font-black text-3xl text-center" >Listado Pacientes </h2>
        <p className="text-center mt-5 text-lg mb-10">Administra tus {""}
            <span className="text-indigo-600 font-bold ">pacientes y citas</span>
        </p>
         
     {pacientes.map((paciente)=>{
      return (
        <Pacientes
         paciente={paciente}
        />
      )
     } )}
     
          
        </div>
  )
}
export default ListadoPacientes