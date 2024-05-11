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
                Questions et réponses fréquentes
              </p>
              <p className="mt-4 text-base font-medium text-gray-500 text-pretty">
                Réponses aux questions fréquemment posées sur notre plateforme
              </p>
            </div>
          </div>
          <div className="w-full lg:col-span-2">
            <AccordionItem
              question="Comment fonctionne la plateforme ?"
              answer="Notre plateforme permet aux entreprises de publier des offres d'emploi et aux talents de postuler directement à ces offres. Une fois inscrit, vous pouvez rechercher des emplois, créer un profil professionnel attractif et postuler en quelques clics."
            />
            <AccordionItem
              question="Quels types d'entreprises utilisent votre plateforme ?"
              answer="Notre plateforme est utilisée par une large gamme d'entreprises, des startups aux grandes entreprises, dans divers secteurs d'activité. Nous nous efforçons de connecter les talents avec des opportunités dans des entreprises de toutes tailles et de tous secteurs."
            />
            <AccordionItem
              question="Comment puis-je augmenter mes chances d'être repéré ?"
              answer="Pour augmenter vos chances d'être remarqué par les recruteurs, assurez-vous de compléter votre profil professionnel de manière exhaustive et de mettre en valeur vos compétences et réalisations pertinentes. De plus, restez actif sur la plateforme en explorant les offres d'emploi et en postulant régulièrement."
            />

            {/* Repeat AccordionItem component for each item */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
