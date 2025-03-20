// components/TalentNextProfil.js
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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useTalentNextProfil } from "@/hooks/useTalentNextProfil";

export default function TalentNextProfil() {
  const { user } = useKindeBrowserClient();
  const {
    level,
    setLevel,
    remote,
    setRemote,
    freelance,
    setFreelance,
    onsite,
    setOnsite,
    available,
    setAvailable,
    bio,
    setBio,
    country,
    setCountry,
    city,
    setCity,
    isSubmitting,
    isLoading,
    updateTalentNextProfil,
  } = useTalentNextProfil(user?.id);

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
          <Link href="/talent-setting">General</Link>
          <Link href="/talent-next-profil">My choices</Link>
          <Link href="/talent-avatar" className="font-semibold text-primary">
            Avatar
          </Link>
          <Link href="/talent-experience">Experiences</Link>
          <Link href="/talent-skill">Skills</Link>
          <Link href="/talent-social-link">Social Media</Link>
          <Link href="/talent-candidatures">My Applications</Link>
          <Link href="/talent-job">Jobs</Link>
        </nav>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Profil</CardTitle>
              <CardDescription>Update your informations</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={updateTalentNextProfil}>
                <p className="text-md mb-4 mt-4 font-semibold">Ypur Level</p>
                <Select value={level} onValueChange={setLevel}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Niveau" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Junior">Junior</SelectItem>
                    <SelectItem value="Intermédiaire">Intermediaire</SelectItem>
                    <SelectItem value="Expert">Expert</SelectItem>
                  </SelectContent>
                </Select>

                <p className="text-md mb-4 mt-4 font-semibold">Remote</p>
                <Select value={remote} onValueChange={setRemote}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Remote" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="true">YES</SelectItem>
                    <SelectItem value="false">NO</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-md mb-4 mt-4 font-semibold">Freelance</p>
                <Select value={freelance} onValueChange={setFreelance}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Freelance" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="true">YES</SelectItem>
                    <SelectItem value="false">NO</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-md mb-4 mt-4 font-semibold">Onsite</p>
                <Select value={onsite} onValueChange={setOnsite}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sur site" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="true">YES</SelectItem>
                    <SelectItem value="false">NO</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-md mb-4 mt-4 font-semibold">Availability</p>
                <Select value={available} onValueChange={setAvailable}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Disponibilité" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="true">YES</SelectItem>
                    <SelectItem value="false">NO</SelectItem>
                  </SelectContent>
                </Select>

                <p className="text-md mb-4 mt-4 font-semibold">City</p>
                <Input
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="mb-4"
                  placeholder="City"
                />
                <p className="text-md mb-4 mt-4 font-semibold">Country</p>
                <Input
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="mb-4"
                  placeholder="Pays"
                />
                <p className="text-md mb-4 mt-4 font-semibold">Bio</p>
                <Textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="mb-4"
                  placeholder="Bio"
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
