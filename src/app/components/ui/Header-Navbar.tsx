"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Logo from "../assets/NavLogo.png";
import LinkedIn from "../assets/linkedin.svg";
import Git from "../assets/github.svg";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { AuroraText } from "../../../components/ui/aurora-text";
import Button from "./common/Button";

type Props = {
  homeRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  skillRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
};

type ScrollRefKey =
  | "homeRef"
  | "aboutRef"
  | "skillRef"
  | "projectsRef"
  | "contactRef";

type NavLink = {
  label: string;
  type: "scroll" | "link";
  refKey?: ScrollRefKey;
  href?: string;
};

type WorksLink = {
  label: string;
  href: string;
};

/* =========================
   NAVIGATION DATA
========================= */

const navLinks: NavLink[] = [
  {
    label: "Home",
    type: "scroll",
    refKey: "homeRef",
  },
  {
    label: "About",
    type: "scroll",
    refKey: "aboutRef",
  },
  {
    label: "Skills",
    type: "scroll",
    refKey: "skillRef",
  },
  {
    label: "Projects",
    type: "scroll",
    refKey: "projectsRef",
  },
  {
    label: "Experience",
    type: "link",
    href: "/experience",
  },
  {
    label: "Contact",
    type: "scroll",
    refKey: "contactRef",
  },
  {
    label: "My Blogs",
    type: "link",
    href: "/blogs",
  },
];

const worksLinks: WorksLink[] = [
  {
    label: "My Webinars",
    href: "/webinar",
  },
  {
    label: "Courses",
    href: "/course",
  },
  {
    label: "My Student Community",
    href: "/my-community",
  },
];

/* =========================
   COMPONENT
========================= */

const HeaderNavbar = ({ section }: { section: Props }) => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWorksOpen, setIsWorksOpen] = useState(false);
  const [isContact, setIsContact] = useState(false);

  /* =========================
     SCROLL DETECTION
  ========================= */

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* =========================
     CONTACT SECTION DETECTION
  ========================= */

  useEffect(() => {
    if (!section.contactRef?.current) return;

    const observed = new IntersectionObserver(
      ([entry]) => {
        setIsContact(entry.isIntersecting);
      },
      {
        threshold: 0.4,
      }
    );

    observed.observe(section.contactRef.current);

    return () => observed.disconnect();
  }, [section.contactRef]);

  /* =========================
     SCROLL FUNCTION
  ========================= */

  const scrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    ref: React.RefObject<HTMLDivElement>
  ) => {
    e.preventDefault();

    ref.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  /* =========================
     RENDER NAV LINK
  ========================= */

  const renderNavLink = (item: NavLink, mobile = false) => {
    const commonClass = mobile
      ? "block rounded-md px-3 py-2 text-heading hover:bg-neutral-100 transition"
      : "text-heading hover:underline";

    // Normal Next.js route
    if (item.type === "link") {
      return (
        <Link href={item.href!} className={commonClass}>
          {item.label}
        </Link>
      );
    }

    // Scroll section
    const ref = section[item.refKey!];

    return (
      <a
        href="#"
        className={commonClass}
        onClick={(e) => {
          scrollTo(e, ref);

          if (mobile) {
            setIsMenuOpen(false);
          }
        }}
      >
        {item.label}
      </a>
    );
  };

  return (
    <header
      className={`fixed w-full top-0 start-0 z-50 ${isContact
        ? "text-white"
        : "bg-white/8 backdrop-blur border-b border-white/20"
        }`}
    >
      {/* =========================
          TOP NAV
      ========================= */}

      <nav
        className={`bg-neutral-primary transition-all duration-700 overflow-hidden px-4 sm:px-6 lg:px-12 ${isScrolled
          ? "transition-opacity md:opacity-0 md:h-0"
          : "opacity-100"
          }`}
      >
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <AuroraText className="font-bold text-lg">
              Developer
            </AuroraText>
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
                alt="GitHub"
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
                alt="LinkedIn"
                className="hover:drop-shadow-[0_0_8px_#0A66C2] transition-all"
              />
            </Link>
          </div>
        </div>
      </nav>

      {/* =========================
          MAIN NAV
      ========================= */}

      <nav className="bg-neutral-secondary-soft border-y border-default px-4 sm:px-6 lg:px-12">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          {/* =========================
              MOBILE HEADER
          ========================= */}

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

          {/* =========================
              DESKTOP NAV
          ========================= */}

          <div
            className={`flex items-center transition-all duration-700 ${isScrolled
              ? "md:py-2 md:justify-between gap-5"
              : ""
              }`}
          >
            {/* Logo */}

            <a
              href="/"
              className={`flex items-center space-x-3 rtl:space-x-reverse transition-all duration-700 ${isScrolled
                ? "transition-opacity max-md:hidden opacity-0 md:opacity-100"
                : "opacity-0 hidden pointer-events-none"
                }`}
            >
              {isContact ? (
                <AuroraText className="font-bold text-lg">
                  Developer
                </AuroraText>
              ) : (
                <Image
                  src={Logo}
                  width={80}
                  height={80}
                  alt="Rakkesh Kumar"
                />
              )}
            </a>

            {/* =========================
                DESKTOP LINKS
            ========================= */}

            <ul className="hidden md:items-center w-full md:justify-between md:flex md:flex-row font-medium space-x-8 text-sm">
              <div className="flex gap-5">
                {navLinks
                  .filter((item) => item.label !== "Contact" && item.label !== "My Blogs")
                  .map((item) => (
                    <li key={item.label}>
                      {renderNavLink(item)}
                    </li>
                  ))}

                {/* =========================
                  MY WORKS DROPDOWN
              ========================= */}

                <li className="relative group">
                  <button className="text-heading hover:underline">
                    My Works
                  </button>

                  <ul
                    className="
                    absolute left-0 mt-6 w-60
                    bg-white/90 backdrop-blur-md
                    border border-gray-200
                    rounded-md shadow-lg
                    opacity-0 invisible
                    group-hover:opacity-100
                    group-hover:visible
                    transition-all duration-300
                    ease-in-out
                    transform -translate-y-2
                    group-hover:translate-y-0
                    z-50
                  "
                  >
                    {worksLinks.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="block px-4 py-2 text-sm text-heading hover:bg-gray-100 rounded-md"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                {/* Contact */}

                <li>
                  {renderNavLink(
                    navLinks.find((item) => item.label === "Contact")!,
                  )}
                </li>
              </div>

              <div className="">
                <Button text="My Blog" onClick={() => router.push("/blogs")} />
              </div>

            </ul>

            {/* =========================
                SOCIAL ICONS
            ========================= */}

            <div
              className={`flex items-center space-x-6 rtl:space-x-reverse ${isScrolled
                ? "md:transition-opacity opacity-0 hidden md:flex md:opacity-100"
                : "opacity-0 hidden pointer-events-none"
                }`}
            >
              <a
                href="https://github.com/RakkeshIT"
                target="_blank"
                className="text-sm font-medium text-fg-brand hover:underline"
              >
                <Image
                  src={Git}
                  width={27}
                  height={27}
                  className="hover:drop-shadow-[0_0_8px_#181717] transition-all"
                  alt="GitHub"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/rakkeshit/"
                target="_blank"
                className="text-sm font-medium text-fg-brand hover:underline"
              >
                <Image
                  src={LinkedIn}
                  width={25}
                  height={25}
                  alt="LinkedIn"
                  className="hover:drop-shadow-[0_0_8px_#0A66C2] transition-all"
                />
              </a>
            </div>
          </div>
        </div>

        {/* =========================
            MOBILE MENU
        ========================= */}

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="
                md:hidden
                absolute left-0 top-full
                w-full
                bg-white/95
                backdrop-blur-md
                border-t border-gray-200
                z-50
              "
            >
              <ul className="flex flex-col space-y-2 px-6 py-6 text-base font-medium">

                {/* Main Links */}

                {navLinks
                  .filter((item) => item.label !== "Contact" && item.label !== "My Blogs")
                  .map((item) => (
                    <li key={item.label}>
                      {renderNavLink(item, true)}
                    </li>
                  ))}

                {/* =========================
                    MOBILE MY WORKS
                ========================= */}

                <li>
                  <button
                    onClick={() => setIsWorksOpen(!isWorksOpen)}
                    className="
                      flex w-full
                      items-center justify-between
                      rounded-md px-3 py-2
                      text-heading
                      hover:bg-neutral-100
                      transition
                    "
                  >
                    <span>My Works</span>

                    <motion.span
                      animate={{
                        rotate: isWorksOpen ? 180 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      ▾
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {isWorksOpen && (
                      <motion.ul
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                        className="
                          ml-4 mt-2
                          flex flex-col
                          overflow-hidden
                          border-l
                          border-neutral-200
                        "
                      >
                        {worksLinks.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="
                                block px-4 py-2
                                text-sm text-heading
                                hover:bg-neutral-100
                                rounded-md
                              "
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>

                {/* Contact */}

                <li>
                  {renderNavLink(
                    navLinks.find(
                      (item) => item.label === "Contact"
                    )!,
                    true
                  )}
                </li>

                <li>
                  {renderNavLink(
                    navLinks.find(
                      (item) => item.label === "My Blogs"
                    )!,
                    true
                  )}
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