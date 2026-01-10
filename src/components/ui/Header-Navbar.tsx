"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/assets/NavLogo.png";
import LinkedIn from "@/assets/linkedin.svg";
import Git from "@/assets/github.svg";
const HeaderNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <header
      className="fixed w-full z-20 top-0 start-0 z-50  bg-white/8
  backdrop-blur
  border-b border-white/20"
    >
      <nav
        className={`bg-neutral-primary transition-all duration-700 overflow-hidden ${
          isScrolled ? "transition-opacity opacity-0 h-0" : "opacity-100"
        }`}
      >
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href="https://flowbite.com"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image src={Logo} width={80} height={80} alt="Rakkesh Kumar" />
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
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
      </nav>

      <nav className="bg-neutral-secondary-soft border-y border-default border-default">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div
            className={`flex items-center transition-all duration-700 ${
              isScrolled ? "py-2 justify-between" : ""
            } `}
          >
            <a
              href="https://flowbite.com"
              className={`flex items-center space-x-3 rtl:space-x-reverse transition-all duration-700 ${
                isScrolled
                  ? "transition-opacity opacity-100"
                  : "opacity-0 hidden pointer-events-none"
              }`}
            >
              <Image src={Logo} width={80} height={80} alt="Rakkesh Kumar" />
            </a>

            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <a
                  href="#"
                  className="text-heading hover:underline"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-heading hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-heading hover:underline">
                  Skils
                </a>
              </li>
              <li>
                <a href="#" className="text-heading hover:underline">
                  Projects
                </a>
              </li>
              <li className="relative group">
  <a
    href="#"
    className="text-heading hover:underline"
  >
    My Works
  </a>

  {/* Dropdown */}
  <ul
    className="
      absolute left-0 mt-6 w-60
      bg-white/90 backdrop-blur-md border border-gray-200
      rounded-md shadow-lg
      opacity-0 invisible
      group-hover:opacity-100 group-hover:visible
      transition-all duration-300 ease-in-out
      transform -translate-y-2 group-hover:translate-y-0
      z-50
    "
  >
    <li>
      <a
        href="#web"
        className="block px-4 py-2 text-sm text-heading hover:bg-gray-100 rounded-md"
      >
        My Webinars [Free]
      </a>
    </li>
    <li>
      <a
        href="#mobile"
        className="block px-4 py-2 text-sm text-heading hover:bg-gray-100 rounded-md"
      >
       Courses [Free]
      </a>
    </li>
    <li>
      <a
        href="#design"
        className="block px-4 py-2 text-sm text-heading hover:bg-gray-100 rounded-md"
      >
        My Student Community
      </a>
    </li>
  </ul>
</li>

            </ul>

            <div
              className={`flex items-center space-x-6 rtl:space-x-reverse ${
                isScrolled
                  ? "transition-opacity opacity-100"
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
      </nav>
    </header>
  );
};

export default HeaderNavbar;
