import CompanyJob from "@/models/companyJob";
import CompanyAvatar from "@/models/companyAvatar";
import Company from "@/models/company";
import CompanyAbout from "@/models/companyAbout";
import CompanySocial from "@/models/companySocial";
import { connectToDB } from "@/utils/database";
import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";

export const POST = async (request) => {
  const {
    userId,
    title,
    description,
    profil,
    interview,
    mainImage,
    contract,
    country,
  } = await request.json();

  try {
    await connectToDB();
    const companyJob = new CompanyJob({
      userId: userId,
      title: title,
      description: description,
      profil: profil,
      interview: interview,
      mainImage: mainImage,
      contract: contract,
      country: country,
    });

    await companyJob.save();
    return new Response(JSON.stringify(companyJob), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new company profil", {
      status: 500,
    });
  }
};

export const GET = async (request) => {
  try {
    await connectToDB();

    const allJobs = await CompanyJob.find({});
    console.log("All jobs:", allJobs);

    const jobsWithCompanyInfo = await Promise.all(
      allJobs.map(async (job) => {
        const companyAvatar = await CompanyAvatar.findOne({
          userId: job.userId,
        }); // Rechercher par userId pour l'avatar
        const companyName = await Company.findOne({ userId: job.userId });
        const companyAbout = await CompanyAbout.findOne({ userId: job.userId });
        const companySocial = await CompanySocial.findOne({
          userId: job.userId,
        });

        console.log(
          "Job:",
          job,
          "Company Avatar:",
          companyAvatar,
          "Company Name:",
          companyName
        );

        const formattedDate = formatDistanceToNow(new Date(job.createdAt), {
          addSuffix: true,
          locale: fr,
        });

        return {
          ...job._doc,
          avatar: companyAvatar ? companyAvatar.avatar : null,
          companyName: companyName ? companyName.company : null,
          companyAbout: companyAbout ? companyAbout.companyAbout : null,
          companySocial: companySocial ? companySocial.companySocial : null,
          publicationDate: `publié ${formattedDate}`,
        };
      })
    );

    console.log("Jobs with company info:", jobsWithCompanyInfo);

    return new Response(JSON.stringify(jobsWithCompanyInfo), { status: 200 });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return new Response("Failed to fetch all jobs", { status: 500 });
  }
};
