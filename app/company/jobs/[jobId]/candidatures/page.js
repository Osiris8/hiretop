// app/company/jobs/[jobId]/candidatures/page.js
"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useEdgeStore } from "@/lib/edgestore";
import CompanyNav from "@/components/CompanyNav";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

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
    <>
      <CompanyNav />
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Applications for the job</h1>
        {candidatures.map((candidature) => (
          <div
            key={candidature._id}
            className="bg-white shadow-md rounded-lg p-4 mb-4"
          >
            <p>
              <strong>Status:</strong> {candidature.status}
            </p>
            <p>
              <strong>Application date:</strong>{" "}
              {new Date(candidature.createdAt).toLocaleDateString()}
            </p>
            <a
              href={candidature.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              View the resume
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
                  View the offer
                </a>
              </div>
            )}
            <CandidatureActions candidatureId={candidature._id} />
          </div>
        ))}
      </div>
    </>
  );
};

export default CandidatureList;

const CandidatureActions = ({ candidatureId }) => {
  const [status, setStatus] = useState("");
  const [file, setFile] = useState(null);
  const [isSubmittingStatus, setIsSubmittingStatus] = useState(false);
  const [isSubmittingOffer, setIsSubmittingOffer] = useState(false);
  const { edgestore } = useEdgeStore();

  const handleStatusChange = async () => {
    setIsSubmittingStatus(true);

    try {
      const response = await fetch(`/api/candidature/${candidatureId}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      if (response.ok) {
        alert("Status modifié avec succès");
        window.location.reload();
      } else {
        alert("Erreur lors de la modification du statut");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmittingStatus(false);
    }
  };

  const handleOfferSubmit = async (e) => {
    e.preventDefault();

    if (file) {
      setIsSubmittingOffer(true);

      try {
        const res = await edgestore.publicFiles.upload({
          file,
        });

        const response = await fetch(
          `/api/candidature/${candidatureId}/offer`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ offerUrl: res.url }),
          }
        );

        if (response.ok) {
          alert("Offre envoyé avec succès");
          window.location.reload();
        } else {
          alert("Erreur lors de l&apos;envoi de l&apos;offre");
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsSubmittingOffer(false);
      }
    }
  };

  return (
    <div className="mt-4">
      <div className="mb-4">
        <Label htmlFor="status">Statut</Label>
        <Select
          id="status"
          value={status}
          onValueChange={(value) => setStatus(value)}
          //onChange={(e) => setStatus(e.target.value)}
          className="mt-6 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <SelectTrigger className="">
            <SelectValue placeholder="Update Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="In progress">In progress</SelectItem>
            <SelectItem value="Rejected">Rejected</SelectItem>
            <SelectItem value="Offer sent">Offer sent</SelectItem>
          </SelectContent>
        </Select>
        <Button
          onClick={handleStatusChange}
          className="mt-2 bg-slate-900 text-white px-4 py-2 rounded"
          disabled={isSubmittingStatus}
        >
          {isSubmittingStatus ? "Updating..." : "Update"}
        </Button>
      </div>

      <div>
        <form onSubmit={handleOfferSubmit}>
          <Label
            htmlFor="offer"
            className="block text-sm font-medium text-gray-700"
          >
            Send Offer
          </Label>
          <Input
            id="offer"
            type="file"
            required
            accept=".pdf"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          />
          <Button
            type="submit"
            className="mt-2 bg-slate-900 text-white px-4 py-2 rounded"
            disabled={isSubmittingOffer}
          >
            {isSubmittingOffer ? "Sending in progress..." : "Send"}
          </Button>
        </form>
      </div>
    </div>
  );
};
