// components/CandidatureCard.js
"use client";
import React from "react";

const CandidatureCard = ({ candidature }) => {
  const jobUrl = `/talent-job-detail/${candidature.jobId}`;
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <a
        href={jobUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 font-semibold"
      >
        Voir le job
      </a>
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
        className="text-blue-500 font-semibold"
      >
        Voir le CV
      </a>
    </div>
  );
};

export default CandidatureCard;
