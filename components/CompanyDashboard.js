import React from "react";
import { useCompanyData } from "@/hooks/useCompanyData";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";

export default function CompanyDashboard() {
  const { user } = useKindeBrowserClient();
  const { companyData, isLoading, error } = useCompanyData(user?.id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!companyData) {
    return <div>Failed to load company data.</div>;
  }

  const { company, companyAbout, companyAvatar, companySocial } = companyData;

  const renderSocialLink = (url, label) => {
    if (!url) return null;
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 mt-2"
      >
        {label}
      </a>
    );
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-semibold mt-4">
        {company[0]?.company || "Non renseigné"}
      </h1>
      <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-5">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            {companyAvatar[0]?.avatar ? (
              <Image
                src={companyAvatar[0].avatar}
                alt="Avatar"
                className="h-48 w-full object-cover md:w-48"
                width={192}
                height={192}
              />
            ) : (
              <Image
                className="h-48 w-full object-cover md:w-48"
                src="https://via.placeholder.com/150"
                alt="Company Avatar"
              />
            )}
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {company[0]?.domain || "Non renseigné"}
            </div>
            <div className="mt-1 text-lg leading-tight font-medium text-black">
              {company[0]?.size + " employés" || "Non renseigné"}
            </div>
            <p className="mt-2 text-gray-500">
              {companyAbout[0]?.companyAbout || "Non renseigné"}
            </p>
            <p className="mt-2 text-gray-500">
              Position : {company[0]?.position || "Non renseigné"}
            </p>
            <p className="mt-2 text-gray-500">
              Téléphone : {company[0]?.telephone || "Non renseigné"}
            </p>
            <p className="mt-2 text-gray-500">
              Pays : {company[0]?.country || "Non renseigné"}
            </p>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-semibold mt-4">Liens sociaux</h2>
      <div className="flex justify-center space-x-4 mt-4">
        {renderSocialLink(companySocial[0]?.facebook, "Facebook")}
        {renderSocialLink(companySocial[0]?.github, "GitHub")}
        {renderSocialLink(companySocial[0]?.twitter, "Twitter")}
        {renderSocialLink(companySocial[0]?.linkedin, "LinkedIn")}
        {renderSocialLink(companySocial[0]?.instagram, "Instagram")}
        {renderSocialLink(companySocial[0]?.youtube, "YouTube")}
        {renderSocialLink(companySocial[0]?.tiktok, "TikTok")}
        {renderSocialLink(companySocial[0]?.website, "Website")}
        {renderSocialLink(companySocial[0]?.other, "Other")}
      </div>
    </div>
  );
}
