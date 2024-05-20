"use client";

import React, { useState, useEffect } from "react";
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

import { Input } from "./ui/input";
import { useEdgeStore } from "../lib/edgestore";
import { useRouter } from "next/navigation";

export default function CompanyAvatar() {
  const { user } = useKindeBrowserClient();
  const [file, setFile] = useState(null);
  const { edgestore } = useEdgeStore();

  const [profilImageUrl, setProfilImageUrl] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const userId = user?.id;
  const router = useRouter();

  const companyAvatar = async (e) => {
    e.preventDefault();

    if (file) {
      setIsLoading(true);
      setIsSubmitting(true);
      const res = await edgestore.publicFiles.upload({
        file,
      });

      setProfilImageUrl(res.url);
      try {
        const response = await fetch(`/api/company-avatar/${userId}`, {
          method: "PATCH",
          body: JSON.stringify({
            userId: userId,
            avatar: res.url,
          }),
        });
        if (response.ok) {
          setIsLoading(false);
          console.log(response);
          router.push("/company-dashboard");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

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
          <Link href="/company-avatar" className="font-semibold text-primary">
            Avatar
          </Link>
          <Link href="/company-job">Posté un job</Link>
          <Link href="/company/jobs">Offres reçues</Link>
          <Link href="/company-social-link">Réseaux sociaux</Link>
        </nav>
        <div className="grid gap-6">
          <Card x-chunk="dashboard-04-chunk-1">
            <CardHeader>
              <CardTitle>Profil</CardTitle>
              <CardDescription>Photo de profil</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={companyAvatar}>
                <Input
                  className="mb-4"
                  type="file"
                  required
                  accept=".jpg, .jpeg, .png"
                  onChange={(e) => {
                    setFile(e.target.files?.[0] ?? null);
                  }}
                />
                {!isLoading && <Button type="submit">Save</Button>}
                {isLoading && <Button disabled={isLoading}>Loading</Button>}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
