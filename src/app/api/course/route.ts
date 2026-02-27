import cloudinary from "@/app/lib/cloudinaryClient";
import { supabaseAdmin } from "@/app/lib/supabaseRoleClient";
import { NextRequest, NextResponse } from "next/server";

/* ----------------------------- TYPES ----------------------------- */

type CourseLevel = "Beginner" | "Intermediate" | "Advanced";
type CourseStatus = "Draft" | "Published";

interface CreateCoursePayload {
  title: string;
  category?: string;
  level: CourseLevel;
  price?: number;
  discountPrice?: number;
  duration?: string;
  language?: string;
  shortDescription?: string;
  description?: string;
  learnings?: string;
  requirements?: string;
  syllabusLink?: string;
  previewVideoLink?: string;
  resourceLink?: string;
  instructorName?: string;
  instructorRole?: string;
  instructorBio?: string;
  instructorLinkedIn?: string;
  instructorPortfolio?: string;
  status: CourseStatus;
}

/* ----------------------------- API ----------------------------- */

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    /* ---------- Extract Files ---------- */

    const thumbnail = formData.get("thumbnail") as File | null;
    const instructorImage = formData.get("instructorImage") as File | null;

    /* ---------- Extract Fields ---------- */

    const payload: CreateCoursePayload = {
      title: String(formData.get("title") || ""),
      category: String(formData.get("category") || ""),
      level: (formData.get("level") as CourseLevel) || "Beginner",
      price: formData.get("price")
        ? Number(formData.get("price"))
        : undefined,
      discountPrice: formData.get("discountPrice")
        ? Number(formData.get("discountPrice"))
        : undefined,
      duration: String(formData.get("duration") || ""),
      language: String(formData.get("language") || ""),
      shortDescription: String(formData.get("shortDescription") || ""),
      description: String(formData.get("description") || ""),
      learnings: String(formData.get("learnings") || ""),
      requirements: String(formData.get("requirements") || ""),
      syllabusLink: String(formData.get("syllabusLink") || ""),
      previewVideoLink: String(formData.get("previewVideoLink") || ""),
      resourceLink: String(formData.get("resourceLink") || ""),
      instructorName: String(formData.get("instructorName") || ""),
      instructorRole: String(formData.get("instructorRole") || ""),
      instructorBio: String(formData.get("instructorBio") || ""),
      instructorLinkedIn: String(formData.get("instructorLinkedIn") || ""),
      instructorPortfolio: String(formData.get("instructorPortfolio") || ""),
      status: (formData.get("status") as CourseStatus) || "Draft",
    };

    /* ---------- Validation ---------- */

    if (!payload.title.trim()) {
      return NextResponse.json(
        { message: "Course title is required" },
        { status: 400 }
      );
    }

    if (payload.price && payload.discountPrice) {
      if (payload.discountPrice > payload.price) {
        return NextResponse.json(
          { message: "Discount price cannot be greater than price" },
          { status: 400 }
        );
      }
    }

    /* ---------- Upload Images ---------- */

    let thumbnailUrl = "";
    let instructorImageUrl = "";

    if (thumbnail) {
      const bytes = await thumbnail.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const uploadRes = await cloudinary.uploader.upload(
        `data:${thumbnail.type};base64,${buffer.toString("base64")}`,
        { folder: "courses/thumbnails" }
      );

      thumbnailUrl = uploadRes.secure_url;
    }

    if (instructorImage) {
      const bytes = await instructorImage.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const uploadRes = await cloudinary.uploader.upload(
        `data:${instructorImage.type};base64,${buffer.toString("base64")}`,
        { folder: "courses/instructors" }
      );

      instructorImageUrl = uploadRes.secure_url;
    }

    /* ---------- Insert Into Supabase ---------- */

    const { error } = await supabaseAdmin.from("courses").insert({
      title: payload.title,
      category: payload.category,
      level: payload.level,
      price: payload.price,
      discount_price: payload.discountPrice,
      duration: payload.duration,
      language: payload.language,
      short_description: payload.shortDescription,
      description: payload.description,
      learnings: payload.learnings,
      requirements: payload.requirements,
      syllabus_link: payload.syllabusLink,
      preview_video_link: payload.previewVideoLink,
      resource_link: payload.resourceLink,
      thumbnail_url: thumbnailUrl,
      instructor_image_url: instructorImageUrl,
      instructor_name: payload.instructorName,
      instructor_role: payload.instructorRole,
      instructor_bio: payload.instructorBio,
      instructor_linkedin: payload.instructorLinkedIn,
      instructor_portfolio: payload.instructorPortfolio,
      status: payload.status,
    });

    if (error) {
      return NextResponse.json(
        { message: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Course created successfully" },
      { status: 201 }
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message)
      return NextResponse.json(
        { message: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

// GET:  /api/course
export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from("courses")
      .select("*")

    if (error) {
      console.log(error.message)
      return NextResponse.json({ message: error.message }, { status: 500 });
    }

    if(!data){
      return NextResponse.json({ message: "Data en Emty" }, { status: 500 });
    }
    return NextResponse.json(
      { message: "Courses Fetched", data },
      { status: 200 },
    );
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Something went wrong";

    return NextResponse.json({ message }, { status: 500 });
  }
}