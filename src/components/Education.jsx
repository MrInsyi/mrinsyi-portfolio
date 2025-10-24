// src/components/Education.jsx
import React from "react";

export default function Education() {
  const education = [
    {
      institution: "Universiti Malaysia Sarawak (UNIMAS)",
      qualification: "Pengkomputeran Rangkaian",
      grade: "3.64 / 4.0 CGPA",
      year: "2017 – 2020",
      involvement:
        "Kelab Debat, Persatuan Seni Silat, Cakle Hanafis, Jawatankuasa Pengurusan Kolej Cempaka (Sahabat)",
      achievement: "Pendebat 10 Terbaik, MEGAH, Pengurusan Program",
    },
    {
      institution: "Asasi UNIMAS",
      qualification: "Sains Hayat",
      grade: "3.34 / 4.0 CGPA",
      year: "2015 – 2016",
      involvement: "Unit Pengurusan, Sains Asasi",
      achievement: "Pengurusan Program",
    },
    {
      institution: "Maahad Muhammadi Lelaki (MML)",
      qualification: "SPM",
      grade: "5A 6B",
      year: "2009 – 2014",
      involvement: "Kelab Bahasa Melayu",
      achievement: "Johan Forum Peringkat YIK",
    },
  ];

  return (
    <section className="container my-5">
      <h2 className="text-primary border-bottom pb-2 mb-4">Latar Belakang Pendidikan</h2>

      {education.map((item, index) => (
        <div key={index} className="mb-4 p-4 border rounded bg-light shadow-sm">
          <h4 className="fw-bold mb-1">{item.institution}</h4>
          <p className="text-muted mb-2">
            {item.qualification} | <strong>{item.grade}</strong> | {item.year}
          </p>

          <div className="mb-2">
            <strong>Penglibatan:</strong> <br />
            <span>{item.involvement}</span>
          </div>

          <div>
            <strong>Pencapaian:</strong> <br />
            <span>{item.achievement}</span>
          </div>
        </div>
      ))}
    </section>
  );
}
