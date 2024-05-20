import Company from "@/models/company";
import CompanyAbout from "@/models/companyAbout";
import CompanyAvatar from "@/models/companyAvatar";
import CompanySocial from "@/models/companySocial";
import { connectToDB } from "@/utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const company = await Company.find({ userId: params.id });
    const companyAbout = await CompanyAbout.find({ userId: params.id });
    const companyAvatar = await CompanyAvatar.find({
      userId: params.id,
    });
    const companySocial = await CompanySocial.find({
      userId: params.id,
    });

    if (!company || !companyAbout || !companyAvatar || !companySocial) {
      return new Response(JSON.stringify({ error: "Company data not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    return new Response(
      JSON.stringify({ company, companyAbout, companyAvatar, companySocial }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
