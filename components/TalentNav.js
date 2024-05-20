// components/TalentNav.js
"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";
import { CircleUser, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useTalentNav } from "@/hooks/useTalentNav";
import Image from "next/image";

export default function TalentNav() {
  const { user } = useKindeBrowserClient();
  const { userTalent, profilImageUrl } = useTalentNav(user);

  return (
    <header className="flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href=""
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          HireTop
        </Link>
        <Link
          href="/talent-dashboard"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Dashboard
        </Link>
        <Link
          href="/talent-job"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Jobs
        </Link>

        <Link
          href="/talent-setting"
          className="text-foreground transition-colors hover:text-foreground"
        >
          Settings
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href=""
              className="flex items-center gap-2 text-lg font-semibold"
            >
              HireTop
            </Link>
            <Link
              href="/talent-dashboard"
              className="text-muted-foreground hover:text-foreground"
            >
              Dashboard
            </Link>
            <Link
              href="/talent-job"
              className="text-muted-foreground hover:text-foreground"
            >
              Jobs
            </Link>

            <Link href="/talent-setting" className="hover:text-foreground">
              Settings
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial"></form>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              {profilImageUrl[0] ? (
                <Image
                  src={profilImageUrl}
                  alt="Avatar"
                  className="h-8 w-8 rounded-full"
                  width={64}
                  height={64}
                />
              ) : (
                <CircleUser className="h-5 w-5" />
              )}

              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuItem>
              {userTalent[0]?.firstname + " " + userTalent[0]?.lastname}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={"/talent-setting"}>Paramètres</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/talent-dashboard"}>Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogoutLink>Se deconnecter</LogoutLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
