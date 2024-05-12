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
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

export default function TalentInfo() {
  const { user } = useKindeBrowserClient();

  const [level, setLevel] = useState({ level: "beginner" });
  const [remote, setRemote] = useState(false);
  const toggleRemote = () => {
    setRemote(!remote); // Bascule la valeur de remote
  };
  const [freelance, setFreelance] = useState(false);
  const [onsite, setOnsite] = useState(false);
  const [available, setAvailable] = useState(false);
  const [bio, setBio] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const userId = user?.id;
  const talentInfo = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSubmitting(true);
    try {
      const response = await fetch(`/api/talent-profil/${userId}`, {
        method: "PATCH",
        body: JSON.stringify({
          level: level,
          remote: remote,
          freelance: freelance,
          onsite: onsite,
          available: available,
          bio: bio,
        }),
      });
      if (response.ok) {
        setIsLoading(false);
        console.log(response);
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
              <form onSubmit={talentInfo}>
                <p className="text-md mb-4 mt-4 font-semibold">Votre Niveau</p>
                <RadioGroup defaultValue="Junior" className="mt-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={"Junior"}
                      id="r1"
                      onChange={(e) => setLevel(e.target.value)}
                    />
                    <Label htmlFor="r1">Junior</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={"intermediaire"}
                      id="r2"
                      onChange={(e) => setLevel(e.target.value)}
                    />
                    <Label htmlFor="r2">Intermédiaire</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={"expert"}
                      id="r3"
                      onChange={(e) => setLevel(e.target.value)}
                    />
                    <Label htmlFor="r3">Expert</Label>
                  </div>
                </RadioGroup>
                <p className="text-md mb-4 mt-4 font-semibold">Remote</p>
                <div className="flex justify-between mt-4 mb-4">
                  <Label htmlFor="airplane-mode1">
                    Disponible pour des opportunités à distance
                  </Label>
                  <Switch id="airplane-mode1" onChange={toggleRemote} />
                </div>
                <p className="text-md mb-4 mt-4 font-semibold">Freelance</p>
                <div className="flex justify-between mt-4 mb-4">
                  <Label htmlFor="airplane-mode2">
                    Souhaitez-vous travailler en Freelance ?
                  </Label>
                  <Switch id="airplane-mode2" />
                </div>
                <p className="text-md mb-4 mt-4 font-semibold">Sur site </p>
                <div className="flex justify-between mt-4 mb-4">
                  <Label htmlFor="airplane-mode3">
                    Souhaitez-vous travailler sur site ?
                  </Label>
                  <Switch id="airplane-mode3" />
                </div>
                <p className="text-md mb-4 mt-4 font-semibold">Disponibilité</p>
                <RadioGroup defaultValue="available" className="mt-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="available" id="d1" />
                    <Label htmlFor="d1">Disponible</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="comfortable" id="d2" />
                    <Label htmlFor="d2">Non disponible</Label>
                  </div>
                </RadioGroup>
                <p className="text-md mb-4 mt-4 font-semibold">Bio</p>

                <Textarea
                  className="mb-4"
                  placeholder="Bio"
                  defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, mauris eu tincidunt"
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
