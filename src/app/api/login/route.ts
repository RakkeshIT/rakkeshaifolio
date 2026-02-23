import { createClient } from "@/app/lib/supabase";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    const supabase = await createClient();
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and Password Missing" },
        { status: 400 },
      );
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.log("Sign in Error: ", error.message);
      return NextResponse.json(
        { message: "UnAuthorized! Sign in Error: " },
        { status: 401 },
      );
    }

    return NextResponse.json(
      {
        message: "Login SuccessFully",
        data: data.user,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Login Un-SuccessFully",
        error,
      },
      { status: 500 },
    );
  }
}
