import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google'
import './index.css'
import MainLayout from "./layout/MainLayout.jsx"
import { Toaster } from "./components/ui/toaster"
import RegisterLayout from "./layout/RegisterLayout.jsx"
import {
  HomePage,
  Chatroom,
  Community,
  Leaderboard,
  Contactus,
  SignIn,
  SignUp,
  SignupOtp,
  SignUpInterests,
  Feeds,
  ProfilePage,
  SignUpInfo
} from './pages'
import { Provider } from "react-redux";
import store from './store'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<MainLayout />} >
        <Route path='/' element={<HomePage />} />

        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/feeds' element={<Feeds />} />

        <Route path='/signup' element={<RegisterLayout />} >
          <Route path='' element={<SignUp />} />
          <Route path='otp' element={<SignupOtp />} />
          <Route path='interests' element={<SignUpInterests />} />
          <Route path='info' element={<SignUpInfo />} />
        </Route>

        <Route path='/chat' element={<Chatroom />} />
        <Route path='/community' element={<Community />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
        <Route path='/contact-us' element={<Contactus />} />
        <Route path='/signin' element={<SignIn />} />
      </Route>
    </>
  )
)

createRoot(document.getElementById('root')!).render(
  <Provider store={store} >
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <RouterProvider router={router} />
      <Toaster />
    </GoogleOAuthProvider>
  </Provider>
)
