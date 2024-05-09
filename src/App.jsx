import React from "react";
import { motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Personal_Information from "./components/Personal_Information";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Tool_Technology from "./components/Tool_Technology";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-red-400 selection:text-white">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <Personal_Information />
        <Tool_Technology />
        <Education />
        <Experience />
        <Project />
        <Contact />
      </div>
    </div>
  );
}

export default App;
