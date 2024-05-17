"use client";
import React from "react";

const JobCard = ({
  teamPhoto,
  companyLogo,
  companyName,
  jobTitle,
  location,
  contractType,
  publicationDate,
}) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <img className="w-full h-48 object-cover" src={teamPhoto} alt="Team" />
      <div className="p-6">
        <div className="flex items-center mb-4">
          <img
            className="h-12 w-12 rounded-full"
            src={companyLogo}
            alt="Company Logo"
          />
          <div className="ml-4">
            <div className="text-xl font-medium text-black">{companyName}</div>
          </div>
        </div>
        <div className="mb-4 text-xl font-medium text-black">{jobTitle}</div>
        <div className="text-gray-500">
          <div>{location}</div>
          <div>{contractType}</div>
          <div>{publicationDate}</div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
