import meetingModel from "../models/meeting.model.js";

const createMeeting = async (meetingData) => {
    try {
        console.log("Creating meeting");
        console.log(meetingData);
        const meeting = new meetingModel(meetingData);
        await meeting.save();
        return meeting;
    } catch (error) {
        console.log("Error in createMeeting service");
        console.log(error);
        throw error;
    }
};

export default createMeeting;