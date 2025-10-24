// src/components/Header.jsx
import React from "react";

export default function Header() {
  return (
    <header className="bg-dark text-white text-center py-5">
      <img
        src="/profile.jpg"
        alt="Profile"
        className="rounded-circle mb-3"
        width="120"
        height="120"
      />
      <h1 className="fw-bold">Mr Insyi</h1>
      <p className="lead mb-1">Gold Dealer | Engineer | Developer</p>
      <p className="small text-secondary">Penang, Malaysia</p>
    </header>
  );
}
