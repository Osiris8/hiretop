// app/company/jobs/page.js
"use client";
import { useEffect, useState } from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";
import { useRouter } from "next/navigation";

const CompanyJobList = () => {
  const { user, isAuthenticated } = useKindeBrowserClient();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("/api/jobs", {
          headers: {
            "user-id": user.id,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchJobs();
    }
  }, [user]);

  return isAuthenticated ? (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Mes Offres d&emploi</h1>
      {jobs.length === 0 ? (
        <p>Aucune offre trouvée</p>
      ) : (
        <div>
          {jobs.map((job) => (
            <div
              key={job._id}
              className="bg-white shadow-md rounded-lg p-4 mb-4 cursor-pointer"
              onClick={() =>
                router.push(`/company/jobs/${job._id}/candidatures`)
              }
            >
              <h2 className="text-2xl font-bold">{job.title}</h2>
              <p>{job.description}</p>
              <p>{job.contract}</p>
              <p>{job.country}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  ) : (
    <div>
      You have to <LoginLink>Login</LoginLink> to see this page
    </div>
  );
};

export default CompanyJobList;
