import Talent from "@/models/talent";
import { connectToDB } from "@/utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

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

export const PATCH = async (request, { params }) => {
  try {
    await connectToDB();
    //const { userId } = params;
    const { firstname, lastname, telephone, country } = await request.json();
    const talentProfil = await Talent.findOne({ userId: params.id });

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

    talentProfil.firstname = firstname;
    talentProfil.lastname = lastname;
    talentProfil.telephone = telephone;
    talentProfil.country = country;

    await talentProfil.save();

    return new Response(JSON.stringify(talentProfil), {
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
