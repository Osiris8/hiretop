"use client";
import React, { useState } from "react";

import TalentProfil from "./TalentProfil";
import CompanyProfil from "./CompanyProfil";
function Tabs() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center">
          <div className="w-full sm:w-3/4 lg:w-1/2">
            <ul className="flex border-b border-gray-300">
              <li className="-mb-px flex-1">
                <button
                  onClick={() => handleTabClick("tab1")}
                  className={`${
                    activeTab === "tab1"
                      ? "bg-white border-slate-500 text-slate-500"
                      : "border-transparent text-slate-500 hover:text-slate-700 hover:border-gray-300"
                  } focus:outline-none py-4 px-6 inline-block w-full text-center font-medium border-b-2`}
                >
                  Compléter son profil Talent
                </button>
              </li>
              <li className="-mb-px flex-1">
                <button
                  onClick={() => handleTabClick("tab2")}
                  className={`${
                    activeTab === "tab2"
                      ? "bg-white border-slate-500 text-slate-500"
                      : "border-transparent text-slate-500 hover:text-slate-700 hover:border-gray-300"
                  } focus:outline-none py-4 px-6 inline-block w-full text-center font-medium border-b-2`}
                >
                  Completer son profil entreprise
                </button>
              </li>
            </ul>
            <div className="py-8">
              <div className={`${activeTab === "tab1" ? "block" : "hidden"}`}>
                {/* Tab 1 content */}
                <div className="text-gray-700">
                  <TalentProfil />
                </div>
              </div>
              <div className={`${activeTab === "tab2" ? "block" : "hidden"}`}>
                {/* Tab 2 content */}
                <div className="text-gray-700">
                  <CompanyProfil />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tabs;
