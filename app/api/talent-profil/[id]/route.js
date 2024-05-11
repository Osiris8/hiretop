import Talent from "@/models/talent";
import { connectToDB } from "@/utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    //const { userId } = req.query; // Extraction de userId de l'URL

    const talentProfil = await Talent.find({ userId: params.id });

    if (!talentProfil) {
      return new Response(
        JSON.stringify({ error: "Talent profil not found" }),
        {
          status: 404,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    return new Response(JSON.stringify(talentProfil), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
