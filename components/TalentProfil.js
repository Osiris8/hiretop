"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
export default function TalentProfil() {
  const { isAuthenticated, user } = useKindeBrowserClient();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [telephone, setTelephone] = useState("");
  const [country, setCountry] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [typeOfProfile, setTypeOfProfile] = useState("talent");
  const router = useRouter();

  const talentProfil = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("api/talent-profil", {
        method: "POST",
        body: JSON.stringify({
          userId: user.id,
          firstname: firstname,
          lastname: lastname,
          telephone: telephone,
          country: country,
        }),
      });

      const response2 = await fetch("/api/status-profil", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user.id,
          typeOfProfile: typeOfProfile,
        }),
      });

      if (response2.ok && response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div>
      <section className="bg-white">
        <div class="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
          <div class="max-w-md mx-auto md:max-w-sm md:w-96">
            <div class="flex flex-col text-center">
              <h1 class="text-3xl font-semibold tracking-tighter text-gray-900">
                Collaborating on single-page projects,
                <span class="text-gray-600">from any location</span>
              </h1>
              <p class="mt-4 text-base font-medium text-gray-500">
                A rapid approach to collaborate in staging and provisional
                settings.
              </p>
            </div>

            <form onSubmit={talentProfil}>
              <div class="space-y-3">
                <div>
                  <label
                    for="name"
                    class="block mb-3 text-sm font-medium text-black"
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
                    class="block w-full h-12 px-4 py-2 text-blue-500 duration-200 border rounded-lg appearance-none bg-chalk border-zinc-300 placeholder-zinc-300 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm"
                  />
                </div>
                <div class="col-span-full">
                  <label
                    for="lastname"
                    class="block mb-3 text-sm font-medium text-black"
                  >
                    Last name
                  </label>
                  <input
                    onChange={(e) => setLastname(e.target.value)}
                    value={lastname}
                    required
                    id="lastname"
                    class="block w-full h-12 px-4 py-2 text-blue-500 duration-200 border rounded-lg appearance-none bg-chalk border-zinc-300 placeholder-zinc-300 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm"
                    placeholder="Your lastname"
                    type="text"
                  />
                </div>
                <div class="col-span-full">
                  <label
                    for="telephone"
                    class="block mb-3 text-sm font-medium text-black"
                  >
                    Telephone
                  </label>
                  <input
                    onChange={(e) => setTelephone(e.target.value)}
                    value={telephone}
                    required
                    id="telephone"
                    class="block w-full h-12 px-4 py-2 text-blue-500 duration-200 border rounded-lg appearance-none bg-chalk border-zinc-300 placeholder-zinc-300 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm"
                    placeholder="Your telephone"
                    type="text"
                  />
                </div>
                <div class="col-span-full">
                  <label
                    for="country"
                    class="block mb-3 text-sm font-medium text-black"
                  >
                    Pays
                  </label>
                  <input
                    onChange={(e) => setCountry(e.target.value)}
                    value={country}
                    required
                    id="country"
                    class="block w-full h-12 px-4 py-2 text-blue-500 duration-200 border rounded-lg appearance-none bg-chalk border-zinc-300 placeholder-zinc-300 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm"
                    placeholder="Your country"
                    type="text"
                  />
                </div>
                <div class="col-span-full">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    class="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium text-white duration-200 bg-gray-900 rounded-xl hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black"
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
