"use client";
import React, { useState } from "react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-indigo-600" href="#">
              <span className="text-xl font-bold tracking-tight">HireTop</span>
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="py-2 text-sm font-medium text-black hover:text-black/50"
                    href="#"
                  >
                    Acceuil
                  </a>
                </li>

                <li>
                  <a
                    className="py-2 text-sm font-medium text-black hover:text-black/50"
                    href="#"
                  >
                    Jobs
                  </a>
                </li>

                <li>
                  <a
                    className="py-2 text-sm font-medium text-black hover:text-black/50"
                    href="#"
                  >
                    Entreprise
                  </a>
                </li>

                <li>
                  <a
                    className="py-2 text-sm font-medium text-black hover:text-black/50"
                    href="#"
                  >
                    Talents
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              {/*<div className="sm:flex sm:gap-4">
                <a
                  className="font-medium text-sm active:bg-fuchsia-50 active:text-black bg-indigo-50 focus-visible:outline-2 focus-visible:outline-fuchsia-50 focus-visible:outline-offset-2 focus:outline-none hover:text-indigo-700 justify-center px-6 py-2.5 rounded-lg text-indigo-600"
                  href="#"
                >
                  Login
                </a>

                <div className="hidden sm:flex">
                  <a
                    className="text-sm py-2  bg-indigo-500 focus-visible:outline-2 focus-visible:outline-fuchsia-50 focus-visible:outline-offset-2 focus:outline-none font-medium group hover:bg-indigo-50 hover:text-indigo-700 justify-center px-6 rounded-lg text-white"
                    href="#"
                  >
                    Register
                  </a>
                </div>
  </div>*/}

              <div className="block md:hidden">
                <button
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <nav className="block md:hidden">
            <ul className="flex flex-col items-center gap-6 text-sm">
              <li>
                <a
                  className="py-2 text-sm font-medium text-black hover:text-black/50"
                  href="#"
                >
                  Acceuil
                </a>
              </li>

              <li>
                <a
                  className="py-2 text-sm font-medium text-black hover:text-black/50"
                  href="#"
                >
                  Jobs
                </a>
              </li>

              <li>
                <a
                  className="py-2 text-sm font-medium text-black hover:text-black/50"
                  href="#"
                >
                  Entreprise
                </a>
              </li>

              <li>
                <a
                  className="py-2 text-sm font-medium text-black hover:text-black/50"
                  href="#"
                >
                  Talents
                </a>
              </li>
              {/* Ajoutez les autres liens de navigation pour mobile ici */}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
