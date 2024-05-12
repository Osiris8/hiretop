"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

import NavTalent from "@/components/NavTalent";
import SocialTalent from "@/components/SocialLinkTalent";
export default function DashboardTalent() {
  const { isAuthenticated, isLoading } = useKindeBrowserClient();
  if (isLoading) return <div>Loading...</div>;

  return isAuthenticated ? (
    <div className="flex min-h-screen w-full flex-col">
      <NavTalent />
      <SocialTalent />
    </div>
  ) : (
    <div>
      You have to <LoginLink>Login</LoginLink> to see this page
    </div>
  );
}