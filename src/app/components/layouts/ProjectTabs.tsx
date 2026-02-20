"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

type Props = {
  active: string;
  setActive: (value: string) => void;
};

const tabs = ["All", "Full Stack", "AI Projects", "Frontend", "Upcoming"];

export default function ProjectTabs({ active, setActive }: Props) {
  const [slider, setSlider] = useState<{ left: number; width: number }>({
    left: 0,
    width: 0,
  });

  // ✅ Proper typing for button refs
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

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
  <div className="flex justify-center mb-12 px-4">
    <div className="relative flex w-full max-w-2xl bg-neutral-900 rounded-full p-1">
      
      {/* Sliding Background */}
      <motion.div
        animate={{
          left: `${tabs.indexOf(active) * 100 / tabs.length}%`,
          width: `${100 / tabs.length}%`,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="absolute top-1 bottom-1 bg-orange-500 rounded-full"
      />

      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`relative z-10 flex-1 py-1 sm:py-2
            text-xs sm:text-sm md:text-base font-medium
            text-center transition-colors duration-300
            ${
              active === tab
                ? "text-white"
                : "text-gray-300 hover:text-white"
            }
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  </div>
);


}
