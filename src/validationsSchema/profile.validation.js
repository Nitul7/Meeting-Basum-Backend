import * as z from "zod";

export const profileValidationSchema = z.object({
    name: z.string().min(2, 'Name is required'),
    bio: z.string().max(500, 'Bio must be at most 500 characters long').optional(),
    avatar: z.string().url('Avatar must be a valid URL').optional(),
    email: z.string().email('Invalid email address'),
    phone: z.string().optional()
});

export const updateProfileValidationSchema = z.object({
    bio: z.string().max(500, 'Bio must be at most 500 characters long').optional(),
    avatar: z.string().url('Avatar must be a valid URL').optional(),
    email: z.string().email('Invalid email address').optional(),
    phone: z.string().optional()
});
