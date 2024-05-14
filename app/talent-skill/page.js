"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import TalentSkillData from "@/components/TalentSkillData";
import TalentNav from "@/components/TalentNav";
import TalentSkill from "@/components/TalentSkill";
export default function TalentDashboard() {
  const { isAuthenticated, isLoading } = useKindeBrowserClient();
  if (isLoading) return <div>Loading...</div>;

  return isAuthenticated ? (
    <div className="flex min-h-screen w-full flex-col">
      <TalentNav />

      <TalentSkill />
    </div>
  ) : (
    <div>
      You have to <LoginLink>Login</LoginLink> to see this page
    </div>
  );
}
