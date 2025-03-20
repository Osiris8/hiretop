// components/TalentSocialLink.js
"use client";

import React from "react";
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
import { useTalentSocialLink } from "@/hooks/useTalentSocialLink";

export default function TalentSocialLink() {
  const { user } = useKindeBrowserClient();
  const {
    facebook,
    setFacebook,
    github,
    setGithub,
    twitter,
    setTwitter,
    linkedin,
    setLinkedin,
    isSubmitting,
    loadingButton,
    updateTalentSocialLink,
  } = useTalentSocialLink(user?.id);

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
              <CardTitle>Réseaux sociaux</CardTitle>
              <CardDescription>Modifier vos informations</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={updateTalentSocialLink}>
                <Label htmlFor="facebook">Facebook</Label>
                <Input
                  value={facebook}
                  onChange={(e) => setFacebook(e.target.value)}
                  placeholder="Profil Facebook"
                  className="mb-8 mt-2"
                  id="facebook"
                />
                <Label htmlFor="github">Github</Label>
                <Input
                  value={github}
                  onChange={(e) => setGithub(e.target.value)}
                  placeholder="Profil Github"
                  className="mb-8 mt-2"
                  id="github"
                />
                <Label htmlFor="twitter">Twitter</Label>
                <Input
                  value={twitter}
                  onChange={(e) => setTwitter(e.target.value)}
                  placeholder="Profil Twitter"
                  className="mb-8 mt-2"
                  id="twitter"
                />
                <Label htmlFor="linkedin">Linkedin</Label>
                <Input
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)}
                  placeholder="Profil Linkedin"
                  className="mb-8 mt-2"
                  id="linkedin"
                />
                <CardFooter className="border-t px-6 py-4">
                  {!loadingButton && <Button type="submit">Save</Button>}
                  {loadingButton && (
                    <Button disabled={loadingButton}>Loading</Button>
                  )}
                </CardFooter>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
