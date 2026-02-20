"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
type Props = {
  active: string;
  setActive: (value: string) => void;
};
const tabs = ["All", "Full Stack", "AI Projects", "Frontend", "Upcoming"];

export default function ProjectTabs({active, setActive}: Props) {
  const [slider, setSlider] = useState({ left: 0, width: 0 });
  const tabsRef = useRef([]);

  useEffect(() => {
    const index = tabs.indexOf(active);
    const currentTab = tabsRef.current[index];

    if (currentTab) {
      setSlider({
        left: currentTab.offsetLeft,
        width: currentTab.offsetWidth,
      });
    }
  }, [active]);

  return (
    <div className="flex justify-center mb-12">
      <div className="relative flex bg-neutral-900 rounded-full p-1">

        {/* Sliding Background */}
        <motion.div
          animate={{
            left: slider.left,
            width: slider.width,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="absolute top-1 bottom-1 bg-orange-500 rounded-full"
        />

        {tabs.map((tab, index) => (
          <button
            key={tab}
            ref={(el) => (tabsRef.current[index] = el)}
            onClick={() => setActive(tab)}
            className={`relative z-10 px-6 py-2 text-sm md:text-base font-medium transition-colors duration-300
              ${active === tab
                ? "text-white"
                : "text-gray-300 hover:text-white"}
            `}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
