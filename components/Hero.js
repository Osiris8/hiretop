"use client";
import React, { useState } from "react";
import Image from "next/image";
import HeroImage from "../public/images/hero.png";

function Hero() {
  return (
    <>
      <section>
        <div class="px-8 py-12 mx-auto md:px-12 lg:px-32 max-w-7xl">
          <div class="grid items-center grid-cols-1 gap-4 list-none lg:grid-cols-2 lg:gap-24">
            <div>
              <span class="text-xs font-bold tracking-wide text-gray-500 uppercase">
                tokens
              </span>
              <p class="mt-8 text-4xl font-semibold tracking-tight text-gray-900 text-balance">
                A sustainable approach to blockchain validation
              </p>
              <p class="mt-4 text-base font-medium text-gray-500">
                Control and added security. With decentralization, users have
                more control over their data and transactions, and the platform
                is less susceptible to malicious attacks.
              </p>
              <div class="flex flex-col items-center gap-2 mx-auto mt-8 md:flex-row">
                <button
                  class="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium text-white duration-200 bg-gray-900 md:w-auto rounded-xl hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black"
                  aria-label="Primary action"
                >
                  Primary button
                </button>
                <button
                  class="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium duration-200 bg-gray-100 md:w-auto rounded-xl hover:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  aria-label="Secondary action"
                >
                  Secondary button
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
