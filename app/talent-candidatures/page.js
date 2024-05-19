// app/candidatures/page.js
"use client";
import { useEffect, useState } from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import CandidatureCard from "@/components/CandidatureCard";

const CandidatureList = () => {
  const { user } = useKindeBrowserClient();
  const [candidatures, setCandidatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCandidatures = async () => {
      if (user) {
        try {
          const response = await fetch("/api/candidatures", {
            headers: {
              "user-id": user.id,
            },
          });
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
      }
    };

    fetchCandidatures();
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Mes Candidatures</h1>
      {candidatures.length === 0 ? (
        <p>Aucune candidature trouvée</p>
      ) : (
        <div>
          {candidatures.map((candidature) => (
            <CandidatureCard key={candidature._id} candidature={candidature} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CandidatureList;
