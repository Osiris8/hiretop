import Company from "@/models/company";
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
    const { company, domain, size, position, telephone, country } =
      await request.json();
    const companyProfil = await Company.findOne({ userId: params.id });

    if (!companyProfil) {
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

    companyProfil.company = company;
    companyProfil.domain = domain;
    companyProfil.size = size;
    companyProfil.position = position;
    companyProfil.telephone = telephone;
    companyProfil.country = country;

    await companyProfil.save();

    return new Response(JSON.stringify(companyProfil), {
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
