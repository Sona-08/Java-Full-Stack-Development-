import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./Home";
import { LoginValidation } from "./LoginValidation";
import { Signup } from "./Signup";

export const RouteforLogin = () => {
  return (
    <BrowserRouter>
      <div style={{ textAlign: "center", marginTop: "50px", backgroundColor: "#f79fff" }}>
        <h1>Login Page</h1>

        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/login">Login</Link> |{" "}
          <Link to="/signup">Signup</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginValidation />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};