// app/company/jobs/page.js
"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

import CompanyNav from "@/components/CompanyNav";
import CompanyJobOffer from "@/components/CompanyJobOffer";

export default function CompanyJobList() {
  const { isAuthenticated } = useKindeBrowserClient();

  return isAuthenticated ? (
    <div className="flex min-h-screen w-full flex-col">
      <CompanyNav />

      <CompanyJobOffer />
    </div>
  ) : (
    <div>
      You have to <LoginLink>Login</LoginLink> to see this page
    </div>
  );
}
