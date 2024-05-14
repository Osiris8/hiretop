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

import { Input } from "@/components/ui/input";

export default function TalentSkill() {
  const { user } = useKindeBrowserClient();

  const [experience, setExperience] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const userId = user?.id;
  const [experiences, setExperiences] = useState([]);
  const [newExperience, setNewExperience] = useState("");

  useEffect(() => {
    fetch("/api/experiences")
      .then((response) => response.json())
      .then((data) => setExperiences(data))
      .catch((error) => console.error("Error fetching experiences:", error));
  }, []);

  const addExperience = () => {
    if (!newExperience) return;

    fetch("/api/experiences", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ experience: newExperience }),
    })
      .then((response) => response.json())
      .then((data) => {
        setExperiences(data);
        setNewExperience("");
      })
      .catch((error) => console.error("Error adding experience:", error));
  };

  const removeExperience = (index) => {
    fetch(`/api/experiences/${index}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => setExperiences(data))
      .catch((error) => console.error("Error removing experience:", error));
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
          <Link href="#">General</Link>
          <Link href="#" className="font-semibold text-primary">
            Profil
          </Link>
          <Link href="#">Avatar</Link>
          <Link href="#">Expériences</Link>
          <Link href="#">Compétences</Link>
          <Link href="#">Réseaux sociaux</Link>
        </nav>
        <div className="grid gap-6">
          <Card x-chunk="dashboard-04-chunk-1">
            <CardHeader>
              <CardTitle>Profil</CardTitle>
              <CardDescription>Modifier vos informations</CardDescription>
            </CardHeader>
            <CardContent>
              <ul>
                {experiences.map((experience, index) => (
                  <li key={index}>
                    {experience}
                    <button onClick={() => removeExperience(index)}>
                      Supprimer
                    </button>
                  </li>
                ))}
              </ul>
              <form onSubmit={addExperience}>
                <Input
                  type="text"
                  value={newExperience}
                  onChange={(e) => setNewExperience(e.target.value)}
                  placeholder="Entrez une nouvelle expérience"
                  className="mb-4"
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
