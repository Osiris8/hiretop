// app/api/candidatures/[jobId]/route.js
import { connectToDB } from "@/utils/database";
import Candidature from "@/models/candidature";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { jobId } = params;

  try {
    await connectToDB();
    const candidatures = await Candidature.find({ jobId });

    if (!candidatures) {
      return new NextResponse(
        JSON.stringify({ error: "No candidatures found" }),
        {
          status: 404,
        }
      );
    }

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
