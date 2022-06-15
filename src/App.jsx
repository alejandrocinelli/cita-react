import React from 'react'
import { useState } from 'react'
import Formulario from './componentes/Formulario'
import Header from './componentes/Header'
import ListadoPacientes from './componentes/ListadoPacientes'


function App() {

  const [Pacientes,setPacientes] = useState([]);
  const [pacientee,setPacientee] = useState({}) // para editar el paciente que selecciono desde Listado de Pacientes

   
  return (
    <div className='container mx-auto mt-10'>
    <Header/>
    <div className='mt-12 md:flex'>
    <Formulario Pacientes={Pacientes} setPacientes={setPacientes} pacientee={pacientee} />{/* con esto mando pacientee que quiero editar*/}
    <ListadoPacientes 
    pacientes={Pacientes}
    setPacientee={setPacientee}
    /> 
    </div>
  
    </div>
  )
}

export default App
