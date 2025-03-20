"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";
import { CircleUser, Menu, Package2, Search } from "lucide-react";
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
import { useEffect, useState } from "react";
import Image from "next/image";
export default function CompanyNav() {
  const { user } = useKindeBrowserClient();
  const userId = user?.id;
  const [userCompany, setUserCompany] = useState({});
  const [profilImageUrl, setProfilImageUrl] = useState("");

  useEffect(() => {
    const getCompany = async () => {
      if (user && user.id) {
        // Vérifier que 'user' et 'user.id' existent
        const response = await fetch(`/api/company-profil/${userId}`);

        const data = await response.json();
        console.log(data);
        setUserCompany(data);
      } else {
        console.log("User not logged in or user data not loaded");
      }
    };
    const getCompanyAvatar = async () => {
      if (user && user.id) {
        // Vérifier que 'user' et 'user.id' existent
        const response = await fetch(`/api/company-avatar/${userId}`);

        const data = await response.json();
        if (data && data.length > 0 && data[0].avatar) {
          setProfilImageUrl(data[0].avatar);
        } else {
          console.log("No avatar data available");
        }
      } else {
        console.log("User not logged in or user data not loaded");
      }
    };
    getCompany();
    getCompanyAvatar();
  }, [userId, user]);

  return (
    <header className="flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="/company-dashboard"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          HireTop
        </Link>
        <Link
          href="/company-dashboard"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Dashboard
        </Link>
        <Link
          href="/company-job"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Jobs
        </Link>

        <Link
          href="/company/jobs"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Offers
        </Link>

        <Link
          href="/company-setting"
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
              href="/company-dashboard"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              HireTop
            </Link>
            <Link
              href="/company-dashboard"
              className="text-muted-foreground hover:text-foreground"
            >
              Dashboard
            </Link>
            <Link
              href="/company-job"
              className="text-muted-foreground hover:text-foreground"
            >
              Jobs
            </Link>
            <Link
              href="/company/jobs"
              className="text-muted-foreground hover:text-foreground"
            >
              Offers
            </Link>

            <Link href="/company-setting" className="hover:text-foreground">
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
                  width={32}
                  height={32}
                />
              ) : (
                <CircleUser className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuItem>{userCompany[0]?.company}</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/company-dashboard">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/company-setting">Settings</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogoutLink>Logout</LogoutLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
