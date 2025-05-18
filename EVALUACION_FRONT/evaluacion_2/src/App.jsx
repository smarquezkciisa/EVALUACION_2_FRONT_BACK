import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Carrusel from './components/Carrusel'
import Logo from './components/logo'
import Parrafo1 from './components/Parrafo1'
import Formulario from './components/Formulario'

function App() {
return ( 
    <>
      <Header />
      <Logo />
      <Carrusel />
      <Parrafo1 />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Formulario />
      <Footer />
    </>
  )
}

export default App
