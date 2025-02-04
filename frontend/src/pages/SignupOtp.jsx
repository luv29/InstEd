import otp from "../assets/images/otp_icon.png";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/InputOTP"

export default function SignupOtp() {
  return (
    <div className="flex flex-col justify-center items-center h-full gap-5 pb-5">
      <img src={otp} className="size-14.5"/>
      <p className="font-worksans text-xl font-bold">OTP Verification</p>
      <p className="text-[#666666] font-poppins">You will get an OTP via SMS</p>
      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <div className="bg-[#FF1F01] border-2 border-[#FFFFFFE0] text-black rounded-full py-2 px-5.5 text-base font-worksans font-bold hover:bg-white hover:border-2 hover:border-[#FF1F01] transition duration-550 transition-discrete ease-in-out">Submit</div>
      <p className="font-poppins text-sm text-[#666666]">Didn't receive an OTP?<a href="#" className="underline hover:text-blue-500">Resend OTP</a></p>
    </div>
  )
}