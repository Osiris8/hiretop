import TalentSocial from "@/models/talentSocial";
import { connectToDB } from "@/utils/database";
export const PATCH = async (request, { params }) => {
  try {
    await connectToDB(); // Assurez-vous que cette fonction est correctement définie pour établir une connexion à la base de données
    const { facebook, github, twitter, linkedin } = await request.json();

    // Chercher le profil existant ou initialiser un nouveau document
    let talentSocialLink = await TalentSocial.findOne({ userId: params.id });

    // Si le profil n'existe pas, créer un nouveau profil
    if (!talentSocialLink) {
      talentSocialLink = new TalentSocial({
        userId: params.id,
        facebook: facebook,
        github: github,
        twitter: twitter,
        linkedin: linkedin,
      });
    } else {
      // Mettre à jour le profil existant
      talentSocialLink.facebook = facebook;
      talentSocialLink.github = github;
      talentSocialLink.twitter = twitter;
      talentSocialLink.linkedin = linkedin;
    }

    // Sauvegarder le nouveau profil ou les modifications
    await talentSocialLink.save();

    return new Response(JSON.stringify(talentSocialLink), {
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
