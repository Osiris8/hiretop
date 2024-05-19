// app/api/candidatures/route.js
import { connectToDB } from "@/utils/database";
import Candidature from "@/models/candidature";
import { NextResponse } from "next/server";

export async function GET(request) {
  const userId = request.headers.get("user-id");

  if (!userId) {
    return new NextResponse(JSON.stringify({ error: "Missing user ID" }), {
      status: 400,
    });
  }

  try {
    await connectToDB();

    const candidatures = await Candidature.find({ userId });

    return new NextResponse(JSON.stringify(candidatures), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: "Failed to fetch candidatures" }),
      {
        status: 500,
      }
    );
  }
}
