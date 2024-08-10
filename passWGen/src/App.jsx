import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [len, setLen]=useState(8);
  const [numAllow, setnumAllow]=useState(false);
  const [charAllow, setcharAllow]=useState(false);
  const [inputPass, setinputPass]=useState("");
  //useRef hook
  const passRef=useRef(null);
  const passWgen=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numAllow) str+="0123456789"
    if(charAllow) str+="!@#$%^&*+-_"
      for (let i = 1; i <= len; i++) {
          let char=Math.floor(Math.random()*str.length+1)
          pass+=str.charAt(char)  
      }
      setinputPass(pass)
  }, [len, numAllow, charAllow, setinputPass])
  // passWgen() // cant call it like this
  const copyPassClip=useCallback(()=>{
    passRef.current?.select();
    passRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(inputPass)
  },[inputPass])
  useEffect(()=>{
    passWgen()
  },[len, numAllow, charAllow, passWgen])
  return ( 
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 m-10 text-orange-400 bg-slate-800'>
      <h1 className='text-white text-center m-3 '>Random password Generator  </h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={inputPass} className='outline-none w-full py-1 px-3' placeholder='Tap to generate password' readOnly red={passRef}/>
        <button onClick={copyPassClip} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex-items-center gap-x-1'>
          <input type="range" min={6} max={13} value={len} className='cursor-pointer' onChange={(e)=>{setLen(e.target.value)}}/>
          <label className='mx-1'>PassLen: {len}</label>
        </div>
        <div className='flex-items-center gap-x-1'>
        <input type="checkbox" defaultChecked={numAllow} id='numIp' onChange={()=>{setnumAllow((prev)=>!prev)}} className='mx-1' /> <label className='text-white'>Numbers</label>
        </div>
        <div className='flex-items-center gap-x-1'>
        <input type="checkbox" defaultChecked={charAllow} id='charIp' onChange={()=>setcharAllow((prev)=>!prev)} className='mx-1' /> <label className='text-white'>Characters</label>
        </div>

      </div>
    </div>
  )
}

export default App
