"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../assets/NavLogo.png";
import LinkedIn from "../assets/linkedin.svg";
import Git from "../assets/github.svg";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import {AuroraText} from '../../../components/ui/aurora-text'

type Props = {
  homeRef: React.RefObject<HTMLDivElement>
  aboutRef: React.RefObject<HTMLDivElement>
  skillRef: React.RefObject<HTMLDivElement>
  projectsRef: React.RefObject<HTMLDivElement>
  contactRef: React.RefObject<HTMLDivElement>
}
const HeaderNavbar = ({section}: {section: Props}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWorksOpen, setIsWorksOpen] = useState(false);
  const [isContact, setIsContact] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if(!section.contactRef) return;

    const observed = new IntersectionObserver(([entry]) => {
        setIsContact(entry.isIntersecting)
    }, {threshold: 0.4})

    observed.observe(section.contactRef.current)

    return () => observed.disconnect()
  }, [section.contactRef])

  const scrollTo = (e:React.MouseEvent<HTMLAnchorElement>,ref: React.RefObject<HTMLDivElement>) => {
    e.preventDefault()
    ref.current?.scrollIntoView({behavior: "smooth"})
  } 


  return (
    <header
      className={
        `fixed w-full z-20 top-0 start-0 z-50  ${isContact ?  'text-white': 'bg-white/8 backdrop-blur border-b border-white/20'}`
      }
    >
      <nav
        className={`bg-neutral-primary transition-all duration-700 overflow-hidden ${
          isScrolled ? "transition-opacity md:opacity-0 md:h-0" : "opacity-100"
        }`}
      >
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href="https://flowbite.com"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <AuroraText className="font-bold text-lg">Developer</AuroraText>
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <Link
              href="https://github.com/RakkeshIT"
              target="_blank"
              className="text-sm font-medium text-fg-brand hover:underline"
            >
              <Image
                src={Git}
                width={27}
                height={27}
                className="hover:drop-shadow-[0_0_8px_#181717] transition-all"
                alt="Rakkesh Kumar"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/rakkeshit/"
              target="_blank"
              className="text-sm font-medium text-fg-brand hover:underline"
            >
              <Image
                src={LinkedIn}
                width={25}
                height={25}
                alt="Rakkesh Kumar"
                className="hover:drop-shadow-[0_0_8px_#0A66C2] transition-all"
              />
            </Link>
          </div>
        </div>
      </nav>

      <nav className="bg-neutral-secondary-soft border-y border-default border-default ">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          {/* MOBILE HEADER */}
          <div className="flex w-full items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="rounded-md text-heading hover:bg-neutral-100 transition"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={26} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={26} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
          <div
            className={`flex items-center transition-all duration-700 ${
              isScrolled ? "md:py-2 md:justify-between" : ""
            } `}
          >
            <a
              href="https://flowbite.com"
              className={`flex items-center space-x-3 rtl:space-x-reverse transition-all duration-700 ${
                isScrolled
                  ? "transition-opacity max-md:hidden opacity-0 md:opacity-100"
                  : "opacity-0 hidden pointer-events-none"
              }`}
            >
              {
                isContact ? ( <AuroraText className="font-bold text-lg">Developer</AuroraText>) : ( <Image src={Logo} width={80} height={80} alt="Rakkesh Kumar" />)
              }
             
            </a>

            <ul className="hidden md:flex md:flex-row font-medium space-x-8 text-sm">
              <li>
                <a
                  href="#"
                  className="text-heading hover:underline"
                  aria-current="page"
                  onClick={(e) => scrollTo(e, section.homeRef)}
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-heading hover:underline" onClick={(e) => scrollTo(e, section.aboutRef)}>
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-heading hover:underline" onClick={(e) => scrollTo(e, section.skillRef)}>
                  Skils
                </a>
              </li>
              <li>
                <a href="#" className="text-heading hover:underline" onClick={(e) => scrollTo(e, section.projectsRef)}>
                  Projects
                </a>
              </li>
              <li>
                <Link href="/experience" className="text-heading hover:underline">
                  Experience
                </Link>
              </li>
              <li className="relative group">
                <a href="#" className="text-heading hover:underline">
                  My Works
                </a>

                {/* Dropdown */}
                <ul className=" absolute left-0 mt-6 w-60 bg-white/90 backdrop-blur-md border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform -translate-y-2 group-hover:translate-y-0 z-50">
                  <li>
                    <Link
                      href="/webinar"
                      className="block px-4 py-2 text-sm text-heading hover:bg-gray-100 rounded-md"
                    >
                      My Webinars
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/course"
                      className="block px-4 py-2 text-sm text-heading hover:bg-gray-100 rounded-md"
                    >
                      Courses
                    </Link>
                  </li>
                  <li>
                    <a
                      href="/my-community"
                      className="block px-4 py-2 text-sm text-heading hover:bg-gray-100 rounded-md"
                    >
                      My Student Community
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#" className="text-heading hover:underline"onClick={(e) => scrollTo(e, section.contactRef)}>
                  Contact
                </a>
              </li>
            </ul>

            <div
              className={`flex items-center space-x-6 rtl:space-x-reverse ${
                isScrolled
                  ? "md:transition-opacity opacity-0 hidden md:flex md:opacity-100"
                  : "opacity-0 hidden pointer-events-none"
              }`}
            >
              <a
                href="#"
                className="text-sm font-medium text-fg-brand hover:underline"
              >
                <Image
                  src={Git}
                  width={27}
                  height={27}
                  className="hover:drop-shadow-[0_0_8px_#181717] transition-all"
                  alt="Rakkesh Kumar"
                />
              </a>
              <a
                href="#"
                className="text-sm font-medium text-fg-brand hover:underline"
              >
                <Image
                  src={LinkedIn}
                  width={25}
                  height={25}
                  alt="Rakkesh Kumar"
                  className="hover:drop-shadow-[0_0_8px_#0A66C2] transition-all"
                />
              </a>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="md:hidden absolute left-0 top-full w-full bg-white/95 backdrop-blur-md border-t border-gray-200 z-50"
            >
              <ul className="flex flex-col space-y-2 px-6 py-6 text-base font-medium">
                {/* Home */}
                <li>
                  <a
                    href="#"
                    onClick={(e) => {setIsMenuOpen(false), scrollTo(e, section.homeRef)}}
                    className="block rounded-md px-3 py-2 text-heading hover:bg-neutral-100 transition"
                  >
                    Home
                  </a>
                </li>

                {/* About */}
                <li>
                  <a
                    href="#"
                    className="block rounded-md px-3 py-2 text-heading hover:bg-neutral-100"
                     onClick={(e) => {setIsMenuOpen(false), scrollTo(e, section.aboutRef)}}
                  >
                    About
                  </a>
                </li>

                {/* Skills */}
                <li>
                  <a
                    href="#"
                    className="block rounded-md px-3 py-2 text-heading hover:bg-neutral-100"
                     onClick={(e) => {setIsMenuOpen(false), scrollTo(e, section.skillRef)}}
                  >
                    Skills
                  </a>
                </li>

                {/* Projects */}
                <li>
                  <a
                    href="#"
                    className="block rounded-md px-3 py-2 text-heading hover:bg-neutral-100"
                     onClick={(e) => {setIsMenuOpen(false), scrollTo(e, section.projectsRef)}}
                  >
                    Projects
                  </a>
                </li>

                  <li>
                  <Link
                    href="/experience"
                    className="block rounded-md px-3 py-2 text-heading hover:bg-neutral-100"
                  >
                    Experience
                  </Link>
                </li>

                {/* 🔽 My Works (Dropdown) */}
                <li>
                  <button
                    onClick={() => setIsWorksOpen(!isWorksOpen)}
                    className="flex w-full items-center justify-between rounded-md px-3 py-2 text-heading hover:bg-neutral-100 transition"
                  >
                    <span>My Works</span>

                    <motion.span
                      animate={{ rotate: isWorksOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-2"
                    >
                      ▾
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {isWorksOpen && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="ml-4 mt-2 flex flex-col overflow-hidden border-l border-neutral-200"
                      >
                        <li>
                          <Link
                            href="/webinar"
                            className="block px-4 py-2 text-sm text-heading hover:bg-neutral-100 rounded-md"
                          >
                            My Webinars
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/course"
                            className="block px-4 py-2 text-sm text-heading hover:bg-neutral-100 rounded-md"
                          >
                            Courses
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/my-community"
                            className="block px-4 py-2 text-sm text-heading hover:bg-neutral-100 rounded-md"
                          >
                            My Student Community
                          </Link>
                        </li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>

                {/* Contact */}
                <li>
                  <a
                    href="#"
                    className="block rounded-md px-3 py-2 text-heading hover:bg-neutral-100"
                     onClick={(e) => {setIsMenuOpen(false), scrollTo(e, section.contactRef)}}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default HeaderNavbar;
