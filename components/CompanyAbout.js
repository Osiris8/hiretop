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
import { Textarea } from "@/components/ui/textarea";

import { Label } from "@/components/ui/label";
export default function CompanyAbout() {
  const { user } = useKindeBrowserClient();
  const [companyAbout, setCompanyAbout] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const userId = user?.id;
  const companyAboutSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSubmitting(true);
    try {
      const response = await fetch(`/api/company-about/${userId}`, {
        method: "PATCH",
        body: JSON.stringify({
          companyAbout: companyAbout,
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
          <Link href="/company-setting">General</Link>
          <Link href="/company-about" className="font-semibold text-primary">
            Présentation
          </Link>
          <Link href="/company-avatar">Avatar</Link>
          <Link href="/company-job">Posté un job</Link>
          <Link href="/company/jobs">Offres reçues</Link>
          <Link href="/company-social-link">Réseaux sociaux</Link>
        </nav>
        <div className="grid gap-6">
          <Card x-chunk="dashboard-04-chunk-1">
            <CardHeader>
              <CardTitle>Compagnie Profil</CardTitle>
              <CardDescription>Modifier vos informations</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={companyAboutSubmit}>
                <Label htmlFor="companyAbout">
                  Présentation de votre entreprise
                </Label>
                <Textarea
                  id="companyAbout"
                  name="companyAbout"
                  rows={15}
                  required
                  value={companyAbout}
                  onChange={(e) => setCompanyAbout(e.target.value)}
                  className="mb-4 mt-4"
                  placeholder="Décrivez votre entreprise"
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
