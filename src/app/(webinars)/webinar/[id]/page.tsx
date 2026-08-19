"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Details } from "@/app/components/pages/Webinars/Data/Details";

interface Webinar {
  id: string;
  title: string;
  short_description: string;
  description: string;
  date: string;
  start_time: string;
  end_time: string;
  duration: string;
  location_type: string;
  location: string;
  venue: string;
  status: string;
  agenda_link: string;
  registration_link: string;
  speaker_name: string;
  speaker_role: string;
  speaker_linkedin: string;
  speaker_portfolio: string;
  cover_image: string | StaticImageData;
  poster: string | StaticImageData;
  created_at: string;
  updated_at: string;
  fees?: string;
}

export default function WebinarDetailsPage() {
  const { id } = useParams();

  const webinar: Webinar | undefined = (Details as Webinar[]).find(
    (w) => w.id == id
  );

  const displayValue = (value: string | null | undefined) => {
    return value && value !== "" ? value : "Not Available";
  };

  if (!webinar) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6"
        style={{ background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)" }}>
        <div className="text-center">
          <div className="text-6xl sm:text-8xl mb-6">📭</div>
          <p className="text-white text-xl sm:text-2xl font-bold">Webinar Not Found</p>
          <Link href="/webinar"
            className="mt-6 inline-block px-6 sm:px-8 py-3 rounded-full text-white font-semibold text-sm sm:text-base"
            style={{ background: "linear-gradient(90deg, #f97316, #ec4899)" }}>
            ← Back to Webinars
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "#f0f4ff" }}>

      {/* ══════════════════════════════════════════
          TOP HERO BANNER — gradient + title overlay
      ══════════════════════════════════════════ */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 70%, #533483 100%)",
        }}
      >
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-56 h-56 sm:w-96 sm:h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #f97316, transparent)", transform: "translate(30%, -30%)" }} />
        <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-72 sm:h-72 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #ec4899, transparent)", transform: "translate(-30%, 30%)" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 flex flex-col md:flex-row gap-8 sm:gap-10 items-start">
          {/* Left: text */}
          <div className="flex-1 text-white w-full order-2 md:order-1">
            <Link
              href="/webinar"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium px-3 sm:px-4 py-2 rounded-full mb-5 sm:mb-6"
              style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              ← Back to Webinars
            </Link>

            {/* Status badge */}
            <div className="mb-3 sm:mb-4">
              <span
                className="inline-block px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest"
                style={{ background: "linear-gradient(90deg, #f97316, #ec4899)", color: "#fff" }}
              >
                {displayValue(webinar.status)}
              </span>
            </div>

            <div className="mb-4">
              <span
                className="inline-block px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest break-words"
                style={{ background: "linear-gradient(90deg, #f97316, #ec4899)", color: "#fff" }}
              >
                You Can Pay for This Webinar Only - {displayValue(webinar?.fees)}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4 break-words"
              style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}>
              {displayValue(webinar.title)}
            </h1>

            <p className="text-base sm:text-lg opacity-80 max-w-xl leading-relaxed">
              {displayValue(webinar.short_description)}
            </p>

            {/* Quick stats row */}
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
              {[
                { icon: "📅", text: webinar.date },
                { icon: "⏱️", text: webinar.duration },
                { icon: "📍", text: webinar.location_type },
              ].map((item, i) => (
                <div key={i}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold"
                  style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.15)" }}>
                  <span>{item.icon}</span>
                  <span>{item.text || "N/A"}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            {webinar.registration_link && (
              <a
                href={webinar.registration_link}
                target="_blank"
                className="mt-6 sm:mt-8 block sm:inline-block text-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-bold text-white text-base sm:text-lg shadow-2xl transition-transform hover:scale-105"
                style={{ background: "linear-gradient(90deg, #f97316, #ec4899)", boxShadow: "0 8px 32px rgba(249,115,22,0.4)" }}
              >
                Register Now →
              </a>
            )}
          </div>

          {/* Right: Poster Image Card — prominent display */}
          <div className="flex-shrink-0 w-full max-w-xs mx-auto md:mx-0 md:w-80 lg:w-96 order-1 md:order-2">
            <div
              className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
              style={{
                border: "3px solid rgba(255,255,255,0.2)",
                boxShadow: "0 24px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)",
              }}
            >
              <div className="relative w-full" style={{ aspectRatio: "3/4" }}>
                {webinar.poster ? (
                  <Image
                    src={webinar.poster}
                    alt={`${webinar.title} Poster`}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 90vw, 384px"
                  />
                ) : (
                  <div
                    className="w-full h-full flex flex-col items-center justify-center gap-3"
                    style={{ background: "linear-gradient(135deg, #667eea, #764ba2)" }}
                  >
                    <span className="text-5xl sm:text-6xl">🎙️</span>
                    <p className="text-white font-semibold text-xs sm:text-sm opacity-70">No Poster Available</p>
                  </div>
                )}
              </div>
              {/* Poster caption */}
              <div className="px-4 py-2.5 sm:py-3 text-center"
                style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(10px)" }}>
                <p className="text-white text-[10px] sm:text-xs font-semibold uppercase tracking-widest opacity-60">
                  Event Poster
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          MAIN CONTENT
      ══════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-10 sm:space-y-16">

        {/* ── ABOUT ── */}
        <section>
          <SectionHeading emoji="📖" title="About This Webinar" color="#6366f1" />
          <div
            className="rounded-2xl sm:rounded-3xl p-5 sm:p-8 leading-loose text-gray-700 whitespace-pre-line text-sm sm:text-base"
            style={{
              background: "#fff",
              borderLeft: "6px solid #6366f1",
              boxShadow: "0 4px 40px rgba(99,102,241,0.08)",
            }}
          >
            {displayValue(webinar.description)}
          </div>
        </section>

        {/* ── WEBINAR INFO GRID ── */}
        <section>
          <SectionHeading emoji="ℹ️" title="Webinar Information" color="#0ea5e9" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
            <DetailCard icon="📅" label="Date" value={webinar.date} accent="#f97316" />
            <DetailCard icon="🕐" label="Start Time" value={webinar.start_time} accent="#10b981" />
            <DetailCard icon="🕔" label="End Time" value={webinar.end_time} accent="#3b82f6" />
            <DetailCard icon="⏱️" label="Duration" value={webinar.duration} accent="#8b5cf6" />
            <DetailCard icon="🌐" label="Location Type" value={webinar.location_type} accent="#ec4899" />
            <DetailCard icon="📍" label="Location" value={webinar.location} accent="#f59e0b" />
            <DetailCard icon="🏛️" label="Venue" value={webinar.venue} accent="#06b6d4" />
            <DetailCard icon="📋" label="Agenda" value={webinar.agenda_link} accent="#84cc16" isLink />
            <DetailCard icon="✍️" label="Register" value={webinar.registration_link} accent="#f97316" isLink />
          </div>
        </section>

        {/* ── SPEAKER SECTION ── */}
        <section>
          <SectionHeading emoji="🎤" title="Meet the Speaker" color="#ec4899" />

          <div
            className="rounded-2xl sm:rounded-3xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
            }}
          >
            {/* Top accent bar */}
            <div className="h-2 w-full" style={{ background: "linear-gradient(90deg, #f97316, #ec4899, #8b5cf6, #3b82f6)" }} />

            <div className="p-6 sm:p-10 grid md:grid-cols-2 gap-8 sm:gap-10 items-center">
              {/* Speaker info */}
              <div className="text-white order-2 md:order-1">
                <div
                  className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl text-3xl sm:text-4xl mb-5 sm:mb-6"
                  style={{ background: "linear-gradient(135deg, #f97316, #ec4899)" }}
                >
                  🎙️
                </div>
                <h3 className="text-2xl sm:text-3xl font-black mb-2 break-words">
                  {displayValue(webinar.speaker_name)}
                </h3>
                <p className="text-base sm:text-lg opacity-70 mb-5 sm:mb-6">
                  {displayValue(webinar.speaker_role)}
                </p>

                <div className="flex flex-col gap-3">
                  {webinar.speaker_linkedin ? (
                    <a
                      href={webinar.speaker_linkedin}
                      target="_blank"
                      className="inline-flex items-center gap-3 px-5 py-3 rounded-xl font-semibold text-sm transition-transform hover:scale-105 w-fit"
                      style={{ background: "#0077b5", color: "#fff" }}
                    >
                      <span>in</span> LinkedIn Profile
                    </a>
                  ) : (
                    <p className="text-sm opacity-40">LinkedIn Not Available</p>
                  )}

                  {webinar.speaker_portfolio ? (
                    <a
                      href={webinar.speaker_portfolio}
                      target="_blank"
                      className="inline-flex items-center gap-3 px-5 py-3 rounded-xl font-semibold text-sm transition-transform hover:scale-105 w-fit"
                      style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff" }}
                    >
                      🌐 Portfolio Website
                    </a>
                  ) : (
                    <p className="text-sm opacity-40">Portfolio Not Available</p>
                  )}
                </div>
              </div>

              {/* Decorative visual */}
              <div className="flex items-center justify-center order-1 md:order-2">
                <div className="relative w-32 h-32 sm:w-48 sm:h-48">
                  <div className="absolute inset-0 rounded-full opacity-20 animate-ping"
                    style={{ background: "radial-gradient(circle, #ec4899, transparent)", animationDuration: "3s" }} />
                  <div className="absolute inset-4 rounded-full opacity-30"
                    style={{ background: "radial-gradient(circle, #f97316, transparent)" }} />
                  <div className="absolute inset-8 rounded-full flex items-center justify-center text-4xl sm:text-6xl"
                    style={{ background: "linear-gradient(135deg, #f97316, #ec4899)" }}>
                    🎤
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── POSTER LARGE VIEW (bottom showcase) ── */}
        {webinar.poster && (
          <section>
            <SectionHeading emoji="🖼️" title="Event Poster" color="#f97316" />
            <div className="flex justify-center">
              <div
                className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl w-full"
                style={{
                  maxWidth: "480px",
                  border: "4px solid transparent",
                  backgroundClip: "padding-box",
                  boxShadow: "0 0 0 4px #f97316, 0 24px 80px rgba(249,115,22,0.25)",
                }}
              >
                <div className="relative w-full" style={{ aspectRatio: "3/4" }}>
                  <Image
                    src={webinar.poster}
                    alt={`${webinar.title} Full Poster`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 90vw, 480px"
                  />
                </div>
              </div>
            </div>
          </section>
        )}

      </div>

      {/* FOOTER STRIP */}
      <div
        className="py-6 sm:py-8 text-center text-white text-xs sm:text-sm font-medium px-4"
        style={{ background: "linear-gradient(90deg, #1a1a2e, #0f3460, #533483)" }}
      >
        <p className="opacity-50">© Webinar Platform · All rights reserved</p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Sub-components
───────────────────────────────────────── */

function SectionHeading({
  emoji,
  title,
  color,
}: {
  emoji: string;
  title: string;
  color: string;
}) {
  return (
    <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-6">
      <span className="text-2xl sm:text-3xl">{emoji}</span>
      <h2 className="text-xl sm:text-2xl font-black" style={{ color }}>
        {title}
      </h2>
      <div className="flex-1 h-px" style={{ background: `linear-gradient(90deg, ${color}44, transparent)` }} />
    </div>
  );
}

function DetailCard({
  icon,
  label,
  value,
  accent,
  isLink,
}: {
  icon: string;
  label: string;
  value: string;
  accent: string;
  isLink?: boolean;
}) {
  const display = value && value !== "" ? value : "Not Available";
  const isEmpty = !value || value === "";

  return (
    <div
      className="rounded-2xl p-4 sm:p-5 transition-all hover:-translate-y-1"
      style={{
        background: "#fff",
        borderTop: `4px solid ${accent}`,
        boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
      }}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg sm:text-xl">{icon}</span>
        <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest" style={{ color: accent }}>
          {label}
        </p>
      </div>

      {isLink && !isEmpty ? (
        <a
          href={value}
          target="_blank"
          className="text-sm font-semibold break-all underline"
          style={{ color: accent }}
        >
          Open Link ↗
        </a>
      ) : (
        <p className="font-semibold text-gray-800 text-sm break-words">{display}</p>
      )}
    </div>
  );
}