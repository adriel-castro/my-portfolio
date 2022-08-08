import React from "react";
import About from "./About";
import Dashboard from "./Dashboard";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="bg-[#0a192f]">
      <Dashboard />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
