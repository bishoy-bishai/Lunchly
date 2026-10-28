import { z } from 'zod'

export const SignUpSchema = z.object({
  name: z.string().trim().min(2, 'Enter your name'),
  email: z.string().trim().toLowerCase().email('Enter a valid email'),
  password: z.string().min(8, 'Use at least 8 characters'),
})

export type SignUpInput = z.infer<typeof SignUpSchema>
