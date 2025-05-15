import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();

  if(!session){
    redirect("/signin")
  }

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="text-lg">
        Welcome, {session.user.name || session.user.email}!
      </p>
    </div>
  )
}
