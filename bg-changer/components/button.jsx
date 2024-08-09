import React from 'react'
import { useState } from 'react'
const Button = ({bgcolor, setColor}) => {
  
  return (
    <button onClick={()=>setColor(bgcolor)} className='px-4 py-1 rounded-2xl text-white shadow-lg' style={{backgroundColor:bgcolor}}>{bgcolor}</button>
  )
}

export default Button
