"use client";

import { motion, useScroll } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRef } from "react";
const WebinarHome = () => {
  const ref = useRef(null)
  
  const {scrollYProgress} = useScroll(
    {
      target: ref
    }
  )
  return (
    <section ref={ref} className="relative min-h-[100vh] flex items-center justify-center  px-6">
      {/* Left Side Image */}
      <div className=" absolute left-4 bg-white rounded-xl shadow-xl p-2 w-[120px] md:w-[160px]">
        <Image
          src="/webinar1.jpg"
          alt="Webinar"
          width={200}
          height={150}
          className="rounded-lg object-cover"
        />
      </div>

      <div className=" absolute top-4 left-6 bg-white rounded-xl shadow-xl p-2 w-[120px] md:w-[160px]">
        <Image
        src="/webinar1.jpg"
        alt="Webinar"
        width={200}
        height={150}
        className="rounded-lg object-cover"
        />
    </div>
      <div className=" absolute left-4 bottom-2 bg-white rounded-xl shadow-xl p-2 w-[120px] md:w-[160px]">
        <Image
          src="/webinar1.jpg"
          alt="Webinar"
          width={200}
          height={150}
          className="rounded-lg object-cover"
        />
    </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center text-white max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-wide">
          Vairaa Coders
        </h1>

        <p className="text-xl md:text-2xl font-semibold mb-3">
          Our Own Community for Students
        </p>

        <p className="text-white/90 mb-8 text-base md:text-lg">
          Learn • Build • Grow together with career-oriented webinars, projects,
          and mentorship in MERN, Next.js, Testing, and AI.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Button className="rounded-2xl px-8 py-5 text-lg">
            Join Community
          </Button>
          <Button
            variant="outline"
            className="rounded-2xl px-8 py-5 text-lg text-black"
          >
            View Webinars
    </Button>
        </div>
    </motion.div>

      {/* Right Side Image */}

       <div className=" absolute right-4 bg-white rounded-xl shadow-xl p-2 w-[120px] md:w-[160px]">
        <Image
          src="/webinar1.jpg"
          alt="Webinar"
          width={200}
          height={150}
          className="rounded-lg object-cover"
        />
      </div>

      <div className=" absolute top-4 right-6 bg-white rounded-xl shadow-xl p-2 w-[120px] md:w-[160px]">
        <Image
        src="/webinar1.jpg"
        alt="Webinar"
        width={200}
        height={150}
        className="rounded-lg object-cover"
        />
    </div>
      <div className=" absolute right-4 bottom-2 bg-white rounded-xl shadow-xl p-2 w-[120px] md:w-[160px]">
        <Image
          src="/webinar1.jpg"
          alt="Webinar"
          width={200}
          height={150}
          className="rounded-lg object-cover"
        />
    </div>
      
    </section>
  );
};

export default WebinarHome;
