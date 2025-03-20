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
export default function TalentDashboard() {
  const { user } = useKindeBrowserClient();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [telephone, setTelephone] = useState("");
  const [country, setCountry] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const userId = user?.id;
  const talentDashboard = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSubmitting(true);
    try {
      const response = await fetch(`/api/talent-profil/${userId}`, {
        method: "PATCH",
        body: JSON.stringify({
          firstname: firstname,
          lastname: lastname,
          telephone: telephone,
          country: country,
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
          <Card x-chunk="dashboard-04-chunk-1">
            <CardHeader>
              <CardTitle>Profil</CardTitle>
              <CardDescription>Update your informations</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={talentDashboard}>
                <Label htmlFor="Firstname">Firstname</Label>
                <Input
                  required={true}
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  placeholder="Firstname"
                  className="mb-8 mt-2"
                  id="firstname"
                />
                <Label htmlFor="Lastname">Lastname</Label>
                <Input
                  required={true}
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  placeholder="Lastname"
                  className="mb-8 mt-2"
                  id="lastname"
                />
                <Label htmlFor="telephone">Number</Label>
                <Input
                  required={true}
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                  placeholder="Number"
                  className="mb-8 mt-2"
                  id="telephone"
                />
                <Label htmlFor="country">Country</Label>
                <Input
                  required={true}
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="Country"
                  className="mb-8 mt-2"
                  id="country"
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
