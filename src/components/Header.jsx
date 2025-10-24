// src/components/Header.jsx
import React from "react";

export default function Header() {
  return (
    <header
      className="container-fluid bg-dark text-white text-center d-flex flex-column justify-content-center align-items-center"
      style={{
        minHeight: "30vh",      // nicely tall (80% of screen height)
        width: "100%",          // full width without overflow
        margin: 0,              // remove unwanted margins
        padding: "3rem 1rem",   // breathing space for content
        overflowX: "hidden",    // prevent horizontal scrollbar
      }}
    >
      <img
        src="/mypicture.png"
        alt="Profile"
        className="rounded-circle mb-4 shadow"
        width="150"
        height="150"
      />
      <h1 className="fw-bold display-4">Mohd Insyirah Bin kamaruzaman</h1>
      <p className="lead mb-1">Automation | Network | Software</p>
      <p className="text-secondary">Penang, Malaysia</p>
      <small className="text-light opacity-50 mt-3">🧑‍💻 My Personal profile</small>
    </header>
  );
}
