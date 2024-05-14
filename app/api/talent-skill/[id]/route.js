import { connectToDB } from "@/utils/database";
import TalentSkill from "@/models/talentSkill";
export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const talentSkill = await TalentSkill.find({ userId: params.id });

    if (!talentSkill) {
      return new Response(JSON.stringify({ error: "Talent Skill not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    return new Response(JSON.stringify(talentSkill), {
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
