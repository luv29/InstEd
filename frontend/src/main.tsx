import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayout from "./layout/MainLayout.jsx"
import RegisterLayout from "./layout/RegisterLayout.jsx"
import {
  HomePage,
  Chatroom,
  Community,
  About,
  Leaderboard,
  Contactus,
  SignIn,
  SignUp,
  SignupOtp,
  SignUpInterests
} from './pages'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<MainLayout />} >
        <Route path='/' element={<HomePage />} />

        <Route path='/signup' element={<RegisterLayout />} >
          <Route path='' element={<SignUp />} />
          <Route path='otp' element={<SignupOtp />} />
          <Route path='interests' element={<SignUpInterests />} />
        </Route>

        <Route path='/chat' element={<Chatroom />} />
        <Route path='/community' element={<Community />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
        <Route path='/contact-us' element={<Contactus />} />
        <Route path='/signin' element={<SignIn />} />
      </Route>
    </>
  )
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
