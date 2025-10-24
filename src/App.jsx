// src/App.jsx
import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}

export default App;

