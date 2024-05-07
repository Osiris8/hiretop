"use client";
import Image from "next/image";
import feature1 from "../public/images/feature/feature1.png";
export default function Feature2() {
  return (
    <section>
      <div class="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
        <div class="grid items-center grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
          <div class="md:order-first">
            <h1 class="text-4xl font-semibold tracking-tighter text-gray-900 text-balance">
              Building one pagers together,
              <span class="text-gray-600">wherever and anywhere</span>
            </h1>
            <p class="mt-4 text-base font-medium text-gray-500">
              Control and added security. With decentralization, users have more
              control over their data and transactions, and the platform is less
              susceptible to malicious attacks.
            </p>

            <div class="mt-6 sm:text-center md:text-center lg:text-left">
              <button
                class="font-medium text-sm active:bg-fuchsia-50 active:text-black bg-indigo-50 focus-visible:outline-2 focus-visible:outline-fuchsia-50 focus-visible:outline-offset-2 focus:outline-none hover:text-indigo-700 justify-center px-6 py-2.5 rounded-lg text-indigo-600"
                aria-label="Primary action"
              >
                Talents
              </button>
              <button
                class="ml-4 text-sm py-2  bg-indigo-500 focus-visible:outline-2 focus-visible:outline-fuchsia-50 focus-visible:outline-offset-2 focus:outline-none font-medium group hover:bg-indigo-50 hover:text-indigo-700 justify-center px-6 rounded-lg text-white"
                aria-label="Secondary action"
              >
                Entreprise
              </button>
            </div>
          </div>
          <div class="order-first block w-full mt-12 aspect-square lg:mt-0">
            <div class="h-full p-2 overflow-hidden border shadow-lg bg-gray-50 rounded-3xl">
              <Image
                alt="#_"
                class="relative w-full rounded-2xl drop-shadow-2xl"
                src={feature1}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
