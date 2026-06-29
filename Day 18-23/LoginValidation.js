import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginValidation = () => {
  const Username = "mybatch";
  const UserPass = "happy@123";
  const navigate = useNavigate();

  const handleClick = () => {
    const name = document.getElementById("userid").value;
    const password = document.getElementById("userpass").value;

    if (Username === name && UserPass === password) {
      //alert("Login Success");
      navigate("/task"); 
    } else {
      alert("Login Failed");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px"}}>
      <label>Enter Username:</label>
      <input type="text" id="userid" />
      <br /><br />

      <label>Enter Password:</label>
      <input type="password" id="userpass" />
      <br /><br />

      <button onClick={handleClick}>Login</button>
    </div>
  );
};
