"use client";

import { techTalks } from "../../components/ExperiencPages/Data/techTalks";
import { useParams } from "next/navigation";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function TechTalkDetails() {
  const { id } = useParams();
  const talk = techTalks.find((item) => item.id === id);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  if (!talk) return <div className="p-20 text-white">Talk Not Found</div>;

  return (
    <section className="relative bg-black text-white py-24 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-orange-600/20 blur-[140px] rounded-full top-[-100px] right-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full bottom-[-100px] left-[-100px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <Link href="/experience" className="underline text-blue-800 ">Back to Past Page</Link>

        {/* Header */}
        <div className="mb-14 mt-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {talk.title}
          </h1>
          <p className="text-gray-400">{talk.college}</p>
          <p className="text-gray-500 mt-1">{talk.date}</p>
        </div>

        <div className="mb-20">
                  <h2 className="text-3xl font-semibold mb-10">
                    Event Highlights
                  </h2>

                  <div className="grid md:grid-cols-3 gap-8">
                    {/* Students */}
                    <div className="relative border border-neutral-800 rounded-2xl p-8 text-center overflow-hidden group">
                      {/* Glow */}
                      <div className="absolute w-40 h-40 bg-orange-600/20 blur-3xl rounded-full -top-10 -right-10 group-hover:bg-orange-600/30 transition" />

                      <h3 className="text-5xl font-bold text-orange-500 relative z-10">
                        {talk.highlights.studentCount}+
                      </h3>
                      <p className="text-gray-400 mt-3 relative z-10">
                        Students Attended
                      </p>
                    </div>

                    {/* Duration */}
                    <div className="relative  border border-neutral-800 rounded-2xl p-8 text-center overflow-hidden group">
                      <div className="absolute w-40 h-40 bg-purple-600/20 blur-3xl rounded-full -top-10 -right-10 group-hover:bg-purple-600/30 transition" />

                      <h3 className="text-5xl font-bold text-purple-500 relative z-10">
                        {talk.highlights.hourse} Hrs
                      </h3>
                      <p className="text-gray-400 mt-3 relative z-10">
                        Workshop Duration
                      </p>
                    </div>

                    {/* Topic */}
                    <div className="relative  border border-neutral-800 rounded-2xl p-8 text-center overflow-hidden group">
                      <div className="absolute w-40 h-40 bg-blue-600/20 blur-3xl rounded-full -top-10 -right-10 group-hover:bg-blue-600/30 transition" />

                      <h3 className="text-2xl font-semibold text-blue-400 relative z-10">
                        React SPA
                      </h3>
                      <p className="text-gray-400 mt-3 relative z-10">
                        Core Topic Covered
                      </p>
                    </div>
                  </div>
                </div>

        {/* Description Card */}
        <div className="bg-neutral-900/60 border border-neutral-800 backdrop-blur-xl p-8 rounded-2xl mb-16">
          <p className="text-gray-300 leading-relaxed">
            {talk.description}
          </p>
        </div>

        {/* Image Carousel */}
        <div className="relative mb-20">
          <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex">
              {talk.images.map((img, index) => (
                <div
                  key={index}
                  className="relative min-w-full h-[450px]"
                >
                  <Image
                    src={img}
                    alt="Workshop"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-orange-600 p-3 rounded-full transition"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-orange-600 p-3 rounded-full transition"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Feedback Videos */}
         {talk.feedbackVideos && (
            <>
        <h2 className="text-3xl font-semibold mb-8">
          Student Feedback
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {talk.feedbackVideos.map((video, index) => (
            <div
              key={index}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-lg"
            >
              <iframe
                src={video}
                className="w-full h-72"
                allowFullScreen
              />
            </div>
          ))}
        </div>
            </>
         )}

      </div>
    </section>
  );
}
