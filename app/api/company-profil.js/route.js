import Company from "@models/company";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
  const { companyName, sector, size, address, telephone, userId } =
    await request.json();

  try {
    await connectToDB();
    const companyProfil = new Company({
      companyName,
      sector,
      size,
      address,
      telephone,
      userId: userId,
    });

    await companyProfil.save();
    return new Response(JSON.stringify(companyProfil), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new company profil", {
      status: 500,
    });
  }
};
