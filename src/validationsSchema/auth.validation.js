import * as z from "zod";

export const loginValidationSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
});

export const registerValidationSchema = z.object({
    name: z.string().min(2, 'Name is required'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long')
}); 