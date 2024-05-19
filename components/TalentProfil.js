// components/TalentProfil.js
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useTalentProfil } from "@/hooks/useTalentProfil";

export default function TalentProfil() {
  const { isAuthenticated, user } = useKindeBrowserClient();
  const router = useRouter();
  const {
    firstname,
    setFirstname,
    lastname,
    setLastname,
    telephone,
    setTelephone,
    country,
    setCountry,
    isSubmitting,
    sendTalentProfil,
  } = useTalentProfil(user);

  return (
    <div>
      <section className="bg-white">
        <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
          <div className="max-w-md mx-auto md:max-w-sm md:w-96">
            <div className="flex flex-col text-center">
              <h1 className="text-3xl font-semibold tracking-tighter text-gray-900">
                Compléter votre profil,
                <span className="text-gray-600"> en tant que Talent</span>
              </h1>
              <p className="mt-4 text-base font-medium text-gray-500">
                Démarquez-vous et boostez votre carrière avec notre plateforme.
              </p>
            </div>
            <form onSubmit={(e) => sendTalentProfil(e, router)}>
              <div className="space-y-3">
                <div>
                  <label
                    htmlFor="firstname"
                    className="block mb-3 text-sm font-medium text-black"
                  >
                    First name
                  </label>
                  <input
                    onChange={(e) => setFirstname(e.target.value)}
                    value={firstname}
                    required
                    type="text"
                    id="firstname"
                    placeholder="Your Firstname"
                    className="block w-full h-12 px-4 py-2 text-blue-500 duration-200 border rounded-lg appearance-none bg-chalk border-zinc-300 placeholder-zinc-300 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm"
                  />
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="lastname"
                    className="block mb-3 text-sm font-medium text-black"
                  >
                    Last name
                  </label>
                  <input
                    onChange={(e) => setLastname(e.target.value)}
                    value={lastname}
                    required
                    id="lastname"
                    className="block w-full h-12 px-4 py-2 text-blue-500 duration-200 border rounded-lg appearance-none bg-chalk border-zinc-300 placeholder-zinc-300 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm"
                    placeholder="Your lastname"
                    type="text"
                  />
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="telephone"
                    className="block mb-3 text-sm font-medium text-black"
                  >
                    Telephone
                  </label>
                  <input
                    onChange={(e) => setTelephone(e.target.value)}
                    value={telephone}
                    required
                    id="telephone"
                    className="block w-full h-12 px-4 py-2 text-blue-500 duration-200 border rounded-lg appearance-none bg-chalk border-zinc-300 placeholder-zinc-300 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm"
                    placeholder="Your telephone"
                    type="text"
                  />
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="country"
                    className="block mb-3 text-sm font-medium text-black"
                  >
                    Country
                  </label>
                  <input
                    onChange={(e) => setCountry(e.target.value)}
                    value={country}
                    required
                    id="country"
                    className="block w-full h-12 px-4 py-2 text-blue-500 duration-200 border rounded-lg appearance-none bg-chalk border-zinc-300 placeholder-zinc-300 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm"
                    placeholder="Your country"
                    type="text"
                  />
                </div>
                <div className="col-span-full">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium text-white duration-200 bg-gray-900 rounded-xl hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black"
                  >
                    Go to Dashboard
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
