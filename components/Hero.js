"use client";
import React, { useState } from "react";
import Image from "next/image";
import HeroImage from "../public/images/hero.png";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

function Hero() {
  return (
    <>
      <section className="bg-white">
        <div class="px-8 py-12 mx-auto md:px-12 lg:px-32 max-w-7xl">
          <div class="grid items-center grid-cols-1 gap-4 list-none lg:grid-cols-2 lg:gap-24 md:text-center sm:text-center lg:text-left">
            <div className="">
              <p class="font-medium lg:text-6xl md:text-6xl text-2xl text-slate-900 mt-8 tracking-tight text-balance">
                Leading Linkeding Network Manager
              </p>
              <p class="mt-4 text-base font-medium text-gray-500">
                Control and added security. With decentralization, users have
                more control over their data and transactions, and the platform
                is less susceptible to malicious attacks.
              </p>
              <div class="mt-6 sm:text-center md:text-center lg:text-left">
                <button
                  class="font-medium text-sm active:bg-fuchsia-50 active:text-black bg-indigo-50 focus-visible:outline-2 focus-visible:outline-fuchsia-50 focus-visible:outline-offset-2 focus:outline-none hover:text-indigo-700 justify-center px-6 py-2.5 rounded-lg text-indigo-600"
                  aria-label="Primary action"
                >
                  <RegisterLink>Talents</RegisterLink>
                </button>
                <button
                  class="ml-4 text-sm py-2  bg-indigo-500 focus-visible:outline-2 focus-visible:outline-fuchsia-50 focus-visible:outline-offset-2 focus:outline-none font-medium group hover:bg-indigo-50 hover:text-indigo-700 justify-center px-6 rounded-lg text-white"
                  aria-label="Secondary action"
                >
                  <RegisterLink>Entreprise</RegisterLink>
                </button>
              </div>
            </div>
            <div class="p-2 border bg-gray-50 rounded-3xl">
              <div class="h-full overflow-hidden bg-white border shadow-lg rounded-3xl">
                <Image
                  alt="Lexingtøn thumbnail"
                  class="relative w-full rounded-2xl drop-shadow-2xl"
                  src={HeroImage}
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
