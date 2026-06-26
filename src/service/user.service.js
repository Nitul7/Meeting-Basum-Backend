import userModel from "../models/user.model.js";
import { hashPassword } from "../util/auth.util.js";

export const createUser = async (userData) => {
    userData.password = hashPassword(userData.password);
    const user = new userModel(userData);
    await user.save();
    return user;
};

export const getUsers = async () => {
    const cacheUsers = await getCache('users');
    if (cacheUsers) {
        return JSON.parse(cacheUsers);
    }
    const users = await userModel.find().select('-password');
    await setCache('users', JSON.stringify(users), 300);
    return users;
};

export const getUserById = async (id) => {
    const user = await userModel.findById(id).select('-password');
    return user;
};

export const updateUser = async (id, userdata) => {
    const user = await userModel.findById(id);
    if (!user) {
        throw new Error('User not found');
    }
    if (userdata.name) {
        user.name = userdata.name;
    }
    if (userdata.password) {
        user.password = hashPassword(userdata.password);
    }
    await user.save();
    return user;
};

export const deleteUser = async (id) => {
    const user = await userModel.findByIdAndDelete(id).select('-password');
    return user;
};