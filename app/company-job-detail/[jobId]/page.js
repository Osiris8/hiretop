// app/jobs/[jobId]/page.js
"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import CompanyNav from "@/components/CompanyNav";
import Image from "next/image";

const JobDetail = () => {
  const { jobId } = useParams();
  const { user } = useKindeBrowserClient();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await fetch(`/api/jobs/${jobId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch job details");
        }
        const data = await response.json();
        setJob(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (jobId) {
      fetchJob();
    }
  }, [jobId, user]);

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex min-h-screen w-full flex-col">
      <CompanyNav />
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
        <Image
          className="w-full h-48 object-cover mb-4 rounded-lg"
          src={job.mainImage}
          alt="Team"
          width={500}
          height={500}
        />
        <p className="text-lg mb-4">
          <strong>Description : </strong>
          {job.description}
        </p>
        <p className="text-lg mb-4">
          <strong>Profil :</strong> {job.profil}
        </p>
        <p className="text-lg mb-4">
          <strong>Interview process :</strong> {job.interview}
        </p>
        <p className="text-lg mb-4">
          <strong>Contract type :</strong> {job.contract}
        </p>
        <p className="text-lg mb-4">
          <strong>Country :</strong> {job.country}
        </p>

        <hr className="my-4 border-t border-slate-900" />

        <p className="text-lg mb-4">
          <strong>Company information :</strong> {job.company}
        </p>
      </div>
    </div>
  );
};

export default JobDetail;
