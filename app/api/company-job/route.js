import CompanyJob from "@/components/CompanyJob";
import { connectToDB } from "@/utils/database";

export const POST = async (request) => {
  try {
    await connectToDB();
    const { userId, title, description, profil, interview } =
      await request.json();
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
    return new Response("Failed to create a new status", { status: 500 });
  }
};
