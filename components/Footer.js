"use client";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <div class="px-8 py-12 mx-auto md:px-12 lg:px-32 max-w-7xl bg-white">
        <div
          class="w-full mx-auto mt-8 text-center"
          x-data="{ year: new Date().getFullYear() }"
        >
          <span class="text-sm font-medium text-gray-500">
            Copyright © HireTop <span x-text="year">2024</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
