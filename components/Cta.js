"use client";

import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function Cta() {
  return (
    <section>
      <div class="px-8 py-12 mx-auto md:px-12 lg:px-32 max-w-7xl">
        <div class="p-2 border bg-gray-50 rounded-3xl">
          <div class="p-10 text-center bg-white border shadow-lg md:p-20 rounded-3xl">
            <span class="text-sm font-semibold text-gray-500 uppercase">
              Hiretop
            </span>
            <p class="mt-8 text-4xl font-semibold tracking-tighter text-black">
              Get started and find your next exceptional talent!
            </p>
            <p class="w-1/2 mx-auto mt-4 text-base text-gray-500 text-balance">
              Ready to strengthen your team with exceptional talents?
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
                <RegisterLink>I am looking for talents</RegisterLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
