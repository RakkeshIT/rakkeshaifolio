import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const folder = searchParams.get("folder");
    console.log("Folder param:", folder);

    if (!folder) {
      return NextResponse.json({message: "Folder is empty", status: 404});
    }

    const dirPath = path.join(process.cwd(), "public/ProjectDetails", folder);

    const file = fs.readdirSync(dirPath);

    const images = file.map((file) => `/ProjectDetails/${folder}/${file}`);

    return NextResponse.json(images);
  } catch (error) {
    return NextResponse.json([], { status: 404 });
  }
}
