// src/components/Header.jsx
import React from "react";

export default function Header() {
  return (
    <header
      className="d-flex flex-column justify-content-center align-items-center text-white text-center"
      style={{
        backgroundColor: "#1e1e1e",
        height: "100vh", // ✅ full screen height
        padding: "2rem",
      }}
    >
      <img
        src="/profile.jpg"
        alt="Profile"
        className="rounded-circle mb-4 shadow"
        width="150"
        height="150"
      />
      <h1 className="fw-bold display-4">Mr Insyi</h1>
      <p className="lead mb-1">Gold Dealer | Engineer | Developer</p>
      <p className="text-secondary">Penang, Malaysia</p>

      {/* Optional small icon or label */}
      <span className="mt-3 small text-light opacity-50">
        🧑‍💻 Personal Profile
      </span>
    </header>
  );
}
