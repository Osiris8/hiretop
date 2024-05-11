"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
export default function CompanyProfil() {
  const { isAuthenticated, user } = useKindeBrowserClient();
  const [company, setCompany] = useState("");
  const [domain, setDomain] = useState("");
  const [size, setSize] = useState("");
  const [position, setPosition] = useState("");
  const [telephone, setTelephone] = useState("");
  const [country, setCountry] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [typeOfProfile, setTypeOfProfile] = useState("company");
  const router = useRouter();

  const companyProfil = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("api/company-profil", {
        method: "POST",
        body: JSON.stringify({
          userId: user.id,
          company: company,
          domain: domain,
          size: size,
          position: position,
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
        router.push("/dashboard-company");
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

            <form onSubmit={companyProfil}>
              <div class="space-y-3">
                <div>
                  <label
                    for="company"
                    class="block mb-3 text-sm font-medium text-black"
                  >
                    Name enterprise
                  </label>
                  <input
                    onChange={(e) => setCompany(e.target.value)}
                    value={company}
                    required
                    type="text"
                    id="company"
                    placeholder="Your company name"
                    class="block w-full h-12 px-4 py-2 text-blue-500 duration-200 border rounded-lg appearance-none bg-chalk border-zinc-300 placeholder-zinc-300 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm"
                  />
                </div>
                <div class="col-span-full">
                  <label
                    for="domain"
                    class="block mb-3 text-sm font-medium text-black"
                  >
                    Domaine
                  </label>
                  <input
                    onChange={(e) => setDomain(e.target.value)}
                    value={domain}
                    required
                    id="sector"
                    class="block w-full h-12 px-4 py-2 text-blue-500 duration-200 border rounded-lg appearance-none bg-chalk border-zinc-300 placeholder-zinc-300 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm"
                    placeholder="Your sector"
                    type="text"
                  />
                </div>
                <div class="col-span-full">
                  <label
                    for="size"
                    class="block mb-3 text-sm font-medium text-black"
                  >
                    Size
                  </label>
                  <input
                    onChange={(e) => setSize(e.target.value)}
                    value={size}
                    required
                    id="size"
                    class="block w-full h-12 px-4 py-2 text-blue-500 duration-200 border rounded-lg appearance-none bg-chalk border-zinc-300 placeholder-zinc-300 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm"
                    placeholder="Size of your company"
                    type="text"
                  />
                </div>
                <div class="col-span-full">
                  <label
                    for="position"
                    class="block mb-3 text-sm font-medium text-black"
                  >
                    Address
                  </label>
                  <input
                    onChange={(e) => setPosition(e.target.value)}
                    value={position}
                    required
                    id="position"
                    class="block w-full h-12 px-4 py-2 text-blue-500 duration-200 border rounded-lg appearance-none bg-chalk border-zinc-300 placeholder-zinc-300 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm"
                    placeholder="Your company address"
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
                    placeholder="Numéro d'entreprise"
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
                    placeholder="Your company address"
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
