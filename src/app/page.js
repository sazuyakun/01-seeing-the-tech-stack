import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to Auth App</h1>
      <p className="text-lg mb-6">
        A simple Next.js app with authentication using NextAuth.js and MongoDB.
      </p>
      <div className="space-x-4">
        <Link
          href="/signin"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Sign In
        </Link>
        <Link
          href="/signup"
          className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}
