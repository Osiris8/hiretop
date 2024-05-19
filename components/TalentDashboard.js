import React from "react";

export default function TalentDashboard() {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg p-6 m-6">
      <img
        src="https://via.placeholder.com/150"
        alt="Profil"
        className="rounded-full mx-auto w-32 h-32 object-cover"
      />
      <div className="mt-4 text-center space-y-2">
        <p className="text-gray-800 font-semibold">Nom et Prénom</p>
        <p className="text-gray-500">Téléphone</p>
        <p className="text-gray-500">Pays</p>
        <p className="text-gray-500">Niveau intermédiaire</p>
        <p className="text-gray-500">Remote: oui</p>
        <p className="text-gray-500">Freelance: oui</p>
        <p className="text-gray-500">Sur site: oui</p>
        <p className="text-gray-500">Disponible</p>
        <p className="text-gray-500">Ville</p>
        <p className="text-gray-500">Bio</p>
      </div>
    </div>
  );
}
