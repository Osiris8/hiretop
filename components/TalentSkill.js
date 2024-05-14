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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const userId = user?.id;

  const [skill, setSkill] = useState("");
  const [allSkills, setAllSkills] = useState([]);

  /*useEffect(() => {
    const getSkill = async () => {
      if (user && user.id) {
        // Vérifier que 'user' et 'user.id' existent
        const response = await fetch(`/api/talent-skill/${userId}`);

        const data = await response.json();
        console.log(data);
        setAllSkills(data);
      } else {
        console.log("User not logged in or user data not loaded");
      }
    };
    getSkill();
  }, [userId, user]);*/

  const talentSkill = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSubmitting(true);
    try {
      const response = await fetch("api/talent-skill", {
        method: "POST",
        body: JSON.stringify({
          userId: userId,
          skill: skill,
        }),
      });

      if (response.ok) {
        setIsLoading(false);
        console.log(response);
        setSkill("");
        setAllSkills([...allSkills, skill]);
      }
    } catch (error) {
      console.error(error);
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
                {allSkills.map((allSkills, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <span>{allSkills}</span>
                    <Button
                      variant="destructive"
                      onClick={() => removeExperience(index)}
                    >
                      Supprimer
                    </Button>
                  </li>
                ))}
              </ul>

              <form onSubmit={talentSkill}>
                <Input
                  type="text"
                  value={skill}
                  onChange={(e) => setSkill(e.target.value)}
                  placeholder="Ajoutez votre expérience"
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