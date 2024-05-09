// app/protected/page.tsx - Server Component

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { connectToDB } from "@/utils/database";
import Status from "@/models/status";

export default async function Protected() {
  const { isAuthenticated, userId } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  await connectToDB();
  const user = await Status.findOne({ userId: userId });

  console.log(user);
  if (!(await user)) {
    redirect("/job");
  }
  return (
    <div>
      <h1>Protected Page</h1>
    </div>
  );
}
