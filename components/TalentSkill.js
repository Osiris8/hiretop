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

  useEffect(() => {
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
  }, [userId, user, skill]);

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
        setSkill("");
        setAllSkills([...allSkills, skill]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteSkill = async (id) => {
    try {
      const response = await fetch(`/api/talent-skill/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setAllSkills(allSkills.filter((skill) => skill._id !== id));
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
                {allSkills.map((allSkill) => (
                  <li
                    key={allSkill._id}
                    className="flex items-center justify-between"
                  >
                    <span>{allSkill.skill}</span>
                    <Button
                      variant="destructive"
                      onClick={() => deleteSkill(allSkill._id)}
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
                <div class="col-span-full">
                  <label
                    for="start-date"
                    class="block mb-3 text-sm font-medium text-black"
                  >
                    Date de début
                  </label>
                  <Input type="date" id="start-date" />
                </div>
                <div class="col-span-full">
                  <label
                    for="country"
                    class="block mb-3 text-sm font-medium text-black"
                  >
                    Pays
                  </label>
                  <input
                    required
                    id="country"
                    class="block w-full h-12 px-4 py-2 text-blue-500 duration-200 border rounded-lg appearance-none bg-chalk border-zinc-300 placeholder-zinc-300 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm"
                    placeholder="Your country"
                    type="text"
                  />
                </div>
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
