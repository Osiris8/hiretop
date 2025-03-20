"use client";
import React, { useState } from "react";
import Image from "next/image";
import HeroImage from "../public/images/hero1.png";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";

function Hero() {
  return (
    <>
      <section className="bg-white">
        <div class="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
          <div class="text-center">
            <h1 class="text-4xl font-semibold tracking-tighter text-gray-900 lg:text-5xl text-balance">
              Connect talents to opportunities
            </h1>
            <p class="w-1/2 mx-auto mt-4 text-base font-medium text-gray-500 text-balance">
              Find your next career opportunity. Stand out and boost your career
              with Hiretop.
            </p>
            <div class="flex flex-col items-center justify-center gap-2 mx-auto mt-8 md:flex-row">
              <button
                class="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium text-white duration-200 bg-gray-900 md:w-auto rounded-xl hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black"
                aria-label="Primary action"
              >
                <RegisterLink>I am a talent</RegisterLink>
              </button>
              <button
                class="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium duration-200 bg-gray-100 md:w-auto rounded-xl hover:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                aria-label="Secondary action"
              >
                <RegisterLink>I am looking for talents.</RegisterLink>
              </button>
            </div>
            <div class="relative h-full p-2 mt-24 overflow-hidden border rounded-3xl">
              <Image
                src={HeroImage}
                class="object-cover h-full border shadow-2xl rounded-2xl"
                alt="hero image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
