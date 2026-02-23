export interface Speaker {
  name: string;
  role: string;
  image: File | null;   // changed from string
  bio: string;
  linkedin: string;
}

export interface WebinarFormData {
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  coverImage: File | null;  // changed

  date: string;
  startTime: string;
  endTime: string;
  duration: string;

  locationType: "Online" | "Offline" | "Hybrid";
  location: string;
  venue: string;
  status: "Upcoming" | "Completed" | "Cancelled";

  agendaLink: string;
  registrationLink: string;

  speakers: Speaker[];

  topicsCovered: string[];
  technologiesDiscussed: string[];
  galleryImages: File[];     // changed
  testimonials: string[];
}