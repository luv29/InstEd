import owlImage from "../assets/images/owl3.png";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import google from "../assets/images/google_icon.png";
import phone from "../assets/images/phone_icon.png";
import { useGoogleLogin } from '@react-oauth/google';
import { useToast } from "@/hooks/use-toast";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from "react";
import axios from "axios"
import { useForm } from 'react-hook-form';
import { Loader2 } from 'lucide-react';
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { loginSchema } from '../schemas/loginSchema';

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast()
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm({
      resolver: zodResolver(loginSchema)
  })

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const response = await fetch(`/api/user/auth-google`, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: tokenResponse.access_token }),
        })

        const data = await response.json()

        if (data.success) {
          toast({
            title: 'Logged in Successfully!'
          })
          console.log('Google Authentication is Successfull');
          navigate('/')
        } else {
          console.log(data)
          console.error('Login Failed', data.message);
          toast({
            title: 'Login Failed',
            description: data.message,
          })
        }

      } catch (error) {
        console.log('Error during login', error);
        toast({
          title: 'Error during login',
          description: error,
        })
      }
    },
    onError: () => {
      console.log('Google Login Failed')
      toast({
        title: 'Google Authorization Failed',
      })
    }
  })

  const submit = async (data) => {
    setIsSubmitting(true)
    try {
        const res = await axios.post('/api/user/sign-in', {
          username: data.up,
          phoneNumber: data.up,
          password: data.password
        })

        toast({
            title: res.data.message
        })

        if(res.data.success) {
            navigate('/')
        }
    } catch(error) {
        console.log(error)
        toast({
            title: "Error",
            description: error.response.data.message || error.message
        })
    } finally {
        setIsSubmitting(false)
    }
}

  return (
    <div className='bg-[#FFFFFF] w-screen h-[91.2vh] flex pt-12 pb-11 gap-55 pl-20'>
      <div className='flex flex-col justify-center items-center text-center'>
        <img src={owlImage} className='size-79' />
        <p className='font-chunkfive text-5xl'>Welcome back !</p>
      </div>
      <div className='bg-[#A5A5A538] w-180 border-[#000000] border-[0.1px] rounded-3xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] py-9 px-10 flex flex-col items-center'>
        <div className='mb-6 flex flex-col items-center'>
          <h2 className="font-worksans text-3xl font-semibold text-[#3C3C3C]">Log in or Sign in</h2>
          <p className='font-poppins text-[#666666] text-xs'>use your email or other services to continue with us</p>
        </div>
        <button 
          className="bg-[#FFFFFF] flex items-center justify-center text-[#333333] border-[0.2px] font-outfit font-normal border-[#333333] rounded-full px-28 py-2.5 mb-4"
          onClick={googleLogin}
        >
          <img src={google} className='size-4 mr-3' />
          Continue with Google
        </button>
        <button className="bg-[#FFFFFF] flex items-center justify-center text-[#333333] border-[0.2px] font-outfit font-normal border-[#333333] rounded-full px-28 py-2.5 mb-4">
          <img src={phone} className='size-4 mr-3' />
          Continue with Phone
        </button>
        <div className='flex justify-center items-center gap-4 my-3'>
          <div className='bg-[#5656563f] h-[2px] w-42'></div>
          <p className='text-[#5656568d] text-base'>OR</p>
          <div className='bg-[#5656563f] h-[2px] w-42'></div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(submit)} className='gap-y-0.1'>
            <FormField 
                name="up"
                control={form.control}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className='font-poppins text-[#666666] text-sm' > Username / Phone no. </FormLabel>
                        <Input
                            {...field}
                            className="w-full py-2 px-3 mb-4 border border-[#66666659] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF1F01]"
                            required
                        />
                        <FormMessage />
                    </FormItem>
                )}
            />

            <FormField 
                name="password"
                control={form.control}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className='font-poppins text-[#666666] text-sm' > Password </FormLabel>

                        <div className="relative w-full">
                          <Input
                            {...field}
                            type={showPassword ? "text" : "password"}
                            className="w-full py-2 px-3 mb-1 border border-[#66666659] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF1F01]"
                          />
                          <button
                            type="button"
                            className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                          </button>

                          <p className='font-poppins text-[11px] text-[#666666] mt-0.1'><Link to="/forgot-password" className='underline hover:text-blue-500'>Forgot password?</Link></p>
                        </div>
                    </FormItem>
                )}
            />

            <div className='flex items-center mt-7 gap-4'>
              <button type="submit" className="bg-[#FF1F01] border-2 border-[#FFFFFFE0] text-black px-4 py-2 rounded-full text-sm font-worksans font-bold self-start hover:bg-white hover:border-2 hover:border-[#FF1F01] transition duration-550 transition-discrete ease-in-out">
                LOG IN
              </button>
              <p className='font-poppins text-xs'>Don’t have an account? <Link to="/signup" className='underline hover:text-blue-500'>Sign up</Link></p>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
