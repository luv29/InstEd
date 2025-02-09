import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import google from "../assets/images/google_icon.png";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSchema } from "../schemas/signupSchema";
import axios from "axios"
import { useForm } from 'react-hook-form';
import { Loader2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast"
import {
  Form,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useGoogleLogin } from '@react-oauth/google';


export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast()
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm({
    resolver: zodResolver(signUpSchema)
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
          navigate('/signup/interests')
        } else {
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
          console.log("HI")
      const res = await axios.post("/api/user/sign-up", data)
      if (!res.data.success) {
        toast({
          title: res.data.message
        })
      }
      else {
        toast({
          title: res.data.message
        })
        navigate('/signup/otp')
      }
    } catch (error) {
          console.log(error)
      toast({
        title: error.response.data.message | error.message
      })
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <h2 className="font-worksans text-2xl font-semibold mb-6 text-[#3C3C3C] self-start">Sign Up Now</h2>

      <button
        className="bg-[#FFFFFF] flex items-center justify-center text-[#333333] border-[0.2px] font-outfit font-normal border-[#333333] rounded-full px-28 py-2.5 mb-4"
        onClick={googleLogin}
      >
        <img src={google} className='size-4 mr-3' />
        Sign up with Google
      </button>

      <div className='flex justify-center items-center gap-4 my-3'>
        <div className='bg-[#5656563f] h-[2px] w-60'></div>
        <p className='text-[#5656568d] text-base'>OR</p>
        <div className='bg-[#5656563f] h-[2px] w-60'></div>
      </div>

      <Form {...form} className="self-start gap-y-0.1 w-full">
        <form
          onSubmit={form.handleSubmit(submit)}
          className='self-start gap-y-0.1 w-full'
        >
          <div className='flex gap-5 w-full '>
            <FormField
              name="firstname"
              control={form.control}
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel className='font-poppins text-[#666666] text-sm'> First Name </FormLabel>
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
              name="lastname"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className='font-poppins text-[#666666] text-sm'> Last Name </FormLabel>
                  <Input
                    {...field}
                    className="w-full py-2 px-3 mb-4 border border-[#66666659] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF1F01]"
                    required
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            name="phoneNumber"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className='font-poppins text-[#666666] text-sm'> Phone Number </FormLabel>
                <Input
                  {...field}
                  className="w-full py-2 px-3 mb-4 border border-[#66666659] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF1F01]"
                  placeholder="Eg: +91xxxxxxxxxx"
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
                <FormLabel className='font-poppins text-[#666666] text-sm'> Password </FormLabel>
                <div className="relative w-full">
                  <Input
                    {...field}
                    type={showPassword ? "text" : "password"}
                    className="w-full py-2 px-3 mb-1 border border-[#66666659] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF1F01]"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </button>
                  <FormDescription className='font-poppins text-[10px] text-[#666666] mt-0.1'>use 8 or more characters with a mix of letters, numbers and symbols.</FormDescription>
                </div>

                <FormMessage />
              </FormItem>
            )}
          />

          <div className='flex self-start items-center mt-7 gap-4'>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#FF1F01] border-2 border-[#FFFFFFE0] text-black px-4 py-2 rounded-full cursor-pointer text-sm font-worksans font-bold self-start hover:bg-white hover:border-2 hover:border-[#FF1F01] transition duration-550 transition-discrete ease-in-out"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </div>
              ) : (
                'SIGN UP'
              )}
            </button>

            <p className='font-poppins text-xs'>Already have an account? <a href="#" className='underline hover:text-blue-500'>Log in</a></p>
          </div>
        </form>
      </Form>
    </>
  );
}
