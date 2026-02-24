import { supabaseAdmin } from "@/app/lib/supabaseRoleClient";
import {NextRequest, NextResponse } from "next/server";

// GET:  /api/webinars
export async function GET(req: NextRequest,context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    console.log("Id: ", id)
    const { data, error } = await supabaseAdmin
      .from("webinars")
      .select("*")
      .eq("id", id)
      .maybeSingle();
    if (error) {
      console.log(error.message);
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
    return NextResponse.json(
      { message: "Webinar Fetched", data },
      { status: 200 },
    );
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Something went wrong";
    console.log(message)
    return NextResponse.json({ message }, { status: 500 });
  }
}
