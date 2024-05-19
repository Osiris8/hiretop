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
              Entreprises
            </span>
            <p className="mt-8 text-4xl font-semibold tracking-tight text-gray-900 text-balance">
              Découvrez des talents exceptionnels pour votre entreprise.
            </p>
            <p className="mt-4 text-base font-medium text-gray-500">
              Notre plateforme vous offre un accès privilégié à une communauté
              diversifiée de professionnels hautement qualifiés, prêts à relever
              les défis de votre entreprise et à apporter une valeur ajoutée
              inestimable à votre équipe. Avec une recherche intuitive et des
              outils de filtrage avancés, trouvez rapidement les talents qui
              correspondent parfaitement à vos besoins spécifiques et
              préparez-vous à atteindre de nouveaux sommets de performance et
              d&apos;innovation.
            </p>
            <div className="flex mt-8">
              <button
                className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium text-white duration-200 bg-gray-900 md:w-auto rounded-xl hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black"
                aria-label="Primary action"
              >
                <RegisterLink>Demarrez</RegisterLink>
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
