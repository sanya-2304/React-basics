import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Prop1 from './components/prop1'
function App() {


  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tail Test</h1>
      <Prop1 username="Sanya Doda"/>
      <Prop1 username="Meenakshi Doda"/>
    </>
  )
}

export default App
