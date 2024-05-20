import TalentSocial from "@/models/talentSocial";
import { connectToDB } from "@/utils/database";
export const PATCH = async (request, { params }) => {
  try {
    await connectToDB();
    const { facebook, github, twitter, linkedin } = await request.json();

    let talentSocialLink = await TalentSocial.findOne({ userId: params.id });

    if (!talentSocialLink) {
      talentSocialLink = new TalentSocial({
        userId: params.id,
        facebook: facebook,
        github: github,
        twitter: twitter,
        linkedin: linkedin,
      });
    } else {
      talentSocialLink.facebook = facebook;
      talentSocialLink.github = github;
      talentSocialLink.twitter = twitter;
      talentSocialLink.linkedin = linkedin;
    }

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

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const socialLinks = await TalentSocial.findOne({ userId: params.id });

    if (!socialLinks) {
      return new Response(JSON.stringify({ error: "Social links not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    return new Response(JSON.stringify(socialLinks), {
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
