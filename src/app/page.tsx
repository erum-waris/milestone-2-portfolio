import React from "react";
import AboutSec from "./components/AboutSec";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/Skills/SkillsSection";
import Project from "./components/Projects/ProjectsDetails";

const Home = () => {
  return (
    <div className=" md:min-h-screen mx-auto ">
      <HeroSection />

      <AboutSec />
      <Project />
    <SkillsSection/>
      <Contact />
    </div>
  );
};

export default Home;
