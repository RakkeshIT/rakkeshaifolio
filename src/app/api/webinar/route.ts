import cloudinary from "@/app/lib/cloudinaryClient";
import { supabaseAdmin } from "@/app/lib/supabaseRoleClient";
import { NextRequest, NextResponse } from "next/server";
import { UploadApiResponse } from "cloudinary";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const coverImage = formData.get("coverImage") as File;

    if (!coverImage) {
      return NextResponse.json(
        { message: "Cover image is required" },
        { status: 400 },
      );
    }

    // Convert file to buffer
    const bytes = await coverImage.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Upload to Cloudinary
    const uploadResult = await new Promise<UploadApiResponse>(
      (resolve, reject) => {
        cloudinary.uploader
          .upload_stream({ folder: "webinars" }, (error, result) => {
            if (error) return reject(error);
            if (!result) return reject(new Error("Upload failed"));
            resolve(result);
          })
          .end(buffer);
      },
    );

    const imageUrl = uploadResult.secure_url;

    // Prepare DB payload
    const webinarData = {
      title: formData.get("title"),
      short_description: formData.get("shortDescription"),
      description: formData.get("description"),
      date: formData.get("date"),
      start_time: formData.get("startTime"),
      end_time: formData.get("endTime"),
      duration: formData.get("duration"),
      location_type: formData.get("locationType"),
      location: formData.get("location"),
      venue: formData.get("venue"),
      status: formData.get("status"),
      agenda_link: formData.get("agendaLink"),
      registration_link: formData.get("registrationLink"),
      speaker_name: formData.get("speakerName"),
      speaker_role: formData.get("speakerRole"),
      speaker_linkedin: formData.get("speakerLinkedIn"),
      speaker_portfolio: formData.get("speakerPortfolio"),
      cover_image: imageUrl,
    };

    const { data, error } = await supabaseAdmin
      .from("webinars")
      .insert([webinarData])
      .select()
      .single();

    if (error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }

    return NextResponse.json(
      { message: "Webinar created", data },
      { status: 201 },
    );
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Something went wrong";

    return NextResponse.json({ message }, { status: 500 });
  }
}
// GET:  /api/webinars
export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from("webinars")
      .select("*")
    if (error) {
      console.log(error.message)
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
    return NextResponse.json(
      { message: "Webinar Fetched", data },
      { status: 200 },
    );
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Something went wrong";

    return NextResponse.json({ message }, { status: 500 });
  }
}
