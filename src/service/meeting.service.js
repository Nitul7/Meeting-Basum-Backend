import meetingModel from "../models/meeting.model.js";

const createMeeting = async (meetingData) => {
    const meeting = new meetingModel(meetingData);
    await meeting.save();
    return meeting;
};

export default createMeeting;