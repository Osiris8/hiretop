"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEdgeStore } from "../../../lib/edgestore";

const JobDetail = () => {
  const { isAuthenticated, user } = useKindeBrowserClient();
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { edgestore } = useEdgeStore();

  useEffect(() => {
    if (jobId) {
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

      fetchJob();
    }
  }, [jobId]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file || !user) return;

    setIsLoading(true);
    setIsSubmitting(true);

    try {
      const { url } = await edgestore.publicFiles.upload({
        file,
      });

      const response = await fetch(`/api/candidature`, {
        method: "POST",
        body: JSON.stringify({
          userId: user.id,
          jobId,
          cvUrl: url,
        }),
      });

      if (response.ok) {
        console.log("Candidature submitted successfully");
      } else {
        console.error("Failed to submit candidature");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setIsLoading(false);
      setIsSubmitting(false);
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

  return isAuthenticated ? (
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
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">À propos de la compagnie</h2>
        {job.companyAvatar && (
          <img
            className="w-24 h-24 rounded-full mb-4"
            src={job.companyAvatar}
            alt="Company Avatar"
          />
        )}
        <p className="text-lg mb-4">
          <strong>Nom:</strong> {job.company}
        </p>
        <p className="text-lg mb-4">
          <strong>À propos:</strong> {job.companyAbout}
        </p>
        <div className="text-lg mb-4">
          <strong>Réseaux sociaux:</strong>
          <ul>
            {job.companySocial.facebook && (
              <li>Facebook: {job.companySocial.facebook}</li>
            )}
            {job.companySocial.github && (
              <li>Github: {job.companySocial.github}</li>
            )}
            {job.companySocial.twitter && (
              <li>Twitter: {job.companySocial.twitter}</li>
            )}
            {job.companySocial.linkedin && (
              <li>LinkedIn: {job.companySocial.linkedin}</li>
            )}
            {job.companySocial.instagram && (
              <li>Instagram: {job.companySocial.instagram}</li>
            )}
            {job.companySocial.youtube && (
              <li>YouTube: {job.companySocial.youtube}</li>
            )}
            {job.companySocial.tiktok && (
              <li>TikTok: {job.companySocial.tiktok}</li>
            )}
            {job.companySocial.website && (
              <li>Website: {job.companySocial.website}</li>
            )}
            {job.companySocial.other && (
              <li>Other: {job.companySocial.other}</li>
            )}
          </ul>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <Input
          className="mb-4"
          type="file"
          required
          accept=".pdf, .doc, .docx"
          onChange={handleFileChange}
        />
        {!isLoading && <Button type="submit">Submit CV</Button>}
        {isLoading && <Button disabled={isLoading}>Loading</Button>}
      </form>
    </div>
  ) : (
    <div>
      You have to <LoginLink>Login</LoginLink> to see this page
    </div>
  );
};

export default JobDetail;
