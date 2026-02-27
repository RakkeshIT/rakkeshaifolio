"use client";

import { useState, ChangeEvent, FormEvent, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { BookOpen, User, DollarSign, FileText, Layers } from "lucide-react";

/* ============================
   TYPES
============================ */

type CourseLevel = "Beginner" | "Intermediate" | "Advanced";
type CourseStatus = "Draft" | "Published";

interface CourseForm {
  title: string;
  category: string;
  level: CourseLevel;
  price: string;
  discountPrice: string;
  duration: string;
  language: string;
  shortDescription: string;
  description: string;
  learnings: string;
  requirements: string;
  instructorName: string;
  instructorRole: string;
  instructorBio: string;
  instructorLinkedIn: string;
  instructorPortfolio: string;
  syllabusLink: string;
  previewVideoLink: string;
  resourceLink: string;
  status: CourseStatus;
}

export default function CreateCoursePage() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const [form, setForm] = useState<CourseForm>({
    title: "",
    category: "",
    level: "Beginner",
    price: "",
    discountPrice: "",
    duration: "",
    language: "English",
    shortDescription: "",
    description: "",
    learnings: "",
    requirements: "",
    instructorName: "",
    instructorRole: "",
    instructorBio: "",
    instructorLinkedIn: "",
    instructorPortfolio: "",
    syllabusLink: "",
    previewVideoLink: "",
    resourceLink: "",
    status: "Draft",
  });

  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [instructorImage, setInstructorImage] = useState<File | null>(null);

  /* ============================
     HANDLERS
  ============================ */

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!thumbnail) {
      alert("Please upload course thumbnail");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });

      formData.append("thumbnail", thumbnail);

      if (instructorImage) {
        formData.append("instructorImage", instructorImage);
      }

      const res = await fetch("/api/course", {
        method: "POST",
        body: formData,
      });

      const data: { message: string } = await res.json();

      if (!res.ok) throw new Error(data.message);

      alert("Course created successfully!");
      router.push("/admin/courses");
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  /* ============================
     UI
  ============================ */

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-10">
        <h1 className="text-4xl font-bold text-orange-600 mb-10">
          Create New Course
        </h1>

        <form onSubmit={handleSubmit} className="space-y-12">
          <Section title="Basic Information" icon={<BookOpen size={20} />}>
            <Input label="Course Title" name="title" value={form.title} onChange={handleChange} required />
            <Input label="Category" name="category" value={form.category} onChange={handleChange} />
            <Select label="Level" name="level" value={form.level} onChange={handleChange}
              options={["Beginner", "Intermediate", "Advanced"]} />
            <Input type="file" label="Thumbnail" onFileChange={setThumbnail} />
          </Section>

          <Section title="Pricing & Details" icon={<DollarSign size={20} />}>
            <Input label="Price ($)" name="price" value={form.price} onChange={handleChange} />
            <Input label="Discount Price ($)" name="discountPrice" value={form.discountPrice} onChange={handleChange} />
            <Input label="Duration" name="duration" value={form.duration} onChange={handleChange} />
            <Select label="Language" name="language" value={form.language} onChange={handleChange}
              options={["English", "Tamil", "Hindi"]} />
          </Section>

          <Section title="Course Content" icon={<FileText size={20} />}>
            <Textarea label="Short Description" name="shortDescription" value={form.shortDescription} onChange={handleChange} />
            <Textarea label="Full Description" name="description" value={form.description} onChange={handleChange} />
            <Textarea label="What You Will Learn" name="learnings" value={form.learnings} onChange={handleChange} />
            <Textarea label="Requirements" name="requirements" value={form.requirements} onChange={handleChange} />
          </Section>

          <Section title="Course Syllabus & Resources" icon={<Layers size={20} />}>
            <Input label="Syllabus Link" name="syllabusLink" value={form.syllabusLink} onChange={handleChange} />
            <Input label="Preview Video Link" name="previewVideoLink" value={form.previewVideoLink} onChange={handleChange} />
            <Input label="Resource Link" name="resourceLink" value={form.resourceLink} onChange={handleChange} />
          </Section>

          <Section title="Instructor Details" icon={<User size={20} />}>
            <Input label="Instructor Name" name="instructorName" value={form.instructorName} onChange={handleChange} />
            <Input label="Instructor Role" name="instructorRole" value={form.instructorRole} onChange={handleChange} />
            <Textarea label="Instructor Bio" name="instructorBio" value={form.instructorBio} onChange={handleChange} />
            <Input label="LinkedIn" name="instructorLinkedIn" value={form.instructorLinkedIn} onChange={handleChange} />
            <Input label="Portfolio" name="instructorPortfolio" value={form.instructorPortfolio} onChange={handleChange} />
            <Input type="file" label="Instructor Image" onFileChange={setInstructorImage} />
            <Select label="Status" name="status" value={form.status} onChange={handleChange}
              options={["Completed", "Upcoming", "Ongoing"]} />
          </Section>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-10 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
            >
              {loading ? "Saving..." : "Create Course"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* ============================
   REUSABLE COMPONENTS
============================ */

interface SectionProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

function Section({ title, icon, children }: SectionProps) {
  return (
    <section className="bg-white border border-orange-400 border-orange-200 rounded-3xl p-8 shadow-sm">
      <h2 className="flex items-center gap-3 text-2xl font-semibold text-orange-600 mb-8">
        <span className="bg-orange-100 p-2 rounded-lg">{icon}</span>
        {title}
      </h2>
      <div className="grid md:grid-cols-2 gap-6">{children}</div>
    </section>
  );
}

interface InputProps {
  label: string;
  name?: string;
  type?: string;
  value?: string;
  required?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onFileChange?: (file: File | null) => void;
}

function Input({ label, type = "text", name, value, required, onChange, onFileChange }: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-600">{label}</label>
      {type === "file" ? (
        <input
          type="file"
          onChange={(e) => onFileChange?.(e.target.files?.[0] ?? null)}
          className="border rounded-lg px-4 py-2"
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          required={required}
          onChange={onChange}
          className="border border-orange-400 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none"
        />
      )}
    </div>
  );
}

interface TextareaProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

function Textarea({ label, name, value, onChange }: TextareaProps) {
  return (
    <div className="flex flex-col gap-2 md:col-span-2">
      <label className="text-sm font-medium text-gray-600">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={4}
        className="border border-orange-500 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none"
      />
    </div>
  );
}

interface SelectProps {
  label: string;
  name: string;
  value: string;
  options: string[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

function Select({ label, name, value, options, onChange }: SelectProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-600">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="border border-orange-400 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none"
      >
        {options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}