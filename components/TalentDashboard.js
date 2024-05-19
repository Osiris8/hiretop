import React from "react";
import { useTalentNav } from "@/hooks/useTalentNav";
import { useTalentNextProfil } from "@/hooks/useTalentNextProfil";
import Image from "next/image";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
function ProfileCard() {
  const { user } = useKindeBrowserClient();
  const { userTalent, profilImageUrl } = useTalentNav(user);
  const {
    level,
    setLevel,
    remote,
    setRemote,
    freelance,
    setFreelance,
    onsite,
    setOnsite,
    available,
    setAvailable,
    bio,
    setBio,
    country,
    setCountry,
    city,
    setCity,
    isSubmitting,
    isLoading,
    updateTalentNextProfil,
  } = useTalentNextProfil(user?.id);
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
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Software Engineer
            </div>
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
          {/*<div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Software Engineer
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {userTalent[0]?.firstname + " " + userTalent[0]?.lastname}
          </a>*/}
          <p className="mt-2 text-gray-500">
            {level ? level : "Niveau : Aucun niveau ajouté"}
          </p>
          <p className="mt-2 text-gray-500">
            {remote ? remote : "Travail à distance : Pas précisé"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
