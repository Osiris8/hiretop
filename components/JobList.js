import React, { useState, useEffect } from "react";
import useFetchJobs from "../hooks/useFetchJobs";
import JobCard from "./JobCard";

const JobList = () => {
  const { jobs, loading, error } = useFetchJobs();
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [title, setTitle] = useState("");
  const [country, setCountry] = useState("");
  const [contract, setContract] = useState("");

  useEffect(() => {
    let filtered = jobs;

    if (title) {
      filtered = filtered.filter((job) =>
        job.title.toLowerCase().includes(title.toLowerCase())
      );
    }

    if (country) {
      filtered = filtered.filter((job) =>
        job.country.toLowerCase().includes(country.toLowerCase())
      );
    }

    if (contract) {
      filtered = filtered.filter((job) =>
        job.contract.toLowerCase().includes(contract.toLowerCase())
      );
    }

    setFilteredJobs(filtered);
  }, [title, country, contract, jobs]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-6">
      <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div>
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Job Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="block w-full px-4 py-2 border rounded-md focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Job Title"
          />
        </div>
        <div>
          <label
            htmlFor="country"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Country
          </label>
          <input
            id="country"
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="block w-full px-4 py-2 border rounded-md focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Country"
          />
        </div>
        <div>
          <label
            htmlFor="contract"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Contract
          </label>
          <select
            id="contract"
            value={contract}
            onChange={(e) => setContract(e.target.value)}
            className="block w-full px-4 py-2 border rounded-md focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="">All</option>
            <option value="Onsite">Onsite</option>
            <option value="Freelance">Freelance</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredJobs.map((job) => (
          <JobCard
            key={job._id}
            jobId={job._id}
            teamPhoto={job.mainImage}
            companyLogo={job.avatar}
            companyName={job.companyName}
            jobTitle={job.title}
            location={job.country}
            contractType={job.contract}
            publicationDate={job.publicationDate}
          />
        ))}
      </div>
    </div>
  );
};

export default JobList;
