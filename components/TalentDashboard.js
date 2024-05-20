import React from "react";
import { useTalentNav } from "@/hooks/useTalentNav";
import { useTalentNextProfil } from "@/hooks/useTalentNextProfil";
import { useTalentSocialLink } from "@/hooks/useTalentSocialLink";
import Image from "next/image";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

function ProfileCard() {
  const { user } = useKindeBrowserClient();
  const { userTalent, profilImageUrl } = useTalentNav(user);
  const {
    level,
    remote,
    freelance,
    onsite,
    available,
    bio,
    country,
    city,
    isSubmitting,

    updateTalentNextProfil,
  } = useTalentNextProfil(user?.id);

  const {
    facebook,
    github,
    twitter,
    linkedin,
    isLoading: isLoadingSocial,
  } = useTalentSocialLink(user?.id);

  if (!userTalent || !userTalent[0]) {
    return <div>Loading...</div>;
  }

  const renderAvailability = (value, label) => {
    if (value === "false" || value === "") {
      return <p className="mt-2 text-gray-500">{label} : Non</p>;
    } else if (value === "true") {
      return <p className="mt-2 text-gray-500">{label} : Oui</p>;
    }
    return (
      <p className="mt-2 text-gray-500">
        {label} : {value}
      </p>
    );
  };

  const renderSocialLink = (url, label) => {
    if (!url) return null;
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 mt-2 flex items-center justify-center"
      >
        {label}
      </a>
    );
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-semibold mt-4">Ma présentation</h1>
      <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-5">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            {profilImageUrl[0] ? (
              <Image
                src={profilImageUrl}
                alt="Avatar"
                className="h-8 w-8 rounded-full"
                width={32}
                height={32}
              />
            ) : (
              <img
                className="h-48 w-full object-cover md:w-48"
                src="https://via.placeholder.com/150"
                alt="Profile"
              />
            )}
          </div>
          <div className="p-8">
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              {userTalent[0]?.firstname + " " + userTalent[0]?.lastname}
            </a>
            <p className="mt-2 text-gray-500">
              {bio ? bio : "Aucune biographie"}
            </p>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-semibold mt-4">Autres</h2>
      <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-5">
        <div className="p-8">
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {userTalent[0]?.firstname + " " + userTalent[0]?.lastname}
          </a>
          {renderAvailability(level, "Niveau")}
          {renderAvailability(remote, "Travail à distance")}
          {renderAvailability(freelance, "Freelance")}
          {renderAvailability(available, "Disponibilité")}
          {renderAvailability(onsite, "Sur site")}
        </div>
      </div>
      <h2 className="text-2xl font-semibold mt-4">Liens sociaux</h2>
      <div className="flex justify-center space-x-4 mt-4">
        {renderSocialLink(facebook, "Facebook")}
        {renderSocialLink(github, "GitHub")}
        {renderSocialLink(twitter, "Twitter")}
        {renderSocialLink(linkedin, "LinkedIn")}
      </div>
    </div>
  );
}

export default ProfileCard;
