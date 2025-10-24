// src/components/Skills.jsx
import React from "react";

export default function Skills() {
  return (
    <section className="container my-5">
      <h2 className="text-primary border-bottom pb-2 mb-4">Skills</h2>

      <div className="row">
        {/* ================= Technical Skills ================= */}
        <div className="col-md-6 mb-4">
          <div className="p-4 border rounded bg-light shadow-sm h-100">
            <h4 className="fw-bold text-uppercase border-bottom pb-2 mb-3">
              Skills (Technical)
            </h4>
            <ul className="list-unstyled">
              <li>
                <strong>Web Application Skills:</strong>
                <ul>
                  <li>React, Flask, PHP and Python (Moderate)</li>
                </ul>
              </li>

              <li className="mt-2">
                <strong>Database:</strong>
                <ul>
                  <li>MySQL, PostgreSQL (Moderate)</li>
                </ul>
              </li>

              <li className="mt-2">
                <strong>Network:</strong>
                <ul>
                  <li>AP, Switch, Bridge, DHCP, DNS and Firewall (Moderate)</li>
                </ul>
              </li>

              <li className="mt-2">
                <strong>3D Design:</strong>
                <ul>
                  <li>FreeCAD (Basic)</li>
                </ul>
              </li>

              <li className="mt-2">
                <strong>Office Tools:</strong>
                <ul>
                  <li>Word, Excel, PowerPoint (Advance)</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        {/* ================= Soft Skills ================= */}
        <div className="col-md-6 mb-4">
          <div className="p-4 border rounded bg-light shadow-sm h-100">
            <h4 className="fw-bold text-uppercase border-bottom pb-2 mb-3">
              Skills (Soft)
            </h4>
            <ul className="list-unstyled">
              <li>
                <strong>Language:</strong>
                <ul>
                  <li>Malay and English (Advance)</li>
                  <li>Arabic (Basic)</li>
                </ul>
              </li>

              <li className="mt-2">
                <strong>Project Management:</strong> (Moderate)
              </li>

              <li className="mt-2">
                <strong>Inter-Department Communication:</strong> (Moderate)
              </li>

              <li className="mt-2">
                <strong>Presentation:</strong> (Moderate)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

