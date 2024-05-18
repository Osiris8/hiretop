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
    await connectToDB(); // Connexion à la base de données

    const allJobs = await CompanyJob.find({}); // Récupération de tous les jobs
    console.log("All jobs:", allJobs);

    // Pour chaque job, récupérer les informations de l'avatar et du nom de la compagnie
    const jobsWithCompanyInfo = await Promise.all(
      allJobs.map(async (job) => {
        const companyAvatar = await CompanyAvatar.findOne({
          userId: job.userId,
        }); // Rechercher par userId pour l'avatar
        const companyName = await Company.findOne({ userId: job.userId }); // Rechercher par userId pour le nom
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

        // Retourner un nouvel objet job avec les données du job, l'avatar et le nom de la compagnie
        return {
          ...job._doc, // Inclure toutes les propriétés du document job
          avatar: companyAvatar ? companyAvatar.avatar : null, // Ajouter la propriété avatar
          companyName: companyName ? companyName.company : null, // Ajouter la propriété companyName
          companyAbout: companyAbout ? companyAbout.companyAbout : null,
          companySocial: companySocial ? companySocial.companySocial : null,
          publicationDate: `publié ${formattedDate}`, // Ajouter la date formatée
        };
      })
    );

    console.log("Jobs with company info:", jobsWithCompanyInfo);

    // Retourner la réponse avec les jobs et les informations des compagnies
    return new Response(JSON.stringify(jobsWithCompanyInfo), { status: 200 });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return new Response("Failed to fetch all jobs", { status: 500 });
  }
};
