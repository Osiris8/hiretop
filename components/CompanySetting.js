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
export default function CompanyDashboard() {
  const { user } = useKindeBrowserClient();
  const [company, setCompany] = useState("");
  const [domain, setDomain] = useState("");
  const [size, setSize] = useState("");
  const [position, setPosition] = useState("");
  const [telephone, setTelephone] = useState("");
  const [country, setCountry] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const userId = user?.id;
  const companyDashboard = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSubmitting(true);
    try {
      const response = await fetch(`/api/company-profil/${userId}`, {
        method: "PATCH",
        body: JSON.stringify({
          company: company,
          domain: domain,
          size: size,
          position: position,
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
          <Link href="/company-setting" className="font-semibold text-primary">
            General
          </Link>
          <Link href="/company-about">Présentation</Link>
          <Link href="/company-avatar">Avatar</Link>
          <Link href="/company-job">Posté un job</Link>
          <Link href="/company/jobs">Propositions reçues</Link>
          <Link href="/company-all-job">Explorer des jobs</Link>
          <Link href="/company-social-link">Réseaux sociaux</Link>
        </nav>
        <div className="grid gap-6">
          <Card x-chunk="dashboard-04-chunk-1">
            <CardHeader>
              <CardTitle>Compagnie Profil</CardTitle>
              <CardDescription>Modifier vos informations</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={companyDashboard}>
                <Label htmlFor="company">Notre de votre entreprise</Label>
                <Input
                  required={true}
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Notre de votre entreprise"
                  className="mb-8 mt-2"
                  id="company"
                />
                <Label htmlFor="domain">Domaine</Label>
                <Input
                  required={true}
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  placeholder="Votre domaine"
                  className="mb-8 mt-2"
                  id="domain"
                />
                <Label htmlFor="size">Taille</Label>
                <Input
                  required={true}
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  placeholder="Taille de votre entreprise"
                  className="mb-8 mt-2"
                  id="size"
                />
                <Label htmlFor="position">Adresse</Label>
                <Input
                  required={true}
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  placeholder="Adresse de votre entreprise"
                  className="mb-8 mt-2"
                  id="position"
                />
                <Label htmlFor="telephone">Telephone</Label>
                <Input
                  required={true}
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                  placeholder="Telephone"
                  className="mb-8 mt-2"
                  id="telephone"
                />
                <Label htmlFor="country">Pays</Label>
                <Input
                  required={true}
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="Votre Pays"
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
