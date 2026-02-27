"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRef, useEffect, RefObject } from "react";
import * as THREE from "three";
import Link from "next/link";


type VantaEffect = {
  destroy: () => void;
};

type VantaGlobe = (options: {
  el: HTMLElement;
  THREE: typeof import("three");
  mouseControls?: boolean;
  touchControls?: boolean;
  gyroControls?: boolean;
  minHeight?: number;
  minWidth?: number;
  backgroundColor?: number;
  color?: number;
}) => VantaEffect;

type Props = {
  cardRef: React.RefObject<HTMLDivElement>,
}

const WebinarHome = ({section}: {section: Props}) => {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    let vantaEffect: VantaEffect | null = null;

    const loadVanta = async () => {
      if (!vantaRef.current) return;

      const modules = await import("../../../../../vanta/dist/vanta.globe.min");
      const GLOBE = modules.default as unknown as  VantaGlobe;

      vantaEffect = GLOBE({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        backgroundColor: 0x23153c,
        color: 0xff3f81,
      });
    };

    loadVanta();

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLButtonElement>,ref:React.RefObject<HTMLDivElement> ) => {
    e.preventDefault()
    ref.current?.scrollIntoView({behavior: "smooth"})
  }
  return (
    <section
      ref={vantaRef}
      className="relative w-screen h-screen
       flex items-center justify-center px-6 overflow-hidden"
    >  
      {/* CENTER CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-white max-w-3xl z-10"
      >
    <Link href='/' className="underline font-bold">Back to Home</Link>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-wide">
          Vairaa Coders
        </h1>

        <p className="text-xl md:text-2xl font-semibold mb-3">
          Our Own Community for Students
        </p>

        <p className="text-white/90 mb-8 text-base md:text-lg">
          Learn • Build • Grow together with career-oriented webinars,
          projects, and mentorship.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Button className="rounded-2xl px-8 py-5 text-lg">
            Join Community
          </Button>

          <Button
            variant="outline"
            className="rounded-2xl px-8 py-5 text-lg text-black cursor-pointer"
            onClick={(e) => scrollTo(e, section.cardRef)}
          >
            View Webinars
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default WebinarHome;