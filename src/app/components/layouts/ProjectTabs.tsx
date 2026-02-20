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
<div className="mb-12 border-b border-neutral-800 px-4">
  <div className="flex gap-6 overflow-x-auto scrollbar-hide">
    {tabs.map((tab) => (
      <button
        key={tab}
        onClick={() => setActive(tab)}
        className={`relative pb-3 text-sm sm:text-base whitespace-nowrap transition-colors duration-300
          ${
            active === tab
              ? "text-orange-500"
              : "text-gray-400 hover:text-white"
          }
        `}
      >
        {tab}
        {active === tab && (
          <span className="absolute left-0 bottom-0 h-[2px] w-full bg-orange-500" />
        )}
      </button>
    ))}
  </div>
</div>
);


}
