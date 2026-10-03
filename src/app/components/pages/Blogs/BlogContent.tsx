import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Hash,
  Lightbulb,
  Quote as QuoteIcon,
  Sparkles,
} from "lucide-react";

type ContentBlock = {
  type: string;
  title?: string;
  content?: string;
  columns?: string[];
  rows?: string[][];
  description?: string;
  link?: string;
  links?: { label: string; url: string }[];
};

function Paragraphs({ text }: { text?: string }) {
  if (!text) return null;

  const blocks = text.trim().split(/\n\s*\n/).filter(Boolean);

  return (
    <>
      {blocks.map((block, i) => {
        const lines = block
          .split("\n")
          .map((l) => l.trim())
          .filter(Boolean);
        const isBulletList = lines.length > 0 && lines.every((l) => l.startsWith("- "));

        if (isBulletList) {
          return (
            <ul key={i} className="space-y-2 my-4">
              {lines.map((line, li) => (
                <li
                  key={li}
                  className="flex items-start gap-2.5 text-slate-600 leading-relaxed"
                >
                  <CheckCircle2
                    size={18}
                    className="shrink-0 mt-0.5 text-emerald-500"
                  />
                  <span>{line.replace(/^- /, "")}</span>
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p
            key={i}
            className="text-slate-600 leading-relaxed whitespace-pre-line mb-4 last:mb-0"
          >
            {block}
          </p>
        );
      })}
    </>
  );
}

export default function BlogContent({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "intro":
      return (
        <div className="mb-8">
          {block.title && (
            <h2 className="flex items-center gap-2.5 text-xl sm:text-2xl font-bold text-slate-900 mb-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-50 text-amber-500 shrink-0">
                <Lightbulb size={16} />
              </span>
              {block.title}
            </h2>
          )}
          <div className="text-base sm:text-lg">
            <Paragraphs text={block.content} />
          </div>
        </div>
      );

    case "heading":
      return (
        <div className="mt-10 mb-4">
          {block.title && (
            <h2 className="flex items-center gap-2.5 text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              <span className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#2563eb]/10 text-[#2563eb] shrink-0">
                <Hash size={16} />
              </span>
              {block.title}
            </h2>
          )}
          <Paragraphs text={block.content} />
        </div>
      );

    case "subheading":
      return (
        <div className="mt-8 mb-3">
          {block.title && (
            <h3 className="flex items-center gap-2 text-lg sm:text-xl font-semibold text-slate-800 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] shrink-0" />
              {block.title}
            </h3>
          )}
          <Paragraphs text={block.content} />
        </div>
      );

    case "quote":
      return (
        <blockquote className="my-8 flex gap-3 border-l-4 border-[#2563eb] bg-blue-50/60 px-5 py-4 rounded-r-xl text-slate-700 italic leading-relaxed">
          <QuoteIcon size={18} className="shrink-0 mt-0.5 text-[#2563eb]" />
          <span className="whitespace-pre-line">{block.content?.trim()}</span>
        </blockquote>
      );

    case "table":
      return (
        <div className="my-8">
          {block.title && (
            <h4 className="font-semibold text-slate-800 mb-3">{block.title}</h4>
          )}
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm text-left border-collapse">
              <thead className="bg-slate-50">
                <tr>
                  {block.columns?.map((col) => (
                    <th
                      key={col}
                      className="px-4 py-2.5 font-semibold text-slate-600 whitespace-nowrap"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows?.map((row, ri) => (
                  <tr key={ri} className="border-t border-slate-100">
                    {row.map((cell, ci) => (
                      <td
                        key={ci}
                        className="px-4 py-2.5 text-slate-600 whitespace-nowrap"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );

    case "resource":
      return (
        <Link
          href={block.link || "#"}
          className="group flex items-center justify-between gap-4 my-4 p-4 sm:p-5 rounded-xl border border-slate-200 bg-slate-50 hover:border-[#2563eb]/40 hover:bg-white transition"
        >
          <div className="min-w-0">
            <p className="font-semibold text-slate-800 group-hover:text-[#2563eb] transition">
              {block.title}
            </p>
            <p className="text-sm text-slate-500 mt-1">{block.description}</p>
          </div>
          <ArrowRight
            size={18}
            className="shrink-0 text-slate-400 group-hover:text-[#2563eb] transition"
          />
        </Link>
      );

    case "cta":
      return (
        <div className="my-10 rounded-2xl bg-[#07142d] text-white p-6 sm:p-8">
          {block.title && (
            <h4 className="flex items-center gap-2.5 text-lg sm:text-xl font-bold mb-2">
              <Sparkles size={18} className="text-[#22d3ee]" />
              {block.title}
            </h4>
          )}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed whitespace-pre-line mb-5">
            {block.content?.trim()}
          </p>
          <div className="flex flex-wrap gap-3">
            {block.links?.map((l) => (
              <a
                key={l.label}
                href={l.url}
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-sm font-medium transition"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
}
