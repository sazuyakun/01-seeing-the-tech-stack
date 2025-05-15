'use client'

import { signOut } from "next-auth/react"

export default function LogoutButton() {
  const handleLogout = async () => {
    await signOut({ redirectTo: "/" })
  }

  return (
    <button
      onClick={handleLogout}
      className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-700"
    >
      Log Out
    </button>
  )
}
