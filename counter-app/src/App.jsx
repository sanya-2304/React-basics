import { useState } from 'react'

import './App.css'

function App() {
  let [counter, setCounter]=useState(15);
  // let counter=50;
  const addVal=()=>{
    if(counter<30)
    setCounter(counter+1)
    console.log('clicked ',{counter})
  }
  const remVal=()=>{
    if(counter>0)
    setCounter(counter-1)
    console.log('clicked ',{counter})
  }

  return (
    <>
    <h1>Counter App</h1>
    
    <button onClick={addVal}>AddVal {counter} </button> <h2>Counter val: {counter}</h2>
    <button onClick={remVal}>remVal: {counter} </button>
    </>
  )
}

export default App
