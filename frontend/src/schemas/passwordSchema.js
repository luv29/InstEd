import {z} from 'zod'

export const passwordSchema = z.object({
    password: z
        .string()
        .min(8, "Password must be of atleast 8 characters")
        .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, "Password is incorrect"),
    confirmPassword: z
        .string()
}).refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'], 
  });