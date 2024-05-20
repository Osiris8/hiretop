// app/jobs/[jobId]/page.js
"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useEdgeStore } from "@/lib/edgestore";
import { useRouter } from "next/navigation";
import TalentNav from "@/components/TalentNav";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
          alert(
            "Candidature envoyée avec succès. Vous serez rédirigé vers la page de vos candidatures."
          );
          router.push("/talent-candidatures");
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

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex min-h-screen w-full flex-col">
      <TalentNav />
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
        <img
          className="w-full h-48 object-cover mb-4 rounded-lg"
          src={job.mainImage}
          alt="Team"
        />
        <p className="text-lg mb-4">
          <strong>Description : </strong>
          {job.description}
        </p>
        <p className="text-lg mb-4">
          <strong>Profil recherché :</strong> {job.profil}
        </p>
        <p className="text-lg mb-4">
          <strong>Processus d&#39;entretien :</strong> {job.interview}
        </p>
        <p className="text-lg mb-4">
          <strong>Type de contrat :</strong> {job.contract}
        </p>
        <p className="text-lg mb-4">
          <strong>Pays :</strong> {job.country}
        </p>

        <hr className="my-4 border-t border-slate-900" />

        <p className="text-lg mb-4">
          <strong>Information sur l&#39;entreprise :</strong> {job.company}
        </p>

        {candidatureExists ? (
          <p className="text-red-500">Vous avez déjà postulé pour ce poste.</p>
        ) : (
          <div>
            <p className="text-lg mb-4">
              <strong>Envoyer votre CV</strong>
            </p>
            <form onSubmit={handleSubmit}>
              <Input
                type="file"
                required
                accept=".pdf,.doc,.docx"
                onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                className="mb-4"
              />
              <Button
                type="submit"
                className="bg-slate-900 text-white px-4 py-2 rounded"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Envoi en cours..." : "Postuler"}
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobDetail;
