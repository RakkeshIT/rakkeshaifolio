'use client'
import { useRef } from "react";
import About from "./components/pages/About";
import Contacts from "./components/pages/Contacts";
import HomePage from "./components/pages/HomePage";
import Projects from "./components/pages/Projects";
import Skill from "./components/pages/Skill";
import HeaderNavbar from "./components/ui/Header-Navbar";

export default function Home() {
  const homeRef = useRef<HTMLDivElement>(null!)
  const aboutRef = useRef<HTMLDivElement>(null!)
  const skillRef = useRef<HTMLDivElement>(null!)
  const projectsRef = useRef<HTMLDivElement>(null!)
  const contactRef = useRef<HTMLDivElement>(null!)
  return (
    <div >

      <HeaderNavbar
        section={{
          homeRef,
          aboutRef,
          skillRef,
          projectsRef,
          contactRef,
        }}
      />

      <div ref={homeRef}>
      <HomePage/>

      </div>
      <div ref={aboutRef}>
      <About/>

      </div>
      <div ref={skillRef}>
      <Skill/>

      </div>
      <div ref={projectsRef}>
      <Projects/>

      </div>
      <div ref={contactRef}>
      <Contacts/>

      </div>
    </div>
  );
}
