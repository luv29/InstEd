import {z} from 'zod'

export const emailSchema = z.object({
    phoneNumber: z
        .string()
        .regex(
            /^\+?[1-9]\d{1,14}$/, 
            "Invalid phone number format"
          )
})