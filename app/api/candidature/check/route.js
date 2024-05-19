// app/api/candidature/check/route.js
import { connectToDB } from "@/utils/database";
import Candidature from "@/models/candidature";
import { NextResponse } from "next/server";

export async function GET(request) {
  const userId = request.headers.get("user-id");
  const jobId = request.headers.get("job-id");

  if (!userId || !jobId) {
    return new NextResponse(
      JSON.stringify({ error: "Missing user ID or job ID" }),
      {
        status: 400,
      }
    );
  }

  try {
    await connectToDB();

    const existingCandidature = await Candidature.findOne({ userId, jobId });

    if (existingCandidature) {
      return new NextResponse(JSON.stringify({ exists: true }), {
        status: 200,
      });
    }

    return new NextResponse(JSON.stringify({ exists: false }), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: "Failed to check candidature" }),
      {
        status: 500,
      }
    );
  }
}
