import { connectToDB } from "@/utils/database";
import TalentExperience from "@/models/talentExperience";
export const POST = async (request) => {
  const { description, userId } = await request.json();

  try {
    await connectToDB();
    const newExperience = new TalentExperience({
      userId: userId,
      description: description,
    });

    await newExperience.save();

    return new Response(JSON.stringify(newExperience), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new status", { status: 500 });
  }
};
