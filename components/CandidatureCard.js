// components/CandidatureCard.js
"use client";
import React from "react";

const CandidatureCard = ({ candidature }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <p>
        <strong>Job ID:</strong> {candidature.jobId}
      </p>
      <p>
        <strong>Status:</strong> {candidature.status}
      </p>
      <p>
        <strong>Date de candidature:</strong>{" "}
        {new Date(candidature.createdAt).toLocaleDateString()}
      </p>
      <a
        href={candidature.cvUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500"
      >
        Voir le CV
      </a>
    </div>
  );
};

export default CandidatureCard;
