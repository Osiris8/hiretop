import TalentNextProfil from "@/models/talentNextProfil";
import { connectToDB } from "@/utils/database";
export const PATCH = async (request, { params }) => {
  try {
    await connectToDB(); // Assurez-vous que cette fonction est correctement définie pour établir une connexion à la base de données
    const { level, remote, freelance, onsite, available, city, country, bio } =
      await request.json();

    // Chercher le profil existant ou initialiser un nouveau document
    let talentNextProfil = await TalentNextProfil.findOne({
      userId: params.id,
    });

    // Si le profil n'existe pas, créer un nouveau profil
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
      // Mettre à jour le profil existant
      talentNextProfil.level = level;
      talentNextProfil.remote = remote;
      talentNextProfil.freelance = freelance;
      talentNextProfil.onsite = onsite;
      talentNextProfil.available = available;
      talentNextProfil.city = city;
      talentNextProfil.country = country;
      talentNextProfil.bio = bio;
    }

    // Sauvegarder le nouveau profil ou les modifications
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
