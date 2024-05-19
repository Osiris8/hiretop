// app/jobs/[jobId]/candidatures/page.js
"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useEdgeStore } from "@/lib/edgestore";

const CandidatureList = () => {
  const { jobId } = useParams();
  const { user } = useKindeBrowserClient();
  const [candidatures, setCandidatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCandidatures = async () => {
      try {
        const response = await fetch(`/api/candidatures/${jobId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch candidatures");
        }
        const data = await response.json();
        setCandidatures(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (jobId) {
      fetchCandidatures();
    }
  }, [jobId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (candidatures.length === 0) {
    return <div>No candidatures found for this job</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">
        Candidatures for Job ID: {jobId}
      </h1>
      {candidatures.map((candidature) => (
        <div
          key={candidature._id}
          className="bg-white shadow-md rounded-lg p-4 mb-4"
        >
          <p>
            <strong>User ID:</strong> {candidature.userId}
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
          {candidature.offerUrl && (
            <div>
              <p>
                <strong>Offer URL:</strong>
              </p>
              <a
                href={candidature.offerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Voir l&apos;offre
              </a>
            </div>
          )}
          <CandidatureActions candidatureId={candidature._id} />
        </div>
      ))}
    </div>
  );
};

export default CandidatureList;

const CandidatureActions = ({ candidatureId }) => {
  const [status, setStatus] = useState("");
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { edgestore } = useEdgeStore(); // Assurez-vous d'importer et d'initialiser edgestore correctement

  const handleStatusChange = async () => {
    setIsSubmitting(true);

    try {
      const response = await fetch(`/api/candidature/${candidatureId}/status`, {
        method: "PATCH",
        body: JSON.stringify({ status }),
      });

      if (response.ok) {
        alert("Status updated successfully");
      } else {
        alert("Failed to update status");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOfferSubmit = async (e) => {
    e.preventDefault();

    if (file) {
      setIsSubmitting(true);

      try {
        const res = await edgestore.publicFiles.upload({
          file,
        });

        const response = await fetch(
          `/api/candidature/${candidatureId}/offer`,
          {
            method: "PATCH",
            body: JSON.stringify({ offerUrl: res.url }),
          }
        );

        if (response.ok) {
          alert("Offer sent successfully");
        } else {
          alert("Failed to send offer");
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="mt-4">
      <div className="mb-4">
        <label
          htmlFor="status"
          className="block text-sm font-medium text-gray-700"
        >
          Update Status
        </label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="">Select Status</option>
          <option value="En cours">En cours</option>
          <option value="Rejetée">Rejetée</option>
          <option value="Offre envoyée">Offre envoyée</option>
        </select>
        <button
          onClick={handleStatusChange}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Updating..." : "Update Status"}
        </button>
      </div>

      <div>
        <form onSubmit={handleOfferSubmit}>
          <label
            htmlFor="offer"
            className="block text-sm font-medium text-gray-700"
          >
            Envoyer une offre
          </label>
          <input
            id="offer"
            type="file"
            required
            accept=".pdf"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          />
          <button
            type="submit"
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Offer"}
          </button>
        </form>
      </div>
    </div>
  );
};
