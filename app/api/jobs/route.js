// app/api/company/jobs/route.js
import { connectToDB } from "@/utils/database";
import CompanyJob from "@/models/companyJob";
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
    const jobs = await CompanyJob.find({ userId });

    if (!jobs) {
      return new NextResponse(JSON.stringify({ error: "No jobs found" }), {
        status: 404,
      });
    }

    return new NextResponse(JSON.stringify(jobs), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: "Failed to fetch jobs" }), {
      status: 500,
    });
  }
}
