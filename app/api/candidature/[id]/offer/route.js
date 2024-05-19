// app/api/candidature/[id]/offer/route.js
import { connectToDB } from "@/utils/database";
import Candidature from "../../../../../models/Candidature";
import { NextResponse } from "next/server";

export async function PATCH(request, { params }) {
  const { id } = params;
  const { offerUrl } = await request.json();

  try {
    await connectToDB();
    const candidature = await Candidature.findByIdAndUpdate(
      id,
      { status: "Offre envoyée", offerUrl },
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
    return new NextResponse(JSON.stringify({ error: "Failed to send offer" }), {
      status: 500,
    });
  }
}
