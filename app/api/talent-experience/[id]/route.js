import { connectToDB } from "@/utils/database";
import TalentExperience from "@/models/talentExperience";
export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const talentExperience = await TalentExperience.find({ userId: params.id });

    if (!talentExperience) {
      return new Response(JSON.stringify({ error: "Talent Skill not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    return new Response(JSON.stringify(talentExperience), {
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

export const DELETE = async (request, { params }) => {
  const { id } = params;
  try {
    await connectToDB();
    const talentExperience = await TalentExperience.findByIdAndDelete(id);
    if (!talentExperience) {
      return new Response(JSON.stringify({ error: "Talent Skill not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    return new Response(JSON.stringify(talentExperience), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to delete data" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
