// app/candidatures/page.js
"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import TalentNav from "@/components/TalentNav";
import CandidatureCard from "@/components/CandidatureCard";

const CandidatureList = () => {
  const { user, isLoading, isAuthenticated } = useKindeBrowserClient();
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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return isAuthenticated ? (
    <div>
      <TalentNav />

      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">Settings</h1>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <nav
            className="grid gap-4 text-sm text-muted-foreground"
            x-chunk="dashboard-04-chunk-0"
          >
            <Link href="/talent-setting">General</Link>
            <Link href="/talent-next-profil">My choices</Link>
            <Link href="/talent-avatar">Avatar</Link>
            <Link href="/talent-experience">Experiences</Link>
            <Link href="/talent-skill">Skills</Link>
            <Link href="/talent-social-link">Socials Links</Link>
            <Link href="/talent-candidatures" className="font-semibold">
              My Applications
            </Link>
            <Link href="/talent-job">Jobs</Link>
          </nav>
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>My Applications</CardTitle>
                <CardDescription>Find your applications here</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-6 max-w-4xl mx-auto">
                  {candidatures.length === 0 ? (
                    <p>No applications found</p>
                  ) : (
                    <div>
                      {candidatures.map((candidature) => (
                        <CandidatureCard
                          key={candidature._id}
                          candidature={candidature}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  ) : (
    <div>
      Please wait... You will be redirected. If the redirection doesn&#39;t
      work, click on this link:
      <LoginLink>
        <span className="underline"> Login</span>
      </LoginLink>
    </div>
  );
};

export default CandidatureList;
