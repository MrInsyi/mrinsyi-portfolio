// src/components/Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <h5>Get in Touch</h5>
      <p className="mb-1">
        Email: <a href="mailto:mohdinsyirah1997@gmail.com" className="text-info">mohdinsyirah1997@gmail.com</a>
      </p>
      <p className="mb-1">
        GitHub: <a href="https://github.com/mrinsyi-ux" target="_blank" className="text-info">https://github.com/mrinsyi-ux</a>
      </p>
      <p className="mb-1">
        Call: <a href="mailto:mohdinsyirah1997@gmail.com" target="_blank" className="text-info">011199993245</a>
      </p>
      <p className="small mt-3 mb-0">
        © {new Date().getFullYear()} Mr Insyi — All rights reserved.
      </p>
    </footer>
  );
}
