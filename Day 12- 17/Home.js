import React from 'react';

export const Home = () => {
  return (
    <div
      style={{
        background: "#f79fff",
        textAlign: "center",
        padding: "80px 20px",
        minHeight: "70vh"
      }}
    >
      <h1 style={{ fontSize: "55px", fontWeight: "bold" }}>
        The web application <br />
        agency that helps you grow
      </h1>

      <p style={{ fontSize: "20px", marginTop: "20px" }}>
        We create modern web applications for startups,
        businesses, and enterprises.
      </p>

      <p style={{  marginTop: "10px" }}>
        Our UI/UX design expertise ensures the best experience
        for your customers and users.
      </p>
    </div>
  );
};