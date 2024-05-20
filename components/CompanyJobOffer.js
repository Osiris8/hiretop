"use client";

import React, { useState } from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect } from "react";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";
import { useRouter } from "next/navigation";
export default function CompanyJobOffer() {
  const { user } = useKindeBrowserClient();
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

  return (
    <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
      <div className="mx-auto grid w-full max-w-6xl gap-2">
        <h1 className="text-3xl font-semibold">Settings</h1>
      </div>
      <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
        <nav
          className="grid gap-4 text-sm text-muted-foreground"
          x-chunk="dashboard-04-chunk-0"
        >
          <Link href="/company-setting">General</Link>
          <Link href="/company-about">Présentation</Link>
          <Link href="/company-avatar">Avatar</Link>
          <Link href="/company-job">Posté un job</Link>
          <Link href="/company/jobs" className="font-semibold text-primary">
            Proposition reçues
          </Link>
          <Link href="/company-social-link">Réseaux sociaux</Link>
        </nav>
        <div className="grid gap-6">
          <Card x-chunk="dashboard-04-chunk-1">
            <CardHeader>
              <CardTitle>Proposition reçues</CardTitle>
              <CardDescription>
                Cliquez sur les jobs que vous avez posté pour voir les
                propositions des différents talents.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-6 max-w-4xl mx-auto">
                <h3 className=" font-bold mb-4">Jobs Posté</h3>
                {jobs.length === 0 ? (
                  <p>Aucun Job trouvé</p>
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
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
