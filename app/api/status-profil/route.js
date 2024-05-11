import Status from "@/models/status";
import { connectToDB } from "@/utils/database";

export const POST = async (request) => {
  const { userId, typeOfProfile } = await request.json();

  try {
    await connectToDB();
    const newStatus = new Status({
      userId: userId,
      typeOfProfile: typeOfProfile,
    });
    await newStatus.save();
    return new Response(JSON.stringify(newStatus), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new status", { status: 500 });
  }
};
