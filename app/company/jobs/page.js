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
      Please wait... You will be redirected. If the redirection doesn&#39;t
      work, click on this link:
      <LoginLink>
        <span className="underline"> Login</span>
      </LoginLink>
    </div>
  );
}
