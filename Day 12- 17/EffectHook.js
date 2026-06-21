import React,{useState,useEffect} from 'react'

function EffectHook () {
  const [msg,setMsg]=useState("Loading...")
  useEffect(()=>{
    const timer=setTimeout( ()=>{
      setMsg("Hello! useEffect() is in Action.");},1000)
      return()=>clearTimeout(timer)
  },[])
  return (
    <div style={{textAlign:"center"}}>
      <h1>{msg}</h1>
    </div>
  )
}
export default EffectHook;
