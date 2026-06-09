import z, { email } from "zod"

export const loginSchema = z.object({
     email:z
        .string({required_error:"Email is required"})
        .trim()
        .email({message:"Invalid Email address"})
        .min(3,{message:"Email must be at least 3 character"})
        .max(255,{message:"Email must not be more than 255 character"}),

    password:z
    .string({required_error:"Password is required"})
    .min(7,{message:"Password must be of 6 character"})
    .max(1024,{message:"Password must not be greater than 1024 character"})
    
})