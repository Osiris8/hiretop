import CompanyAvatar from "@/models/companyAvatar";
import { connectToDB } from "@/utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const companyAvatar = await CompanyAvatar.find({ userId: params.id });

    if (!companyAvatar) {
      return new Response(
        JSON.stringify({ error: "Company Avatar not found" }),
        {
          status: 404,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    return new Response(JSON.stringify(companyAvatar), {
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

    let companyAvatar = await CompanyAvatar.findOne({ userId: params.id });

    if (!companyAvatar) {
      companyAvatar = new CompanyAvatar({
        userId: params.id,
        avatar: avatar,
      });
    } else {
      companyAvatar.userId = userId;
      companyAvatar.avatar = avatar;
    }

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
