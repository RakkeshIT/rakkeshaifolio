import Link from "next/link";
import { Package, ArrowUpRight } from "lucide-react";

export type Kit = {
  label: string;
  link: string;
};

export default function BlogKits({ kits }: { kits?: Kit[] }) {
  if (!kits || kits.length === 0) return null;

  return (
    <div className="mt-12 pt-8 border-t border-slate-200">
      <h3 className="flex items-center gap-2.5 text-lg sm:text-xl font-bold text-slate-900 mb-5">
        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#2563eb]/10 text-[#2563eb] shrink-0">
          <Package size={16} />
        </span>
        Kits &amp; Resources
      </h3>

      <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
        {kits.map((kit) => {
          const isExternal = /^https?:\/\//.test(kit.link);

          return (
            <Link
              key={kit.label}
              href={kit.link}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="group flex items-center justify-between gap-3 px-4 py-3.5 rounded-xl border border-slate-200 bg-white hover:border-[#2563eb]/40 hover:bg-slate-50 transition"
            >
              <span className="text-sm font-medium text-slate-700 group-hover:text-[#2563eb] transition">
                {kit.label}
              </span>
              <ArrowUpRight
                size={16}
                className="shrink-0 text-slate-400 group-hover:text-[#2563eb] transition"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
