"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Tabs from "@/components/Tabs";

export default function Profile() {
  const { isAuthenticated } = useKindeBrowserClient();

  return isAuthenticated ? (
    <div>
      <Tabs />
    </div>
  ) : (
    <div>
      You have to <LoginLink>Login</LoginLink> to see this page
    </div>
  );
}
