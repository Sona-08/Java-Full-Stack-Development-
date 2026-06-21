import React from 'react';
export const LoginValidation = () => {
  const Username = "sona";
  const UserPass = "sona@100";
  const handleClick = () => {
    const name = document.getElementById("userid").value;
    const password = document.getElementById("userpass").value;

    if (Username === name && UserPass === password) {
      document.getElementById("res").textContent = "Login Success";
    } else {
        
      document.getElementById("res").textContent = "Login Failed";
    }
  };
  return (
    <div style={{textAlign:"center",marginTop:"50px",backgroundColor:"#f79fff"}}>
      <label>Enter Username:</label>
      <input type="text" id="userid" />
      <br />
      <br />

      <label>Enter Password:</label>
      <input type="password" id="userpass" />
      <br />
      <br />

      <button onClick={handleClick}>Login</button>

      <h2 id="res"></h2>
    </div>
  );
};