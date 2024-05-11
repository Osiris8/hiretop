// app/protected/page.tsx - Server Component

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { connectToDB } from "@/utils/database";
import Status from "@/models/status";

export default async function Protected() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  console.log(getUser);

  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  await connectToDB();
  const userId = await Status.findOne({ userId: getUser().id });
  if (!(await userId)) {
    redirect("/profile-choice");
  } else if (!((await userId.typeOfProfile) === "company")) {
    redirect("/company");
  } else if (!((await userId.typeOfProfile) === "talent")) {
    redirect("/job");
  }
  return (
    <div>
      <h1>Protected Page</h1>
    </div>
  );
}
