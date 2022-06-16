import React from 'react'
import { useState, useEffect } from 'react'
import Formulario from './componentes/Formulario'
import Header from './componentes/Header'
import ListadoPacientes from './componentes/ListadoPacientes'


function App() {

  const [Pacientes,setPacientes] = useState([]);
  const [pacientee,setPacientee] = useState({}) // para editar el paciente que selecciono desde Listado de Pacientes

useEffect(() => {
  const obtenerLs = () =>{
    const ObtenerLocalStorage = JSON.parse(localStorage.getItem('pacientesLocalstorage')) ?? [];
    setPacientes(ObtenerLocalStorage)
  }
  obtenerLs()
}, []);



  useEffect(() => {
      localStorage.setItem('pacientesLocalstorage', JSON.stringify(Pacientes)) 
  }, [Pacientes])
  
  const deletePaciente = (id) => {

      //console.log("eliminando paciente con id: " + id)
      
      const newPacientesFilter = Pacientes.filter(paciente => paciente.id !== id)
      setPacientes(newPacientesFilter)
  }
   
  return (
    <div className='container mx-auto mt-10'>
    <Header/>
    <div className='mt-12 md:flex'>
    <Formulario Pacientes={Pacientes} setPacientes={setPacientes} pacientee={pacientee} setPacientee={setPacientee} />{/* con esto mando pacientee que quiero editar*/}
    <ListadoPacientes 
    pacientes={Pacientes}
    setPacientee={setPacientee}
    deletePaciente={deletePaciente}
    /> 
    </div>
  
    </div>
  )
}

export default App
