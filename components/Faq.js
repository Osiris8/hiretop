"use client";
"use client";
import React, { useState } from "react";

const AccordionItem = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="text-gray-600 cursor-pointer group hover:text-gray-500 ">
      <button
        className="flex items-center justify-between w-full p-4 pb-1 text-lg font-medium text-black select-none"
        onClick={toggleAccordion}
      >
        <span>{question}</span>
        <svg
          className={`size-5 text-gray-500 duration-300 ease-out ${
            isActive && "-rotate-[45deg]"
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
      {isActive && (
        <div className="p-4 pt-2 text-base font-medium text-gray-500 text-balance">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  return (
    <section className="bg-gray-50">
      <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
        <div className="grid grid-cols-1 gap-6 lg:gap-12 lg:grid-cols-3">
          <div className="text-center lg:text-left">
            <div>
              <p className="text-4xl font-semibold tracking-tighter text-gray-900">
                Frequently Asked Questions (FAQ)
              </p>
              <p className="mt-4 text-base font-medium text-gray-500 text-pretty">
                Answers to frequently asked questions about our platform.
              </p>
            </div>
          </div>
          <div className="w-full lg:col-span-2">
            <AccordionItem
              question="How does the platform work?"
              answer="Our platform allows companies to post job offers and talents to apply directly to these offers. Once registered, you can search for jobs, create an attractive professional profile, and apply with just a few clicks."
            />
            <AccordionItem
              question="What types of companies use your platform?"
              answer="Our platform is used by a wide range of companies, from startups to large enterprises, across various industries. We strive to connect talents with opportunities in companies of all sizes and sectors."
            />
            <AccordionItem
              question="How can I increase my chances of being noticed?"
              answer="To increase your chances of being noticed by recruiters, make sure to complete your professional profile thoroughly and highlight your relevant skills and achievements. Additionally, stay active on the platform by exploring job offers and applying regularly."
            />

            {/* Repeat AccordionItem component for each item */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
