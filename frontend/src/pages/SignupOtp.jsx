import otp from "../assets/images/otp_icon.png";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/InputOTP"
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { otpSchema } from '../schemas/otpSchema';
import { Loader2 } from 'lucide-react';
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useState } from 'react';

export default function SignupOtp() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(otpSchema)
  });

  const verify = async (data) => {
    setIsSubmitting(true);
    try {
      console.log(data)
      const res = await axios.post('/api/user/sign-up/verify-otp', {
        otp: data.otp,
      });

      toast({
        title: res.data.success ? "SUCCESS" : "FAILURE",
        description: res.data.message,
      });

      if (res.data.success) {
        // navigate('/signup/interests');
        navigate('/');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error.response?.data?.message || "An error occurred",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resend = async () => {
    try {
      const res = await axios.post('/api/user/resend-otp');

      toast({
        title: res.data.success ? "SUCCESS" : "FAILURE",
        description: res.data.message,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error.response?.data?.message || "An error occurred",
      });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-full gap-5 pb-5 w-full">
      <img src={otp} className="size-14.5"/>
      <p className="font-worksans text-xl font-bold">OTP Verification</p>
      <p className="text-[#666666] font-poppins">You will get an OTP via SMS</p>

      <Form {...form} className="flex flex-col gap-5">
        <form className="flex flex-col gap-5" onSubmit={form.handleSubmit(verify)}>             
          <FormField
            control={form.control}
            name="otp"
            render={({ field }) => (
                <FormItem>
                  <FormLabel>One-Time Password</FormLabel>
                  <FormControl>
                    <InputOTP maxLength={6} {...field}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormMessage />
                </FormItem>
            )}
          />
      <div className="px-15 w-full flex justify-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#FF1F01] border-2 border-[#FFFFFFE0] text-black rounded-full py-2 px-1.5 text-base w-full font-worksans font-bold hover:bg-white hover:border-2 hover:border-[#FF1F01] transition duration-550 transition-discrete ease-in-out cursor-pointer"
          >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </div>
          ) : (
            'Verify'
          )}
        </button>
        </div>
          <p className="font-poppins text-sm text-[#666666]">Didn't receive an OTP?<span onClick={resend} className="underline hover:text-blue-500 cursor-pointer">Resend OTP</span></p>
        </form>
      </Form>
    </div>
  )
}