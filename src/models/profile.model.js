import connectToDB from '../config/db.js';
import profileSchema from '../schema/profile.schema.js';

const conn = connectToDB();
const profileModel = conn.model('profile', profileSchema);

export default profileModel;