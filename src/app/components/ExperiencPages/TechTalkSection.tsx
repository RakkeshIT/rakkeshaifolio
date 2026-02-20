import Link from "next/link";
import { techTalks } from "./Data/techTalks";
import { Mic, Calendar } from "lucide-react";
import Image from "next/image";

export default function TechTalkSection() {
  return (
    <section id="techtalks" className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight">
            Tech Talks & Workshops
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Workshops and technical sessions delivered at colleges and institutions.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {techTalks.map((talk) => (
            <div
              key={talk.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
            >
                
              {/* Cover Image */}
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={talk.coverImage}
                  alt={talk.college}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Content */}
              <div className="p-8">

                <div className="flex items-center gap-3 mb-4">
                  <Mic className="text-orange-600" />
                  <h3 className="text-xl font-semibold leading-snug">
                    {talk.title}
                  </h3>
                </div>

                <p className="text-gray-700 font-medium">
                  {talk.college}
                </p>

                <div className="flex items-center gap-2 text-sm text-gray-500 mt-3 mb-6">
                  <Calendar size={16} />
                  {talk.date}
                </div>

                <Link
                  href={`/experience/${talk.id}`}
                  className="inline-flex items-center text-orange-600 font-medium group-hover:translate-x-1 transition-transform"
                >
                  View Full Details →
                </Link>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
