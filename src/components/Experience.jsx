// src/components/Experience.jsx
import React from "react";

export default function Experience() {
  const experiences = [
    {
      title: "Automation & Data Engineer",
      company: "Yollink Manufacturing",
      period: "2023–Present",
      details:
        "Developing MES dashboards, PLC integrations, and Python scripts for real-time production monitoring and data synchronization.",
    },
    {
      title: "Gold Trading & Investment",
      company: "Self-Employed",
      period: "2020–Present",
      details:
        "Managing gold trading operations, market analysis, and digital marketing to promote long-term investment awareness.",
    },
  ];

  return (
    <section className="container my-5">
      <h2 className="text-primary border-bottom pb-2 mb-3">Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-4 p-3 border rounded bg-white shadow-sm">
          <h4>{exp.title}</h4>
          <p className="text-muted mb-1">{exp.company} | {exp.period}</p>
          <p>{exp.details}</p>
        </div>
      ))}
    </section>
  );
}
