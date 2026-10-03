"use client";

import { useState } from "react";

const REACTIONS = [
  { emoji: "👍", label: "Helpful" },
  { emoji: "❤️", label: "Loved it" },
  { emoji: "🔥", label: "Insightful" },
  { emoji: "🎉", label: "Inspiring" },
];

export default function BlogReactions() {
  const [picked, setPicked] = useState<string | null>(null);
  const [counts, setCounts] = useState<Record<string, number>>({});

  const handlePick = (emoji: string) => {
    const wasPicked = picked === emoji;

    setPicked(wasPicked ? null : emoji);
    setCounts((prev) => ({
      ...prev,
      [emoji]: Math.max(0, (prev[emoji] || 0) + (wasPicked ? -1 : 1)),
    }));
  };

  return (
    <div className="mt-12 pt-8 border-t border-slate-200 text-center">
      <p className="text-sm font-medium text-slate-500 mb-4">
        Did this article help you?
      </p>

      <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
        {REACTIONS.map((r) => (
          <button
            key={r.emoji}
            type="button"
            onClick={() => handlePick(r.emoji)}
            className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 rounded-full border text-xs sm:text-sm font-medium transition ${
              picked === r.emoji
                ? "border-[#2563eb] bg-blue-50 text-[#2563eb]"
                : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
            }`}
          >
            <span className="text-base">{r.emoji}</span>
            {r.label}
            {counts[r.emoji] ? (
              <span className="text-[11px] text-slate-400">{counts[r.emoji]}</span>
            ) : null}
          </button>
        ))}
      </div>
    </div>
  );
}
