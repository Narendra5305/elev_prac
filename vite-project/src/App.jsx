import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/navbar'
import { ProductPage } from './pages/productPage'



function App() {
  

  return (
    <>
      <Navbar/>
      <ProductPage/>
      
    </>
  )
}

export default App
