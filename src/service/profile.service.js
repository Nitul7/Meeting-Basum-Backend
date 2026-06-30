import profileModel from '../models/profile.model.js';
const createProfile = async (profileData) => {
  try {
    console.log("Creating profile");
    console.log(profileData);
    const profile = new profileModel(profileData);
    await profile.save();
    return profile;
}

catch (error) {
    console.log("Error in createProfile service");
    console.log(error);
    throw error;
  }
};

export default createProfile;


