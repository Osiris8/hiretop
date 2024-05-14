import CompanyAbout from "@/models/companyAbout";
import { connectToDB } from "@/utils/database";
export const PATCH = async (request, { params }) => {
  try {
    await connectToDB(); // Assurez-vous que cette fonction est correctement définie pour établir une connexion à la base de données
    const { companyAbout } = await request.json();

    // Chercher le profil existant ou initialiser un nouveau document
    let companyAboutData = await CompanyAbout.findOne({ userId: params.id });

    // Si le profil n'existe pas, créer un nouveau profil
    if (!companyAboutData) {
      companyAboutData = new CompanyAbout({
        userId: params.id,
        companyAbout: companyAbout,
      });
    } else {
      // Mettre à jour le profil existant
      companyAboutData.companyAbout = companyAbout;
    }

    // Sauvegarder le nouveau profil ou les modifications
    await companyAboutData.save();

    return new Response(JSON.stringify(companyAboutData), {
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
