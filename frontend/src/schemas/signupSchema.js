import {z} from 'zod'

export const signUpSchema = z.object({
    firstname: z
        .string()
        .min(2, "Too short name"),
    lastname: z
        .string()
        .min(2, "Too short name"),
    phoneNumber: z
        .string()
        .regex(
            /^\+?[1-9]\d{1,14}$/, 
            "Invalid phone number format"
          ),
    password: z
        .string()
        .min(8, "Password must be of atleast 8 characters")
        .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, "Password is incorrect")
})