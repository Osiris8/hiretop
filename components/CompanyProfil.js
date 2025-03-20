// components/CompanyProfil.js
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useCompanyProfil } from "@/hooks/useCompanyProfil";

export default function CompanyProfil() {
  const { user } = useKindeBrowserClient();
  const router = useRouter();
  const {
    company,
    setCompany,
    domain,
    setDomain,
    size,
    setSize,
    position,
    setPosition,
    telephone,
    setTelephone,
    country,
    setCountry,
    isSubmitting,
    isLoading,
    sendCompanyProfil,
  } = useCompanyProfil(user);

  return (
    <div>
      <section className="bg-white">
        <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
          <div className="max-w-md mx-auto md:max-w-sm md:w-96">
            <div className="flex flex-col text-center">
              <h1 className="text-3xl font-semibold tracking-tighter text-gray-900">
                Complete your profil
                <span className="text-gray-600"> en tant que compagnie</span>
              </h1>
              <p className="mt-4 mb-4 text-base font-medium text-gray-500">
                Join us today and discover how our platform can transform your
                recruitment process.
              </p>
            </div>

            <form onSubmit={(e) => sendCompanyProfil(e, router)}>
              <div className="space-y-3">
                <div>
                  <label
                    htmlFor="company"
                    className="block mb-3 text-sm font-medium text-black"
                  >
                    Company Name
                  </label>
                  <input
                    onChange={(e) => setCompany(e.target.value)}
                    value={company}
                    required
                    type="text"
                    id="company"
                    placeholder="Your company name"
                    className="block w-full h-12 px-4 py-2 text-blue-500 duration-200 border rounded-lg appearance-none bg-chalk border-zinc-300 placeholder-zinc-300 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm"
                  />
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="domain"
                    className="block mb-3 text-sm font-medium text-black"
                  >
                    Domain
                  </label>
                  <input
                    onChange={(e) => setDomain(e.target.value)}
                    value={domain}
                    required
                    id="domain"
                    className="block w-full h-12 px-4 py-2 text-blue-500 duration-200 border rounded-lg appearance-none bg-chalk border-zinc-300 placeholder-zinc-300 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm"
                    placeholder="Your domain"
                    type="text"
                  />
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="size"
                    className="block mb-3 text-sm font-medium text-black"
                  >
                    Size
                  </label>
                  <input
                    onChange={(e) => setSize(e.target.value)}
                    value={size}
                    required
                    id="size"
                    className="block w-full h-12 px-4 py-2 text-blue-500 duration-200 border rounded-lg appearance-none bg-chalk border-zinc-300 placeholder-zinc-300 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm"
                    placeholder="Size of your company"
                    type="text"
                  />
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="position"
                    className="block mb-3 text-sm font-medium text-black"
                  >
                    Address
                  </label>
                  <input
                    onChange={(e) => setPosition(e.target.value)}
                    value={position}
                    required
                    id="position"
                    className="block w-full h-12 px-4 py-2 text-blue-500 duration-200 border rounded-lg appearance-none bg-chalk border-zinc-300 placeholder-zinc-300 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm"
                    placeholder="Your company address"
                    type="text"
                  />
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="phone"
                    className="block mb-3 text-sm font-medium text-black"
                  >
                    phone
                  </label>
                  <input
                    onChange={(e) => setTelephone(e.target.value)}
                    value={telephone}
                    required
                    id="telephone"
                    className="block w-full h-12 px-4 py-2 text-blue-500 duration-200 border rounded-lg appearance-none bg-chalk border-zinc-300 placeholder-zinc-300 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm"
                    placeholder="Numéro d'entreprise"
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
                    placeholder="Your company country"
                    type="text"
                  />
                </div>
                <div className="col-span-full">
                  {!isLoading && (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium text-white duration-200 bg-gray-900 rounded-xl hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black"
                    >
                      Save
                    </button>
                  )}
                  {isLoading && (
                    <button
                      disabled={isLoading}
                      className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium text-white duration-200 bg-gray-500 rounded-xl hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black"
                    >
                      Waiting...
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
