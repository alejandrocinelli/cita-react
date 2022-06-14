import React from 'react'
import { useState } from 'react'
import Formulario from './componentes/Formulario'
import Header from './componentes/Header'
import ListadoPacientes from './componentes/ListadoPacientes'


function App() {
  const [Pacientes,setPacientes] = useState([]);

  
   
  return (
    <div className='container mx-auto mt-10'>
    <Header/>
    <div className='mt-12 md:flex'>
    <Formulario Pacientes={Pacientes} setPacientes={setPacientes} />
    <ListadoPacientes pacientes={Pacientes}/>
    </div>
   
    </div>
  )
}

export default App
