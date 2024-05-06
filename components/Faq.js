"use client";
import React, { useState } from "react";

export default function FAQSection() {
  const [activeAccordion, setActiveAccordion] = useState("");

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? "" : id);
  };

  return (
    <section className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
      <div className="text-center">
        <div>
          <p className="text-4xl font-semibold tracking-tighter text-gray-900">
            Frequent questions and answers
          </p>
          <p className="w-1/2 mx-auto mt-4 text-base font-medium text-gray-500 text-balance">
            Answers to commonly asked questions about our platform
          </p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto mt-12">
        <div>
          <div className="text-gray-600">
            <button
              className="flex items-center justify-between w-full p-4 pb-1 text-lg font-medium text-black select-none"
              onClick={() => toggleAccordion("accordion1")}
            >
              <span>How do I manage my account?</span>
              <svg
                className={`size-5 text-gray-500 duration-300 ease-out ${
                  activeAccordion === "accordion1" ? "-rotate-[45deg]" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  d="M12 6v12m6-6H6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <div
              className={`p-4 pt-2 text-base font-medium text-gray-500 text-balance ${
                activeAccordion === "accordion1" ? "" : "hidden"
              }`}
            >
              You can manage your account on the page to change billing details
              or see your license key(s). You can also cancel your subscription
              there at any time. If you cancel your subscription, you will still
              have access to spotless until the end of your current billing
              period. Go to the My Account page
            </div>
          </div>
          {/* Ajoutez d'autres questions et réponses ici */}
        </div>
      </div>
    </section>
  );
}
