    import express from 'express';
    import createMeeting from '../service/meeting.service.js';
    import validateMeeting from '../middlewares/validators/meeting.schema.validators.js';



    const meetingRouter = express.Router();
    meetingRouter.post('/', validateMeeting, async (req, res) => {
        try {
            const meeting = await createMeeting(req.validatedMeeting);
            res.status(201).json(meeting);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create meeting' });
        }
    });

    meetingRouter.get('/', async (req, res) => {
        res.json({
        message: 'Hello From Server!'
    });
    });

    export default meetingRouter;