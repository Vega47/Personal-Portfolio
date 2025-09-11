import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { motion } from "framer-motion";
import SplitText from "./SplitText";
import Navbar from "./navBar/Navbar";
import Landing from "./landing/landing";
import About from "./About/About";
import Skills from "./skils/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
