import React from 'react'
import { Outlet } from "react-router-dom"
import { Navbar } from "@/components"

export default function MainLayout() {
  return (
    <>
      <div >
        <Navbar />
        <main className="flex-grow w-full">
          <Outlet />
        </main>
      </div>
    </>
  )
}
