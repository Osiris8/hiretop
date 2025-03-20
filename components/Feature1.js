"use client";
import Image from "next/image";
import talent from "../public/images/feature/talent.jpg";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
export default function Feature1() {
  return (
    <section className="bg-white" id="talents">
      <div class="px-8 py-12 mx-auto md:px-12 lg:px-32 max-w-7xl">
        <div class="grid items-center grid-cols-1 gap-4 list-none lg:grid-cols-2 lg:gap-24">
          <div>
            <span class="text-xs font-bold tracking-wide text-gray-500 uppercase">
              Talents
            </span>
            <p class="mt-8 text-4xl font-semibold tracking-tight text-gray-900 text-balance">
              Your next big opportunity awaits here.
            </p>
            <p class="mt-4 text-base font-medium text-gray-500">
              Join a community of exceptional talents, where innovation meets
              excellence, ideas come to life, and career growth opportunities
              are endless. Together, we are building a dynamic network where
              each member brings their expertise and helps shape the future of
              the professional world.
            </p>
            <div class="flex flex-col items-center gap-2 mx-auto mt-8 md:flex-row">
              <button
                class="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium text-white duration-200 bg-gray-900 md:w-auto rounded-xl hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black"
                aria-label="Primary action"
              >
                <RegisterLink> I&#39;m getting started.</RegisterLink>
              </button>
            </div>
          </div>
          <div class="p-2 border bg-gray-50 rounded-3xl">
            <div class="h-full overflow-hidden bg-white border shadow-lg rounded-3xl">
              <Image
                alt="Lexingtøn thumbnail"
                class="relative w-full rounded-2xl drop-shadow-2xl"
                src={talent}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
