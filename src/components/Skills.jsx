// src/components/Skills.jsx
import React from "react";

export default function Skills() {
  const skills = [
    "Python",
    "React (Vite)",
    "PostgreSQL / SQL Server",
    "Automation Systems",
    "Networking & IoT",
    "Entrepreneurship",
  ];

  return (
    <section className="container my-5">
      <h2 className="text-primary border-bottom pb-2 mb-3">Skills</h2>
      <div className="row">
        {skills.map((skill, index) => (
          <div key={index} className="col-6 col-md-4 mb-2">
            <div className="p-3 bg-light border rounded text-center">{skill}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
