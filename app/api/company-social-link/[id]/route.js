import CompanySocial from "@/models/companySocial";
import { connectToDB } from "@/utils/database";
export const PATCH = async (request, { params }) => {
  try {
    await connectToDB();
    const {
      facebook,
      github,
      twitter,
      linkedin,
      instagram,
      youtube,
      tiktok,
      website,
      other,
    } = await request.json();

    // Chercher le profil existant ou initialiser un nouveau document
    let companySocialLink = await CompanySocial.findOne({ userId: params.id });

    // Si le profil n'existe pas, créer un nouveau profil
    if (!companySocialLink) {
      companySocialLink = new CompanySocial({
        userId: params.id,
        facebook: facebook,
        github: github,
        twitter: twitter,
        linkedin: linkedin,
        instagram: instagram,
        youtube: youtube,
        tiktok: tiktok,
        website: website,
        other: other,
      });
    } else {
      companySocialLink.facebook = facebook;
      companySocialLink.github = github;
      companySocialLink.twitter = twitter;
      companySocialLink.linkedin = linkedin;
      companySocialLink.instagram = instagram;
      companySocialLink.youtube = youtube;
      companySocialLink.tiktok = tiktok;
      companySocialLink.website = website;
      companySocialLink.other = other;
    }

    await companySocialLink.save();

    return new Response(JSON.stringify(companySocialLink), {
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
