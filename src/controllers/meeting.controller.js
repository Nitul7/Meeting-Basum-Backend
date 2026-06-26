import express from 'express';
import createMeeting from '../service/meeting.service.js';
import validateMeeting from '../middlewares/validators/meeting.schema.validators.js';



const meetingRouter = express.Router();
meetingRouter.post('/', async (req, res) => {
    try {
        console.info("Meeting controller");
        const meeting = await createMeeting(req.body);
        console.info("Meeting created successfully");
        res.status(201).json(meeting);
    } catch (error) {
        console.log("Error in meeting controller");
        console.log(error);
        res.status(500).json({ error: 'Failed to create meeting' });
    }
});

meetingRouter.get('/', async (req, res) => {
    res.json({
        message: 'Hello From Server!'
    });
});

export default meetingRouter;