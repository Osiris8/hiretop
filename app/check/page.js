// app/protected/page.tsx - Server Component

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { connectToDB } from "@/utils/database";
import Status from "@/models/status";

export default async function Protected() {
  const { isAuthenticated, getUser } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  await connectToDB();
  const userId = (await getUser()).id;

  const user = await Status.findOne({ userId: userId });
  if (!user) {
    redirect("/profile-choice");
  } else if ((await user.typeOfProfile) === "company") {
    redirect("/dashboard-company");
  } else if ((await user.typeOfProfile) === "talent") {
    redirect("/dashboard-talent");
  }
  return (
    <div>
      <h1>Protected Page</h1>
    </div>
  );
}
