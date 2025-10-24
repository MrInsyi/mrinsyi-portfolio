// src/components/Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <h5>Get in Touch</h5>
      <p className="mb-1">
        Email: <a href="mailto:mrinsyi@gmail.com" className="text-info">mrinsyi@gmail.com</a>
      </p>
      <p className="mb-1">
        GitHub: <a href="https://github.com/mrinsyi" target="_blank" className="text-info">github.com/mrinsyi</a>
      </p>
      <p className="small mt-3 mb-0">
        © {new Date().getFullYear()} Mr Insyi — All rights reserved.
      </p>
    </footer>
  );
}
