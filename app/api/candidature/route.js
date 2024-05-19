// app/api/candidature/route.js
import { connectToDB } from "@/utils/database";
import Candidature from "@/models/candidature";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { userId, jobId, cvUrl } = await request.json();

  try {
    await connectToDB();

    const newCandidature = new Candidature({
      userId,
      jobId,
      cvUrl,
    });

    await newCandidature.save();

    return new NextResponse(JSON.stringify(newCandidature), { status: 201 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: "Failed to submit candidature" }),
      {
        status: 500,
      }
    );
  }
}
