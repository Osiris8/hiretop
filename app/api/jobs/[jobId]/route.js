import CompanyJob from "@/models/companyJob";
import Company from "@/models/company";
import CompanyAvatar from "@/models/companyAvatar";
import CompanySocial from "@/models/companySocial";
import CompanyAbout from "@/models/companyAbout";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { jobId } = params;

  try {
    await connectToDB();

    const job = await CompanyJob.findById(jobId);

    if (!job) {
      return new NextResponse(JSON.stringify({ error: "Job not found" }), {
        status: 404,
      });
    }

    const company = await Company.findOne({ userId: job.userId });
    const companyAvatar = await CompanyAvatar.findOne({ userId: job.userId });
    const companySocial = await CompanySocial.findOne({ userId: job.userId });
    const companyAbout = await CompanyAbout.findOne({ userId: job.userId });

    const jobWithCompanyInfo = {
      ...job._doc,
      company: company ? company.company : null,
      companyAvatar: companyAvatar ? companyAvatar.avatar : null,
      companySocial: companySocial || {},
      companyAbout: companyAbout ? companyAbout.companyAbout : null,
    };

    return new NextResponse(JSON.stringify(jobWithCompanyInfo), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: "Failed to fetch job details" }),
      { status: 500 }
    );
  }
}
