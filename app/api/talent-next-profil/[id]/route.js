import TalentNextProfil from "@/models/talentNextProfil";
import { connectToDB } from "@/utils/database";
export const PATCH = async (request, { params }) => {
  try {
    await connectToDB();
    const { level, remote, freelance, onsite, available, city, country, bio } =
      await request.json();

    let talentNextProfil = await TalentNextProfil.findOne({
      userId: params.id,
    });

    if (!talentNextProfil) {
      talentNextProfil = new TalentNextProfil({
        userId: params.id,
        level: level,
        remote: remote,
        freelance: freelance,
        onsite: onsite,
        available: available,
        city: city,
        country: country,
        bio: bio,
      });
    } else {
      talentNextProfil.level = level;
      talentNextProfil.remote = remote;
      talentNextProfil.freelance = freelance;
      talentNextProfil.onsite = onsite;
      talentNextProfil.available = available;
      talentNextProfil.city = city;
      talentNextProfil.country = country;
      talentNextProfil.bio = bio;
    }

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

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const talentNextProfil = await TalentNextProfil.find({ userId: params.id });

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

    return new Response(JSON.stringify(talentNextProfil), {
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
