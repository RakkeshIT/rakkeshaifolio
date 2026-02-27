"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
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
  cover_image: string;
  created_at: string;
  updated_at: string;
}

export default function WebinarDetailsPage() {
  const { id } = useParams();

  const webinar: Webinar | undefined = (Details as Webinar[]).find((w) => w.id == id)

  const displayValue = (value: string | null | undefined) => {
    return value && value !== "" ? value : "Not Available";
  };

  if (!webinar) {
    return (
      <div className="h-screen flex items-center justify-center text-gray-500">
        Webinar Not Found
      </div>
    );
  }

  return (
  <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

    {/* HERO SECTION */}
    <div className="relative w-full h-[500px]">
      {webinar.cover_image ? (
        <Image
          src={webinar.cover_image}
          alt={webinar.title}
          fill
          className="object-cover"
          priority
        />
      ) : (
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          No Cover Image Available
        </div>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 flex items-center">
        <div className="max-w-6xl mx-auto px-8 text-white">
          <Link href="/webinar" className="underline text-sm">
            ← Back to Webinars
          </Link>

          <h1 className="text-5xl font-bold mt-4">
            {displayValue(webinar.title)}
          </h1>

          <p className="mt-4 text-lg text-gray-200 max-w-3xl">
            {displayValue(webinar.short_description)}
          </p>

          <div className="mt-6">
            <span className="px-4 py-2 bg-orange-500 rounded-full text-sm font-semibold">
              {displayValue(webinar.status)}
            </span>
          </div>
        </div>
      </div>
    </div>

    {/* CONTENT SECTION */}
    <div className="max-w-6xl mx-auto px-8 py-16 space-y-16">

      {/* DESCRIPTION */}
      <section>
        <h2 className="text-3xl font-bold mb-6">About This Webinar</h2>

        <div className="bg-white shadow-lg rounded-xl p-8 leading-relaxed text-gray-700 whitespace-pre-line">
          {displayValue(webinar.description)}
        </div>
      </section>

      {/* WEBINAR DETAILS */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Webinar Information</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <DetailCard label="Date" value={webinar.date} />
          <DetailCard label="Start Time" value={webinar.start_time} />
          <DetailCard label="End Time" value={webinar.end_time} />
          <DetailCard label="Duration" value={webinar.duration} />
          <DetailCard label="Location Type" value={webinar.location_type} />
          <DetailCard label="Location" value={webinar.location} />
          <DetailCard label="Venue" value={webinar.venue} />
          <DetailCard label="Agenda Link" value={webinar.agenda_link} isLink />
          <DetailCard
            label="Registration Link"
            value={ webinar.registration_link }
            isLink
          />
        </div>
      </section>

      {/* SPEAKER SECTION */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Speaker</h2>

        <div className="bg-white shadow-lg rounded-2xl p-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold">
              {displayValue(webinar.speaker_name)}
            </h3>

            <p className="text-gray-600 mt-2">
              {displayValue(webinar.speaker_role)}
            </p>

            <div className="mt-6 space-y-2">
              {webinar.speaker_linkedin ? (
                <a
                  href={webinar.speaker_linkedin}
                  target="_blank"
                  className="text-blue-600 underline block"
                >
                  LinkedIn Profile
                </a>
              ) : (
                <p className="text-gray-400">LinkedIn Not Available</p>
              )}

              {webinar.speaker_portfolio ? (
                <a
                  href={webinar.speaker_portfolio}
                  target="_blank"
                  className="text-blue-600 underline block"
                >
                  Portfolio Website
                </a>
              ) : (
                <p className="text-gray-400">Portfolio Not Available</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);
  
}

function DetailCard({
  label,
  value,
  isLink,
}: {
  label: string;
  value: string;
  isLink?: boolean;
}) {
  const display = value && value !== "" ? value : "Not Available";

  return (
    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
      <p className="text-sm text-gray-500 mb-2">{label}</p>

      {isLink && value ? (
        <a
          href={value}
          target="_blank"
          className="text-blue-600 font-medium break-all underline"
        >
          {value}
        </a>
      ) : (
        <p className="font-semibold text-gray-800">{display}</p>
      )}
    </div>
  );
}