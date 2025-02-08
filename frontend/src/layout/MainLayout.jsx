import React, { useEffect } from 'react'
import { Outlet } from "react-router-dom"
import { Navbar } from "@/components"
import { useDispatch } from 'react-redux'
import { verifyUser } from '../store/features/authSlice';

export default function MainLayout() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verifyUser());
  }, [dispatch]);

  return (
    <main className="w-screen max-w-screen">
      {/* <Navbar /> */}
      <Outlet />
    </main>
  )
}
