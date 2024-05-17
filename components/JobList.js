// components/JobList.js

import React from "react";
import useFetchJobs from "../hooks/useFetchJobs";
import JobCard from "./JobCard";

const JobList = () => {
  const { jobs, loading, error } = useFetchJobs();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {jobs.map((job) => (
        <JobCard
          key={job._id}
          teamPhoto={job.mainImage}
          companyLogo={job.avatar} // Assurez-vous que ce champ est correct
          companyName={job.companyName} // Assurez-vous que ce champ est correct
          jobTitle={job.title}
          location={job.country}
          contractType={job.contract}
          publicationDate={job.publicationDate}
        />
      ))}
    </div>
  );
};

export default JobList;
