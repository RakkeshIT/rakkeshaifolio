import { createClient } from "@/app/lib/supabase";
import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

   const supabase = createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANO_KEY!,
    {
      cookies: {
        getAll() {
          return req.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            res.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // 1️⃣ Get logged-in user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  // 2️⃣ Get role for THIS user only
  const { data: profile, error } = await supabase
    .from("users")
    .select("role")
    .eq("id", user.id)
    .single();

  if (error || !profile) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // 3️⃣ Role protection
  if (profile.role !== "Admin") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // 4️⃣ Allow access
  return res;
}

export const config = {
  matcher: ["/dashboard/:path*"],
};