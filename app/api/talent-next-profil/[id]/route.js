import TalentNextProfil from "@/models/talentNextProfil";
import { connectToDB } from "@/utils/database";

export const PATCH = async (request, { params }) => {
  try {
    await connectToDB();
    const { level, remote, freelance, onsite, available, bio } =
      await request.json();
    const talentNextProfil = await TalentNextProfil.findOne({
      userId: params.id,
    });

    if (!talentNextProfil) {
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

    talentNextProfil.level = level;
    talentNextProfil.remote = remote;
    talentNextProfil.freelance = freelance;
    talentNextProfil.onsite = onsite;
    talentNextProfil.available = available;
    talentNextProfil.bio = bio;

    await talentNextProfil.save();

    return new Response(JSON.stringify(talentNextProfil), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to update data" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
