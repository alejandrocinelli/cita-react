import {useState, useEffect} from 'react'
import Error from './Error'

function Formulario({setPacientes,Pacientes,pacientee, setPacientee}) {

    const [nombre, setNombre] = useState("")
    const [dueño, setDueño] = useState("")
    const [email, setEmail] = useState("")      
    const [fecha,setFecha] = useState("")   
    const [sintomas, setSintomas] = useState("")
    const [error, setError] = useState(false)

    useEffect(() => {
        //* con Object.keys puedo saber si el objeto pacientee esta vacio o no */
      if(Object.keys(pacientee).length>0){
        setNombre(pacientee.nombre)
        setDueño(pacientee.dueño)
        setEmail(pacientee.email)
        setFecha(pacientee.fecha)
        setSintomas(pacientee.sintomas)
      }
    }, [pacientee])
    


    const generarID = () => {

        const random = Math.random().toString(36).substring(2) 
        const date = Date.now().toString(36)
        return random + date
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //console.log("Enviando Form")
        // validar formulario 
        if([nombre,dueño,email,fecha,sintomas].includes("")){
            //console.log("Faltan datos")
            setError(true)
    }
    else {
       // console.log("todo en orden")
        setError(false)

        const objetoPaciente = {
            nombre,
            dueño,
            email,
            fecha,
            sintomas
            
        }
        

        if(pacientee.id){  // para editar un paciente

          objetoPaciente.id = pacientee.id
          const pacientesActualizados = Pacientes.map(pacienteEnState => pacienteEnState.id === objetoPaciente.id ? objetoPaciente : pacienteEnState)
          setPacientes(pacientesActualizados)
          setPacientee({})

        }

        else {   // nuevo paciente
          
          objetoPaciente.id = generarID() // al objetopaciente le genera un id para mandar a lista paciente y que no se repita, antes lo hacia en el objeto pero esto me sirve para editar
          setPacientes([...Pacientes,objetoPaciente])

        }
     
        // re inicio el form

        setDueño("")
        setEmail("")
        setFecha("")
        setNombre("")
        setSintomas("")
        
    }
}

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">
        Seguimiento Pacientes{" "}
      </h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añasde Pacientes y {""}
        <span className="text-indigo-600 font-bold"> Administralos </span>
      </p>
      
      <form 
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg py-5 px-5 mb-10 mx-5">
        <div className="mb-3">
    
        <div>
            <label className="block text-gray-700">Nombre Mascota</label>
            <input type="text"
            placeholder="Nombre de mascota"
            value={nombre} 
            onChange={e => setNombre(e.target.value)}
            className="border-2 w-full p-2 mt-2  placeholder-gray-400 rounded-md"/>
        </div>
   
    </div>

    <div className="mb-3">
  
        <div>
            <label className="block text-gray-700  ">Nombre del Dueño</label>
            <input type="text"
            placeholder="Nombre del Dueño"
            value={dueño} 
            onChange={e => setDueño(e.target.value)}
            className="border-2 p-2 mt-2 w-full placeholder-gray-400 rounded-md"/>
        </div>
   
    </div>
    <div className="mb-3">
    
        <div>
            <label className="block text-gray-700  ">e-mail</label>
            <input type="email"
            placeholder="e-mail contacto"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="border-2 p-2 mt-2 w-full placeholder-gray-400 rounded-md"/>
        </div>
   
    </div>

    <div className="mb-3">
    
        <div>
            <label className="block text-gray-700  ">Alta</label>
            <input type="date"
            value={fecha}
            onChange={e => setFecha(e.target.value)}
            className="border-2 p-2 mt-2 w-full placeholder-gray-400 rounded-md"/>
        </div>
    
    </div>

    <div className="mb-3">
    
        <div>
            <label className="block text-gray-700  ">Sintomas</label>
           <textarea id="sintomas" 
                     placeholder="Describe los sintomas" 
                     className="w-full mt-2"
                     value={sintomas}
                     onChange={e => setSintomas(e.target.value)}>
                        
           </textarea>
        </div> 
        </div>
        <input type="submit"
        value={pacientee.id ? "Editar Paciente" : "Agregar Paciente"}
        className="text-indigo-600 bg-slate-300 p-3 w-full font-bold uppercase hover:bg-slate-400 rounded-md" />
        {error ? <Error mensaje={'Todo los campos son obligatorios'}/> : null}
    </form>
    </div>

   
  );
}
export default Formulario;
