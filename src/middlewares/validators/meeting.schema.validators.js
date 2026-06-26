import meetingValidationSchema from "../../validationsSchema/meeting.validation.js";

function validateMeeting(req, res, next) {
    try {
        const validatedData = meetingValidationSchema.safeParse(req.body);
        if (!validatedData.success) {
            return res.status(400).json({ error: validatedData.error.errors });
        }
        req.validatedMeeting = validatedData.data;
        next();
    } catch (error) {
        console.log("Error in validateMeeting middleware");
        console.log(error);
        res.status(500).json({ error: 'Failed to validate meeting data' });
    }
}

export default validateMeeting;