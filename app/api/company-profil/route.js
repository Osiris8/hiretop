import Company from "@/models/company";
import { connectToDB } from "@/utils/database";

export const POST = async (request) => {
  const { userId, company, domain, size, position, telephone, country } =
    await request.json();

  try {
    await connectToDB();
    const companyProfil = new Company({
      userId: userId,
      company: company,
      domain: domain,
      size: size,
      position: position,
      telephone: telephone,
      country: country,
    });

    await companyProfil.save();
    return new Response(JSON.stringify(companyProfil), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new company profil", {
      status: 500,
    });
  }
};
