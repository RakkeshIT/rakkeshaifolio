'use client'
import About from "./components/pages/About";
import HomePage from "./components/pages/HomePage";
import Projects from "./components/pages/Projects";
import Skill from "./components/pages/Skill";

export default function Home() {
  return (
    <div >
      <HomePage/>
      <About/>
      <Skill/>
      <Projects/>
    </div>
  );
}
