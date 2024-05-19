// app/jobs/[jobId]/page.js
"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useEdgeStore } from "@/lib/edgestore";
import { useRouter } from "next/navigation";

const JobDetail = () => {
  const { jobId } = useParams();
  const { user } = useKindeBrowserClient();
  const { edgestore } = useEdgeStore();
  const router = useRouter();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [file, setFile] = useState(null);
  const [cvUrl, setCvUrl] = useState("");
  const [candidatureExists, setCandidatureExists] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    const checkCandidature = async () => {
      if (user && jobId) {
        try {
          const response = await fetch(`/api/candidature/check`, {
            headers: {
              "user-id": user.id,
              "job-id": jobId,
            },
          });
          if (!response.ok) {
            throw new Error("Failed to check candidature");
          }
          const data = await response.json();
          setCandidatureExists(data.exists);
        } catch (error) {
          console.error(error);
        }
      }
    };

    if (jobId) {
      fetchJob();
      checkCandidature();
    }
  }, [jobId, user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (file) {
      setIsSubmitting(true);

      try {
        const res = await edgestore.publicFiles.upload({
          file,
        });

        setCvUrl(res.url);

        const response = await fetch(`/api/candidature`, {
          method: "POST",
          body: JSON.stringify({
            userId: user.id,
            jobId: jobId,
            cvUrl: res.url,
          }),
        });

        if (response.ok) {
          router.push("/candidatures");
        } else {
          console.error("Failed to submit candidature");
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!job) {
    return <div>No job found</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
      <img
        className="w-full h-48 object-cover mb-4"
        src={job.mainImage}
        alt="Team"
      />
      <p className="text-lg mb-4">{job.description}</p>
      <p className="text-lg mb-4">
        <strong>Profil recherché:</strong> {job.profil}
      </p>
      <p className="text-lg mb-4">
        <strong>Processus d&#39;entretien:</strong> {job.interview}
      </p>
      <p className="text-lg mb-4">
        <strong>Type de contrat:</strong> {job.contract}
      </p>
      <p className="text-lg mb-4">
        <strong>Pays:</strong> {job.country}
      </p>
      <p className="text-lg mb-4">
        <strong>Publié:</strong> {job.publicationDate}
      </p>

      {candidatureExists ? (
        <p className="text-red-500">Vous avez déjà postulé pour ce poste.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            required
            accept=".pdf,.doc,.docx"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            className="mb-4"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Envoi en cours..." : "Postuler"}
          </button>
        </form>
      )}
    </div>
  );
};

export default JobDetail;
