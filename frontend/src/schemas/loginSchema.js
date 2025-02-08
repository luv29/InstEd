import {z} from 'zod'

const phoneRegex = /^\+?[1-9]\d{1,14}$/; // E.164 format
const usernameRegex = /^[a-zA-Z0-9_.]{3,20}$/; // Allow letters, numbers, underscore, dot (3-20 chars)

export const loginSchema = z.object({
    up: z
        .string()
        .refine(
            (value) => phoneRegex.test(value) || usernameRegex.test(value),
            {
            message: "Must be a valid phone number or username",
            }
        ),
    password: z.string()
})