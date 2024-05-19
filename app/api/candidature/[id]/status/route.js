// app/api/candidature/[id]/status/route.js
import { connectToDB } from "@/utils/database";
import Candidature from "../../../../../models/candidature";
import { NextResponse } from "next/server";

export async function PATCH(request, { params }) {
  const { id } = params;
  const { status } = await request.json();

  try {
    await connectToDB();
    const candidature = await Candidature.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!candidature) {
      return new NextResponse(
        JSON.stringify({ error: "Candidature not found" }),
        {
          status: 404,
        }
      );
    }

    return new NextResponse(JSON.stringify(candidature), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: "Failed to update candidature" }),
      {
        status: 500,
      }
    );
  }
}
