import React, { useState } from 'react'

export const LoginHook = () => {
    const [user,setUser]=useState("");
    const [pswd,setPswd]=useState("");
    const [resultUser,setResultUser]=useState("");
    const [resultPswd,setResultPswd]=useState("");

    const myuser="Sona";
    const myps="sona@100";
    const handleClick =()=>{
        setResultUser(user);
        setResultPswd(pswd);
        if(user === myuser && pswd===myps){
            alert("Login Successful")
            document.getElementById("res").textContent="Login Successful  "

        }else{
            alert("Login Failed")
            document.getElementById("res").textContent="Login Failed  "
        }
    };

  return (
    <div style={{textAlign:"center",marginTop:"50px",backgroundColor:"pink" ,color:"blueviolet" }}>
        <input color='Maroon' 
        type="text"
        placeholder="Username"
        value={user}
        onChange={(e)=>setUser(e.target.value)}/>
        <br/> <br/>
        <input 
        type="password"
        placeholder="Password"
        value={pswd}
        onChange={(e)=>setPswd(e.target.value)}/>
        <br/> <br/>
        <button style={{color:"Maroon"}}onClick={handleClick}>Login</button>
        <h1 id="res" ></h1>
        {/* <h1> {resultPswd}</h1> */}
    </div>
  )
}