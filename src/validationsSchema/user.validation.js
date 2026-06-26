import * as z from "zod";

export const userValidationSchema = z.object({
    name: z.string().min(2, 'Name is required'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long')
});

export const updateUserValidationSchema = z.object({
    name: z.string().min(2, 'Name is required').optional(),
    password: z.string().min(6, 'Password must be at least 6 characters long').optional()
});