import { connectToDB } from "@/utils/database";
import TalentSkill from "@/models/talentSkill";
export const POST = async (request) => {
  const { skill, userId } = await request.json();

  try {
    await connectToDB();
    const newSkill = new TalentSkill({
      userId: userId,
      skill: skill,
    });

    await newSkill.save();

    return new Response(JSON.stringify(newSkill), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new status", { status: 500 });
  }
};
