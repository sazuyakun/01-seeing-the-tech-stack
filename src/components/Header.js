import Link from "next/link";
import { auth } from "@/lib/auth"

export default async function Header() {
  const session = await auth();
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href='/' className="text-xl font-bold">Auth App</Link>
        <div className="space-x-4">
          {session ? (
            <>
              <Link href="/dashboard" className="hover:text-gray-700">Dashboard</Link>
              <Link href="/logout" className="hover:text-gray-700">Logout</Link>
            </>
          ) : (<>
              <Link href="/signin" className="hover:text-gray-700">Login</Link>
              <Link href="/signup" className="hover:text-gray-700">Sign Up</Link>
          </>)}
        </div>
      </nav>
    </header>
  )
}
