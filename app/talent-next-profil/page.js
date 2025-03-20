"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

import TalentNav from "@/components/TalentNav";
import TalentNextProfil from "@/components/TalentNextPofil";
export default function TalentDashboard() {
  const { isAuthenticated, isLoading } = useKindeBrowserClient();
  if (isLoading) return <div>Loading...</div>;

  return isAuthenticated ? (
    <div className="flex min-h-screen w-full flex-col">
      <TalentNav />
      <TalentNextProfil />
    </div>
  ) : (
    <div>
      Please wait... You will be redirected. If the redirection doesn&#39;t
      work, click on this link:
      <LoginLink>
        <span className="underline"> Login</span>
      </LoginLink>
    </div>
  );
}
