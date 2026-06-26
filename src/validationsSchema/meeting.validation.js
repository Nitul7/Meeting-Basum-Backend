import * as z from "zod";

const meetingValidationSchema = z.object({
    title: z.string().min(1, 'Title is required'),
    description: z.string().optional(),
    visibility: z.enum(['public', 'private', 'codeprotected']).default('private'),
    startTime: z.date(),
    endTime: z.date(),
    scheduledStartTime: z.date().optional(),
    duration: z.enum(['30min', '1hr', '2hr']).default('1hr'),
    code: z.number().optional(),
    transcript: z.any().optional()
});

export default meetingValidationSchema;