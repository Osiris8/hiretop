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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";
export default function CompanyJob() {
  const { user } = useKindeBrowserClient();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [profil, setProfil] = useState("");
  const [interview, setInterview] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const userId = user?.id;
  const companyJob = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSubmitting(true);

    try {
      const response = await fetch("api/company-job", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId.id,
          title: title,
          description: description,
          profil: profil,
          interview: interview,
        }),
      });

      if (response.ok) {
        setIsLoading(false);
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
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
          <Link href="#" className="font-semibold text-primary">
            General
          </Link>
          <Link href="#">Présentation</Link>
          <Link href="#">Equipes</Link>
          <Link href="#">Technologies</Link>
          <Link href="#">Galerie</Link>
          <Link href="#">Réseaux sociaux</Link>
        </nav>
        <div className="grid gap-6">
          <Card x-chunk="dashboard-04-chunk-1">
            <CardHeader>
              <CardTitle>Job</CardTitle>
              <CardDescription>Poster un Job</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading && isSubmitting && (
                <ul>
                  <li>Job POsté</li>
                </ul>
              )}
              <form onSubmit={companyJob}>
                <Label htmlFor="jobTitle">Titre du Poste</Label>
                <Input
                  required={true}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Titre du Poste"
                  className="mb-8 mt-2"
                  id="jobTitle"
                  type="text"
                />
                <Label htmlFor="jobDescription">Description</Label>
                <Textarea
                  required={true}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Description du Job"
                  className="mb-8 mt-2"
                  id="jobDescription"
                  type="text"
                />
                <Label htmlFor="jobProfil">Profil Recherché</Label>
                <Textarea
                  required={true}
                  value={profil}
                  onChange={(e) => setProfil(e.target.value)}
                  placeholder="Profil recherché"
                  className="mb-8 mt-2"
                  id="jobProfil"
                  type="text"
                />
                <Label htmlFor="jobInterview">Déroulement des entretiens</Label>
                <Textarea
                  required={true}
                  value={interview}
                  onChange={(e) => setInterview(e.target.value)}
                  placeholder="Déroulement des entretiens"
                  className="mb-8 mt-2"
                  id="jobInterview"
                  type="text"
                />

                <CardFooter className="border-t px-6 py-4">
                  {!isLoading && <Button type="submit">Save</Button>}
                  {isLoading && <Button disabled={isLoading}>Loading</Button>}
                </CardFooter>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
