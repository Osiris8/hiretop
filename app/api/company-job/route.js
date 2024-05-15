import CompanyJob from "@/models/companyJob";
import { connectToDB } from "@/utils/database";

export const POST = async (request) => {
  const { userId, title, description, profil, interview } =
    await request.json();

  try {
    await connectToDB();
    const companyJob = new CompanyJob({
      userId: userId,
      title: title,
      description: description,
      profil: profil,
      interview: interview,
    });

    await companyJob.save();
    return new Response(JSON.stringify(companyJob), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new company profil", {
      status: 500,
    });
  }
};
