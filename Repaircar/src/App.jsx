import { useState } from 'react'
import Header from './Components/Header'
import Slide from './Components/Slide'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Vehicle from './Pages/Vehicle'
import Data from './Data/Data'


function App() {
 

  return (
    <>
     <Home/>
     <Header/>
     <Slide/>
     <About/>
     <Contact/>
     <Vehicle Data={Data}/>
     
    </>
  )
}

export default App
