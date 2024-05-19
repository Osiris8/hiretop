"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const JobCard = ({
  jobId,
  teamPhoto,
  companyLogo,
  companyName,
  jobTitle,
  location,
  contractType,
  publicationDate,
}) => {
  return (
    <Link href={`/talent-job-detail/${jobId}`}>
      <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden cursor-pointer">
        <Image
          className="w-full h-48 object-cover"
          src={teamPhoto}
          alt="Team"
          width={100}
          height={100}
        />
        <div className="p-6">
          <div className="flex items-center mb-4">
            <Image
              className="h-12 w-12 rounded-full"
              src={companyLogo}
              width={100}
              height={100}
              alt="Company Logo"
            />
            <div className="ml-4">
              <div className="text-xl font-medium text-black">
                {companyName}
              </div>
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
    </Link>
  );
};

export default JobCard;
