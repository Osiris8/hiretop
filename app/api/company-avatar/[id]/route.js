import CompanyAvatar from "@/models/companyAvatar";
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
    await connectToDB(); // Assurez-vous que cette fonction est correctement définie pour établir une connexion à la base de données
    const { userId, avatar } = await request.json();

    // Chercher le profil existant ou initialiser un nouveau document
    let companyAvatar = await CompanyAvatar.findOne({ userId: params.id });

    // Si le profil n'existe pas, créer un nouveau profil
    if (!companyAvatar) {
      companyAvatar = new CompanyAvatar({
        userId: params.id,
        avatar: avatar,
      });
    } else {
      // Mettre à jour le profil existant
      companyAvatar.userId = userId;
      companyAvatar.avatar = avatar;
    }

    // Sauvegarder le nouveau profil ou les modifications
    await companyAvatar.save();

    return new Response(JSON.stringify(companyAvatar), {
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
