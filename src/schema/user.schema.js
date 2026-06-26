import mongoose from 'mongoose';

// Define a schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2 },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 },
    isActive: { type: Boolean, default: true }

},{ timestamps: true });


export default userSchema;