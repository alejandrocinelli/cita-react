import React from 'react'
import { useState } from 'react'
import Formulario from './componentes/Formulario'
import Header from './componentes/Header'
import ListadoPacientes from './componentes/ListadoPacientes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container mx-auto mt-10'>
    <Header />
    <div className='mt-12 md:flex'>
    <Formulario/>
    <ListadoPacientes/>
    </div>
   
    </div>
  )
}

export default App
