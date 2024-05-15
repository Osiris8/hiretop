"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

import CompanyNav from "@/components/CompanyNav";
import CompanyJob from "@/components/CompanyJob";
export default function Dashboard() {
  const { isAuthenticated, isLoading } = useKindeBrowserClient();
  if (isLoading) return <div>Loading...</div>;

  return isAuthenticated ? (
    <div className="flex min-h-screen w-full flex-col">
      <CompanyNav />
      <CompanyJob />
    </div>
  ) : (
    <div>
      You have to <LoginLink>Login</LoginLink> to see this page
    </div>
  );
}
