import connectToDB from '../config/db.js';
import meetingSchema from "../schema/meeting.schema.js";

const conn = connectToDB();
const meetingModel = conn.model('Meeting', meetingSchema);

export default meetingModel;
