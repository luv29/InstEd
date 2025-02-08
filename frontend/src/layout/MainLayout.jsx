import React from 'react'
import { Outlet } from "react-router-dom"
import { Navbar } from "@/components"

export default function MainLayout() {
  return (
    <main className="w-screen max-w-screen">
      <Navbar />
      <Outlet />
    </main>
  )
}
