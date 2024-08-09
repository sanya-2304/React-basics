import { useState } from 'react'
import './App.css'
import Button from '../components/button'

function App() {
 const [color, setColor]=useState("pink")
  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
    <div className="fixed flex  flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex  flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl border-4 border-black">
            <Button bgcolor="red" setColor={setColor}/>
            <Button bgcolor="blue"setColor={setColor}/>
            <Button bgcolor="purple"setColor={setColor}/>
            <Button bgcolor="green" setColor={setColor}/>
            <Button bgcolor="orange"setColor={setColor}/>
            <Button bgcolor="grey"setColor={setColor}/>
            <Button bgcolor="cyan"setColor={setColor}/>

          </div>
        </div>
      </div>
  )
}

export default App
