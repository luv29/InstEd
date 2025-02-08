import { Router } from "express"
import { 
    forgotPassword,
    forgotPasswordOTP,
    googleCallback,
    resendOTP,
    resetPassword,
    signIn, 
    signOut, 
    signUp, 
    signUpVerifyOTP,
    verifyUser
} from "../controller/user.controller.js"

const router = Router()
router.route('/sign-up').post(signUp)
router.route('/sign-in').post(signIn)
router.route('/forgot-password').post(forgotPassword)
router.route('/auth-google').post(googleCallback)
router.route('/verify-user').get(verifyUser)

// secured routes
router.route('/sign-out').post(verifyUser, signOut)
router.route('/sign-up/verify-otp').post(verifyUser, signUpVerifyOTP)
router.route('/resend-otp').post(verifyUser, resendOTP)
router.route('/forgot-password/verify-otp').post(verifyUser, forgotPasswordOTP)
router.route('/forgot-password/reset').post(verifyUser, resetPassword)

export default router