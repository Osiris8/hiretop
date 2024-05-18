// components/TalentAvatar.js
"use client";

import React from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useTalentAvatar } from "@/hooks/useTalentAvatar";

export default function TalentAvatar() {
  const { user } = useKindeBrowserClient();
  const { file, setFile, isLoading, uploadTalentAvatar } =
    useTalentAvatar(user);

  return (
    <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
      <div className="mx-auto grid w-full max-w-6xl gap-2">
        <h1 className="text-3xl font-semibold">Settings</h1>
      </div>
      <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
        <nav className="grid gap-4 text-sm text-muted-foreground">
          <Link href="#">General</Link>
          <Link href="#">Profil</Link>
          <Link href="#" className="font-semibold text-primary">
            Avatar
          </Link>
          <Link href="#">Expériences</Link>
          <Link href="#">Compétences</Link>
          <Link href="#">Réseaux sociaux</Link>
        </nav>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Profil</CardTitle>
              <CardDescription>Photo de profil</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={uploadTalentAvatar}>
                <Input
                  className="mb-4"
                  type="file"
                  required
                  accept=".jpg, .jpeg, .png"
                  onChange={(e) => setFile(e.target.files?.[0] ?? null)}
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
