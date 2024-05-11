import Talent from "@/models/talent";
import { connectToDB } from "@/utils/database";

export const POST = async (request) => {
  const { userId, firstname, lastname, telephone, country } =
    await request.json();

  try {
    await connectToDB();
    const talentProfil = new Talent({
      userId: userId,
      firstname: firstname,
      lastname: lastname,
      telephone: telephone,
      country: country,
    });

    await talentProfil.save();
    return new Response(JSON.stringify(talentProfil), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new company profil", {
      status: 500,
    });
  }
};
