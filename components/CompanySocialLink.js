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
export default function CompanySocialLink() {
  const { user } = useKindeBrowserClient();
  const [facebook, setFacebook] = useState("");
  const [github, setGithub] = useState("");
  const [twitter, setTwitter] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [instagram, setInstagram] = useState("");
  const [youtube, setYoutube] = useState("");
  const [tiktok, setTiktok] = useState("");
  const [website, setWebsite] = useState("");
  const [other, setOther] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);
  const userId = user?.id;
  const companySocialLink = async (e) => {
    e.preventDefault();
    setLoadingButton(true);
    setIsSubmitting(true);
    try {
      const response = await fetch(`/api/company-social-link/${userId}`, {
        method: "PATCH",
        body: JSON.stringify({
          facebook: facebook,
          github: github,
          twitter: twitter,
          linkedin: linkedin,
          instagram: instagram,
          youtube: youtube,
          tiktok: tiktok,
          website: website,
          other: other,
        }),
      });
      if (response.ok) {
        setLoadingButton(false);
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
          <Link href="#" className="font-semibold text-primary">
            General
          </Link>
          <Link href="#">Profil</Link>
          <Link href="#">Avatar</Link>
          <Link href="#">Expériences</Link>
          <Link href="#">Compétences</Link>
          <Link href="#">Réseaux sociaux</Link>
        </nav>
        <div className="grid gap-6">
          <Card x-chunk="dashboard-04-chunk-1">
            <CardHeader>
              <CardTitle>Réseaux sociaux</CardTitle>
              <CardDescription>Modifier vos informations</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={companySocialLink}>
                <Label htmlFor="facebook">Facebook</Label>
                <Input
                  value={facebook ? facebook : ""}
                  onChange={(e) => setFacebook(e.target.value)}
                  placeholder="Facebook"
                  className="mb-8 mt-2"
                  id="facebook"
                />
                <Label htmlFor="github">Github</Label>
                <Input
                  value={github ? github : ""}
                  onChange={(e) => setGithub(e.target.value)}
                  placeholder="Github"
                  className="mb-8 mt-2"
                  id="github"
                />
                <Label htmlFor="twitter">Twitter</Label>
                <Input
                  value={twitter ? twitter : ""}
                  onChange={(e) => setTwitter(e.target.value)}
                  placeholder="Twitter"
                  className="mb-8 mt-2"
                  id="twitter"
                />
                <Label htmlFor="linkedin">Linkedin</Label>
                <Input
                  value={linkedin ? linkedin : ""}
                  onChange={(e) => setLinkedin(e.target.value)}
                  placeholder="Linkedin"
                  className="mb-8 mt-2"
                  id="linkedin"
                />
                <Label htmlFor="instagram">Instagram</Label>
                <Input
                  value={instagram ? instagram : ""}
                  onChange={(e) => setInstagram(e.target.value)}
                  placeholder="Instagram"
                  className="mb-8 mt-2"
                  id="instagram"
                />
                <Label htmlFor="youtube">Youtube</Label>
                <Input
                  value={youtube ? youtube : ""}
                  onChange={(e) => setYoutube(e.target.value)}
                  placeholder="Youtube"
                  className="mb-8 mt-2"
                  id="youtube"
                />
                <Label htmlFor="tiktok">Tiktok</Label>
                <Input
                  value={tiktok ? tiktok : ""}
                  onChange={(e) => setTiktok(e.target.value)}
                  placeholder="Tiktok"
                  className="mb-8 mt-2"
                  id="tiktok"
                />
                <Label htmlFor="website">website</Label>
                <Input
                  value={website ? website : ""}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="Votre Site Web"
                  className="mb-8 mt-2"
                  id="website"
                />
                <Label htmlFor="other">Autre</Label>
                <Input
                  value={other ? other : ""}
                  onChange={(e) => setOther(e.target.value)}
                  placeholder="Autre"
                  className="mb-8 mt-2"
                  id="other"
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
