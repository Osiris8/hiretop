"use client";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <div class="px-8 py-12 mx-auto md:px-12 lg:px-32 max-w-7xl">
        <nav class="flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-500">
          <a href="#_" class="hover:text-blue-600">
            Next.js
          </a>
          <a href="#_" class="hover:text-blue-600">
            Remix
          </a>
          <a href="#_" class="hover:text-blue-600">
            Svelte
          </a>

          <a href="#_" class="hover:text-blue-600">
            Alpine.js
          </a>
          <a href="#_" class="hover:text-blue-600">
            Tailwind
          </a>
          <a href="#_" class="hover:text-blue-600">
            Partners
          </a>
        </nav>
        <div class="flex justify-center mt-8 space-x-6">
          <span class="inline-flex justify-center w-full gap-3 m-auto md:justify-start md:w-auto">
            <a class="size-6 transition fill-black hover:text-blue-500">
              <span class="sr-only"> github </span>
              <ion-icon
                class="size-5 md hydrated"
                name="logo-github"
                role="img"
                aria-label="logo github"
              ></ion-icon>
            </a>
            <a class="size-6 transition fill-black hover:text-blue-500">
              <span class="sr-only"> twitter </span>
              <ion-icon
                class="size-5 md hydrated"
                name="logo-twitter"
                role="img"
                aria-label="logo twitter"
              ></ion-icon>
            </a>
            <a class="size-6 transition fill-black hover:text-blue-500">
              <span class="sr-only"> Instagram </span>
              <ion-icon
                class="size-5 md hydrated"
                name="logo-instagram"
                role="img"
                aria-label="logo instagram"
              ></ion-icon>
            </a>
            <a class="size-6 transition fill-black hover:text-blue-500">
              <span class="sr-only"> Linkedin </span>
              <ion-icon
                class="size-5 md hydrated"
                name="logo-linkedin"
                role="img"
                aria-label="logo linkedin"
              ></ion-icon>
            </a>
          </span>
        </div>
        <div
          class="w-full mx-auto mt-8 text-center"
          x-data="{ year: new Date().getFullYear() }"
        >
          <span class="text-sm font-medium text-gray-500">
            Copyright © <span x-text="year">2024</span>
            <a
              aria-label="Michael Andreuzza"
              href="#_"
              class="mx-2 text-blue-500 hover:text-gray-500"
            >
              michael andreuzza
            </a>
            Since 1985
          </span>
        </div>
      </div>
    </footer>
  );
}
