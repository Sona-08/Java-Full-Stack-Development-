import React ,{useState} from 'react'

export const Front_Backend = () => {
    const [msg,setMsg] =useState("");
    function getMessage(){
        fetch("http://localhost:8080/hello")
        .then((res)=>res.text())
        .then((data)=> setMsg(data));
    }
  return (
    <div style={{textAlign:"center",marginTop:"40px"}}>
        <h1>This is "REACT FRONT END"</h1>
        <button onClick={getMessage}>Get Backend Message</button>
        <p>Message from backend:{msg}</p>
    </div>
  )
}