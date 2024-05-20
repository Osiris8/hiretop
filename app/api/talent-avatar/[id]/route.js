import TalentAvatar from "@/models/talentAvatar";
import { connectToDB } from "@/utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const talentAvatar = await TalentAvatar.find({ userId: params.id });

    if (!talentAvatar) {
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

    return new Response(JSON.stringify(talentAvatar), {
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
    const { userId, avatar } = await request.json();

    let talentAvatar = await TalentAvatar.findOne({ userId: params.id });

    if (!talentAvatar) {
      talentAvatar = new TalentAvatar({
        userId: params.id,
        avatar: avatar,
      });
    } else {
      talentAvatar.userId = userId;
      talentAvatar.avatar = avatar;
    }

    await talentAvatar.save();

    return new Response(JSON.stringify(talentAvatar), {
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
