// components/TalentSkill.js
"use client";

import React from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useTalentSkills } from "@/hooks/useTalentSkills";
import Link from "next/link";

export default function TalentSkill() {
  const { user } = useKindeBrowserClient();
  const {
    isLoading,
    isSubmitting,
    skill,
    allSkills,
    setSkill,
    addSkill,
    deleteSkill,
  } = useTalentSkills(user?.id);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addSkill();
  };

  return (
    <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
      <div className="mx-auto grid w-full max-w-6xl gap-2">
        <h1 className="text-3xl font-semibold">Settings</h1>
      </div>
      <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
        <nav className="grid gap-4 text-sm text-muted-foreground">
          <Link href="#">General</Link>
          <Link href="#">Profil</Link>
          <Link href="#">Avatar</Link>
          <Link href="#">Expériences</Link>
          <Link href="#" className="font-semibold text-primary">
            Compétences
          </Link>
          <Link href="#">Réseaux sociaux</Link>
        </nav>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Profil</CardTitle>
              <CardDescription>Modifier vos informations</CardDescription>
            </CardHeader>
            <CardContent>
              <ul>
                {allSkills.map((allSkill) => (
                  <li
                    key={allSkill._id}
                    className="flex items-center justify-between mb-4"
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
              <form onSubmit={handleSubmit}>
                <Input
                  type="text"
                  value={skill}
                  onChange={(e) => setSkill(e.target.value)}
                  placeholder="Ajoutez une compétence à la fois : Javascript, React, Angular, Node, etc..."
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
