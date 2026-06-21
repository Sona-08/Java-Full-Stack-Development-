import React from 'react'

export const Signup = () => {
    const handleClick = (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const con = document.getElementById("con").value;
    const dob = document.getElementById("dob").value;

    if (!name || !email || !pass || !con || !dob) {
        document.getElementById("res").textContent =
            "Please fill all required fields";
        document.getElementById("res").style.color = "red";
        return;
    }
    if (pass.length < 8) {
    document.getElementById("res").textContent =
        "Password must contain at least 8 characters";
    document.getElementById("res").style.color = "red";
    return;
    }

    if (pass !== con) {
        document.getElementById("con").style.border = "2px solid red";
        document.getElementById("res").textContent =
            "Password and Confirm Password do not match";
        return;
    }
    else{
        document.getElementById("res").textContent = "Sign Up Successful";
        document.getElementById("res").style.color = "green";

    }
    
};
    
  return (
    <div style={{textAlign:"center",marginTop:"50px",backgroundColor:"#f79fff"}}>
        <form>
        <input 
        type="text"
        id="name"
        placeholder="Enter your Name"
        title="User Name"
        required/>
        
        <br/><br/>
        <input
        type="number"
        id="phn"
        placeholder="Enter the phone number"
        tilte="Phone number"
        />
        <br/> <br/>

        <input
        type="email"
        id="email"
        placeholder="Enter the email id"
        title="Email id"
        required/>
        <br/><br/>

        <input
        type="password"
        id="pass"
        placeholder="Enter the password"
        title="Password"
        pattern="^(?=.*[0-9])(?=.*[!@#$%^&*]).{8,15}$"
        title="8-15 characters, at least 1 number and 1 special character"
        required/>
        <br/><br/>
        <input
        type="password"
        id="con"
        placeholder="Confirm Password"
        title="Confirm Password"
        onChange={handleClick}
        required/>
        <br/><br/>
        <input
        type="date"
        id="dob"
        placeholder="Enter the DOB"
        title="Date-Of-Birth"
        required/>
        <br/> <br/>
        <button onClick={handleClick}>Submit</button>
        <br/><br/>
        <h1 id="res"></h1>
        

    </form>
    </div>
  )
}