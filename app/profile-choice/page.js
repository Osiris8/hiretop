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
      Veuillez patienter... Vous serez redirigé. Si la redirection ne marche
      pas, cliquez sur ce lien :
      <LoginLink>
        <span className="underline"> Login</span>
      </LoginLink>
    </div>
  );
}
