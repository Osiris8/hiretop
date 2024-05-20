import CompanyAbout from "@/models/companyAbout";
import { connectToDB } from "@/utils/database";
export const PATCH = async (request, { params }) => {
  try {
    await connectToDB();
    const { companyAbout } = await request.json();

    let companyAboutData = await CompanyAbout.findOne({ userId: params.id });

    if (!companyAboutData) {
      companyAboutData = new CompanyAbout({
        userId: params.id,
        companyAbout: companyAbout,
      });
    } else {
      companyAboutData.companyAbout = companyAbout;
    }

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
