"use client";
import Image from "next/image";
import company from "../public/images/feature/company.jpg";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function Feature2() {
  return (
    <section id="companies">
      <div className="px-8 py-12 mx-auto md:px-12 lg:px-32 max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-4 list-none lg:grid-cols-2 lg:gap-24">
          <div className="text-left">
            <span className="text-xs font-bold tracking-wide text-gray-500 uppercase">
              Company
            </span>
            <p className="mt-8 text-4xl font-semibold tracking-tight text-gray-900 text-balance">
              Discover exceptional talents for your company.
            </p>
            <p className="mt-4 text-base font-medium text-gray-500">
              Our platform gives you privileged access to a diverse community of
              highly skilled professionals, ready to take on your company&#39;s
              challenges and bring invaluable value to your team. With intuitive
              search and advanced filtering tools, quickly find the talents that
              perfectly match your specific needs and get ready to reach new
              heights of performance and innovation.
            </p>
            <div className="flex mt-8">
              <button
                className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium text-white duration-200 bg-gray-900 md:w-auto rounded-xl hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black"
                aria-label="Primary action"
              >
                <RegisterLink>Get started</RegisterLink>
              </button>
            </div>
          </div>
          <div className="p-2 border bg-gray-50 rounded-3xl">
            <div className="h-full overflow-hidden bg-white border shadow-lg rounded-3xl">
              <Image
                alt="Lexingtøn thumbnail"
                className="relative w-full rounded-2xl drop-shadow-2xl"
                src={company}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
