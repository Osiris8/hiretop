"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

import TalentNav from "@/components/TalentNav";
import TalentAvatar from "../../components/TalentAvatar";
export default function TalentDashboard() {
  const { isAuthenticated, isLoading } = useKindeBrowserClient();
  if (isLoading) return <div>Loading...</div>;

  return isAuthenticated ? (
    <div className="flex min-h-screen w-full flex-col">
      <TalentNav />

      <TalentAvatar />
    </div>
  ) : (
    <div>
      Veuillez patienter... Vous serez redirigé. Si la redirection ne marche
      pas, cliquez sur ce lien :
      <LoginLink>
        <span className="underline"> Login</span>
      </LoginLink>
    </div>
  );
}
