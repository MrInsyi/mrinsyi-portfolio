// src/components/Experience.jsx
import React from "react";

export default function Experience() {
  return (
    <section className="container my-5">
      <h2 className="text-primary border-bottom pb-2 mb-4">
        WORKING HISTORY AND PROJECT
      </h2>

      {/* =================== MAIN JOB =================== */}
      <div className="mb-4 p-4 border rounded bg-light shadow-sm">
        <div className="d-flex justify-content-between align-items-start flex-wrap">
          <div>
            <h4 className="fw-bold mb-1">Senior Software Engineering Exec</h4>
            <p className="mb-1 text-muted">Yollink Sdn Bhd</p>
          </div>
          <p className="text-secondary">2021 – Present</p>
        </div>

        <hr />

        {/* 2021 Section */}
        <div className="mb-3">
          <h6 className="fw-bold text-dark">2021 : Pipe Production Monitoring System</h6>
          <ul>
            <li>Integrating Autonics system with custom web app</li>
          </ul>
        </div>

        {/* 2022 Section */}
        <div className="mb-3">
          <h6 className="fw-bold text-dark">2022 : Setting Up Network for New Production Site</h6>
          <ul>
            <li>Setting switch, AP, and documentation</li>
            <li>Setting DNS, DHCP</li>
            <li>Point-to-Point communication device setup</li>
          </ul>
        </div>

        {/* 2023–2024 Section */}
        <div className="mb-3">
          <h6 className="fw-bold text-dark">2023 – 2024 : Setting Up ERP System Environment</h6>
          <ul>
            <li>Study the current system for every department</li>
            <li>Design a flow to integrate the new system</li>
            <li>Train users and create documentation</li>
            <li>Develop custom Excel and web-based reports for monitoring data</li>
          </ul>
        </div>

        {/* 2025 Section */}
        <div className="mb-3">
          <h6 className="fw-bold text-dark">2025 : MES Project – Customized Production Module</h6>
          <ul>
            <li>Assigned on database and dashboard building</li>
            <li>Auto-generated Telegram message for status updates</li>
            <li>
              Collaborated with hardware team to install sensors, input cards, and
              data collection systems
            </li>
          </ul>
        </div>

        {/* 2026 Section */}
        <div>
          <h6 className="fw-bold text-dark">2026 : Unity and YOLO AI (Coming Soon)</h6>
          <ul>
            <li>Upcoming integration of 3D visualization and AI object detection system</li>
          </ul>
        </div>
      </div>

      {/* =================== INTERNSHIP =================== */}
      <div className="p-4 border rounded bg-light shadow-sm">
        <div className="d-flex justify-content-between align-items-start flex-wrap">
          <div>
            <h5 className="fw-bold mb-1">Intern – Network Service</h5>
            <p className="mb-1 text-muted">
              Universiti Sains Malaysia, Kampus Kesihatan
            </p>
          </div>
          <p className="text-secondary">2019</p>
        </div>

        <ul>
          <li>
            Surveying, troubleshooting, and upgrading network infrastructure in
            student campus and hospital environments
          </li>
        </ul>
      </div>
    </section>
  );
}
